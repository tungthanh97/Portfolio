import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HEADER, TIMEOUT_REQUEST } from 'constants/common';
import { Agent } from 'https';
import { getAuthInfo } from 'utils/auth';
import { mapValues } from 'utils/common/mapValues';

export type RequestResponse<ResponseData> = AxiosResponse<ResponseData> & {
    error?: any;
};

type InputFunction<P extends any[], D> = (fetch: typeof fetcher, ...args: P) => Promise<D>;

type CreateRepositoryInput = {
    [key: string]: InputFunction<any, any>;
};

type CreateRepositoryOutput<
    Input extends CreateRepositoryInput,
    Keys extends keyof Input = keyof Input,
> = {
    [P in Keys]: Input[P] extends InputFunction<infer P, infer D>
        ? (...args: P) => Promise<D>
        : never;
};

export default function createRepository<Input extends CreateRepositoryInput>(
    input: Input
): CreateRepositoryOutput<Input> {
    return mapValues(input, (resourceCreator) => {
        return (...args: any[]) => {
            return resourceCreator(fetcher, ...args);
        };
    }) as CreateRepositoryOutput<Input>;
}

const axiosInstance = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

const responseHandler = (response: any) => {
    return { ...response, data: response.metadata };
};

// config reasponse handler
axiosInstance.interceptors.response.use(responseHandler, null);

export const fetcher = async <ResponseData = any>(
    url: string,
    config?: AxiosRequestConfig
): Promise<RequestResponse<ResponseData>> => {
    const session = getAuthInfo();

    console.log('session', session);

    return axiosInstance
        .request<ResponseData>({
            ...config,
            url,
            httpsAgent: new Agent({ rejectUnauthorized: false }),
            params: {
                ...config?.params,
            },
            headers: {
                ...config?.headers,
                [HEADER.AUTHORIZATION]: `Bearer ${session?.tokens?.accessToken}`,
                [HEADER.CLIENT_ID]: session?.user?._id,
            },
            timeout: config?.timeout || TIMEOUT_REQUEST.NORMAL, // 5 mins
        })
        .catch((error: any) => {
            // case logout and check whitelist

            return { error } as any;
        });
};
