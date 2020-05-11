/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TextInput,
  View ,
  TouchableOpacity
} from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
 import Header from './Header';
export default class Brandscreen extends Component {
    static navigationOptions = {
        header: <Header title='i-Link Survey' backColor="#73328E"/>
    };
  render() {
    return (
        <View style={{flex:1}}> 
       <View style={styles.contentquestion}>
       <Text style={styles.queslabel}>Which brands do you feel most loyal to and happy with their services?</Text> 
       </View>  
      <View style={styles.container}>
      <View style={styles.pinchview}>
       <PinchZoomView> 
      <View style={styles.circle}><Text style={{color:'#661879',fontSize:16,fontWeight:'bold'}}>
      Apple</Text></View>
      </PinchZoomView>
       <PinchZoomView>
       <View style={styles.circle}><Text style={{color:'#661879',fontSize:16,fontWeight:'bold'}}>Dell</Text></View>
      </PinchZoomView>
      </View>
      <View style={styles.pinchview}>
       <PinchZoomView>
       <View style={styles.circle}><Text style={{color:'#661879',fontSize:16,fontWeight:'bold'}}>Microsoft</Text></View>
      </PinchZoomView>
	   <PinchZoomView>
	   <View style={styles.circle}><Text style={{color:'#661879',fontSize:16,fontWeight:'bold'}}>Samsung</Text></View>
      </PinchZoomView>
      </View>
      </View>
      <View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Gender')} style={styles.nextbut}>
          <Text style={styles.nexttext}>Next</Text>
      </TouchableOpacity>
  </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  pinchview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:400
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: '#FEA363',
    opacity:0.8,
    alignItems: 'center',
    justifyContent: 'center'
},
nextbut: {
    height: 80,
    backgroundColor: '#73328E',
    alignItems: 'center',
    justifyContent: 'center'
},
nexttext: {
    color: '#fff',
    fontSize: 25
},
queslabel: {
  color: '#fff',
  fontSize: 17,
  textAlign:'center',
  lineHeight:33
},
contentquestion: {
  height: 80,
  backgroundColor: '#73328E',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal:25,
  opacity:0.9
},
});