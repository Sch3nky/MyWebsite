import styles from "@/styles/Components/Global/Footer.module.scss"
import Link from "next/link";
import { Instagram, Github} from "react-bootstrap-icons";

function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.footerLinks}>
                    <Link href={"/#About"}>O mně</Link>
                    <Link href={"/#CaseStudy"}>Moje práce</Link>
                    <Link href={"/#Skills"}>Zkušenosti</Link>
                    <Link href={"/#Contact"}>Kontakt</Link>
                </div>
                <div className={styles.socials}>
                    <Link href={"#About"} ><Instagram /></Link>
                    <Link href={"https://github.com/Sch3nky"}><Github /></Link>
                </div>
            </div>

            <div className={styles.copyright}>
                © 2022 - {new Date().getFullYear()} Jakub Schenk
            </div>
        </footer>
    );
}

export default Footer;