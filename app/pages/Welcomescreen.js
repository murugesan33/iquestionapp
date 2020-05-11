// JavaScript Document
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Keyboard,
  Text,
  View, TouchableOpacity,Alert,
  BackHandler,ToastAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';
export default class Welcomescreen extends Component {
  static navigationOptions = {
		header: <Header title='i-Link Survey' backColor="#73328E"/>
	};

  constructor(props) {
    super(props)
    this.state = {
      paginationstatus: true,
      surveyobj:this.props.navigation.state.params.surveyobj,
      showloader:0
    } 
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
    //ToastAndroid.show('', ToastAndroid.SHORT);
    return true;
}

  validate(){
		survey_id = this.state.surveyobj.SurveyInfo.surveyId;
    session = this.state.surveyobj.SurveyInfo.session;
    type = this.state.surveyobj.Question.questions[0].type;
		if(survey_id!="" && session!=""){
      this.setState({showloader:1}); 
       setTimeout(() =>{
            switch(type){
              case 'choicesingle':
                return this.props.navigation.navigate('Choicesingle',{surveyobj:this.state.surveyobj});
                break;
              case 'gender':
                return this.props.navigation.navigate('Gender',{surveyobj:this.state.surveyobj});
                break;
              case 'postcode':
                return this.props.navigation.navigate('Postcode',{surveyobj:this.state.surveyobj});
                break;
              default:
                return this.props.navigation.navigate('Notemplate',{surveyobj:this.state.surveyobj});
                break;
                      }
                    },3000);
			 
		}
		Keyboard.dismiss();
	}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={this.state.paginationstatus}
          loop={false}
          dot={<View style={{ zIndex: 0, width: 12, height: 12, borderRadius: 10, borderWidth: 1, borderColor: '#fff', marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10, }} />}
          activeDot={<View style={{ backgroundColor: '#FFF', zIndex: 0, width: 12, height: 12, borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10, }} />}
          onIndexChanged={(index) => {
            if (index == 2) {
              this.setState({
                paginationstatus: false,
              });
            } else {
              this.setState({
                paginationstatus: true,
              });
            }
          }}>

          <View style={styles.slide1}>
            <LinearGradient colors={['#662583', '#CF788D']} style={styles.linearGradient}>
              <Text style={styles.text}>Welcome to i-Link Research.Australias leading independent provider of online field services for market and social research.</Text>
            </LinearGradient>
          </View>
          <View style={styles.slide2}>
            <LinearGradient colors={['#662583', '#CF788D']} style={styles.linearGradient}>
              <Text style={styles.text}>Todays survey has an estimation time of fifteen minutes</Text>
            </LinearGradient>
          </View>
          <View style={styles.slide3}>
            <LinearGradient colors={['#662583', '#CF788D']} style={styles.linearGradient}>
              <Text style={styles.text}>For best results we ask that you please fill out all of the required fields in todays onboarding.</Text>
              <Text style={styles.text}>Thank you.</Text>
              { (this.state.showloader==1) ?
              <Loader/> 
              : null }
            </LinearGradient>
            <TouchableOpacity onPress={()=>this.validate()} style={styles.nextbut}>
              <Text style={styles.nexttext}>Next</Text>
            </TouchableOpacity>
          </View>   
        </Swiper>
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
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30
  }
});