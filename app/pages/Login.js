// JavaScript Document
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';
import Header from './Header';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	KeyBoardAvoidingView,
	TouchableOpacity,Keyboard,
	AsyncStorage
} from 'react-native';
export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state={
			username:'', 
			password:''
		} 
	}
	validate(){
		username = this.state.username;
		password = this.state.password;
		this.props.navigation.navigate('Welcome');
		/*if(username=='') alert('UserName is required');
		else if(password=='') alert('Password is required');
		else if(username == 'ilink' && password == 'ilink'){ 
			this.props.navigation.navigate('Welcome');}
		else alert('Invalid Credentials'); */
		Keyboard.dismiss();
	}
	static navigationOptions = {
		header: <Header title='Welcome to i-Link' backColor="#73328E"/>
	};
	render() { 
		return (
			<View style={{ flex: 1 }}>
				<LinearGradient colors={['#662583', '#CF788D']} style={styles.linearGradient}>
					<View>
						<Text style={{ fontSize: 18, color: '#FFF', marginVertical: 8 }}>Username</Text>
						<TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
						 onChangeText={username=>this.setState({username})}   />
						<Text style={{ fontSize: 18, color: '#FFF', marginVertical: 8 }}>Password</Text>
						<TextInput style={styles.inputBox} onChangeText={password=>this.setState({password})} underlineColorAndroid='rgba(0,0,0,0)' 
						 secureTextEntry={true} />
						<TouchableOpacity onPress={() => this.validate()} style={{
							alignItems: 'center',
							justifyContent: 'center'
						}} ><Text style={styles.loginBut}>Login</Text></TouchableOpacity>
						<TouchableOpacity style={{
							alignItems: 'center',
							justifyContent: 'center'
						}}><Text style={styles.registerBut}>Sign Up</Text></TouchableOpacity>
						<Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 5, color: '#FFF' }}>Forgot Password?</Text>
					</View>
				</LinearGradient>
				<Footer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputBox: {
		width: 310,
		alignSelf: 'stretch',
		borderColor: 'rgba(255,255,255,0.7)',
		color: '#fff',
		fontSize: 18,
		paddingHorizontal: 20,
		borderWidth: 1,
		borderRadius: 25,
		textAlign: 'center',
		marginBottom: 15
	},
	loginBut:
		{
			fontSize: 18,
			color: '#fff',
			backgroundColor: '#662583',
			width: 250,
			borderRadius: 20,
			paddingVertical: 20,
			textAlign: 'center',
			marginTop: 15
		},
	registerBut:
		{
			fontSize: 18,
			color: '#fff',
			borderWidth: 1,
			borderColor: '#fff',
			width: 250,
			borderRadius: 20,
			paddingVertical: 20,
			textAlign: 'center',
			marginTop: 10
		}
});
