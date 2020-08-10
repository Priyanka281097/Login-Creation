import React, { Component } from 'react';
import { StyleSheet, View, TextInput , TouchableOpacity, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Logo extends Component {

    welcome(){
        Actions.welcome()
    }

    render() {
        return (
            <View style={styles.container}>
                 <TextInput style={styles.inputBox}
                placeholder ="Email" 
                placeholderTextColor = "#ffffff"
                keyboardType = {"email-address"} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                />
                <TextInput style={styles.inputBox}
                placeholder ="Password" 
                placeholderTextColor = "#ffffff"
                keyboardType={"numeric"}
                maxLength = {6}
                secureTextEntry 
                underlineColorAndroid='rgba(0,0,0,0)' 
                />

                <TouchableOpacity style ={styles.button} onPress ={this.welcome} >
                    <Text style = {styles.buttonText}> {this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //style for View
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //style for Email and Password in Login page
    inputBox: {
        width: 300,
        height: 60,
        backgroundColor: '#a9a9a9',
        borderRadius:20,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical : 10,
    },
    //style for Login button
    button: {
        width: 300,
        backgroundColor: 'purple',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 13
    },
    //style for login text
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign: 'center'
    },
   
});