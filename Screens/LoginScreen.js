import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Form from '../Components/Form';
import Logo from '../Components/Logo';

import { Actions} from 'react-native-router-flux';

export default class LoginScreen extends Component {
    signup(){
        Actions.signup()
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Login" />
                <View style={styles.signText}>
                    <Text style={styles.signupText}>Have U An Account? </Text>
                    <TouchableOpacity onPress = {this.signup}><Text style={styles.signupbutton}> Signup </Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //style for View
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'

    },

    text: {
        fontWeight: 'bold',
        fontSize: 32,
        color: 'black',
    },
    signText: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        fontSize: 16,
        color: 'purple'
    },
    signupbutton: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    }
})