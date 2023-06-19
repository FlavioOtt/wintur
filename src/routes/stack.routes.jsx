import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator, SafeAreaView } = createNativeStackNavigator();

const config = require("../../config.json");

import Home from "../screens/home.jsx";
import Login from "../screens/login.jsx";


const StackRoutes = () => {
    return (
        <Navigator>
            <Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}

export default StackRoutes;