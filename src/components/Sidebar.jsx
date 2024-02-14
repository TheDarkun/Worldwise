import styles from "./Sidebar.module.css"
import Logo from "./Logo.jsx";
import {Outlet} from "react-router-dom";
import AppNav from "./AppNav.jsx";

export default function Sidebar(){
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>
            <Outlet/>
            <p>Liste of cities</p>
            
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise s.r.o.</p>
            </footer>
        </div>
    )
}