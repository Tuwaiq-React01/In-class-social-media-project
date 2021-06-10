import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import FormInput from './Form';
import Home from './Home';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			picture: '',
			token: '',
		};
	}
	componentDidMount = () => {
		if (localStorage.getItem('token')) {
			this.setState({ name: localStorage.getItem('name') });
			this.setState({ email: localStorage.getItem('email') });
			this.setState({ picture: localStorage.getItem('picture') });
			this.setState({ token: localStorage.getItem('token') });
		}
	};
	componentDidUpdate = () => {
		if (this.state.token) {
			localStorage.setItem('token', this.state.token);
			localStorage.setItem('name', this.state.name);
			localStorage.setItem('email', this.state.email);
			localStorage.setItem('picture', this.state.picture);
		}
	};
	responseFacebook = (response) => {
		if (response.status !== 'unknown') {
			console.log(response);
			this.setState({ name: response.name });
			this.setState({ email: response.email });
			this.setState({ picture: response.picture.data.url });
			this.setState({ token: response.accessToken });
		} else {
			console.log('unknown response');
		}
	};
	render() {
		return (
			<div>
				<center>
					{this.state.token ? (
						<Home />
					) : (
						<FacebookLogin
							appId='191782532726779'
							autoLoad={false}
							fields='name,email,picture'
							callback={this.responseFacebook}
						/>
					)}
				</center>
			</div>
		);
	}
}
