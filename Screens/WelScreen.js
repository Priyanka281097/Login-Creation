import React, { Component } from 'react';
import { StyleSheet, View ,Text} from 'react-native';

export default class WelScreen extends Component{
    render(){
        return(

            <View style = {styles.contain}>
               <Text>WELCOME</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain: {
        flex : 1,
        backgroundColor : 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    
        },
    text:{
        fontSize : 20,
        fontWeight : 'bold',
        color: '#0000ff',
        
    }     
});