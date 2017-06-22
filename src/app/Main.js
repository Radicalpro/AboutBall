import React, {Component} from "react";
import HomeScreen from "./tab/HomeScreen";
import MyCenterScreen from "./tab/MyCenterScreen";
import TabBarItem from "./component/TabBarItem";
import color from "./component/color";
import {DrawerNavigator, TabBarBottom, TabNavigator} from "react-navigation";

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

//多个选项卡
const Tab = TabNavigator(
    {
        Home: {
            //对应的屏幕
            screen: HomeScreen,
            //用于屏幕的默认导航选项
            navigationOptions: ({navigation}) => ({
                //选项卡名称
                tabBarLabel: '首页',
                //选项卡图标 focused：是否选中 tintColor：选中颜色
                tabBarIcon: ({focused, tintColor}) => (
                    //自定义组件展示图标
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
            //对应的屏幕
            screen: MyCenterScreen,
            //用于屏幕的默认导航选项
            navigationOptions: ({navigation}) => ({
                //选项卡名称
                tabBarLabel: '我的',
                //选项卡图标 focused：是否选中 tintColor：选中颜色
                tabBarIcon: ({focused, tintColor}) => (
                    //自定义组件展示图标
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/mine.png')}
                        selectedImage={require('../img/tabbar/mine_selected.png')}
                    />
                )
            })
        },
    },
    //TabNavigatorConfig
    {
        tabBarComponent: TabBarBottom,//用作标签栏的组件（这是iOS上的默认设置），（这是Android上的默认设置）TabBarBottomTabBarTop
        tabBarPosition: 'bottom',//标签栏的位置可以是或'top''bottom'
        swipeEnabled: true,//是否允许在标签之间进行滑动
        animationEnabled: true,//是否在更改标签时动画
        lazy: true,//是否根据需要懒惰呈现标签，而不是提前制作
        tabBarOptions: {
            //ios
            activeTintColor: color.theme,//活动标签的标签和图标颜色
            activeBackgroundColor: color.background,//活动选项卡的背景颜色
            inactiveTintColor: color.theme1,//非活动标签的标签和图标颜色
            inactiveBackgroundColor: color.background1,//非活动标签的背景颜色
            showLabel: true,//是否显示标签的标签，默认为true
            //style: {backgroundColor: 'blue',},//标签栏的样式对象
            labelStyle: {fontSize: 12,},//标签标签的样式对象
            tabStyle: {width: 100,},//标签栏的样式对象
            //android
            scrollEnabled:true,//是否启用可滚动选项卡
        }
    }
);

//抽屉
const DrawerScreenNavigator = DrawerNavigator(
    {
        DrawerHomePage: {screen: Tab},
    }
);