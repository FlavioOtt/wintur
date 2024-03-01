import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from "../screens/home.tsx";
import Search from "../screens/search.tsx";
import Destiny from "../screens/destiny.tsx";
import Groups from "../screens/deploy.tsx";
import Profile from "../screens/profile.tsx";

const { Screen, View, Navigator } = createBottomTabNavigator();

const config = require("../../config.json");


const TabRoutes = () => {

    return (
        <Navigator initialRouteName="home">

            <Screen 
                name="search"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: config.colors.primary,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={24} color={ color } />
                    ),
                }}
                component={Search}
            />

            <Screen 
                name="destiny"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: config.colors.primary,
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="compass" size={24} color={ color } />
                    ),
                }}
                component={Destiny}
            />

           <Screen 
                name="home"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: config.colors.primary,
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={24} color={ color } />
                    ),
                }}
                component={Home}
            />

            <Screen 
                name="groups"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: config.colors.primary,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="addusergroup" size={24} color={ color } />
                    ),
                }}
                component={Groups}
            />

            <Screen 
                name="profile"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: config.colors.primary,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={24} color={ color } />
                    ),
                }}
                component={Profile}
            />
            
        </Navigator> 
    )
}

export default TabRoutes;