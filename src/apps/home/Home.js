import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";

export default class Home extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.contain}>
				<View style={styles.contain1}>
				</View>
				<View style={styles.contain2}>
				</View>
				<View style={styles.contain3}>
				</View>
				<Button
					onPress={() => this.props.navigation.navigate('Detail', {user: 'ty'})}
					title="TO Detail"
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	contain: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	contain1: {
		width: 50,
		height: 50,
		backgroundColor: 'red',
		alignSelf: 'flex-start'
	},
	contain2: {
		width: 50,
		height: 50,
		backgroundColor: 'green',
	},
	contain3: {
		width: 50,
		height: 50,
		backgroundColor: 'blue',
		alignSelf: 'flex-end'
	}
});
