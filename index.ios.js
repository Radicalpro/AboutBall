/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";
import HomeScreen from "./app/HomeScreen";
import ChatScreen from "./app/ChatScreen";
import {StackNavigator} from "react-navigation";

export default class AboutBall extends Component {
    render() {
        return (
            <HomeScreen/>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('AboutBall', () => SimpleApp);
