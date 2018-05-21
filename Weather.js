import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherTypes = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    icon: 'weather-rainy',
    info: 'Raining T T',
    subInfo: 'Plz take an umbrella when you head out'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    icon: 'weather-sunny',
    info: 'Clear + Sunny *',
    subInfo: 'New day with sunny sky ^^'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    icon: 'weather-cloudy',
    info: 'Clouds',
    subInfo: 'Boring -.-'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    icon: 'weather-lightning',
    info: 'Thuderstorm',
    subInfo: 'Gotta stay home..'
  }
}

function Weather({city, weatherType, tempVal}) {
  return (
    <LinearGradient colors={weatherTypes[weatherType].colors} style={styles.container}>
      <View style={styles.upperInfo}>
        <Text style={styles.cityText}>{city}</Text>
        <MaterialCommunityIcons color='white' size={144} name={weatherTypes[weatherType].icon} />
        <Text style={styles.tempText}>{tempVal}</Text>
      </View>
      <View style={styles.lowerInfo}>
        <Text style={styles.infoText}>{weatherTypes[weatherType].info}</Text>
        <Text style={styles.subInfoText}>{weatherTypes[weatherType].subInfo}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  weatherType: PropTypes.string.isRequired,
  tempVal: PropTypes.number.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lowerInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityText: {
    fontSize: 45,
    color: 'white',
  },
  tempText: {
    fontSize: 32,
    color: 'white',
  },
  infoText: {
    fontSize: 32,
    color: 'white'
  },
  subInfoText: {
    fontSize: 24,
    color: 'white'
  }
})