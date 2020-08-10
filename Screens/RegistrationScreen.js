import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';


import Form from '../Components/Form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';


export default class RegistrationScreen extends Component {
    goBack(){
        Actions.pop();
    }
   

    render(){
    return(
        <View style = {styles.container}>
           
           <Form type = "Sign Up"/> 
            <View style = {styles.signText}>
                
                <Text style = {styles.signupText}>Already Have an Account ?</Text>
                <TouchableOpacity onPress ={this.goBack}><Text style ={styles.signupbutton}> Sign in </Text>
                </TouchableOpacity>
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
        justifyContent: 'center',
        paddingTop: 40
      },
      
      text: {
          fontWeight : 'bold',
          fontSize : 32,
          color: 'black',
        },
    signText:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText:{
        fontSize: 16,
        color: 'purple'
    },
    signupbutton: {
        fontSize: 16,
        fontWeight: '500'
    }
})