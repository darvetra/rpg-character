import Header from '../../components/header/header';
import Character from '../../components/character/character';

import styles from './main-screen.module.scss';


function MainScreen(): JSX.Element {

  return (
    <div>
      <Header />

      <main className={styles['main-page']}>
        <h1 className="visually-hidden">RPG-Character</h1>

        <Character />

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
      </main>

      <footer className="footer">
        <p>Official resourses</p>
        <p>Created by</p>
      </footer>
    </div>
  );
}

export default MainScreen;
