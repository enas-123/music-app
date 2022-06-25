import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import ShanDada from './screens/ShanDada';
import ShreyaDidi from './screens/ShreyaDidi';
import SonuDada from './screens/SonuDada';
import LataDidi from './screens/LataDidi';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  LataDidi:LataDidi,
  ShreyaDidi:ShreyaDidi,
  ShanDada:ShanDada,
  SonuDada:SonuDada,
});

const AppContainer = createAppContainer(AppNavigator);
