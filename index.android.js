import React, {Component} from "react";
import Main from "./src/app/Main";
import {AppRegistry} from "react-native";

export default class AboutBall extends Component {
    render() {
        return (
            <Main/>
        );
    }
}

AppRegistry.registerComponent('AboutBall', () => AboutBall);
