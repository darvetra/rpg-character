import {useEffect, useState} from 'react';
import axios from 'axios';

import styles from './stats.module.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableFooter,
  TableRow,
  Paper,
  Link,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  ButtonGroup,
  Button
} from '@mui/material';
import {StatsFightType} from '../../types/stats';

// Date
export const WEEK_0 = '20-03-2023';
export const WEEK_1 = '27-03-2023'; // первый турнир - 27.03. - 02.04.
export const WEEK_2 = '03-04-2023';
export const WEEK_3 = '10-04-2023';
export const WEEK_4 = '17-04-2023';
export const WEEK_5 = '24-04-2023';
export const WEEK_6 = '01-05-2023';
export const WEEK_7 = '08-05-2023'; // первый турнир с призовыми торнами - 08.05. - 14.05.
export const WEEK_8 = '15-05-2023';
export const WEEK_9 = '22-05-2023';

//
// type StatsProps = {
//   data: StatsFightType[];
// };

// function Stats(props: StatsProps): JSX.Element {
function Stats(): JSX.Element {
  const [statsData, setStatsData] = useState<StatsFightType[]>([]);

  useEffect(() => {
    /* eslint-disable quotes */
    const postData = {
      "state": "report_by_fights",
      "invite_fights": 0,
      "normal_fights": 1,
      "rating_fights": 0,
      "from": WEEK_8,
      "to": WEEK_9
    };
    /* eslint-enable quotes */

    // eslint-disable-next-line no-console
    console.log(postData);

    axios.post('/reports', postData)
      .then((response) => {
        // eslint-disable-next-line no-console
        // console.log(response.data);
        setStatsData(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }, []);

  // const {data} = props;

  // const totalFights = statsData.reduce((sum, row) => sum + row.fights, 0);

  // eslint-disable-next-line no-console
  console.log(statsData);

  return (
    <section className={styles['inventory']}>
      <div className={styles['inventory__container']}>
        <h2 className={styles['inventory__title']}>Статистика</h2>

        <div className={styles['stats__wrapper']}>
          <input type={'text'} />
          <br />
          <br />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Fights</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="invite" control={<Radio />} label="Invite" />
              <FormControlLabel value="normal" control={<Radio />} label="Normal" />
              <FormControlLabel value="rating" control={<Radio />} label="Rating" />
            </RadioGroup>
          </FormControl>
          <br />
          <br />

          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>WEEK_0</Button>
            <Button>WEEK_1</Button>
            <Button>WEEK_2</Button>
            <Button>WEEK_3</Button>
            <Button>WEEK_4</Button>
            <Button>WEEK_5</Button>
            <Button>WEEK_6</Button>
            <Button>WEEK_7</Button>
            <Button>WEEK_8</Button>
          </ButtonGroup>
          <br />
          <br />

          <h3 className={styles['stats__title']}>Обычные бои</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Fights</TableCell>
                  <TableCell>Win</TableCell>
                  <TableCell>Loose</TableCell>
                  <TableCell>Winrate</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Hide ID</TableCell>
                  <TableCell>User Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {statsData.map((row, index) => (
                  <TableRow key={row.hide_id}>
                    <TableCell size="small">{index + 1}.</TableCell>
                    <TableCell size="small">🛡 {row.fights}</TableCell>
                    <TableCell size="small">🏆 {row.win}</TableCell>
                    <TableCell size="small">☠ {row.loos}</TableCell>
                    <TableCell size="small">WR {Math.floor(row.win / row.fights * 100)}</TableCell>
                    <TableCell size="small">{row.user_name}</TableCell>
                    <TableCell size="small">
                      <Link href={`https://api.rotgar.game/webapp/inventory.html?hide_id=${row.hide_id}`} target="_blank" rel="noopener">{row.full_name}</Link> [{row.user_level}]
                    </TableCell>
                    <TableCell size="small">{row.hide_id}</TableCell>
                    <TableCell size="small">🏅 {row.user_rating} MMR</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>#</TableCell>

                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>

      </div>
    </section>
  );
}

export default Stats;
