import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainRoute from './apps/MainRoute';
import store from './redux/store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainRoute/>
			</Provider>
		);
	}
}
