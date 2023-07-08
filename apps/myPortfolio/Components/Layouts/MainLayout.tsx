import styles from "@/styles/Components/Layouts/main.module.scss"

import Footer from "../Global/footer";
import Header from "../Global/header";

function MainLayout({children}:{children: React.ReactNode}) {

    return (
        <>
            {/* Header */}
            <Header />
            {/* Content */}
            <main className={styles.main}>
                {children}
            </main>
            {/* Footer */}
            <Footer />
        </>
    );
    
}

export default MainLayout;