import styles from '../styles/Visit.module.css';

const Visit = () => {
  return (
    <section className={styles.visitSection}>

      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>VISIT</h1>
            <h2 className={styles.location}>
              6706 KAW DRIVE<br/>
              KANSAS CITY, KS 66111<br/>
              (913) 788-5005
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
           <img src="" alt="" className={styles.textImage} />
        </div>
      </div>

      <div className={styles.vendingContainer}>
        <div className={styles.imageContainer2}>
            <img src="" alt="" className={styles.vendorImage} />
        </div>
        <div className={styles.vendorTextContainer}>
            <h5 className={styles.vendorTitle}>24/7 VENDING MACHINE</h5>
            <p className={styles.vendorDesc}>
                Got a craving after hours? Need a bottle of sauce stat? Our Kaw Drive vending machine is open 24/7 for all of your Jones Bar-B-Q needs.
            </p>
        </div>
      </div>

    </section>
  )
}

export default Visit