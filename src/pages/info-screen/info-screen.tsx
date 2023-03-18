import Header from '../../components/header/header';
import Character from '../../components/character/character';
import Inventory from '../../components/inventory/inventory';
import Footer from '../../components/footer/footer';

import styles from './info-screen.module.scss';


function InfoScreen(): JSX.Element {

  return (
    <div>
      <Header />

      <main className={styles['main-page']}>
        <h1 className="visually-hidden">Rotgar.Guide</h1>
        <Character />
        <Inventory />
      </main>

      <Footer />
    </div>
  );
}

export default InfoScreen;
