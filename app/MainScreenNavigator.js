import {TabNavigator,StackNavigator} from "react-navigation";
import React, {Component} from "react";
import {Text} from "react-native";

class RecentChatsScreen extends Component {
    render() {
        return <Text>List of recent chats</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}

const MainScreenNavigator = StackNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
});