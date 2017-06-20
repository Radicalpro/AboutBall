import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ChatScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Welcome ChatScreen+' + `${navigation.state.params.user}`,
    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.contain}>
                <Text>Hello, {params.user}!</Text>
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
