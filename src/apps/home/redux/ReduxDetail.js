import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {decrease, increase, reset} from '../../../redux/actions';

class ReduxDetail extends Component {
	_onPressReset() {
		this.props.dispatch(reset());
	}

	_onPressInc() {
		this.props.dispatch(increase());
	}

	_onPressDec() {
		this.props.dispatch(decrease());
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.counter}>{this.props.counter.count}</Text>
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

const mapStateToProps = state => ({
	counter: state.counter
})

export default connect(mapStateToProps)(ReduxDetail);
