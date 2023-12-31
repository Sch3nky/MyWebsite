/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            Created by
            <span className="font-medium ml-2">Jakub Schenk</span>
        </div>
    );
};

export default AppFooter;
