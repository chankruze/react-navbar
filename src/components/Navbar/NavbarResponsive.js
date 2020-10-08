/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Oct 04 2020 03:35:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import MenuItems from "./MenuItems";
import styles from "./NavbarResponsive.module.css";

const NavbarResponsive = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const handleNavbarToggle = () => {
    isMobileNavOpen ? closeMobileNavbar() : openMobileNavbar();
  };

  const openMobileNavbar = () => setIsMobileNavOpen(true);
  const closeMobileNavbar = () => setIsMobileNavOpen(false);

  return (
    <header
      className={`${styles.navbar} ${isMobileNavOpen ? styles.opened : ""}`}
    >
      {/* Container */}
      <nav className={`${styles.navbarContainer} ${styles.container}`}>
        {/* Brand */}
        <a href="/" className={styles.homeLink}>
          {/* Logo */}
          <div className={styles.navbarLogo}></div>
          {/* Brand Name */}
          Geekofia
        </a>

        {/* Hamburger */}
        <button
          className={styles.navbarToggle}
          // close/open menu
          onClick={handleNavbarToggle}
          // handles screen reader accessibility
          aria-label={
            isMobileNavOpen ? "Close navigation menu." : "Open navigation menu"
          }
        >
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
        </button>

        {/* Links Menu */}
        <div className={styles.navbarMenu} onClick={closeMobileNavbar}>
          {/* Links List */}
          <ul
            className={styles.navbarLinks}
            onClick={(clickEvent) => clickEvent.stopPropagation()}
          >
            {MenuItems.map(({ title, path, hoverClass }) => (
              <li key={title} className={styles.navbarItem}>
                <a href={path} className={`${hoverClass} ${styles.navbarLink}`}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarResponsive;
