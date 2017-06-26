import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

export default class Detail extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let name = this.props.navigation.state.params.user;
        return (
            <View style={styles.contain}>
                <Text>Hello, {name}!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back"
                />
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
