import styles from './equipment.module.scss';

function Equipment(): JSX.Element {

  return (
    <section className={styles['character__item']}>
      <section className={styles['equipment']}>
        <h2 className={styles['equipment__title']}>Экипировка персонажа</h2>

        <div className={styles['equipment__container']}>
          <ul className={styles['equipment__column']}>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
              <picture>
                <source
                  type="image/webp"
                  width="86"
                  height="86"
                  srcSet={require('../../img/inventory/sword.webp')}
                />
                <img
                  alt="img"
                  width="86"
                  height="86"
                  src={require('../../img/inventory/sword.png')}
                />
              </picture>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
          </ul>

          <ul className={styles['equipment__column']}>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
              <picture>
                <source
                  type="image/webp"
                  width="86"
                  height="86"
                  srcSet={require('../../img/inventory/shield.webp')}
                />
                <img
                  alt="img"
                  width="86"
                  height="86"
                  src={require('../../img/inventory/shield.png')}
                />
              </picture>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
          </ul>
        </div>
      </section>

    </section>
  );
}

export default Equipment;
