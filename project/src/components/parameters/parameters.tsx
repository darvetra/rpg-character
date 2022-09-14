import {Button} from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

import styles from './parameters.module.scss';


function Parameters(): JSX.Element {

  return (
    <section className={styles['character__item']}>
      <section className={styles['parameters']}>
        <h2 className={styles['parameters__title']}>Характеристики персонажа</h2>

        <div className={styles['parameters__row']}>
          <div className={styles['parameters__description']}>Уровень персонажа:</div>
          <ArrowBackIosOutlinedIcon
            className={styles['parameters__arrow']}
            color="primary"
          />
          <div className={styles['parameters__cell']}>5</div>
          <ArrowForwardIosOutlinedIcon
            className={styles['parameters__arrow']}
            color="primary"
          />
        </div>

        <ul>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__headline']}>
              Параметры
            </div>
            <div className={styles['parameters__headline']}>
              База
            </div>
            <div className={styles['parameters__headline']}>
              Итог
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
            <div className={styles['parameters__unchangeable-value']}>116</div>
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
            <div className={styles['parameters__unchangeable-value']}>145</div>
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
            <div className={styles['parameters__unchangeable-value']}>32</div>
          </li>

          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Урон персонажа:</div>
            <div className={styles['parameters__unchangeable-value']}>116</div>
            <div className={styles['parameters__unchangeable-value']}>323</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Критический урон:</div>
            <div className={styles['parameters__unchangeable-value']}>8,7%</div>
            <div className={styles['parameters__unchangeable-value']}>20%</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Макс. кол-во здоровья:</div>
            <div className={styles['parameters__unchangeable-value']}>600</div>
            <div className={styles['parameters__unchangeable-value']}>1600</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Стойкость к магии:</div>
            <div className={styles['parameters__unchangeable-value']}>3%</div>
            <div className={styles['parameters__unchangeable-value']}>15%</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Шанс на крит:</div>
            <div className={styles['parameters__unchangeable-value']}>1,50%</div>
            <div className={styles['parameters__unchangeable-value']}>34%</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Шанс уклонения:</div>
            <div className={styles['parameters__unchangeable-value']}>1,50%</div>
            <div className={styles['parameters__unchangeable-value']}>37,70%</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__description']}>Защита:</div>
            <div className={styles['parameters__unchangeable-value']}>0</div>
            <div className={styles['parameters__unchangeable-value']}>3,3</div>
          </li>
          <li className={styles['parameters__row']}>
            <div className={styles['parameters__points']}>Свободные очки характеристик: <b>110</b></div>
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
