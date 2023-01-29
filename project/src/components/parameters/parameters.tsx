import {useAppSelector, useAppDispatch} from '../../hooks';
import {
  incrementLevel,
  decrementLevel,
  incrementStrength,
  decrementStrength,
  incrementStamina,
  decrementStamina,
  incrementAgility,
  decrementAgility,
  resetLevel
} from '../../store/action';
import {FIRST_LEVEL, LAST_LEVEL, MINIMUM_POINTS} from '../../const';

import {Button} from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

import styles from './parameters.module.scss';


function Parameters(): JSX.Element {
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
    <section className={styles['character__item']}>
      <section className={styles['parameters']}>
        <h2 className={styles['parameters__title']}>Характеристики персонажа</h2>

        <div className={styles['parameters__row']}>
          <div className={styles['parameters__description']}>Уровень персонажа:</div>

          <ArrowBackIosOutlinedIcon
            className={level === FIRST_LEVEL ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
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

          <div className={styles['parameters__cell']}>{level}</div>

          <ArrowForwardIosOutlinedIcon
            className={level === LAST_LEVEL ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
            color={level === LAST_LEVEL ? 'disabled' : 'primary'}
            onClick={() => {
              if (level < LAST_LEVEL) {
                dispatch(incrementLevel());
              }
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
                className={strength === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={strength === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (strength > MINIMUM_POINTS) {
                    dispatch(decrementStrength());
                  }
                }}
              />
              <div className={styles['parameters__cell']}>{strength}</div>
              <ArrowForwardIosOutlinedIcon
                className={points === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (MINIMUM_POINTS < points) {
                    dispatch(incrementStrength());
                  }
                }}
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
                className={stamina === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={stamina === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (stamina > MINIMUM_POINTS) {
                    dispatch(decrementStamina());
                  }
                }}
              />
              <div className={styles['parameters__cell']}>{stamina}</div>
              <ArrowForwardIosOutlinedIcon
                className={points === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (MINIMUM_POINTS < points) {
                    dispatch(incrementStamina());
                  }
                }}
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
                className={agility === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={agility === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (agility > MINIMUM_POINTS) {
                    dispatch(decrementAgility());
                  }
                }}
              />
              <div className={styles['parameters__cell']}>{agility}</div>
              <ArrowForwardIosOutlinedIcon
                className={points === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (MINIMUM_POINTS < points) {
                    dispatch(incrementAgility());
                  }
                }}
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
              onClick={() => dispatch(resetLevel())}
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
