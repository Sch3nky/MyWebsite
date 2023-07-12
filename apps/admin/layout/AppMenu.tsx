/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '../types/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: '',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
            ]
        },
        {
            label: 'Správa',
            items: [
                { label: 'Uživatelé', icon: 'pi pi-fw pi-users', to: '/messages' },
                { label: 'Projekty', icon: 'pi pi-fw pi-list', to: '/messages' }
            ]
        },
        {
            label: 'Portfolio',
            items: [
                { label: 'Zprávy', icon: 'pi pi-fw pi-inbox', to: '/messages' },
                { label: 'Nastavení', icon: 'pi pi-fw pi-cog', to: '/messages' }
            ]
        },
        {
            label: 'Nastavení',
            items: [
                { label: 'Profil', icon: 'pi pi-fw pi-user', to: '/messages' }
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
