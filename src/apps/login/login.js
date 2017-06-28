import React, {Component} from "react";
import color from "../Color";
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const {width, height} = Dimensions.get("window");
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={styles.contain}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color: '#fff', fontSize: 17, paddingLeft: 15}}>返回</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('./img/header.jpg')} style={styles.headerImage}/>
                <TextInput style={styles.textInput} placeholder="用户名"
                           underlineColorAndroid='transparent'
                           onChangeText={(userName) => this.setState({userName})}
                           value={this.state.userName}/>
                <TextInput style={styles.textInput} placeholder="密码"
                           underlineColorAndroid='transparent'
                           secureTextEntry={true}
                           onChangeText={(password) => this.setState({password})}
                           value={this.state.password}/>
                <View style={styles.bottom}>
                    <TouchableOpacity>
                        <Text style={{color: '#fff', fontSize: 17}}>登录</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.quick}>
                    <TouchableOpacity>
                        <Text style={{color: color.theme, fontSize: 15}}>快速注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color: color.theme, fontSize: 15}}>忘记密码</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: color.background,
    },
    header: {
        height: 60,
        width: width,
        backgroundColor: color.theme,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    headerImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginTop: 100,
        marginBottom: 10
    },
    textInput: {
        height: 40,
        width: width - 100,
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: color.theme1,
        borderRadius: 5,
        padding: 5
    },
    bottom: {
        height: 40,
        width: width - 100,
        marginTop: 20,
        backgroundColor: color.theme,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quick: {
        marginTop:10,
        width: width - 100,
        flexDirection:'row',
        justifyContent:'space-between'
    }
});