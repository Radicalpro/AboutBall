import React, {Component} from "react";
import HomeScreen from "./HomeScreen";
import MyCenterScreen from "./MyCenterScreen";
import {DrawerNavigator, TabNavigator} from "react-navigation";

export default class Main extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <DrawerScreenNavigator/>
        )
    }
}

const MainScreenNavigator = TabNavigator(
    {
        Home: {screen: HomeScreen},
        MyCenter: {screen: MyCenterScreen},
    }
);

const DrawerScreenNavigator = DrawerNavigator(
    {
        Drawer: {screen: MainScreenNavigator},
    }
);