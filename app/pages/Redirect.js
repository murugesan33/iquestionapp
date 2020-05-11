/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,Keyboard,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Redirect extends Component{

	constructor(props){
		super(props);
   }

   LoadTemplate=(data)=>{
    fetch('https://development-ilinkintegrate.completemr.com/ilink/iquestion-5.0/api/index.php/'+data.survey_id, {
           method: 'POST',
           headers: { 
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
                   },
           body: JSON.stringify(data)
           })
           .then((response) => response.json()) 
           .then((responseData) => {
                   var type = responseData.Question.questions[0].type;
                   switch(type){
                    case 'choicesingle':
                        return this.props.navigation.navigate('Choicesingle');
                    case 'gender':
                        return this.props.navigation.navigate('Gender');
                    case 'postcode':
                        return this.props.navigation.navigate('Postcode');
                    default:
                        return this.props.navigation.navigate('Notemplate');
                }
               })
               
           .catch((err) => { console.warn(err); }); 
}

render() { 
    return (
        <View> {this.LoadTemplate(this.props.datatext)}</View>
    );
}     

}
