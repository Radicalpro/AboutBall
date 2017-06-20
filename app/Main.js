import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import {TabNavigator, StackNavigator} from "react-navigation";

export default class Main extends Component {

    render() {
        return (
            <Navigator/>
        )
    }
}

const Navigator = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});