import styles from '../styles/Menu.module.css';

const Menu = () => {
    return (
        <section className={styles.menuSection}>

            <img src="https://ik.imagekit.io/x29dtqzji/BBQ_Website/tr:w-1900/pexels-calvin-lee-9967252.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676373638381" 
            alt="meaty-bbq-plate" className={styles.image} />

            <div className={styles.mainContainer}>

                <div className={styles.mainTitle}>
                    <h1>OUR MENU</h1>
                </div>
                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>PLATTERS</h2>

                    <div className={styles.container}>
                        <h3 className={styles.item}>JAKES PLATTER</h3>
                        <p className={styles.itemDesc}>Slab, beef, turkey, ham, rib tips and sausage with bread</p>
                        <span className={styles.itemPrice}>R 150.00</span>
                    </div>

                    <div className={styles.container}>
                        <h3 className={styles.item}>SIMPLE PLATTER</h3>
                        <p className={styles.itemDesc}>Rib bones, beef, turkey, ham and sausage with bread</p>
                        <span className={styles.itemPrice}>R 80.00</span>
                    </div>

                    <div className={styles.container}>
                        <h3 className={styles.item}>1KG OF MEAT</h3>
                        <p className={styles.itemDesc}>Beef, ham, turkey, pork, burnt ends</p>
                        <span className={styles.itemPrice}>R 45.00</span>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>PLATES</h2>
                    <div className={styles.container}>
                        <h3 className={styles.item}>COMBO PLATE</h3>
                        <p className={styles.itemDesc}>Choice of 2 meats: beef, ham, turkey, pork, burnt ends, ribs, sausage or rib tips, with one side</p>
                        <span className={styles.itemPrice}>R 30.00</span>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>BURNT END PLATE</h3>
                        <p className={styles.itemDesc}>Chopped beef brisket piled high on bread or a bun, with one side</p>
                        <span className={styles.itemPrice}>R 25.00</span>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>HOUSE SPECIALTIES</h2>
                    <div className={styles.container}>
                        <h3 className={styles.item}>SAUSAGE LINK</h3>
                        <p className={styles.itemDesc}>At Jones Bar-B-Q, we are known for our famous homemade sausage <br/>made with our special blend of seasonings and spices</p>
                        <span className={styles.itemPrice}>R 30.00</span>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>SAUSAGE LINK + A HALF</h3>
                        <p className={styles.itemDesc}>At Jones Bar-B-Q, we are known for our famous homemade sausage <br/>made with our special blend of seasonings and spices</p>
                        <span className={styles.itemPrice}>R 40.00</span>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>SLAB OF RIBS</h2>
                    <div className={styles.container}>
                        <h3 className={styles.item}>FULL SLAB</h3>
                        <p className={styles.itemDesc}>7-8 bones</p>
                        <span className={styles.itemPrice}>R 70.00</span>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>SHORT END</h3>
                        <p className={styles.itemDesc}>7-8 bones</p>
                        <span className={styles.itemPrice}>R 35.00</span>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>LONG END</h3>
                        <p className={styles.itemDesc}>5-6 bones</p>
                        <span className={styles.itemPrice}>R 30.00</span>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>RIB TIPS</h3>
                        <p className={styles.itemDesc}>with one side</p>
                        <span className={styles.itemPrice}>R 25.00</span>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>RIB TIPS AND HALF</h3>
                        <p className={styles.itemDesc}>with one side</p>
                        <span className={styles.itemPrice}>R 30.00</span>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>SANDWICHES</h2>
                    <div className={styles.container}>
                        <h3 className={styles.item}>BIG SANDWICH</h3>
                        <p className={styles.itemDesc}>Choose 1 meat: turkey, beef, ham or pork, piled high on bread</p>
                        <span className={styles.itemPrice}>R 25.00</span>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>COMBO SANDWICH</h3>
                        <p className={styles.itemDesc}>Choose 2 meats: turkey, beef, ham or pork, piled high on bread</p>
                        <span className={styles.itemPrice}>R 28.00</span>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>WEEKLY SPECIALS</h2>
                    <div className={styles.container}>
                        <h3 className={styles.item}>DAILY</h3>
                        <p className={styles.itemDesc}>Turkey, ham, beef or pork + one side on a bun/bread</p>
                        <span className={styles.itemPrice}>R 20.00</span>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>SIDES</h2>
                    <div className={styles.container}>
                        <h3 className={styles.item}>JAKES BAKED BEANS</h3>
                        <p className={styles.itemPrice}>Cup R10</p>
                        <p className={styles.itemPrice}>Side Pan R30</p>
                        <p className={styles.itemPrice}>Full Pan R60</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>COLE SLAW OR POTATO SALAD</h3>
                        <p className={styles.itemPrice}>Cup R10</p>
                        <p className={styles.itemPrice}>Side Pan R30</p>
                        <p className={styles.itemPrice}>Full Pan R60</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>SAUSAGE</h3>
                        <p className={styles.itemPrice}>R 12.00</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>RIB TIPS</h3>
                        <p className={styles.itemPrice}>R 15.00</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>BREAD PER SLICE</h3>
                        <p className={styles.itemPrice}>R 2.00</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>FRENCH FRIES</h3>
                        <p className={styles.itemPrice}>R 15.00</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.item}>JAKES SWEET & TANGY BBQ SAUCE</h3>
                        <p className={styles.itemPrice}>Cup R3</p>
                        <p className={styles.itemPrice}>Bottle R30</p>
                    </div>
                </div>
                <img src="https://ik.imagekit.io/x29dtqzji/BBQ_Website/tr:w-1900/pexels-saveurs-secretes-5987010.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676373635591" 
                alt="" className={styles.image} />
            </div>

        </section>
    )
}

export default Menu