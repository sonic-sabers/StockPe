import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp, ForgetPassword, OtpSignUp} from '../screens';
import Loginscreen from '../screens/Loginscreen';

const Stack = createStackNavigator();

export default AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: null,
    }}>
    <Stack.Screen name="Loginscreen" component={Loginscreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    <Stack.Screen name="OtpSignUp" component={OtpSignUp} />
  </Stack.Navigator>
);
