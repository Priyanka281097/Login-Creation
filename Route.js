import React, { Component } from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import WelScreen from './Screens/WelScreen';

export default class Route extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" >
                <Scene key="login" component={LoginScreen}  />
                <Scene key="signup" component={RegistrationScreen} /> 
                <Scene key = "welcome" component = {WelScreen} />
                </Stack>
            </Router>
        );
    }
}