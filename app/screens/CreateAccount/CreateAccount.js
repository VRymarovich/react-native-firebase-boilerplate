import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import styles from './styles';
import Link from '../../components/Link';
import Buttone from '../../components/Buttone';
import * as actions from '../../actions/';
import {AsyncStorage} from 'react-native';

var navigate = {};

class CreateAccount extends React.Component {
	componentDidMount(){
		navigate = this.props.navigation;
	}
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			errorMessage: null,
			created: false
		}
	}
	handleSignUp(){
		console.log('create account');

		const data = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		};

		console.log('data', data);
		
		//this.setState({errorMessage: ''}); //clear out error messages

        actions.register(data, this.onSuccess.bind(this), this.onError.bind(this));
	}

	onSuccess(user) {
		console.log('account created', user);
		AsyncStorage.setItem('user', JSON.stringify(user));
		console.log('navigate', navigate);
		navigate.navigate('Main');
		//navigate to home
	    //if (exists) Actions.Main()
	    //else Actions.CompleteProfile({user})
	}

	onError(error) {
		console.log('error', error);
		this.setState({errorMessage: error.message});
	}
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>
					Chapter One
				</Text>
				<Text style={styles.titleText}>
					Create an account
				</Text>
				<Link text="Login with Facebook"/>
				<View style={styles.block}>
					{this.state.errorMessage &&
						<Text style={{ color: 'red', width: 200 }}>
							{this.state.errorMessage}
						</Text>
					}
					<TextInput
						placeholder="Name"
						style={styles.textInput}
						onChangeText={username => this.setState({ username })}
						value={this.state.username}
					/>
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
				<Buttone text="Sign Up" 
					onPress={() => {
						this.handleSignUp();
					}} />
			</View>
		);
	}
}

export default CreateAccount;
