import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import HomePage from "../home/HomePage";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HomePage navigation={this.props.navigation}/>
            // <Navigator/>
        )
    }
}

const Navigator = StackNavigator(
    {
        HomePage: {screen: HomePage},

    }
);
