/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class Header extends Component {
  
    render() {
        return (
                <View>
                     <LinearGradient colors={['#662583', '#CF788D']}  start={{x: 0.5, y: 0.1}} end={{x: 0.5, y: 1.0}}
			locations={[0.5,1]}>	
			<View style={{
                backgroundColor: this.props.backColor,
				alignItems:'center',
				height:80,
				justifyContent: 'center', }} >
		 		<Text style={{fontSize:22,color:'#FFF'}}>{this.props.title}</Text>
			</View>
			</LinearGradient>
                </View>
        );
    }
}
