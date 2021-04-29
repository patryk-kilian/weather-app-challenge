import { Image, Flex, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

function DayCard({ day }) {
  const { temp, humidity, dt, weather } = day;

  const {
    day: dayTemp,
    max: maxTemp,
    min: minTemp,
    morn: morningTemp,
    night: nightTemp,
  } = temp;

  const { icon, main: mainWeather } = weather[0];

  return (
    <Flex
      direction='column'
      align='center'
      border='1px solid'
      borderColor='pink.100'
      shadow='md'
      py='4'
      px='2'
      borderRadius='md'
    >
      <Text color='gray.500'>
        {format(new Date(dt * 1000), 'EEEE, do MMM')}
      </Text>
      <Text color='gray.500'>{mainWeather}</Text>
      <Image
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={mainWeather}
      />
      <Text fontSize='2xl'>
        {dayTemp.toFixed(1)}
        <sup>o</sup>
      </Text>
      <Text fontSize='lg'>
        morning: {morningTemp}
        <sup>o</sup>
      </Text>
      <Text fontSize='lg'>
        night: {nightTemp}
        <sup>o</sup>
      </Text>
      <Text fontSize='lg'>
        min: {minTemp}
        <sup>o</sup>
      </Text>
      <Text fontSize='lg'>
        max: {maxTemp}
        <sup>o</sup>
      </Text>
      <Text fontSize='lg'>humidity: {humidity}%</Text>
    </Flex>
  );
}

export default DayCard;
