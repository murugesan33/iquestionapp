// JavaScript Document
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';
/* import Redirect from './Redirect'; */
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,Alert,
	KeyBoardAvoidingView,
	TouchableOpacity,Keyboard,
} from 'react-native';
export default class ClientLogin extends Component {
	constructor(props) {
		super(props)
		this.state={
			survey_id:'', 
			session:'',
			showloader:0
		} 
	}
	validate(){
		survey_id = this.state.survey_id;
		session = this.state.session;
		if(survey_id=='') Alert.alert('SurveyID is required');
		else if(session=='') Alert.alert('Session is required');
		if(survey_id!="" && session!=""){
			this.setState({showloader:1});
			var data = {
				"survey_id": survey_id.toString(),
				"session" : session.toString(),
				"method":"details"
			 }
			 fetch('https://development-ilinkintegrate.completemr.com/ilink/iquestion-5.0/api/index.php/'+survey_id, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
        })
        .then((response) => response.json()) 
        .then((responseData) => {
                  if(responseData.Errors){
					  //console.warn(" Errors: "+responseData.Errors);
					  this.setState({showloader:0});
					  Alert.alert(responseData.Errors);
                  }else{
		  		return this.props.navigation.navigate('Welcome',{surveyobj:responseData});
                   } 
          })
        .catch((err) => { Alert.alert("Invalid Credentials"); });

			 Keyboard.dismiss();
		}
	}
	static navigationOptions = {
		header: <Header title='Welcome to i-Link' backColor="#73328E"/>
	};
	render() { 
		return (
			
			<View style={{ flex: 1 }}>
				<LinearGradient colors={['#662583', '#CF788D']} style={styles.linearGradient}>
				{ (this.state.showloader==1) ?
							<Loader/> 
							: null }
					<View>
						<Text style={{ fontSize: 18, color: '#FFF', marginVertical: 8 }}>SurveyID</Text>
						<TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
						 onChangeText={survey_id=>this.setState({survey_id})}   />
						<Text style={{ fontSize: 18, color: '#FFF', marginVertical: 8 }}>Session</Text>
						<TextInput style={styles.inputBox} onChangeText={session=>this.setState({session})} underlineColorAndroid='rgba(0,0,0,0)' 
						 secureTextEntry={true} />
						<TouchableOpacity onPress={() => this.validate()} style={{
							alignItems: 'center',
							justifyContent: 'center'
						}} ><Text style={styles.loginBut}>Login</Text></TouchableOpacity>
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
