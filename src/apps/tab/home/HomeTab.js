import React, {Component} from "react";
import Home from "../../home/Home";

export default class HomeTab extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Home navigation={this.props.navigation}/>
        )
    }
}
