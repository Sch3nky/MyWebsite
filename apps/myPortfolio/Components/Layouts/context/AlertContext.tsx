import { createContext, useRef } from 'react';
import { AlertContextProps } from '@/types/layout';
import { ChildContainerProps } from '@/types/types';
import { Toast } from 'primereact/toast';

export const AlertContext = createContext({} as AlertContextProps);

export const AlertProvider = ({ children }: ChildContainerProps) => {
    const toast = useRef<Toast>(null);

    const showDanger = (title: string, content: string) => {
        toast.current?.show({
            severity: 'error',
            summary: title,
            detail: content
        });
    };

    const showSuccess = (title: string, content: string) => {
        toast.current?.show({
            severity: 'success',
            summary: title,
            detail: content
        });
    };

    const showWarning = (title: string, content: string) => {
        toast.current?.show({
            severity: 'warn',
            summary: title,
            detail: content
        });
    };

    const showInfo = (title: string, content: string) => {
        toast.current?.show({
            severity: 'info',
            summary: title,
            detail: content
        });
    };

    return (
        <AlertContext.Provider
            value={{
                showInfo: showInfo,
                showSuccess: showSuccess,
                showWarning: showWarning,
                showDanger: showDanger
            }}
        >
            <Toast ref={toast} />
            {children}
        </AlertContext.Provider>
    );
};