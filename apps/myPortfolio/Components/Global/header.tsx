import styles from '@/styles/Components/Global/Header.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
    const router = useRouter()
    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.logo}>
                JS
            </Link>
            
        </header>
    );
}

export default Header;