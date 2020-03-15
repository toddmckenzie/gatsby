import React, { useState } from 'react';
import styles from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../images/logo.svg';
import { Link } from 'gatsby'


const Navbar = () => {
    const [ isOpen, setNav ] = useState(false);

    const toggleNav = () => {
        setNav(!isOpen)
    }
    console.log(isOpen)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="backroads logo" />
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        <FaAlignRight className={styles.logoIcon} />
                    </button>
                </div>
                {links.map((item, index) => {
                    return (<li key={index}><Link to={item.path}>{item.text}</Link></li>)
                })}
            </div>
        </nav>
    )
}


export default Navbar;