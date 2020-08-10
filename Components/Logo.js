import React, { Component } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

export default class Logo extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image style ={{width : 100, height : 100, alignItems: 'center'}}
                source ={require('../Images/icon.png')}/> 
            <Text style = {styles.logoText}> LOGIN </Text>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
        container: {
                flexGrow: 1,
                justifyContent:'flex-end',
                alignItems:'center'
        },
        logoText:{
            marginVertical: 15,
            fontSize: 18,
            color: 'black',
            textAlign: 'center',
            fontWeight:"bold",
        }
});