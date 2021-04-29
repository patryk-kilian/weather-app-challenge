import {
  Box,
  Heading,
  Flex,
  Spinner,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useWeather } from '../hooks/useWeather';
import DayCard from './DayCard';

function DaysList() {
  const { weather, isLoading, error, city } = useWeather();

  const maxTempArr = weather?.map((day) => day.temp.max) || [];
  const minTempArr = weather?.map((day) => day.temp.min) || [];
  const maxTemperature = Math.max(...maxTempArr);
  const minTemperature = Math.min(...minTempArr);
  const averageTemperature = (maxTemperature + minTemperature) / 2;

  return (
    <Box py='10' textAlign='center'>
      {isLoading ? (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='pink.500'
          size='xl'
        />
      ) : (
        <>
          {error ? (
            <Heading size='md' textAlign='center' as='h3'>
              There no such city, try again with valid city name.
            </Heading>
          ) : (
            weather && (
              <>
                <Heading size='md' textAlign='center' as='h3'>
                  Daily temperature for {city}
                </Heading>
                <Flex
                  justify='center'
                  direction={['column', 'column', 'row']}
                  pt='6'
                >
                  <Text px='2'>
                    Min temperature: {minTemperature.toFixed(1)}
                    <sup>o</sup>
                  </Text>
                  <Text px='2'>
                    Average temperature: {averageTemperature.toFixed(1)}
                    <sup>o</sup>
                  </Text>
                  <Text px='2'>
                    Max temperature: {maxTemperature.toFixed(1)}
                    <sup>o</sup>
                  </Text>
                </Flex>
                <SimpleGrid columns={['1', '2', '3', '5']} spacing='4' py='10'>
                  {weather?.map((day) => {
                    return <DayCard key={day.dt} day={day} />;
                  })}
                </SimpleGrid>
              </>
            )
          )}
        </>
      )}
    </Box>
  );
}

export default DaysList;
