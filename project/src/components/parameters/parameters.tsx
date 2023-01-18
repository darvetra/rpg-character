import {useAppSelector, useAppDispatch} from '../../hooks';
import {incrementLevel, decrementLevel} from '../../store/action';

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
  const {level, points, health, damage, defense, critDamage, critChance, dodge, doubleChance} = countLevel;

  const dispatch = useAppDispatch();


  return (
    <section className={styles['character__item']}>
      <section className={styles['parameters']}>
        <h2 className={styles['parameters__title']}>Характеристики персонажа</h2>

        <div className={styles['parameters__row']}>
          <div className={styles['parameters__description']}>Уровень персонажа:</div>

          <ArrowBackIosOutlinedIcon
            className={styles['parameters__arrow']}
            color="primary"
            onClick={() => dispatch(decrementLevel())}
          />

          <div className={styles['parameters__cell']}>{level}</div>

          <ArrowForwardIosOutlinedIcon
            className={styles['parameters__arrow']}
            color="primary"
            onClick={() => dispatch(incrementLevel())}
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
