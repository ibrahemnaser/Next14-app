import Link from "next/link";
// ------------- Styles -------------- //
import styles from './styles/MainHeader.module.css'
// ------------- Assets -------------- //
import LogoImg from '@/src/assets/logo.png'

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href={'/'}>
                <img src={LogoImg.src} alt='A Plate with food' />
                Foody App
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={'/meals'}>Meals</Link>
                    </li>
                    <li>
                        <Link href={'/meals/share'}>Share Meals</Link>
                    </li>
                    <li>
                        <Link href={'/shirts'}>Choose Shirt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}