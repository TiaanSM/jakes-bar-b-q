import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import headerImage from '../assets/header.jpg';
import restuarantImage from '../assets/restuarant.jpg';

const Home = () => {
  return (
    <main>

      <header className={styles.header}>

        <div className={styles.headerTexts}>
          <h1 className={styles.headerTitle}>SAUCE MADE WITH LOVE IN QHEBERHA</h1>
          <span className={styles.estText}>SINCE 1970... SOMETHING.</span>
          <p className={styles.secondText}>RESTAURANT IS STILL OPEN, WITH JOHN AND JACO STILL IN CHARGE! COME SEE US.</p>
          <p className={styles.thirdText}>Serving new HOT BBQ Sauce now. Give it a try!</p>
        </div>

        <div className={styles.headerImageContainer}>
          <img src={headerImage} alt="" className={styles.headerImage}/>
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
          <Link to="/Shop" className={styles.sauceBtnContainer}>
            <Button text="SHOP OUR SAUCES" buttonDark={true} />
          </Link>
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
          <p className={styles.restaurantDesc}>From housemade sausages to racks of ribs, we love to feed our Qheberha City community. So come join the party… and come hungry! <br/><br/> PLEASE KNOW JAKES BAR-B-Q RESTAURANT IS STILL OPEN WITH THE BIGGY AND LITTLE BROTHERS RUNNING IT! WE WOULD LOVE TO SEE YOU.</p>
          <p className={styles.startingDesc}>Starting in October 2022 we will have a new Hot BBQ sauce to check out.</p>
          <Link to="/Menu" className={styles.restaurantBtnContainer}>
            <Button text="VIEW OUR MENU" />
          </Link>
        </div>

        <div className={styles.restaurantImageContainer}>
          <img src={restuarantImage} alt="" className={styles.restaurantImage} />
        </div>

      </section>

      <div className={styles.bigTextContainer}>
        <h4 className={styles.bigText}>"THE BEST ATTITUDE IS GRATITUDE"</h4>
        <span className={styles.bigDesc}>- JAKES BBQ</span>
      </div>

      <section className={styles.storySection}>

      <div className={styles.storyImageContainer}>
        <img src="" alt="" className={styles.storyImage1} />
      </div>
          
      <div className={styles.storyContentContainer}>
        <img src="" alt="" className={styles.storyImage2} />
        <p className={styles.storyDesc}>For brothers John “Biggy” and Jaco “Jacobus” Bones, barbeque is a way of life. When they were little boys, their father, Jakes C. Bones Sr., set them up on milk crates to look over the pit at the very first Jakes Bar-B-Q restaurant.</p>
        <Link to="/OurRoots" className={styles.storyBtnContainer}>
          <Button text="READ THEIR STORY" buttonDark={true} />
        </Link>
      </div>  

      </section>

      <div className={styles.slidingTextContainer2}>
        <a href="https://instagram.com" target="_blank" className={styles.slidingContainer}>
          <span className={styles.slidingText2}>FOLLOW US ON INSTAGRAM @ JAKESBBQ</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText2}>FOLLOW US ON INSTAGRAM @ JAKESBBQ</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText2}>FOLLOW US ON INSTAGRAM @ JAKESBBQ</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText2}>FOLLOW US ON INSTAGRAM @ JAKESBBQ</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText2}>FOLLOW US ON INSTAGRAM @ JAKESBBQ</span>
          <span className={styles.slidingIcon}>🔥</span>
          <span className={styles.slidingText2}>FOLLOW US ON INSTAGRAM @ JAKESBBQ</span>
        </a>
      </div>

      <section className={styles.contactSection}>

        <div className={styles.contactTextContainer}>
          <h4 className={styles.contactTitle}>STAY IN THE KNOW</h4>
          <p className={styles.contactDesc}>Enter your email address to recieve news and updates from Jakes Bar-B-Q.</p>
        </div>

        <div className={styles.emailContainer}>
          <input type="email" placeholder='Email Address' className={styles.input}/>
          <button type='submit' className={styles.submit}>SUBMIT</button>
        </div>

      </section>

    </main>
  )
}

export default Home