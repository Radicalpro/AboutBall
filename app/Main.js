import React, {Component} from "react";
import DetailScreen from "./DetailScreen";
import HomeScreen from "./HomeScreen";
import MyCenterScreen from "./MyCenterScreen";
import {StackNavigator, TabNavigator} from "react-navigation";

export default class Main extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Navigator/>
        )
    }
}

const MainScreenNavigator = TabNavigator(
    {
        Home: {screen: HomeScreen},
        MyCenter: {screen: MyCenterScreen},
    }
);

const Navigator = StackNavigator(
    {
        Main: {screen: MainScreenNavigator},
        Detail: {screen: DetailScreen},
    }
);