import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import HomePage from "./HomePage";
import DetailScreen from "./DetailScreen";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navigator/>
        )
    }
}

const Navigator = StackNavigator(
    {
        Main: {screen: HomePage},
        Detail: {screen: DetailScreen},
    }
);
