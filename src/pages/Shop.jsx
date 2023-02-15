import styles from '../styles/Shop.module.css';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import products from '../Products';
import PageChange from '../components/PageChange';

const Shop = () => {

  const [playAnimation, setPlayAnimation] = useState(false);
    
    useEffect(() => {
      window.scrollTo(0,0);
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      
      return () => window.removeEventListener('load', onPageLoad);
    }
    }, []);

  return (
    <>
    <PageChange pageLoaded={playAnimation} />
    <Navbar isActive1={true} />
    <section className={styles.shopSection}>
        <div className={styles.heading}>
            <h1 className={styles.title}>WORLD-FAMOUS BBQ SAUCE</h1>
            <h2 className={styles.desc}>Can't make it to our restaurant? Want to enjoy the love and delicious flavors of Jones Bar-B-Q in the comfort of your own home? Pick up a bottle or case of Jones Bar-B-Q Sauce.</h2>
        </div>

        <div className={styles.productContainer}>
          { products.map((products) => {
            return (
            <div className={styles.card} key={products.id}>
              <div className={styles.imageContainer}>
                <img src={products.image} alt="sauce-bottle" className={styles.image} />
                
              </div>
              <h3 className={styles.product}>{products.name}</h3>
              <span className={styles.price}>{products.price}</span>
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