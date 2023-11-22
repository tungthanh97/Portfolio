'use client';

import ThemeProvider from './ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '@store/index.js';

const queryClient = new QueryClient();

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        </QueryClientProvider>
    );
};

export default Providers;
