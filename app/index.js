import React from 'react';
import {createRootNavigator} from './config/routes';
import Intro from './screens/Intro';

import {AsyncStorage} from 'react-native';


export default class Root extends React.Component {
	componentDidMount(){
		// Toggle the state every second
		setTimeout(() => {
			this.setState({ isShowingIntro: false });
		}, 3000);
		console.log('mounted');
		AsyncStorage.getItem('user', (err, result) => {
			console.log('user data', err, result);
			if (!err && result != null){
				this.setState({signedIn: true, checkedSignIn: true});
			}else {
				this.setState({signedIn: false, checkedSignIn: true});
			}
		});
	}
	constructor() {
		super();
		this.state = {
			isShowingIntro: true,
			signedIn: false,
			checkedSignIn: false
		};
	}


	render() {
		const {isShowingIntro, signedIn, checkedSignIn} = this.state;

		if(isShowingIntro){
			return <Intro/>;
			
		}else{
			console.log(checkedSignIn, signedIn);
			if (!checkedSignIn) {
				return <Intro/>;
			}

			const Layout = createRootNavigator(signedIn);
			return <Layout/>;
		}



	}
}
