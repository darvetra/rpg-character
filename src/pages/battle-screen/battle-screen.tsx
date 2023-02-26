import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import styles from './battle-screen.module.scss';
import {Button} from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import {FIRST_LEVEL, LAST_LEVEL, MINIMUM_POINTS} from '../../const';
import {
  decrementAgility,
  decrementLevel,
  decrementStamina,
  decrementStrength, incrementAgility,
  incrementLevel, incrementStamina,
  incrementStrength,
  resetLevel
} from '../../store/action';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import {useAppDispatch, useAppSelector} from '../../hooks';

function BattleScreen(): JSX.Element {
  const countLevel = useAppSelector((state) => state);
  const {
    level,
    points,
    strength,
    stamina,
    agility,
    health,
    damage,
    defense,
    critDamage,
    critChance,
    dodge,
    doubleChance
  } = countLevel;

  const dispatch = useAppDispatch();

  return (
    <div>
      <Header />

      <main>
        <h1 className="visually-hidden">Battle Model</h1>
        <section className={styles['battle']}>

          <div className={styles['battle__container']}>

            <div className={styles['battle__avatar']}>
              <h3>Критовик</h3>
              <span>Здоровье 300 / 1500</span>
            </div>

            <div className={styles['battle__controls']}>
              <h3>Атака / Защита</h3>
              <Button variant="contained">
                Голова
              </Button>
              <Button variant="contained">
                Корпус
              </Button>
              <Button variant="contained">
                Живот
              </Button>
              <Button variant="contained">
                Пах
              </Button>
              <Button variant="contained">
                Ноги
              </Button>
            </div>

            <div>
              <div className={styles['battle__parameters-row']}>
                <div>Уровень персонажа:</div>

                <div className={styles['battle__parameters-changeable-value']}>
                  <ArrowBackIosOutlinedIcon
                    className={level === FIRST_LEVEL ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                    color={level === FIRST_LEVEL ? 'disabled' : 'primary'}
                    onClick={() => {
                      if (level > FIRST_LEVEL) {
                        dispatch(decrementLevel());
                      }
                      if (strength + stamina + agility > 0) {
                        dispatch(resetLevel());
                      }
                    }}
                  />

                  <div className={styles['battle__parameters-cell']}>{level}</div>

                  <ArrowForwardIosOutlinedIcon
                    className={level === LAST_LEVEL ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                    color={level === LAST_LEVEL ? 'disabled' : 'primary'}
                    onClick={() => {
                      if (level < LAST_LEVEL) {
                        dispatch(incrementLevel());
                      }
                    }}
                  />
                </div>
              </div>

              <ul>
                <li className={styles['battle__parameters-row']}>
                  <div className={styles['battle__parameters-headline']}>
                    Параметры
                  </div>
                  <div className={styles['battle__parameters-headline']}>
                    Значение
                  </div>
                </li>

                <li className={styles['battle__parameters-row']}>
                  <div>
                    <SportsMartialArtsOutlinedIcon color="primary" />
                    Сила:
                  </div>
                  <div className={styles['battle__parameters-changeable-value']}>
                    <ArrowBackIosOutlinedIcon
                      className={strength === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={strength === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (strength > MINIMUM_POINTS) {
                          dispatch(decrementStrength());
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{strength}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          dispatch(incrementStrength());
                        }
                      }}
                    />
                  </div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>
                    <HikingOutlinedIcon color="primary" />
                    Стойкость:
                  </div>
                  <div className={styles['battle__parameters-changeable-value']}>
                    <ArrowBackIosOutlinedIcon
                      className={stamina === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={stamina === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (stamina > MINIMUM_POINTS) {
                          dispatch(decrementStamina());
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{stamina}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          dispatch(incrementStamina());
                        }
                      }}
                    />
                  </div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>
                    <SurfingOutlinedIcon color="primary" />
                    Ловкость:
                  </div>
                  <div className={styles['battle__parameters-changeable-value']}>
                    <ArrowBackIosOutlinedIcon
                      className={agility === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={agility === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (agility > MINIMUM_POINTS) {
                          dispatch(decrementAgility());
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{agility}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          dispatch(incrementAgility());
                        }
                      }}
                    />
                  </div>
                </li>

                <li className={styles['battle__parameters-row']}>
                  <div>Здоровье:</div>
                  <div className={styles['parameters__unchangeable-value']}>{health}</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Урон:</div>
                  <div className={styles['parameters__unchangeable-value']}>{damage}</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Защита:</div>
                  <div className={styles['parameters__unchangeable-value']}>{defense} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Критический урон:</div>
                  <div className={styles['parameters__unchangeable-value']}>{critDamage}</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Шанс на крит:</div>
                  <div className={styles['parameters__unchangeable-value']}>{critChance} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Шанс уворота:</div>
                  <div className={styles['parameters__unchangeable-value']}>{dodge} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Шанс двойного удара:</div>
                  <div className={styles['parameters__unchangeable-value']}>{doubleChance} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div className={styles['parameters__points']}>Свободные очки характеристик: <b>{points}</b></div>
                  <Button
                    variant="contained"
                    startIcon={<RestartAltOutlinedIcon />}
                    onClick={() => dispatch(resetLevel())}
                  >
                    Сброс
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles['battle__container']}>
            <div className={styles['battle__round']}>
              <p>У Критовик осталось ❤ 1529 (-150) здоровья</p>
              <p>🗡 Удар: Живот (✅)</p>
              <p>🛡 Защита: Голова, Живот (❌)</p>
              <br/>
              <p>У Уворотчик осталось ❤ 446 (-162) здоровья</p>
              <p>🗡 Удар: Корпус (✅)</p>
              <p>🛡 Защита: Корпус, Ноги (❌)</p>
            </div>
            <div className={styles['battle__round']}>
              <p>У Критовик осталось ❤ 1529 (-150) здоровья</p>
              <p>🗡 Удар: Живот (✅)</p>
              <p>🛡 Защита: Голова, Живот (❌)</p>
              <br/>
              <p>У Уворотчик осталось ❤ 446 (-162) здоровья</p>
              <p>🗡 Удар: Корпус (✅)</p>
              <p>🛡 Защита: Корпус, Ноги (❌)</p>
            </div>
            <div className={styles['battle__round']}>
              <p>У Критовик осталось ❤ 1529 (-150) здоровья</p>
              <p>🗡 Удар: Живот (✅)</p>
              <p>🛡 Защита: Голова, Живот (❌)</p>
              <br/>
              <p>У Уворотчик осталось ❤ 446 (-162) здоровья</p>
              <p>🗡 Удар: Корпус (✅)</p>
              <p>🛡 Защита: Корпус, Ноги (❌)</p>
            </div>
          </div>

          <div className={styles['battle__container']}>

            <div className={styles['battle__avatar']}>
              <h3>Уворотчик</h3>
              <span>Здоровье 300 / 1500</span>
            </div>

            <div className={styles['battle__controls']}>
              <h3>Атака / Защита</h3>
              <Button variant="contained">
                Голова
              </Button>
              <Button variant="contained">
                Корпус
              </Button>
              <Button variant="contained">
                Живот
              </Button>
              <Button variant="contained">
                Пах
              </Button>
              <Button variant="contained">
                Ноги
              </Button>
            </div>

            <div>
              <div className={styles['battle__parameters-row']}>
                <div>Уровень персонажа:</div>

                <div className={styles['battle__parameters-changeable-value']}>
                  <ArrowBackIosOutlinedIcon
                    className={level === FIRST_LEVEL ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                    color={level === FIRST_LEVEL ? 'disabled' : 'primary'}
                    onClick={() => {
                      if (level > FIRST_LEVEL) {
                        dispatch(decrementLevel());
                      }
                      if (strength + stamina + agility > 0) {
                        dispatch(resetLevel());
                      }
                    }}
                  />

                  <div className={styles['battle__parameters-cell']}>{level}</div>

                  <ArrowForwardIosOutlinedIcon
                    className={level === LAST_LEVEL ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                    color={level === LAST_LEVEL ? 'disabled' : 'primary'}
                    onClick={() => {
                      if (level < LAST_LEVEL) {
                        dispatch(incrementLevel());
                      }
                    }}
                  />
                </div>
              </div>

              <ul>
                <li className={styles['battle__parameters-row']}>
                  <div className={styles['battle__parameters-headline']}>
                    Параметры
                  </div>
                  <div className={styles['battle__parameters-headline']}>
                    Значение
                  </div>
                </li>

                <li className={styles['battle__parameters-row']}>
                  <div>
                    <SportsMartialArtsOutlinedIcon color="primary" />
                    Сила:
                  </div>
                  <div className={styles['battle__parameters-changeable-value']}>
                    <ArrowBackIosOutlinedIcon
                      className={strength === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={strength === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (strength > MINIMUM_POINTS) {
                          dispatch(decrementStrength());
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{strength}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          dispatch(incrementStrength());
                        }
                      }}
                    />
                  </div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>
                    <HikingOutlinedIcon color="primary" />
                    Стойкость:
                  </div>
                  <div className={styles['battle__parameters-changeable-value']}>
                    <ArrowBackIosOutlinedIcon
                      className={stamina === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={stamina === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (stamina > MINIMUM_POINTS) {
                          dispatch(decrementStamina());
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{stamina}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          dispatch(incrementStamina());
                        }
                      }}
                    />
                  </div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>
                    <SurfingOutlinedIcon color="primary" />
                    Ловкость:
                  </div>
                  <div className={styles['battle__parameters-changeable-value']}>
                    <ArrowBackIosOutlinedIcon
                      className={agility === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={agility === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (agility > MINIMUM_POINTS) {
                          dispatch(decrementAgility());
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{agility}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          dispatch(incrementAgility());
                        }
                      }}
                    />
                  </div>
                </li>

                <li className={styles['battle__parameters-row']}>
                  <div>Здоровье:</div>
                  <div className={styles['parameters__unchangeable-value']}>{health}</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Урон:</div>
                  <div className={styles['parameters__unchangeable-value']}>{damage}</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Защита:</div>
                  <div className={styles['parameters__unchangeable-value']}>{defense} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Критический урон:</div>
                  <div className={styles['parameters__unchangeable-value']}>{critDamage}</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Шанс на крит:</div>
                  <div className={styles['parameters__unchangeable-value']}>{critChance} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Шанс уворота:</div>
                  <div className={styles['parameters__unchangeable-value']}>{dodge} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div>Шанс двойного удара:</div>
                  <div className={styles['parameters__unchangeable-value']}>{doubleChance} %</div>
                </li>
                <li className={styles['battle__parameters-row']}>
                  <div className={styles['parameters__points']}>Свободные очки характеристик: <b>{points}</b></div>
                  <Button
                    variant="contained"
                    startIcon={<RestartAltOutlinedIcon />}
                    onClick={() => dispatch(resetLevel())}
                  >
                    Сброс
                  </Button>
                </li>
              </ul>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default BattleScreen;
