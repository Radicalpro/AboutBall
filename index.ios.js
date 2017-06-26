import React, {Component} from "react";
import {AppRegistry} from "react-native";
import MainRoute from "./src/apps/MainRoute";

export default class AboutBall extends Component {
    render() {
        return (
            <MainRoute/>
        );
    }
}

AppRegistry.registerComponent('AboutBall', () => AboutBall);
