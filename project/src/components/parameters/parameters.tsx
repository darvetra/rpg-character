import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import styles from './parameters.module.scss';


function Parameters(): JSX.Element {

  return (
    <section className={styles['character__item']}>
      <section className={styles['parameters']}>
        <h2 className={styles['parameters__title']}>Базовые характеристики персонажа</h2>

        <div className={styles['parameters__parent']}>
          <div className={styles['parameters__description']}>Уровень персонажа:</div>
          <div className={styles['parameters__block']}>
            <ArrowBackIosOutlinedIcon color="primary" />
            <div className={styles['parameters__changeable-value']}>5</div>
            <ArrowForwardIosOutlinedIcon color="primary" />
          </div>
        </div>

        <ul>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Сила:</div>
            <div className={styles['parameters__block']}>
              <ArrowBackIosOutlinedIcon color="primary" />
              <div className={styles['parameters__changeable-value']}>29</div>
              <ArrowForwardIosOutlinedIcon color="primary" />
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Стойкость:</div>
            <div className={styles['parameters__block']}>
              <ArrowBackIosOutlinedIcon color="primary" />
              <div className={styles['parameters__changeable-value']}>30</div>
              <ArrowForwardIosOutlinedIcon color="primary" />
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Ловкость:</div>
            <div className={styles['parameters__block']}>
              <ArrowBackIosOutlinedIcon color="primary" />
              <div className={styles['parameters__changeable-value']}>10</div>
              <ArrowForwardIosOutlinedIcon color="primary" />
            </div>
          </li>

          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Урон персонажа:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>116</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Критический урон:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>8,7%</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Максимальное количество здоровья:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>600</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Стойкость к магии:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>3%</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Шанс на крит:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>1,50%</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Шанс уклонения:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>1,50%</div>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles['parameters']}>
        <h2 className={styles['parameters__title']}>Итоговые характеристики персонажа</h2>

        <ul>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Сила:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>29</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Стойкость:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>30</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Ловкость:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>10</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Урон персонажа:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>116</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Критический урон:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>8,7%</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Максимальное количество здоровья:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>600</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Стойкость к магии:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>3%</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Шанс на крит:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>1,50%</div>
            </div>
          </li>
          <li className={styles['parameters__parent']}>
            <div className={styles['parameters__description']}>Шанс уклонения:</div>
            <div className={styles['parameters__block']}>
              <div className={styles['parameters__unchangeable-value']}>1,50%</div>
            </div>
          </li>
        </ul>
      </section>

    </section>
  );
}

export default Parameters;
