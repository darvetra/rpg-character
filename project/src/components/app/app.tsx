import {createTheme, ThemeProvider} from '@mui/material';

import MainScreen from '../../pages/main-screen/main-screen';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainScreen />
    </ThemeProvider>
  );
}

export default App;
