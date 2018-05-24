/* eslint-disable react/prop-types */
import React from 'react';
import {createStackNavigator, createSwitchNavigator}  from 'react-navigation';

import ChooseLanguageScreen from '../screens/ChooseLanguage';
import CreateAccountScreen from '../screens/CreateAccount';
import LoginScreen from '../screens/Login';

import HomeScreen from '../screens/Home';


const AuthStack = createStackNavigator(
	{
		Login: LoginScreen,
		ChooseLanguage: ChooseLanguageScreen,
		CreateAccount: CreateAccountScreen,
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none',
	}
);

const MainStack = createStackNavigator(
	{
		Home: HomeScreen
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	}
);

export const createRootNavigator = (signedIn = false) => {
	return createSwitchNavigator(
	{
		Main: MainStack,
		Auth: AuthStack
	},
	{
		initialRouteName: signedIn ? "Main" : "Auth"
	});
};