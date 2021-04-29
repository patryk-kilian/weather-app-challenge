import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { WeatherProvider } from './hooks/useWeather';
import AppContainer from './components/AppContainer';
import Fonts from './components/Fonts';

const theme = extendTheme({
  fonts: {
    body: 'Roboto',
  },
});

function App() {
  return (
    <WeatherProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Fonts />
        <AppContainer />
      </ChakraProvider>
    </WeatherProvider>
  );
}

export default App;
