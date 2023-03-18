import {useState} from 'react';
import {useAppSelector} from '../../hooks';

import {
  CRIT_CHANCE_PER_LEVEL,
  CRIT_CHANCE_PER_STRENGTH,
  CRIT_DAMAGE_PERCENT_PER_LEVEL,
  CRIT_DAMAGE_PERCENT_PER_STRENGTH,
  DAMAGE_PER_LEVEL, DAMAGE_PER_STAMINA,
  DEFENSE_PER_LEVEL, DEFENSE_PER_STAMINA,
  DODGE_PER_AGILITY,
  DODGE_PER_LEVEL,
  DOUBLE_STRIKE_CHANCE_PER_AGILITY,
  DOUBLE_STRIKE_CHANCE_PER_LEVEL,
  FIRST_LEVEL,
  HEALTH_PER_LEVEL,
  HEALTH_PER_STRENGTH,
  LAST_LEVEL,
  MINIMUM_POINTS,
  POINTS_PER_LEVEL,
  STEP_COUNT
} from '../../const';

import {
  calcDodgeDecLevel,
  calcDodgeIncLevel,
  calcDoubleChanceDecLevel,
  calcDoubleChanceIncLevel,
  roundTwoDecimalPlaces
} from '../../utils/utils';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import styles from './battle-screen.module.scss';
import {Button} from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';


