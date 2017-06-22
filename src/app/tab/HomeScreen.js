import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import HomePage from "../home/HomePage";
import DetailScreen from "../home/DetailScreen";

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
        HomePage: {screen: HomePage},
        Detail: {screen: DetailScreen},
    }
);
