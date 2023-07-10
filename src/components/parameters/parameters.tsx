import {useAppSelector, useAppDispatch} from '../../hooks';
import {
  incrementLevel,
  decrementLevel,
  incrementStrength,
  decrementStrength,
  incrementDexterity,
  decrementDexterity,
  decrementIntuition,
  incrementIntuition,
  incrementVitality,
  decrementVitality,
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
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';

import styles from './parameters.module.scss';


function Parameters(): JSX.Element {
  const countLevel = useAppSelector((state) => state);
  const {
    level,
    points,
    strength,
    dexterity,
    intuition,
    vitality,
    health,
    damage,
    defense,
    critDamage,
    critChance,
    dodgeChance,
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
              if (strength + dexterity + intuition + vitality > 0) {
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
              <SurfingOutlinedIcon color="primary" />
              Ловкость:
            </div>
            <div className={styles['parameters__changeable-value']}>
              <ArrowBackIosOutlinedIcon
                className={dexterity === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={dexterity === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (dexterity > MINIMUM_POINTS) {
                    dispatch(decrementDexterity());
                  }
                }}
              />
              <div className={styles['parameters__cell']}>{dexterity}</div>
              <ArrowForwardIosOutlinedIcon
                className={points === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (MINIMUM_POINTS < points) {
                    dispatch(incrementDexterity());
                  }
                }}
              />
            </div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>
              <TransferWithinAStationIcon color="primary" />
              Интуиция:
            </div>
            <div className={styles['parameters__changeable-value']}>
              <ArrowBackIosOutlinedIcon
                className={intuition === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={intuition === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (intuition > MINIMUM_POINTS) {
                    dispatch(decrementIntuition());
                  }
                }}
              />
              <div className={styles['parameters__cell']}>{intuition}</div>
              <ArrowForwardIosOutlinedIcon
                className={points === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (MINIMUM_POINTS < points) {
                    dispatch(incrementIntuition());
                  }
                }}
              />
            </div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>
              <HikingOutlinedIcon color="primary" />
              Живучесть:
            </div>
            <div className={styles['parameters__changeable-value']}>
              <ArrowBackIosOutlinedIcon
                className={vitality === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={vitality === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (vitality > MINIMUM_POINTS) {
                    dispatch(decrementVitality());
                  }
                }}
              />
              <div className={styles['parameters__cell']}>{vitality}</div>
              <ArrowForwardIosOutlinedIcon
                className={points === MINIMUM_POINTS ? styles['parameters__arrow--disabled'] : styles['parameters__arrow--active']}
                color={points === MINIMUM_POINTS ? 'disabled' : 'primary'}
                onClick={() => {
                  if (MINIMUM_POINTS < points) {
                    dispatch(incrementVitality());
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
            <div className={styles['parameters__unchangeable-value']}>{dodgeChance} %</div>
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
