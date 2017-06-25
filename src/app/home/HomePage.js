import React, {Component} from "react";
import color from "../component/color";
import {Button, StyleSheet, Text, View} from "react-native";

export default class HomePage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.contain}>
                <Text>Hello, Navigation!</Text>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
    }
});
