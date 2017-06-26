import React, {Component} from "react";
import MainRoute from "./src/apps/MainRoute";
import {AppRegistry} from "react-native";

export default class AboutBall extends Component {
    render() {
        return (
            <MainRoute/>
        );
    }
}

AppRegistry.registerComponent('AboutBall', () => AboutBall);
