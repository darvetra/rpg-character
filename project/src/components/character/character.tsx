import Equipment from '../equipment/equipment';
import styles from './character.module.scss';

function Character(): JSX.Element {

  return (
    <section className={styles.character}>
      <div className={styles.character__wrapper}>
        <div className={styles.character__block}>

          <section className={`${styles.character__item} ${styles.parameters}`}>
            <h2 className={`${styles.character__title} ${styles.parameters__title}`}>Параметры персонажа</h2>
            <ul>
              <li>Уровень: 5</li>
            </ul>
            <h3 className={''}>Базовые характеристики</h3>
            <ul>
              <li>Сила: 29 (116 урона/8.7% крит урона)</li>
              <li>Стойкость: 30 (600 здоровья/3.0% стойкости к магии)</li>
              <li>Ловкость: 10 (1.50% шанс на крит/1.50% шанс уклонения)</li>
            </ul>
            <ul>
              <li>Максимальное количество здоровья: 600</li>
              <li>Стойкость к магии: 3%</li>
              <li>Урон персонажа: 116</li>
              <li>Критический урон: 8,7%</li>
              <li>Шанс на крит: 1,50%</li>
              <li>Шанс уклонения: 1,50%</li>
            </ul>
            <h3 className={''}>Улучшенные характеристики</h3>
          </section>

          <Equipment />

        </div>
      </div>
    </section>

  );
}

export default Character;
