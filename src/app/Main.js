import React, {Component} from "react";
import {Image} from 'react-native';
import HomeScreen from "./tab/HomeScreen";
import MyCenterScreen from "./tab/MyCenterScreen";
import TabBarItem from './component/tabbar/TabBarItem';
import {DrawerNavigator, TabNavigator} from "react-navigation";

export default class Main extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <DrawerScreenNavigator/>
        )
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/homepage.png')}
                        selectedImage={require('../img/tabbar/homepage_selected.png')}
                    />
                )
            })
        },
        MyCenter: {
            screen: MyCenterScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/mine.png')}
                        selectedImage={require('../img/tabbar/mine_selected.png')}
                    />
                )
            })
        },
    }
);

const DrawerScreenNavigator = DrawerNavigator(
    {
        DrawerHomePage: {screen: Tab},
    }
);