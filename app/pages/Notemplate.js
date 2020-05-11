// JavaScript Document
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity,Keyboard,Alert,
  ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';
export default class Notemplate extends Component {
  static navigationOptions = {
		header: <Header title='i-Link Survey' backColor="#73328E"/>
	};

  constructor(props) {
    super(props)
    this.state = {
      paginationstatus: true,
      showloader:0,
      surveyobj:this.props.navigation.state.params.surveyobj,
    }
  }
  validate(){
    survey_id = this.state.surveyobj.SurveyInfo.surveyId;
    session = this.state.surveyobj.SurveyInfo.session;
    nextQues = this.state.surveyobj.Question.next;
		if(survey_id=='') alert('SurveyID is required');
		else if(session=='') alert('Session is required');
		if(survey_id!="" && session!=""){
      this.setState({showloader:1});
      var data = {
        "survey_id":survey_id,
        "session": session,
        "method":"jump",
        "nextqn":nextQues
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
                    this.setState({showloader:0});
                      //console.warn(" Errors: "+responseData.Errors);
                      Alert.alert(responseData.Errors);
                  }else{
          var type = responseData.Question.questions[0].type;
          setTimeout(() =>{
            switch(type){
              case 'choicesingle':
                return this.props.navigation.navigate('Choicesingle',{surveyobj:responseData});
                break;
              case 'gender':
                return this.props.navigation.navigate('Gender',{surveyobj:responseData});
                break;
              case 'postcode':
                return this.props.navigation.navigate('Postcode',{surveyobj:responseData});
                break;
              default:
                return this.props.navigation.navigate('Notemplate',{surveyobj:responseData});
                break;
                      }
                    },3000);
                   } 
          })
        .catch((err) => { console.warn(err); });
			 
		}
		Keyboard.dismiss();
	}
  render() {
    return (
      <View style={{ flex: 1 }}>
          <View style={styles.slide1}>
            <LinearGradient colors={['#662583', '#CF788D']} style={styles.linearGradient}>
              <Text style={styles.text}>No Template Found</Text>
              { (this.state.showloader==1) ?
             <Loader/>
            : null }
            </LinearGradient>
          </View>
          <TouchableOpacity onPress={()=>this.validate()} style={styles.nextbut}>
              <Text style={styles.nexttext}>Next</Text>
            </TouchableOpacity>
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