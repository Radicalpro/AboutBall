import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class MyCenterScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.contain}>
                <Text>MyCenterScreen!</Text>
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
