import React from 'react';
import AppConfig from '@/layout/AppConfig';
import Link from 'next/link';
import { Page } from '@/types/types';
import { useRouter } from 'next/router';

const Custom404: Page = () => {
    const router = useRouter()
    const back = () => {
        event?.preventDefault()
        router.back()
    }
    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center" style={{ borderRadius: '53px' }}>
                        <span className="text-blue-500 font-bold text-3xl">404</span>
                        <h1 className="text-900 font-bold text-5xl mb-2">Stránka nenalezena</h1>
                        <div className="text-600 mb-5">Requested resource is not available</div>
                        <Link href="/" className="w-full flex align-items-center py-5 border-300 border-bottom-1">
                            <span className="flex justify-content-center align-items-center bg-cyan-400 border-round" style={{ height: '3.5rem', width: '3.5rem' }}>
                                <i className="text-50 pi pi-home pi-table text-2xl"></i>
                            </span>
                            <span className="ml-4 flex flex-column">
                                <span className="text-900 lg:text-xl font-medium mb-1">Domov</span>
                                <span className="text-600 lg:text-lg">Zpět na úvodní stránku</span>
                            </span>
                        </Link>
                        <Link href="/" onClick={back} className="w-full flex align-items-center py-5 border-300 border-bottom-1">
                            <span className="flex justify-content-center align-items-center bg-red-400 border-round" style={{ height: '3.5rem', width: '3.5rem' }}>
                                <i className="text-50 pi pi-arrow-left pi-table text-2xl"></i>
                            </span>
                            <span className="ml-4 flex flex-column">
                                <span className="text-900 lg:text-xl font-medium mb-1">Zpět</span>
                                <span className="text-600 lg:text-lg">Zpět na předchozí stránku</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Custom404.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig />
        </React.Fragment>
    );
};

export default Custom404;
