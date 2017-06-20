import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
