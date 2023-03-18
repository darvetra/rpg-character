import Header from '../../components/header/header';
// import Footer from '../../components/footer/footer';

// import Character from '../../components/character/character';
// import Inventory from '../../components/inventory/inventory';
// import Parameters from "../../components/parameters/parameters";
// import Equipment from "../../components/equipment/equipment";

import styles from './info-screen.module.scss';

function InfoScreen(): JSX.Element {

  return (
    <div>
      <Header />

      <main className={styles['info-page']}>
        <h1 className="visually-hidden">Rotgar.Guide</h1>


        {/*<Character />*/}
        <section className={styles['character']}>
          <div className={styles['character__container']}>
            <div className={styles['character__block']}>
              {/*<Parameters />*/}


              {/*<Equipment />*/}
              <section className={styles['character__item']}>
                <section className={styles['equipment']}>

                  <div className={styles['equipment__container']}>

                    <ul className={styles['equipment__column']}>
                      <li className={styles['equipment__slot']}>
                      </li>
                      <li className={styles['equipment__slot']}>
                      </li>
                      <li className={styles['equipment__slot']}>
                      </li>
                      <li className={styles['equipment__slot']}>
                        <picture>
                          <source
                            type="image/webp"
                            width="86"
                            height="86"
                            srcSet={require('../../img/shield.webp')}
                          />
                          <img
                            alt="img"
                            width="86"
                            height="86"
                            src={require('../../img/shield.png')}
                          />
                        </picture>
                      </li>
                      <li className={styles['equipment__slot']}>
                      </li>
                      <li className={styles['equipment__slot']}>
                      </li>
                    </ul>

                    <div className={styles['character__puppet--wrapper']}>
                      <div className={styles['character__puppet']}>
                      </div>
                    </div>

                    <ul className={styles['equipment__column']}>
                      <li className={styles['equipment__slot']}>
                      </li>
                      <li className={styles['equipment__slot']}>
                        <img
                          alt="img"
                          width="64"
                          height="64"
                          src={require('../../img/64_work_wear_shirt.png')}
                        />
                      </li>
                      <li className={styles['equipment__slot']}>
                        <img
                          alt="img"
                          width="64"
                          height="64"
                          src={require('../../img/64_work_wear_gloves.png')}
                        />
                      </li>
                      <li className={styles['equipment__slot']}>
                        <picture>
                          <source
                            type="image/webp"
                            width="86"
                            height="86"
                            srcSet={require('../../img/sword.webp')}
                          />
                          <img
                            alt="img"
                            width="86"
                            height="86"
                            src={require('../../img/sword.png')}
                          />
                        </picture>
                      </li>
                      <li className={styles['equipment__slot']}>
                        <img
                          alt="img"
                          width="64"
                          height="64"
                          src={require('../../img/64_work_wear_pants.png')}
                        />
                      </li>
                      <li className={styles['equipment__slot']}>
                        <img
                          alt="img"
                          width="64"
                          height="64"
                          src={require('../../img/64_work_wear_shoes.png')}
                        />
                      </li>
                    </ul>

                  </div>
                </section>

              </section>


            </div>
          </div>
        </section>


        {/*<Inventory />*/}
      </main>

      {/*<Footer />*/}
    </div>
  );
}

export default InfoScreen;
