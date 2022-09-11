import styles from './equipment.module.scss';

function Equipment(): JSX.Element {

  return (
    <section className={styles['character__item']}>
      <section className={styles['equipment']}>
        <h2 className={styles['visually-hidden']}>Экипировка персонажа</h2>

        <div className={styles['equipment__wrapper']}>
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
            <li className={styles['equipment__slot']}>
            </li>
            <li className={styles['equipment__slot']}>
            </li>
          </ul>
        </div>
      </section>

      <section className="inventory">
        <h2>Инвентарь</h2>

        <ul>
          <li>Зелья</li>
          <li>Экипировка</li>
          <li>Артефакты</li>
        </ul>
        <picture>
          <source
            type="image/webp"
            width="86"
            height="86"
            srcSet="/img/axe.webp"
          />
          <img
            alt="img"
            width="86"
            height="86"
            src="/img/axe.png"
          />
        </picture>

        <picture>
          <source
            type="image/webp"
            width="86"
            height="86"
            srcSet="/img/helm.webp"
          />
          <img
            alt="img"
            width="86"
            height="86"
            src="/img/helm.png"
          />
        </picture>

        <picture>
          <source
            type="image/webp"
            width="86"
            height="86"
            srcSet="/img/phial-1.webp"
          />
          <img
            alt="img"
            width="86"
            height="86"
            src="/img/phial-1.png"
          />
        </picture>

        <picture>
          <source
            type="image/webp"
            width="86"
            height="86"
            srcSet="/img/phial-2.webp"
          />
          <img
            alt="img"
            width="86"
            height="86"
            src="/img/phial-2.png"
          />
        </picture>
      </section>
    </section>
  );
}

export default Equipment;
