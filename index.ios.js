/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";
import Main from "./app/Main";

export default class AboutBall extends Component {
    render() {
        return (
            <Main/>
        );
    }
}

AppRegistry.registerComponent('AboutBall', () => AboutBall);
