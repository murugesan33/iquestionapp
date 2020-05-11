import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
	Button,
	Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import Loader from './Loader';
export default class GenderScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
		 selected:-1,
		 showloader:0,
		 surveyObj:this.props.navigation.state.params.surveyobj
		}	
		 getSurveyInfo = this.state.surveyObj.SurveyInfo;
		 getQuestionInfo = this.state.surveyObj.Question;
		 getResponseInfo = this.state.surveyObj.Response;
   }
   	
	static navigationOptions = {
	  header: <Header title='i-Link Survey' backColor="transparent"/>
	}

	

	_genderValidate(){
		var gender = this.state.selected;
		if(gender != -1){
			this.setState({showloader:1});	
		survey_id = getSurveyInfo.surveyId;
		session = getSurveyInfo.session;
		question_num = getQuestionInfo.questions[0].name;
		if(survey_id !="" && session != ""){
			var data = {
				"survey_id": survey_id,
				"session" : session,
				"method":"save",
				[question_num]:gender
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
				}
			   }).catch((err) => { console.warn(err); });
			} 
		}else{
			Alert.alert("Please select Gender");
		}
		
	}
	
	componentWillMount(){
		let question_num = this.props.navigation.state.params.surveyobj.Question.questions[0].name;
		this.setState({selected:this.props.navigation.state.params.surveyobj.Response[question_num][question_num].value});
	}

	render(){
		//this._getDetails(getQuestionInfo.questions[0].items,"y");
		return(
			<View style={{ flex: 1, backgroundColor: '#FFFFFF',flexDirection:'column'}}>
			 { (this.state.showloader==1) ?
             <Loader/>
			: null }
			
					<TouchableHighlight
						activeOpacity={1}
						underlayColor= '#73328E'
						style ={[styles.buttonStyle,{backgroundColor:(this.state.selected==1) ? "#73328E" : "#fff"}]} 
						onPress={this._onSelectMale.bind(this)}
					>
					<View>
						<Text style={[styles.textStyle,{color:(this.state.selected==1) ? '#FFFFFF' : '#73328E'}]}>Male</Text>
					</View>
					</TouchableHighlight>
				
				<View style={styles.lineStyle}> 
				</View>
				<TouchableHighlight
						activeOpacity={1}
						underlayColor= '#73328E'
						style ={[styles.buttonStyle,{backgroundColor:(this.state.selected==2) ? "#73328E" : "#fff"}]} 
						onPress={this._onSelectFemale.bind(this)}
					>
					
						<Text style={[styles.textStyle,{color:(this.state.selected==2) ? '#FFFFFF' : '#73328E'}]}>Female</Text>
					
					</TouchableHighlight>
				<View style={{flex:1}}>
				<TouchableOpacity onPress={()=>this._genderValidate()} style={styles.nextbut}>
				{/* this.props.navigation.navigate('Location') */}
              <Text style={styles.nexttext}>Next</Text>
            </TouchableOpacity>
				</View>	
			</View>
			
		);
	}
	_onSelectMale(){
		this.setState({ selected: 1 });
	}
	_onSelectFemale(){
		this.setState({ selected: 2});
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
	lineStyle:{
        borderWidth: 0.8,
        borderColor:'#73328E',
	},
	buttonStyle:{
		flex:4, 
		alignItems:"center", 
		justifyContent:"center",
		backgroundColor:"#FFF"
	},
	textStyle:{
		fontSize:40,
		fontFamily:"Times New Roman",
	}
});	

