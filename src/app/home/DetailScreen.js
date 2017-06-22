import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DetailScreen extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions ={
        title: 'Welcome DetailScreen',
    };

    render() {
        let name = this.props.navigation.state.params.user;
        return (
            <View style={styles.contain}>
                <Text>Hello, {name}!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
