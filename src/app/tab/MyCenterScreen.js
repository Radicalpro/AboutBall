import React, {Component} from "react";
import color from "../component/color";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const {width, height} = Dimensions.get("window");

export default class MyCenterScreen extends Component {

    // static navigationOptions = {
    //     header:null,
    // }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.contain}>
                <View style={styles.header}>
                    <View style={styles.headerImgView}>
                        <Image source={require('../../img/center/header.jpg')} style={styles.headerImg}/>
                        <Text style={styles.headerName}>亚瑟王</Text>
                    </View>
                </View>
                <View style={styles.middle}>
                    <ScrollView>
                        <TouchableOpacity style={styles.itemSelect}>
                            <Text style={styles.itemText}>基本信息</Text>
                            <Image source={require('../../img/center/right.png')} style={styles.itemImage}/>
                        </TouchableOpacity>
                        <View style={{width:width,height:1,backgroundColor:color.theme1}}/>
                        <TouchableOpacity style={styles.itemSelect}>
                            <Text style={styles.itemText}>我的发布</Text>
                            <Image source={require('../../img/center/right.png')} style={styles.itemImage}/>
                        </TouchableOpacity>
                        <View style={{width:width,height:1,backgroundColor:color.theme1}}/>
                        <TouchableOpacity style={styles.itemSelect}>
                            <Text style={styles.itemText}>我的预约</Text>
                            <Image source={require('../../img/center/right.png')} style={styles.itemImage}/>
                        </TouchableOpacity>
                        <View style={{width:width,height:1,backgroundColor:color.theme1}}/>
                        <TouchableOpacity style={styles.itemSelect}>
                            <Text style={styles.itemText}>关于AboutBall</Text>
                            <Image source={require('../../img/center/right.png')} style={styles.itemImage}/>
                        </TouchableOpacity>
                        <View style={{width:width,height:1,backgroundColor:color.theme1}}/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    contain: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: color.background,
    },
    header: {
        width: width,
        height: 150,
        backgroundColor: color.theme,
    },
    headerImgView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImg: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    headerName: {
        marginTop: 15,
        color: color.background,
        fontSize: 16,
        fontWeight: 'bold',
    },
    middle: {
        flex: 1,
    },
    itemSelect: {
        width: width,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    itemText: {
        color: color.theme,
        fontSize: 14,
    },
    itemImage: {
        // alignSelf:'flex-end',
        //justifyContent:'flex-end'
        width: 12,
        height: 20,
        // paddingLeft:20
    }
});
