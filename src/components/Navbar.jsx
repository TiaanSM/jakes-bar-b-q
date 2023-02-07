import styles from './Components.module.css';
import Button from './Button';
import CartSVG from './CartSVG';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.contentContainer}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <div className={styles.linkContainer}>
                <a href="" className={styles.navLink}>SHOP</a>
                <a href="" className={styles.navLink}>MENU</a>
                <a href="" className={styles.navLink}>OUR ROOTS</a>
                <a href="" className={styles.navLink}>VISIT</a>
            </div>
            <div className={styles.buttonContainer}>
                <span className={styles.navCartContainer}>
                  <CartSVG />
                  <span className={styles.cartAmount}>0</span>
                </span>
                <Button text="SHOP SAUCES" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar