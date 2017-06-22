import React, {Component} from "react";
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
