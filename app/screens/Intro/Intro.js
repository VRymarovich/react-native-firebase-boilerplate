import React from 'react';
import { View, Text } from 'react-native';

import Logo from '../../components/Logo';

import styles from './styles';

class Intro extends React.Component {
	render(){
		return (
			<View style={styles.container}>
				<Logo />
				<Text style={styles.text}>
					Chapter One
				</Text>
			</View>
		);
	}
}
export default Intro;
