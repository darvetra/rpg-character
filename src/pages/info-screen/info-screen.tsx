import {useState} from 'react';
import {useAppSelector} from '../../hooks';

import Header from '../../components/header/header';
// import Footer from '../../components/footer/footer';

import styles from './info-screen.module.scss';


function InfoScreen(): JSX.Element {
  const characterServer = useAppSelector((state) => state.characterServer);
  const [character, setCharacter] = useState(characterServer);

  // eslint-disable-next-line no-console
  console.log(setCharacter);

  const {
    // status,
    // userLevel,
    // userXp,
    userName,
    // language,
    // userHp,
    // userDamage,
    // nextLevelXp,
    // userTickets,
    // hideId,
    // energy,
    // resetPoints,
    // points,
    // maxPointsToChar,
    // userCritChance,
    // userCritPercent,
    // userCritDamage,
    // userDoubleHitChance,
    // userRating,
    // isAnonim,
    // userEvasionChance,
    // userStrength,
    // userAgility,
    // userIntellect,
    // userStamina,
    // levelStrength,
    // levelAgility,
    // levelWinExp,
    // levelLooseExp,
    // levelWinExpWot,
    // levelLooseExpWot,
    // levelPoints,
    // levelIntellect,
    // levelStamina,
    // userDefence,
    // searchValue,
    // levelSearchPool,
    // equip: {
    //   head,
    //   torso,
    //   leftHand,
    //   rightHand,
    //   hands,
    //   legs,
    //   feet,
    //   throwingOption,
    //   ring1,
    //   ring2,
    //   amulet,
    //   cloak,
    //   artefact,
    //   quickItem
    // },
    // inv: {
    //   0,
    //   1,
    //   2,
    //   3,
    //   4,
    //   5,
    //   6,
    //   7,
    //   8,
    //   9,
    //   10,
    //   11,
    //   12,
    //   13,
    // }
  } = character;

  // eslint-disable-next-line no-console
  console.log(characterServer);

  return (
    <div>
      <Header />

      <main className={styles['info-page']}>
        <h1 className="visually-hidden">Rotgar Game. Информация о персонаже</h1>


        {/*<Character />*/}
        {/*.info*/}
        <section className={styles['character']}>
          {/*.info__container*/}
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

                <section className={styles['info']}>

                  <div className={styles['avatar']}>

                  </div>

                  <ul>
                    <li>{userName}</li>
                  </ul>

                </section>

                <section className={styles['attributes']}>

                  <ul>
                    <li>Характеристики</li>
                  </ul>

                </section>

                <section className={styles['scills']}>

                  <ul>
                    <li>Навыки</li>
                  </ul>

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
