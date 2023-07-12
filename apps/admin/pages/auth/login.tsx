/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '@/layout/AppConfig';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '@/layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Page } from '@/types/types';

const LoginPage: Page = () => {
    const [password, setPassword] = useState('');
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">

                <div style={{ borderRadius: '56px', padding: '0.3rem', width: "500px" }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <div className="text-900 text-3xl font-medium mb-3">Vítejte!</div>
                        </div>

                        <div>
                            <span className="p-float-label mb-3 ">
                                <InputText id="email1" type="text" placeholder="Email address" style={{width: "100%"}} />
                                <label htmlFor="email1" className="block text-900 font-medium">
                                    Email
                                </label>
                            </span>

                            <span className="p-float-label mb-5">
                                <style>{`
                                    .p-password-input {
                                        width: 100%
                                    }
                                `}</style>
                                <Password inputId="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={false} placeholder="Password" style={{width: "100%"}} />
                                <label htmlFor="password" className="block text-900 font-medium">
                                    Password
                                </label>
                            </span>

                            <Button label="Přihlásit se" className="w-full p-3 text-xl" onClick={() => router.push('/')}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple/>
        </React.Fragment>
    );
};
export default LoginPage;
