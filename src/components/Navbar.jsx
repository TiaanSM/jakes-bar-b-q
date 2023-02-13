import styles from './Components.module.css';
import Button from './Button';
import CartSVG from './CartSVG';
import Logo from './Logo';
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const isMobile = window.innerWidth < 800;
  const [isOpen, setOpen] = useState(false);

  // red logo

  return (

    <nav className={styles.nav}>
        <div className={styles.contentContainer}>
            <Link to="/" className={styles.logoContainer}>
                <Logo color={isOpen ? "#ff1302c5" : 'white'} />
            </Link>
            <div className={styles.linkContainer}>
              <Link to="/Shop" className={styles.navLink}>SHOP</Link>
              <Link to="/Menu" className={styles.navLink}>MENU</Link>
              <Link to="/OurRoots" className={styles.navLink}>OUR ROOTS</Link>
              <Link to="/Visit" className={styles.navLink}>VISIT</Link>
            </div>
            <div className={styles.buttonContainer}>
                <span className={styles.navCartContainer}>
                  <CartSVG color="white" />
                  <span className={styles.cartAmount}>0</span>
                </span>
                <span className={styles.navBtnContainer}>
                  {isMobile ? <Hamburger toggled={isOpen} toggle={setOpen} size={32} duration={0.4} easing="ease" color={isOpen ? "#ff1302c5" : "white"}/> 
                  : <Link to="/Shop" className={styles.btnLink}><Button text="SHOP SAUCES" /></Link>}
                </span>
            </div>
        </div>

        <div className={isOpen ? styles.openMenu : styles.closedMenu}>
          <div className={styles.menuContainer}>
            <Link to="/Shop" className={styles.menuLink}>SHOP</Link>
            <Link to="/Menu" className={styles.menuLink}>MENU</Link>
            <Link to="/OurRoots" className={styles.menuLink}>OUR ROOTS</Link>
            <Link to="/Visit" className={styles.menuLink}>VISIT</Link>
              <span className={styles.menuCartContainer}>
                <CartSVG color="#ff1302c5" />
                <span className={styles.menuCartAmount}>0</span>
              </span>
          </div>
        </div>
    </nav>
  
  )
}

export default Navbar