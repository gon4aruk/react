import { WEATHER_DATA_RECEIVED } from './weather.actions';

const initState = {
  weatherData: null,
};

export const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVED: {
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    }
    default:
      return state;
  }
};
