import { useState, useContext, createContext } from 'react';
import api from '../api';

const WeatherContext = createContext(null);

export function useWeather() {
  return useContext(WeatherContext);
}

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const getWeather = async (citySearched, unit) => {
    setLoading(true);
    setError(null);
    try {
      const {
        data: {
          city: {
            coord: { lat, lon },
            name,
          },
        },
      } = await api.get(
        `/forecast?q=${citySearched}&&appid=${process.env.REACT_APP_API_KEY}`
      );

      setCity(name);

      const { data } = await api.get(
        `/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${unit}&cnt=5&appid=${process.env.REACT_APP_API_KEY}`
      );

      const dailyWeather = data.daily
        .map((day, i) => {
          if (i >= 5) return null;
          return day;
        })
        .filter((day) => day !== null);

      setWeather(dailyWeather);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      setWeather(null);
      setCity('');
    }
  };

  const value = {
    weather,
    getWeather,
    isLoading,
    error,
    city,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}
