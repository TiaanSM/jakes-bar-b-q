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
                  <li className={styles.c1Link}>6706 Kaw Drive <br/>Kansas City, KS 66111</li>
                  <li className={styles.c1Link}>(913) 788-5005</li>
                  <li className={styles.c1Link}>Questions? Call </li>
                  <li className={styles.c1Link}>855-752-7BBQ</li>
                  <li className={styles.c1Link}>(855-752-7227)</li>
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
                <li className={styles.c3Link}>Follow us on <a>Instagram</a></li>
                <li className={styles.c3Link}>Like us on <a>Facebook</a></li>
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