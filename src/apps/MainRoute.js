import React, {Component} from "react";
import HomeTab from "./tab/home/HomeTab";
import MyCenterTab from "./tab/my/MyTab";
import TabBarItem from "./tab/component/TabBarItem";
import Login from "./login/login";
import Detail from "./home/Detail";
import ReduxDetail from "./home/ReduxDetail";
import color from "./Color";
import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";

export default class MainRoute extends Component {

	constructor() {
		super()
	}

	render() {
		return (
			<Navigator/>
		)
	}
}

//多个选项卡
const Tab = TabNavigator(
	{
		Home: {
			//对应的屏幕
			screen: HomeTab,
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
						normalImage={require('./tab/home/image/homepage.png')}
						selectedImage={require('./tab/home/image/homepage_selected.png')}
					/>
				)
			})
		},
		MyCenter: {
			//对应的屏幕
			screen: MyCenterTab,
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
						normalImage={require('./tab/home/image/mine.png')}
						selectedImage={require('./tab/home/image/mine_selected.png')}
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
			inactiveBackgroundColor: color.background,//非活动标签的背景颜色
			showLabel: true,//是否显示标签的标签，默认为true
			//style: {backgroundColor: 'blue',},//标签栏的样式对象
			labelStyle: {fontSize: 12,},//标签标签的样式对象
			tabStyle: {width: 100,},//标签栏的样式对象
			//android
			scrollEnabled: true,//是否启用可滚动选项卡
		}
	}
);

//抽屉
const DrawerPage = DrawerNavigator(
	{
		DrawerPage: {screen: Tab},
	}
);

const Navigator = StackNavigator(
	{
		HomePage: {
			screen: DrawerPage,
			//屏幕导航选项
			navigationOptions: {
				//设置隐藏标题。HeaderProps null
				header: null
			},
			cardStyle: {
				backgroundColor: color.background,
			}
		},
		Detail: {
			screen: Detail,
			navigationOptions: ({navigation})=>{}
		},
		ReduxDetail: {screen: ReduxDetail},
		Login: {
			screen: Login,
			navigationOptions: {
				header: null
			},
		},
	}
);