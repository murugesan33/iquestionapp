// JavaScript Document
import React, { Component } from 'react';
import {
     StyleSheet,
     Text,
     View,
     ListView,
     TouchableHighlight,
     TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomMultiPicker from "react-native-multiple-select-list";
import Header from './Header';
export default class Choicesingle extends Component {
    static navigationOptions = {
        header: <Header title='i-Link Survey' backColor="transparent"/>
    };
    render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={styles.questionbody} >
                <CustomMultiPicker
                    options={userList}
                    search={false} // should show search bar?
                    multiple={false} //
                    returnValue={"label"} // label or value
                    callback={(res)=>{ console.log(res) }} // callback, array of selected items
                    rowBackgroundColor={"#fff"}
                    rowHeight={80}
                    rowRadius={10}
                    iconColor={"#FDA76C"}
                    iconSize={50}
                    selectedIconName={"ios-checkmark"}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Location')} style={styles.nextbut}>
                        <Text style={styles.nexttext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>


        );
    }
}
const userList = {
    '0':'15-20 Years of age',
    '1':'21-30 Years of age',
    '2':  '31-40 Years of age',
    '3':   '41-50 Years of age',
    '4':   '51-60 Years of age',
    '5':'61+ Years of age'
  }

const styles = StyleSheet.create({
    
    questionbody: {
        flex: 1,
        width: '100%', height: '100%',
        backgroundColor: '#fff',
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
    }
});