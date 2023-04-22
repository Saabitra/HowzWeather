import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "apparent_temperature_max, apparent_temperature_min, precipitation_sum, sunrise, sunset, temperature_2m_max, temperature_2m_min, time, uv_index_max"
    $hourly: String = "apparent_temperature, precipitation_probability, relativehumidity_2m, temperature_2m, time, uv_index, windspeed_10m"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      elevation
      generationtime_ms
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        is_day
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        windspeed_10m
      }
      hourly_units {
        apparent_temperature
        is_day
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        windspeed_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;
