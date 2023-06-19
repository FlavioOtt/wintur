import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, View, Navigator } = createBottomTabNavigator();

const config = require("../../config.json");

import Home from "../screens/home.jsx";
import Login from "../screens/login.jsx";


const TabRoutes = () => {
    return (
        <Navigator>
            <Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" }
                }}
            />
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
            
    )
}

export default TabRoutes;