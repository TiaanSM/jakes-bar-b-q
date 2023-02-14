import styles from '../styles/OurRoots.module.css';

const OurRoots = () => {
  return (
    <section className={styles.outRootsSection}>
        <img src="https://ik.imagekit.io/x29dtqzji/BBQ_Website/tr:w-1900/jason-briscoe-hsrnbwfQXw0-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676373637330" 
        alt="fire-wood-start" className={styles.image} />
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>OUR ROOTS</h2>
                <p className={styles.desc}>
                  Our father, Leavy B. Jones Sr., first stoked the pits of our Kansas City barbecue joint in 1970...something. We can't remember the exact year, because our family has been busy keeping folks fed and happy ever since.
                </p>
            </div>

            <div className={styles.textContainer}>
                <h2 className={styles.title}>OUR FAMILY</h2>
                <p className={styles.desc}>
                  My sister Mary “Shorty” Jones and I, Deborah “Little” have barbecue in our blood. When we were little girls, we stood on milk crates to look over the pit at the very first Jones Bar-B-Q. For us, it's always been about family--our Jones family and the family we've made from our community. 
                <br/><br/>
                  We've made some changes over the years, from putting my own spin on the sauce to sprucing up our stand, but we're proud that our family's legacy lives on in the sausages, ribs and sides we serve to the sauces we now sell around the world.
                </p>
            </div>

            <div className={styles.textContainer}>
                <h2 className={styles.title}>THE SECRET SAUCE</h2>
                <p className={styles.desc}>
                   Barbecue is the heart of Kansas City. From the porch to the backyard to our little spot on Kaw Drive, it's about bringing people together. The secret to our barbecue? Hard work and alot of love. 
                <br/><br/>
                   As our daddy always said, “You can't drink Bud one week and go to Coors the next. You pick it and stick with it.” We've stuck with our father's vision, poured love into our food and are lucky to be serving many of the same customers that we started with more than 40 years ago.
                </p>
            </div>
        </div>
        <img src="https://ik.imagekit.io/x29dtqzji/BBQ_Website/tr:w-1700/matt-benson-FlFHtBtVIQ8-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676373634206" 
        alt="bbq-smoke-house" className={styles.image} />
    </section>
  )
}

export default OurRoots