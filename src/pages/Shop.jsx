import styles from '../styles/Shop.module.css';
import Navbar from '../components/Navbar';
import Products from '../Products';
import { useEffect } from 'react';
import PageChange from '../components/PageChange';

const Shop = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
    <Navbar />
    <section className={styles.shopSection}>
        <div className={styles.heading}>
            <h1 className={styles.title}>WORLD-FAMOUS BBQ SAUCE</h1>
            <h2 className={styles.desc}>Can't make it to our restaurant? Want to enjoy the love and delicious flavors of Jones Bar-B-Q in the comfort of your own home? Pick up a bottle or case of Jones Bar-B-Q Sauce.</h2>
        </div>

        <div className={styles.productContainer}>
          { Products.map((details) => {
            return (
            <div className={styles.card} key={details.id}>
              <div className={styles.imageContainer}>
                <img src={details.image} alt="sauce-bottle" className={styles.image} />
              </div>
              <h3 className={styles.product}>{details.product}</h3>
              <span className={styles.price}>{details.price}</span>
            </div>
            )
            })
          }
        </div>

    </section>
    </>
  )
}

export default Shop