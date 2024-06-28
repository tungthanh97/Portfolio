import { KEY_AUTH_TOKEN } from 'constants/common';
import { CustomSession } from 'types/auth.type';
import { isClient } from 'utils/mixed';

export const getAuthInfo = (): CustomSession | undefined => {
    try {
        if (!isClient()) {
            return undefined;
        }
        const stringAuthInfo = localStorage.getItem(KEY_AUTH_TOKEN);

        if (!stringAuthInfo) {
            return undefined;
        }
        return decodeAuthInfo(stringAuthInfo);
    } catch (e) {
        return undefined;
    }
};

export function decodeAuthInfo(str: string) {
    return JSON.parse(str) as CustomSession;
}
