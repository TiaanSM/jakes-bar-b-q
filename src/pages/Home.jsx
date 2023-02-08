import styles from '../styles/Home.module.css';
import Button from '../components/Button';

const Home = () => {
  return (
    <main>

      <header className={styles.header}>

        <div className={styles.headerTexts}>
          <h1 className={styles.headerTitle}>SAUCE MADE WITH LOVE IN QHEBERHA</h1>
          <span className={styles.estText}>SINCE 1970... SOMETHING.</span>
          <p className={styles.secondText}>RESTAURANT IS STILL OPEN, WITH JAKES AND PIETER STILL IN CHARGE! COME SEE US.</p>
          <p className={styles.thirdText}>Serving new HOT BBQ Sauce now. Give it a try!</p>
        </div>

        <div className={styles.headerImageContainer}>
          <img src="" alt="" className={styles.headerImage}/>
        </div>

      </header>

      <div className={styles.slidingTextContainer}>
        <div className={styles.slidingContainer}>
          <span className={styles.slidingText}>BRING THE HEAT HOME</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>BBQ SAUCE COMING IN HOT</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>MADE FROM SCRATCH DAILY</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>BRING THE HEAT HOME</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>BBQ SAUCE COMING IN HOT</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>MADE FROM SCRATCH DAILY</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>BRING THE HEAT HOME</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>BBQ SAUCE COMING IN HOT</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText}>MADE FROM SCRATCH DAILY</span>
        </div>
      </div>

      <section className={styles.sauceSection}>

        <div className={styles.sauceImageContainer}>
          <img src="" alt="" className={styles.sauceImage} />
        </div>

        <div className={styles.sauceTextContainer}>
          <h2 className={styles.sauceTitle}>THE MAGIC OF JAKES BBQ IN YOUR HOME</h2>
          <p className={styles.sauceDesc}>The Jakes family has made their sauce from scratch daily for over 50 years. For the first time ever, you can bring that flavor to a grill near you.</p>
          <div className={styles.sauceBtnContainer}>
            <Button text="SHOP OUR SAUCES" />
          </div>
        </div>

      </section>

      <div className={styles.brandSection}>
        <h3 className={styles.brandTitle}>FEATURED IN</h3>
        <ul className={styles.brandContainer}>
          <li className={styles.brand}>EATER</li>
          <li className={styles.brand}>SPUR</li>
          <li className={styles.brand}>ZA Foods</li>
          <li className={styles.brand}>Bay FM</li>
          <li className={styles.brand}>HUISGENOOT</li>
          <li className={styles.brand}>Food Trucks</li>
        </ul>
      </div>

      <section className={styles.restaurantSection}>

        <div className={styles.restaurantTextContainer}>
          <h2 className={styles.restaurantTitle}>STOP BY OUR RESTAURANT</h2>
          <p className={styles.restaurantDesc}>From housemade sausages to racks of ribs, we love to feed our Kansas City community. So come join the party… and come hungry! <br/><br/> PLEASE KNOW JONES BAR-B-Q RESTAURANT IS STILL OPEN WITH THE SHORTY AND LITTLE SISTERS RUNNING IT!  WE WOULD LOVE TO SEE YOU.</p>
          <p className={styles.startingDesc}>Starting in October 2022 we will have a new Hot BBQ sauce to check out.</p>
          <div className={styles.restaurantBtnContainer}>
            <Button text="VIEW OUR MENU" />
          </div>
        </div>

        <div className={styles.restaurantImageContainer}>
          <img src="" alt="" className={styles.restaurantImage} />
        </div>

      </section>

    </main>
  )
}

export default Home