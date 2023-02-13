import styles from './Components.module.css';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.FlogoContainer}>
          <Logo />
        </div>

        <div className={styles.footerContent}>

            <div className={styles.column}>
                <span className={styles.heading}>VISIT US</span>
                <ul className={styles.fLinkContainer}>
                  <li className={styles.c1Link}>230 Can Drive <br/>QHEBERHA, EC 2660</li>
                  <li className={styles.c1Link}>+27 123 456 7890</li>
                  <li className={styles.c1Link}>Questions? Call </li>
                  <li className={styles.c1Link}>765-432-1BBQ</li>
                  <li className={styles.c1Link}>+27 098 765 4321</li>
                </ul>
            </div>

            <div className={styles.column}>
              <span className={styles.heading}>OUR HOURS</span>
              <ul className={styles.fLinkContainer}>
                <li className={styles.c2Link}>Thursday - Saturday<br/> 11 am - 3 pm (or until sold out)</li>
                <li className={styles.c2Link}>Closed on <br/> Sundays - Wednesdays</li>
              </ul>
            </div>

            <div className={styles.column}>
              <span className={styles.heading}>KEEP IN TOUCH</span>
              <ul className={styles.fLinkContainer}>
                <li className={styles.c3Link}>Follow us on <a href="https://instagram.com" target="_blank">Instagram</a></li>
                <li className={styles.c3Link}>Like us on <a href="https://facebook.com">Facebook</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <span className={styles.heading}>FOR MEDIA iNQUIRiES</span>
              <ul className={styles.fLinkContainer}>
                <li className={styles.c4Link}>Jakes</li>
                <li className={styles.c4Link}>jakes@email.com</li>
              </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer