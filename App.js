/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/pages/Login';
import Welcomescreen from './app/pages/Welcomescreen';
import Brandscreen from './app/pages/Brandscreen';
import Age from './app/pages/Agetemplate';
import Agetemplate from './app/pages/Agetemplate';
import Choicesingle from './app/pages/Choicesingle';
import GenderScreen from './app/pages/GenderScreen';
import LocationScreen from './app/pages/LocationScreen';
import Postcode from './app/pages/PostCode';
import Thankyou from './app/pages/Thankyou';
import Notemplate from './app/pages/Notemplate';
import ClientLogin from './app/pages/ClientLogin';
import Redirect from './app/pages/Redirect';

const Application = StackNavigator(
  { Home: { screen: Login }, Welcome: { screen: Welcomescreen }, Brand:{screen: Brandscreen},Age:{screen:Agetemplate},
  Gender:{screen:GenderScreen},Location:{screen:LocationScreen},Thank:{screen:Thankyou},Client:{screen:ClientLogin},
  Choicesingle:{screen:Choicesingle},Postcode:{screen:Postcode},Notemplate:{screen:Notemplate} },
  {
    initialRouteName: 'Client',
  }
);

export default class App extends Component {
  render() {

    return (
      <Application />
    );
  }
}
