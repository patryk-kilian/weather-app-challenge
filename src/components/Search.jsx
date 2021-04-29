import { useState } from 'react';
import {
  InputGroup,
  Input,
  IconButton,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useWeather } from '../hooks/useWeather';

function Search() {
  const [unit, setUnit] = useState('standard');
  const [city, setCity] = useState('');
  const { getWeather } = useWeather();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city, unit);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={6}>
        <InputGroup>
          <Input
            placeholder='Enter city name'
            variant='flushed'
            onChange={handleCityChange}
            value={city}
          />
          <IconButton
            type='submit'
            ml='10px'
            aria-label='search'
            colorScheme='pink'
            icon={<SearchIcon />}
          />
        </InputGroup>
        <RadioGroup onChange={setUnit} value={unit}>
          <Stack direction='row'>
            <Radio value='standard'>Fahrenheit</Radio>
            <Radio value='metric'>Celsius</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </form>
  );
}

export default Search;
