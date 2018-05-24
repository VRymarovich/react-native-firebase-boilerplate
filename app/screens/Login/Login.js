import React from 'react';
import { View, Text, TextInput } from 'react-native';

import Logo from '../../components/Logo';
import Link from '../../components/Link';
import Buttone from '../../components/Buttone';

import styles from './styles';
import * as actions from '../../actions/';

import {AsyncStorage} from 'react-native';

var navigate = {};

class Login extends React.Component {
	componentDidMount(){
		navigate = this.props.navigation;
	}
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			errorMessage: null
		}
	}
	signup = () => {
		this.props.navigation.navigate('ChooseLanguage');
  	}
  	login = () => {
		console.log('login');

		const data = {
			email: this.state.email,
			password: this.state.password
		};
		//this.setState({errorMessage: ''}); //clear out error messages

        actions.login(data, this.onSuccess.bind(this), this.onError.bind(this));
  	}
  	onSuccess(user) {
		console.log('navigate', navigate);
		AsyncStorage.setItem('user', JSON.stringify(user));
		navigate.navigate('Main');
	}

	onError(error) {
		console.log('error', error);
		this.setState({errorMessage: error.message});
	}
	render(){
		//const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Logo />
				<Text style={styles.text}>
					Chapter One
				</Text>
				<View style={styles.block}>
					{this.state.errorMessage &&
						<Text style={{ color: 'red', width: 200 }}>
							{this.state.errorMessage}
						</Text>
					}
					<TextInput
						placeholder="Email"
						autoCapitalize="none"
						style={styles.textInput}
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
					<TextInput
						secureTextEntry
						placeholder="Password"
						autoCapitalize="none"
						style={styles.textInput}
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
					/>
				</View>
				<View style={{flexDirection: 'row', margin: 20 }}>
					<Buttone text="Login" 
						onPress={() => {
							this.login();
						}} />
					<Buttone
						onPress={() => {
							this.signup();
						}}
						text="Create Account"/>
				</View>
			</View>
		);
	}
}
export default Login;
/*

*/
