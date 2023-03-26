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

  const defaultEquip = useAppSelector((state) => state.helm);
  const [equip, setEquip] = useState(defaultEquip);

  // eslint-disable-next-line no-console
  console.log(setEquip);

  const {
    // id,
    // type,
    title,
    // quality,
    // imageInventory,
  } = equip;

  // eslint-disable-next-line no-console
  console.log(title);

  // eslint-disable-next-line no-console
  // console.log(imageInventory);

  const {
    // status,
    userLevel,
    // userXp,
    // userName,
    // language,
    // userHp,
    // userDamage,
    // nextLevelXp,
    // userTickets,
    hideId,
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
    userStrength,
    userAgility,
    userIntellect,
    userStamina,
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
        <h1 className="visually-hidden">Rotgar Game. Информация о персонаже {hideId}</h1>

        <section className={styles['info-page__wrapper']}>
          <div className={styles['info-page__container']}>
            <div className={styles['info-page__block']}>

              <section className={styles['equipment']}>
                <div className={styles['equipment__container']}>
                  <ul className={styles['equipment__column']}>
                    <li className={styles['equipment__slot']}>
                      <img
                        alt="img"
                        width="64"
                        height="64"
                        src={require('../../img/inventory/aa000055.jpg')}
                      />
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
                    </li>
                    <li className={styles['equipment__slot']}>
                      <img
                        alt="img"
                        width="64"
                        height="64"
                        src={require('../../img/inventory/64_kings_bodyguard_shoes.png')}
                      />
                    </li>
                  </ul>

                  <div className={styles['character__puppet--wrapper']}>
                    <div className={styles['character__puppet']}>
                    </div>
                  </div>

                  <ul className={styles['equipment__column']}>
                    <li className={styles['equipment__slot']}>
                      <img
                        alt="img"
                        width="64"
                        height="64"
                        src={require('../../img/inventory/64_kings_bodyguard_helm.png')}
                      />
                    </li>
                    <li className={styles['equipment__slot']}>
                      <img
                        alt="img"
                        width="64"
                        height="64"
                        src={require('../../img/inventory/64_kings_bodyguard_cuirass.png')}
                      />
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
                      <img
                        alt="img"
                        width="64"
                        height="64"
                        src={require('../../img/inventory/64_kings_bodyguard_gloves.png')}
                      />
                    </li>
                    <li className={styles['equipment__slot']}>
                      <img
                        alt="img"
                        width="64"
                        height="64"
                        src={require('../../img/inventory/64_kings_bodyguard_trousers.png')}
                      />
                    </li>
                  </ul>

                </div>
              </section>

              <section className={styles['info']}>
                <div className={styles['avatar']}>
                </div>

                <ul className={'info__character'}>
                  <li className={'info__id'}>
                    ID  <span>{hideId} <img src={require('../../img/copy.png')} alt="copy id" /></span>
                  </li>
                  <li className={'info__cell'}>Level: <span>{userLevel - 7}</span></li>
                  <li className={'info__cell'}>Alliance: 🔥 <span>Phoenix</span></li>
                  <li className={'info__cell'}>Location: <span>Emerald City</span></li>
                  <li className={'info__cell'}>Возраст персонажа: <span>1 год 2 месяца</span></li>
                  <li className={'info__cell'}>Побед: <span>100</span></li>
                  <li className={'info__cell'}>Поражений: <span>1</span></li>
                  <li className={'info__cell'}>О себе: <span>парочку слов для журнала коневодство</span></li>
                </ul>
              </section>

              <section className={styles['attributes']}>
                <ul>
                  <li>Характеристики</li>
                  <li>---</li>
                  <li>Attributes</li>
                  <li>Strength: {userStrength}</li>
                  <li>Dexterity: {userAgility + 42}</li>
                  <li>Spirit: {userIntellect + 11}</li>
                  <li>Vitality: {userStamina + 33}</li>
                  <li>---</li>

                  <li>Навыки</li>
                  <li>Melee weapon ........................  57</li>
                  <li>Heavy weapon ........................   7</li>
                  <li>Ачивки</li>
                </ul>
              </section>

            </div>
          </div>
        </section>
      </main>

      {/*<Footer />*/}
    </div>
  );
}

export default InfoScreen;
