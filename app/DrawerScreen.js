import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import HomeScreen from "./HomeScreen";

export default class DrawerScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HomeScreen/>
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