import React, {Component} from "react";
import color from "../Color";
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";

const {width, height} = Dimensions.get("window");
export default class Login extends Component {

    render() {
        return (
            <View style={styles.contain}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color:'#fff',fontSize:17,paddingLeft:15}}>返回</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('./img/header.jpg')} style={styles.headerImage}/>
                <TextInput style={styles.textInput} placeholder="用户名"/>
                <TextInput style={styles.textInput} placeholder="密码"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:color.background,
    },
    header: {
        height: 70,
        width: width,
        backgroundColor: color.theme,
        flexDirection:'column',
        justifyContent:'center'
    },
    headerImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginTop:100
    },
    textInput:{
        height:40,
        width:width-100,
        borderWidth:1,
        alignSelf:'center',
        marginTop:20,
        borderColor:color.theme1,
        borderRadius:5,
        padding:5
    }
});