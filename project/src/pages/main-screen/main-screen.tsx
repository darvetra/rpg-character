import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';

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
        <h1 className="visually-hidden">Character</h1>


        <div className="params">
          <h2>Параметры персонажа</h2>

          <ul>
            <li>Уровень: 5</li>
          </ul>

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

        </div>
        <div className="character">
          <h2>Персонаж</h2>

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

          <picture>
            <source
              type="image/webp"
              width="517"
              height="823"
              srcSet="/img/character.webp"
            />
            <img
              alt="img"
              width="517"
              height="823"
              src="/img/character.png"
            />
          </picture>

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

        </div>

        <div className="inventory">
          <h2>Инвентарь</h2>

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

        </div>

      </main>

      <footer className="footer">
        <p>Official resourses</p>
        <p>Created by</p>
      </footer>
    </div>
  );
}

export default MainScreen;
