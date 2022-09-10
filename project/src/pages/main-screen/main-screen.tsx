import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';

import Character from '../../components/character/character';

import styles from './main-screen.module.scss';

import {lang} from '../../const';

function MainScreen(): JSX.Element {

  return (
    <div className={styles.page}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a
                className="header__logo-link header__logo-link--active"
                href="/"
              >
                <img className="header__logo" src="img/logo.svg" alt="logo" width="81" height="41" />
              </a>
            </div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={lang}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Language" />}
            />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
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
