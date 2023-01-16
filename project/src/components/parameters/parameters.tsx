import {useState} from 'react';

import {roundTwoDecimalPlaces} from '../../utils';
import {
  HEALTH_PER_LEVEL,
  DAMAGE_PER_LEVEL,
  DEFENSE_PER_LEVEL,
  CRIT_DAMAGE_PER_LEVEL,
  CRIT_CHANCE_PER_LEVEL,
  DODGE_PER_LEVEL,
  DOUBLE_DEFENSE_PER_LEVEL
} from '../../const';

import {Button} from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

import styles from './parameters.module.scss';


function Parameters(): JSX.Element {

  const [countLevel, setCountLevel] = useState({
    level: 1,
    // exp: 0,
    // expToNextLvl: 100 (10/5),
    points: 10,
    // strength: 0,
    // stamina: 0,
    // agility: 0,
    health: 300,
    damage: 75,
    defense: 3,
    critDamage: 161,
    critChance: 7,
    dodge: 1.5,
    doubleChance: 0.5,
  });

  const {level, points, health, damage, defense, critDamage, critChance, dodge, doubleChance} = countLevel;


  return (
    <section className={styles['character__item']}>
      <section className={styles['parameters']}>
        <h2 className={styles['parameters__title']}>Характеристики персонажа</h2>

        <div className={styles['parameters__row']}>
          <div className={styles['parameters__description']}>Уровень персонажа:</div>

          <ArrowBackIosOutlinedIcon
            className={styles['parameters__arrow']}
            color="primary"
            onClick={() => {
              setCountLevel({
                ...countLevel,
                level: level - 1,
                points: points - 1,
                health: health - HEALTH_PER_LEVEL,
                damage: damage - DAMAGE_PER_LEVEL,
                defense: roundTwoDecimalPlaces(defense - DEFENSE_PER_LEVEL),
                critDamage: critDamage - CRIT_DAMAGE_PER_LEVEL,
                critChance: roundTwoDecimalPlaces(critChance - CRIT_CHANCE_PER_LEVEL),
                dodge: roundTwoDecimalPlaces(dodge - DODGE_PER_LEVEL),
                doubleChance: roundTwoDecimalPlaces(doubleChance - DOUBLE_DEFENSE_PER_LEVEL),
              });
            }}
          />

          <div className={styles['parameters__cell']}>{level}</div>

          <ArrowForwardIosOutlinedIcon
            className={styles['parameters__arrow']}
            color="primary"
            onClick={() => {
              setCountLevel({
                ...countLevel,
                level: level + 1,
                points: points + 1,
                health: Math.round(health + HEALTH_PER_LEVEL),
                damage: Math.round(damage + DAMAGE_PER_LEVEL),
                defense: roundTwoDecimalPlaces(defense + DEFENSE_PER_LEVEL),
                critDamage: critDamage + CRIT_DAMAGE_PER_LEVEL,
                critChance: roundTwoDecimalPlaces(critChance + CRIT_CHANCE_PER_LEVEL),
                dodge: roundTwoDecimalPlaces(dodge + DODGE_PER_LEVEL),
                doubleChance: roundTwoDecimalPlaces(doubleChance + DOUBLE_DEFENSE_PER_LEVEL),
              });
            }}
          />

        </div>

        <ul>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__headline']}>
              Параметры
            </div>
            <div className={styles['parameters__headline']}>
              Значение
            </div>
          </li>

          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>
              <SportsMartialArtsOutlinedIcon color="primary" />
              Сила:
            </div>
            <div className={styles['parameters__changeable-value']}>
              <ArrowBackIosOutlinedIcon
                className={styles['parameters__arrow']}
                color="primary"
              />
              <div className={styles['parameters__cell']}>29</div>
              <ArrowForwardIosOutlinedIcon
                className={styles['parameters__arrow']}
                color="primary"
              />
            </div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>
              <HikingOutlinedIcon color="primary" />
              Стойкость:
            </div>
            <div className={styles['parameters__changeable-value']}>
              <ArrowBackIosOutlinedIcon
                className={styles['parameters__arrow']}
                color="primary"
              />
              <div className={styles['parameters__cell']}>30</div>
              <ArrowForwardIosOutlinedIcon
                className={styles['parameters__arrow']}
                color="primary"
              />
            </div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>
              <SurfingOutlinedIcon color="primary" />
              Ловкость:
            </div>
            <div className={styles['parameters__changeable-value']}>
              <ArrowBackIosOutlinedIcon
                className={styles['parameters__arrow']}
                color="primary"
              />
              <div className={styles['parameters__cell']}>10</div>
              <ArrowForwardIosOutlinedIcon
                className={styles['parameters__arrow']}
                color="primary"
              />
            </div>
          </li>

          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Здоровье:</div>
            <div className={styles['parameters__unchangeable-value']}>{health}</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Урон:</div>
            <div className={styles['parameters__unchangeable-value']}>{damage}</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Защита:</div>
            <div className={styles['parameters__unchangeable-value']}>{defense} %</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Критический урон:</div>
            <div className={styles['parameters__unchangeable-value']}>{critDamage}</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Шанс на крит:</div>
            <div className={styles['parameters__unchangeable-value']}>{critChance} %</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Шанс уворота:</div>
            <div className={styles['parameters__unchangeable-value']}>{dodge} %</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Шанс двойного удара:</div>
            <div className={styles['parameters__unchangeable-value']}>{doubleChance} %</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__points']}>Свободные очки характеристик: <b>{points}</b></div>
            <Button
              variant="contained"
              startIcon={<RestartAltOutlinedIcon />}
            >
              Сброс
            </Button>
          </li>
        </ul>

      </section>

    </section>
  );
}

export default Parameters;
