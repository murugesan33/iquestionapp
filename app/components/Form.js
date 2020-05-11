// JavaScript Document
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyBoardAvoidingView,
  TouchableOpacity
} from 'react-native';

export default class Form extends Component {
  render() {
    return (
		<View>
		 <Text style={{fontSize:18,color:'#FFF',marginVertical:8}}>Username</Text>
		<TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'/>
		<Text style={{fontSize:18,color:'#FFF',marginVertical:8}} secureTextEntry={true}>Password</Text>
		<TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'/>
		<TouchableOpacity style={{alignItems:'center',
			 justifyContent:'center'}} ><Text style={styles.loginBut}>Login</Text></TouchableOpacity>
		 <TouchableOpacity style={{alignItems:'center',
		 justifyContent:'center'}}><Text style={styles.registerBut}>Sign Up</Text></TouchableOpacity>
		 <Text style={{fontSize:16,textAlign:'center',marginVertical:5,color:'#FFF'}}>Forgot Password?</Text>
		</View>
    );
  }
}

const styles = StyleSheet.create({
		inputBox: {
		width:310,
		alignSelf:'stretch',
		borderColor:'rgba(255,255,255,0.7)',
		color:'#fff',
		fontSize:18,
		paddingHorizontal:20,
		borderWidth:1,
		borderRadius:25,
		textAlign:'center',
		marginBottom:15
		 },
		 loginBut:
		 {
			 fontSize:18,
			 color:'#fff',
			 backgroundColor:'#662583',
			 width:250,
			 borderRadius:20,
			 paddingVertical:20,
			 textAlign:'center',
			 marginTop:15
		 },
		 registerBut:
		 {
			 fontSize:18,
			 color:'#fff',
			 borderWidth:1,
			 borderColor:'#fff',
			 width:250,
			 borderRadius:20,
			 paddingVertical:20,
			 textAlign:'center',
			 marginTop:10
		 }
});
