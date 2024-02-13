﻿import styles from "./Sidebar.module.css"
import Logo from "./Logo.jsx";

export default function Sidebar(){
    return (
        <div className={styles.sidebar}>
            <Logo/>
            
            <p>List of cities</p>
            
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise s.r.o.</p>
            </footer>
        </div>
    )
}