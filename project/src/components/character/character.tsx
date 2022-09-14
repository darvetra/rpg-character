import Parameters from '../parameters/parameters';
import Equipment from '../equipment/equipment';
import styles from './character.module.scss';


function Character(): JSX.Element {

  return (
    <section className={styles['character']}>
      <div className={styles['character__container']}>
        <div className={styles['character__block']}>
          <Parameters />
          <Equipment />
        </div>
      </div>
    </section>

  );
}

export default Character;
