// context/react-query-provider.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createContext, ReactNode, useContext, useState } from 'react';

// Create a context
const ReactQueryContext = createContext<QueryClient | undefined>(undefined);

// Create a provider component
export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

// Hook to access the QueryClient (Optional)
export const useReactQueryClient = () => {
    const context = useContext(ReactQueryContext);
    if (!context) {
        throw new Error('useReactQueryClient must be used within a ReactQueryProvider');
    }
    return context;
};