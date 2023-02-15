import styles from './Components.module.css';
import Button from './Button';
import CartSVG from './CartSVG';
import Logo from './Logo';
import { Turn as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const isMobile = window.innerWidth < 800;
  const [isOpen, setOpen] = useState(false);

  // 

  let oldScrollY = 0;

  const [direction, setDirection] = useState('up');

  const controlDirection = () => {
    if(window.scrollY > oldScrollY) {
        setDirection('down');
    } else {
        setDirection('up');
    }
    oldScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
        window.removeEventListener('scroll', controlDirection);
    };
  },[]);

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);

    return () => window.removeEventListener('scroll', controlDirection);

  }, []);

  const navStyles = {
    width: '100vw',
    height: '10rem',
    backgroundColor: '#ff4339',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '40',
    transition: 'top 0.6s ease'
  }

  return (

    <nav style={{...navStyles, top: direction === 'up' ? '0' : '-10rem' }}>
        <div className={styles.contentContainer}>
            <Link to="/" className={styles.logoContainer}>
                <Logo color={isOpen ? "#ff4339" : 'white'} />
            </Link>
            <div className={styles.linkContainer}>
              <Link to="/Shop" className={props.isActive1 ? styles.activeNavLink : styles.navLink}>SHOP</Link>
              <Link to="/Menu" className={props.isActive2 ? styles.activeNavLink : styles.navLink}>MENU</Link>
              <Link to="/OurRoots" className={props.isActive3 ? styles.activeNavLink : styles.navLink}>OUR ROOTS</Link>
              <Link to="/Visit" className={props.isActive4 ? styles.activeNavLink : styles.navLink}>VISIT</Link>
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