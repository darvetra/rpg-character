import Header from '../../components/header/header';
// import Character from '../../components/character/character';
// import Inventory from '../../components/inventory/inventory';
import Footer from '../../components/footer/footer';

import styles from './battle-screen.module.scss';


function BattleScreen(): JSX.Element {

  return (
    <div>
      <Header />

      <main className={styles['main-page']}>
        <h1 className="visually-hidden">Battle Model</h1>
        {/*<Character />*/}
        {/*<Inventory />*/}
      </main>

      <Footer />
    </div>
  );
}

export default BattleScreen;
