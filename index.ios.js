import React, {Component} from "react";
import {AppRegistry} from "react-native";
import Main from "./src/app/Main";

export default class AboutBall extends Component {
    render() {
        return (
            <Main/>
        );
    }
}

AppRegistry.registerComponent('AboutBall', () => AboutBall);