function BattleScreen(): JSX.Element {
  const defaultCharacter = useAppSelector((state) => state.character);
  const [character, setCharacter] = useState(defaultCharacter);

  const {
    // id,
    playerName,
    level,
    points,
    strength,
    stamina,
    agility,
    health,
    damage,
    defense,
    // critDamagePercent,
    critDamage,
    critChance,
    dodge,
    doubleChance
  } = character;

  // eslint-disable-next-line no-console
  console.log(defaultCharacter);

  const incrementLevel = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      level: prevCharacter.level + STEP_COUNT,
      points: prevCharacter.points + POINTS_PER_LEVEL,
      health: Math.round(prevCharacter.health + HEALTH_PER_LEVEL),
      damage: Math.round(prevCharacter.damage + DAMAGE_PER_LEVEL),
      defense: roundTwoDecimalPlaces(prevCharacter.defense + DEFENSE_PER_LEVEL),
      critDamagePercent: prevCharacter.critDamagePercent + CRIT_DAMAGE_PERCENT_PER_LEVEL,
      critChance: roundTwoDecimalPlaces(prevCharacter.critChance + CRIT_CHANCE_PER_LEVEL),
      dodge: roundTwoDecimalPlaces(calcDodgeIncLevel(prevCharacter.level, prevCharacter.dodge, DODGE_PER_LEVEL)),
      doubleChance: roundTwoDecimalPlaces(calcDoubleChanceIncLevel(prevCharacter.level, prevCharacter.doubleChance, DOUBLE_STRIKE_CHANCE_PER_LEVEL)),
      critDamage: Math.round(prevCharacter.damage / 100 * (prevCharacter.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * strength))),
    }));
  };

  const decrementLevel = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      level: prevCharacter.level - STEP_COUNT,
      points: prevCharacter.points - POINTS_PER_LEVEL,
      health: Math.round(prevCharacter.health - HEALTH_PER_LEVEL),
      damage: Math.round(prevCharacter.damage - DAMAGE_PER_LEVEL),
      defense: roundTwoDecimalPlaces(prevCharacter.defense - DEFENSE_PER_LEVEL),
      critDamagePercent: prevCharacter.critDamagePercent - CRIT_DAMAGE_PERCENT_PER_LEVEL,
      critChance: roundTwoDecimalPlaces(prevCharacter.critChance - CRIT_CHANCE_PER_LEVEL),
      dodge: roundTwoDecimalPlaces(calcDodgeDecLevel(prevCharacter.level, prevCharacter.dodge, DODGE_PER_LEVEL)),
      doubleChance: roundTwoDecimalPlaces(calcDoubleChanceDecLevel(prevCharacter.level, prevCharacter.doubleChance, DOUBLE_STRIKE_CHANCE_PER_LEVEL)),
      critDamage: Math.round(prevCharacter.damage / 100 * (prevCharacter.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * strength))),
    }));
  };

  const incrementStrength = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      strength: prevCharacter.strength + STEP_COUNT,
      points: prevCharacter.points - STEP_COUNT,
      health: Math.round(prevCharacter.health + HEALTH_PER_STRENGTH),
      critChance: roundTwoDecimalPlaces(prevCharacter.critChance + CRIT_CHANCE_PER_STRENGTH),
      critDamage: Math.round(prevCharacter.damage / 100 * (prevCharacter.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * strength))),
    }));
  };

  const decrementStrength = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      strength: prevCharacter.strength - STEP_COUNT,
      points: prevCharacter.points + STEP_COUNT,
      health: Math.round(prevCharacter.health - HEALTH_PER_STRENGTH),
      critChance: roundTwoDecimalPlaces(prevCharacter.critChance - CRIT_CHANCE_PER_STRENGTH),
      critDamage: Math.round(prevCharacter.damage / 100 * (prevCharacter.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * strength))),
    }));
  };

  const incrementStamina = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      stamina: prevCharacter.stamina + STEP_COUNT,
      points: prevCharacter.points - STEP_COUNT,
      damage: Math.round(prevCharacter.damage + DAMAGE_PER_STAMINA),
      defense: roundTwoDecimalPlaces(prevCharacter.defense + DEFENSE_PER_STAMINA),
      critDamage: Math.round(prevCharacter.damage / 100 * (prevCharacter.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * prevCharacter.strength))),
    }));
  };

  const decrementStamina = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      stamina: prevCharacter.stamina - STEP_COUNT,
      points: prevCharacter.points + STEP_COUNT,
      damage: Math.round(prevCharacter.damage - DAMAGE_PER_STAMINA),
      defense: roundTwoDecimalPlaces(prevCharacter.defense - DEFENSE_PER_STAMINA),
      critDamage: Math.round(prevCharacter.damage / 100 * (prevCharacter.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * prevCharacter.strength))),
    }));
  };

  const incrementAgility = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      agility: prevCharacter.agility + STEP_COUNT,
      points: prevCharacter.points - STEP_COUNT,
      dodge: roundTwoDecimalPlaces(prevCharacter.dodge + DODGE_PER_AGILITY),
      doubleChance: roundTwoDecimalPlaces(prevCharacter.doubleChance + DOUBLE_STRIKE_CHANCE_PER_AGILITY),
    }));
  };

  const decrementAgility = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      agility: prevCharacter.agility - STEP_COUNT,
      points: prevCharacter.points + STEP_COUNT,
      dodge: roundTwoDecimalPlaces(prevCharacter.dodge - DODGE_PER_AGILITY),
      doubleChance: roundTwoDecimalPlaces(prevCharacter.doubleChance - DOUBLE_STRIKE_CHANCE_PER_AGILITY),
    }));
  };

  const resetLevel = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      level: FIRST_LEVEL,
      // exp: 0,
      // expToNextLvl: 100 (10/5),
      points: 10,
      strength: 0,
      stamina: 0,
      agility: 0,
      health: 300,
      damage: 75,
      defense: 3,
      critDamagePercent: 215,
      critDamage: 161,
      critChance: 7,
      dodge: 1.5,
      doubleChance: 0.5,
    }));
  };


  return (
    <div>
      <Header />

      <main>
        <h1 className="visually-hidden">Battle Model</h1>
        <section className={styles['battle']}>

          <div className={styles['battle__container']}>

            <div className={styles['battle__avatar']}>
              <h3>{playerName}</h3>
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
                        decrementLevel();
                      }
                      if (strength + stamina + agility > 0) {
                        resetLevel();
                      }
                    }}
                  />

                  <div className={styles['battle__parameters-cell']}>{level}</div>

                  <ArrowForwardIosOutlinedIcon
                    className={level === LAST_LEVEL ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                    color={level === LAST_LEVEL ? 'disabled' : 'primary'}
                    onClick={() => {
                      if (level < LAST_LEVEL) {
                        incrementLevel();
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
                          decrementStrength();
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{strength}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          incrementStrength();
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
                          decrementStamina();
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{stamina}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          incrementStamina();
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
                          decrementAgility();
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{agility}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          incrementAgility();
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
                    onClick={() => resetLevel()}
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
                        decrementLevel();
                      }
                      if (strength + stamina + agility > 0) {
                        resetLevel();
                      }
                    }}
                  />

                  <div className={styles['battle__parameters-cell']}>{level}</div>

                  <ArrowForwardIosOutlinedIcon
                    className={level === LAST_LEVEL ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                    color={level === LAST_LEVEL ? 'disabled' : 'primary'}
                    onClick={() => {
                      if (level < LAST_LEVEL) {
                        incrementLevel();
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
                          decrementStrength();
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{strength}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          incrementStrength();
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
                          decrementStamina();
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{stamina}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          incrementStamina();
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
                          decrementAgility();
                        }
                      }}
                    />
                    <div className={styles['battle__parameters-cell']}>{agility}</div>
                    <ArrowForwardIosOutlinedIcon
                      className={points === MINIMUM_POINTS ? styles['battle__parameters-arrow--disabled'] : styles['battle__parameters-arrow--active']}
                      color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                      onClick={() => {
                        if (MINIMUM_POINTS < points) {
                          incrementAgility();
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
                    onClick={() => resetLevel()}
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
