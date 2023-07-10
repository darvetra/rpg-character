import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';

import {lang} from '../../const';

import styles from './header.module.scss';


function Header(): JSX.Element {

  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <a
          className={styles['header__logo']}
          href="/"
        >
          <picture>
            <source
              type="image/webp"
              width="86"
              height="86"
              srcSet={require('../../img/archive/logo.webp')}
            />
            <img
              alt="img"
              width="86"
              height="86"
              src={require('../../img/archive/logo.png')}
            />
          </picture>
          <p>ROTGAR.GUIDE</p>
        </a>

        <Autocomplete
          disabled
          disablePortal
          id="combo-box-demo"
          options={lang}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Выбор языка" />}
        />
      </div>
    </header>
  );
}

export default Header;
