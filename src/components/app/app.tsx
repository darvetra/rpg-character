import {Route, Routes} from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';

import {createTheme, ThemeProvider} from '@mui/material';

import MainScreen from '../../pages/main-screen/main-screen';
import BattleScreen from '../../pages/battle-screen/battle-screen';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen />
            }
          />
          <Route
            path={AppRoute.Battle}
            element={
              <BattleScreen />
            }
          />
        </Routes>
      </HistoryRouter>
    </ThemeProvider>
  );
}

export default App;
