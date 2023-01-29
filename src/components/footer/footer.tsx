import styles from './footer.module.scss';
// import Link from '@mui/material/Link';
import {Button} from '@mui/material';

function Footer(): JSX.Element {

  return (
    <footer className={styles['footer']}>

      <div className={styles['footer__container']}>
        <div className={styles['footer__info']}>
          <Button
            variant="outlined"
            size="large"
            href="https://google.com/"
            target="_blank"
            disabled
          >
            Official game resourses
          </Button>
        </div>
        <div className={styles['footer__info']}>
          Created by DarVetra
        </div>
      </div>

      <picture className={styles['footer__bg']} >
        <source
          type="image/webp"
          srcSet={require('../../img/footer.webp')}
        />
        <img
          alt="img"
          src={require('../../img/footer.png')}
        />
      </picture>

      <picture className={styles['footer__bg-mobile']} >
        <source
          type="image/webp"
          srcSet={require('../../img/footer-mobile.webp')}
        />
        <img
          alt="img"
          src={require('../../img/footer-mobile.png')}
        />
      </picture>

    </footer>
  );
}

export default Footer;
