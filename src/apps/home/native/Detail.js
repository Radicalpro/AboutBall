import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

let current;
export default class Detail extends Component {

	constructor(props) {
		super(props);
		current = this;
		this.state = {count: 5}
	}

	static navigationOptions = {
		title: '原生写法',
		headerRight: (
			<TouchableOpacity
				onPress={() => current.props.navigation.navigate('ReduxDetail')}>
				<Text>redux写法</Text>
			</TouchableOpacity>
		),
	}

	_onPressReset() {
		this.setState({count: 0})
	}

	_onPressInc() {
		this.setState({count: this.state.count + 1});
	}

	_onPressDec() {
		this.setState({count: this.state.count - 1});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.counter}>{this.state.count}</Text>
				<TouchableOpacity style={styles.reset} onPress={() => this._onPressReset()}>
					<Text>归零</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.start} onPress={() => this._onPressInc()}>
					<Text>加1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.stop} onPress={() => this._onPressDec()}>
					<Text>减1</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	counter: {
		fontSize: 50,
		marginBottom: 70
	},
	reset: {
		margin: 10,
		backgroundColor: 'yellow'
	},
	start: {
		margin: 10,
		backgroundColor: 'yellow'
	},
	stop: {
		margin: 10,
		backgroundColor: 'yellow'
	}
});
