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
export default class Footer extends Component {
    render() {
        return (
            <LinearGradient colors={['#662583', '#CF788D']}>
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        width: 100,
        height: 15,
        alignItems: 'center',
    }
});