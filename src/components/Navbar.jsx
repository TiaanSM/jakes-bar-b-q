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

  return (
    <nav className={styles.nav}>
        <div className={styles.contentContainer}>
            <Link to="/" className={styles.logoContainer}>
                <Logo />
            </Link>
            <div className={styles.linkContainer}>
              <Link to="/Shop" className={styles.navLink}>SHOP</Link>
              <Link to="/Menu" className={styles.navLink}>MENU</Link>
              <Link to="/OurRoots" className={styles.navLink}>OUR ROOTS</Link>
              <Link to="/Visit" className={styles.navLink}>VISIT</Link>
            </div>
            <div className={styles.buttonContainer}>
                <span className={styles.navCartContainer}>
                  <CartSVG />
                  <span className={styles.cartAmount}>0</span>
                </span>
                <span className={styles.navBtnContainer}>
                  {isMobile ? <Hamburger toggled={isOpen} toggle={setOpen} size={32} duration={0.3} easing="ease" color="white"/> 
                  : <Link to="/Shop" className={styles.btnLink}><Button text="SHOP SAUCES" /></Link>}
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar