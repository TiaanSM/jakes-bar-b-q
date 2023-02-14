import styles from '../styles/Visit.module.css';
import Navbar from '../components/Navbar';

const Visit = () => {
  return (
    <>
    <Navbar />
    <section className={styles.visitSection}>

      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>VISIT</h1>
            <h2 className={styles.location}>
              230 CAN DRIVE<br/>
              QHEBERHA, EC 2660<br/>
              +27 123 456 7890
            </h2>
            <h3 className={styles.openTime}>
              THURSDAY - SATURDAY<br/>
              11 AM - 3 PM OR UNTIL SOLD OUT
            </h3>
            <h4 className={styles.closeTime}>CLOSED ON SUNDAY THROUGH WEDNESDAY</h4>
            <p className={styles.textDesc}>
              Our food is prepared fresh and when we run out, we run out. If you need any item on the menu, please call a day in advance and we will accommodate you. Phone orders are welcome!
            </p>
        </div>

        <div className={styles.imageContainer}>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=qheberha&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
      </div>

      <div className={styles.vendingContainer}>
        <div className={styles.imageContainer2}>
            <img src="https://ik.imagekit.io/x29dtqzji/BBQ_Website/tr:w-1000/pexels-rezwan-nobi-7262370.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676373635463" 
            alt="meat-platter" className={styles.vendorImage} />
        </div>
        <div className={styles.vendorTextContainer}>
            <h5 className={styles.vendorTitle}>24/7 VENDING MACHINE</h5>
            <p className={styles.vendorDesc}>
                Got a craving after hours? Need a bottle of sauce stat? Our Can Drive vending machine is open 24/7 for all of your Jakes Bar-B-Q needs.
            </p>
        </div>
      </div>

    </section>

    </>
  )
}

export default Visit

