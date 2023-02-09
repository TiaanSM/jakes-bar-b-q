import styles from '../styles/Visit.module.css';

const Visit = () => {
  return (
    <section className={styles.visitSection}>

      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>VISIT</h1>
            <h2>
              6706 KAW DRIVE<br/>
              KANSAS CITY, KS 66111<br/>
              (913) 788-5005
            </h2>
            <h3>
              THURSDAY - SATURDAY<br/>
              11 AM - 3 PM OR UNTIL SOLD OUT
            </h3>
            <h4>CLOSED ON SUNDAY THROUGH WEDNESDAY</h4>
            <p>
              Our food is prepared fresh and when we run out, we run out. If you need any item on the menu, please call a day in advance and we will accommodate you. Phone orders are welcome!
            </p>
        </div>

        <div className={styles.imageContainer}>
           <img src="" alt="" />
        </div>
      </div>

      <div className={styles.vendingContainer}>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h5>24/7 VENDING MACHINE</h5>
            <p>
                Got a craving after hours? Need a bottle of sauce stat? Our Kaw Drive vending machine is open 24/7 for all of your Jones Bar-B-Q needs.
            </p>
        </div>
      </div>

    </section>
  )
}

export default Visit