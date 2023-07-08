import styles from "@/styles/Components/Layouts/cookies.module.scss"
import React from "react";

function CookieLayout({children}:{children: React.ReactNode}) {
    return (
        <div>
            {children}
            <div className={styles.cookies}>
                
            </div>
        </div>
    );
}

export default CookieLayout;