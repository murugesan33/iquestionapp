/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class Loader extends Component {
  
    render() {
        return (
            <View style={styles.activity}>
            <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    activity:{
      position:"absolute",
      backgroundColor:'#fff',
      top:0,
      bottom:0,
      left:0,
      right:0,
      opacity:0.6,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      flex: 1,
      justifyContent: 'center',
      zIndex:10
    },
});  