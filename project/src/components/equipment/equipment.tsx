import styles from './equipment.module.scss';

function Equipment(): JSX.Element {

  return (
    <section className={`${styles.character__item} ${styles.equipment}`}>
      <h2 className={styles['visually-hidden']}>Экипировка персонажа</h2>

      <div className={styles.equipment__wrapper}>
        <ul className={styles.equipment__column}>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
            <picture>
              <source
                type="image/webp"
                width="86"
                height="86"
                srcSet="/img/sword.webp"
              />
              <img
                alt="img"
                width="86"
                height="86"
                src="/img/sword.png"
              />
            </picture>
          </li>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
          </li>
        </ul>

        <ul className={styles.equipment__column}>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
            <picture>
              <source
                type="image/webp"
                width="86"
                height="86"
                srcSet="/img/shield.webp"
              />
              <img
                alt="img"
                width="86"
                height="86"
                src="/img/shield.png"
              />
            </picture>
          </li>
          <li className={styles.equipment__slot}>
          </li>
          <li className={styles.equipment__slot}>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Equipment;
