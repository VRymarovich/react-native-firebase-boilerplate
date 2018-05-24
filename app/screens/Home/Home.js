import React from 'react';
import { View, Text } from 'react-native';

import Logo from '../../components/Logo';

import styles from './styles';

import Buttone from '../../components/Buttone';
import {AsyncStorage} from 'react-native';

class Home extends React.Component {
	logout(){
		AsyncStorage.clear();
		//AsyncStorage.removeItem('user');
		this.props.navigation.navigate('Login');
	}
	componentDidMount(){
		AsyncStorage.getAllKeys((err, keys) => {
		  AsyncStorage.multiGet(keys, (err, stores) => {
		    stores.map((result, i, store) => {
		      // get at each store's key/value so you can work with it
		      let key = store[i][0];
		      let value = store[i][1];
		      console.log(key, value);
		    });
		  });
		});
	}
	render(){
		return (
			<View style={styles.container}>
				<Logo />
				<Text style={styles.text}>
					Home
				</Text>
				<Buttone
					onPress={() => {
						this.logout();
					}}
					text="Logout"/>
			</View>
		);
	}
}
export default Home;
