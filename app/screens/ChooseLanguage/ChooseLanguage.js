import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './styles';
import Link from '../../components/Link';
import {AsyncStorage} from 'react-native';

class ChooseLanguage extends React.Component {
	gotoCreateAccount(){
		this.props.navigation.navigate('CreateAccount');
	}
	gotoHome(){
		this.props.navigation.navigate('Main');
	}
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>
					Chapter One
				</Text>
				<Text style={styles.titleText}>
					Select language to learn
				</Text>
				<ScrollView>
					<FlatList
			          data={data}
			          renderItem={({ item }) => (
			            <TouchableOpacity
			              onPress={() => {
			              	AsyncStorage.setItem('lang', item.lang);
			              	this.gotoCreateAccount();
			              }}>
							<View style={{margin:10}}>
								<Image resizeMode='cover'
									source={item.image}
									style={{width: 380, height: 200, borderRadius: 10}}/>
							</View>
						</TouchableOpacity>
						)}
					/>
				</ScrollView>
				<Link text="I have an account" onPress={() => {
					this.gotoHome();
				}}/>
			</View>
		);
	}
}
const data = [
	{key: 1, lang: 'eng', name: 'English', image: require('../../assets/images/english.jpg')},
	{key: 2, lang: 'deu', name: 'German', image: require('../../assets/images/german.jpg')},
	{key: 3, lang: 'ita', name: 'Italian', image: require('../../assets/images/italian.jpg')},
];
export default ChooseLanguage;
