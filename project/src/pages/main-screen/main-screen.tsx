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
      </main>

      <footer className="footer">
        <p>Official resourses</p>
        <p>Created by</p>
      </footer>
    </div>
  );
}

export default MainScreen;
