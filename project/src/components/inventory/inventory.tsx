import {useState} from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import styles from './inventory.module.scss';


function Inventory(): JSX.Element {
  const [value, setValue] = useState('equipment');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section className={styles['inventory']}>
      <div className={styles['inventory__wrapper']}>
        <h2 className={styles['inventory__title']}>Инвентарь персонажа</h2>

        <Box>
          <TabContext value={value}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Вкладки инвентаря"

              textColor='primary'
              indicatorColor='primary'

              centered
            >
              <Tab label="Экипировка" value={'equipment'} />
              <Tab label="Зелья" value={'potion'} />
              <Tab label="Артефакты" value={'artifact'} disabled />
            </Tabs>

            <TabPanel value={'equipment'}>
              <ul className={styles['inventory__section']}>
                <li className={styles['inventory__slot']}>
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
                </li>
                <li className={styles['inventory__slot']}>
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
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
              </ul>
            </TabPanel>

            <TabPanel value={'potion'}>
              <ul className={styles['inventory__section']}>
                <li className={styles['inventory__slot']}>
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
                </li>
                <li className={styles['inventory__slot']}>
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
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
                <li className={styles['inventory__slot']}>
                </li>
              </ul>
            </TabPanel>

            <TabPanel value={'artifact'}>
              Артефакты
            </TabPanel>

          </TabContext>
        </Box>

      </div>
    </section>
  );
}

export default Inventory;
