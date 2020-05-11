// JavaScript Document
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';
import Header from './Header';
export default class Thankyou extends Component {
  static navigationOptions = {
		header: <Header title='i-Link Survey' backColor="#73328E"/>
	};

  constructor(props) {
    super(props)
    this.state = {
      paginationstatus: true
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
          <View style={styles.slide1}>
            <LinearGradient colors={['#662583', '#CF788D']} style={styles.linearGradient}>
              <Text style={styles.text}>Thank You</Text>
            </LinearGradient>
          </View>
        <View>
        { this.state.paginationstatus ? <Footer /> : null }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nextbut: {
    height: 80,
    backgroundColor: '#73328E',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  nexttext: { 
    color: '#fff',
    fontSize:25
    },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  slide1: {
    flex: 1
  },
  
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30
  }
});