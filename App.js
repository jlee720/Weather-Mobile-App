import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Weather from './Weather.js'

const API_KEY = '8085fb9f5a8979acc2fea5b6e921d507'

export default class App extends React.Component {
  state = {
    infoLoaded: false,
    currentCity: null,
    currentTemp: null,
    currentWeather: null,
    error: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(info => {
      this._getWeather(info.coords.latitude, info.coords.longitude);
    },
    error => {
      this.setState({
        error: 'Could not get current position'
      });
    });
  }

  _getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      console.log(result.name);
      console.log(result.main.temp);
      console.log(result.weather[0].main);
      this.setState({
        currentCity: result.name,
        currentTemp: result.main.temp,
        currentWeather: result.weather[0].main,
        infoLoaded: true
      })
    })
  }

  render() {
    const { currentCity, currentTemp, currentWeather, infoLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        {infoLoaded ? <Weather city={currentCity} weatherType={currentWeather} tempVal={Math.ceil(currentTemp - 273.15)}/> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>
              Getting weather info
            </Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : 
            <ActivityIndicator size='large' color='#808080'/>}
          </View> 
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 15,
    color: 'red'
  }
});
