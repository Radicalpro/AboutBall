import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TabNavigator, StackNavigator} from "react-navigation";

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Welcome HomeScreen',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.contain}>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'ty'})}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}

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

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
