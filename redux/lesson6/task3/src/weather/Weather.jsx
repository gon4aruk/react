import React, { useEffect } from 'react';
import City from './City';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ weatherData, fetchWeatherData }) => {
  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(city => (
          <City name={city.name} temperature={city.temperature} key={city.id} />
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  fetchWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
