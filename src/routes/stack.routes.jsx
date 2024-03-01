import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

const { Screen, Navigator, SafeAreaView } = createNativeStackNavigator();

const config = require("../../config.json");

import Home from "../screens/home.tsx";
import Apresentation from "../screens/apresentation.tsx";
import Bemvindo from '../screens/bemvindo.tsx';
import TabRoutes from './tab.routes';
import Selectlogin from '../screens/selectlogin.tsx';
import Cadastro from '../screens/cadastro.tsx';
import Deploy from '../screens/deploy.tsx';
import Login from '../screens/login.tsx';


const StackRoutes = () => {
    return (
        <Navigator style={styles.container}>
            <Screen
                name="BemVindo"
                component={Bemvindo}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <Screen 
                name="Home"
                component={TabRoutes}
                options={{
                    headerShown: true,
                    headerTitle: "Wintur",
                    headerBackVisible: false,
                    gestureEnabled: false,
                    headerTitleStyle: {
                        color: "white"
                    },
                    headerTintColor: "black",
                    headerStyle: {
                        backgroundColor: "#000000"
                    }
                }}
            />
            <Screen 
                name="Apresentacao"
                component={Apresentation}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <Screen 
                name="SelectLogin"
                component={Selectlogin}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <Screen 
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: true,
                    headerTitle: "Wintur",
                    headerTitleStyle: {
                        color: "#ffffff"
                    },
                    headerTintColor: "#ffffff",
                    headerTransparent: true
                }}
            />
            <Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: true,
                    headerTitle: "Wintur",
                    headerTitleStyle: {
                        color: "#ffffff"
                    },
                    headerTintColor: "#ffffff",
                    headerTransparent: true
                }}
            />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000"    
    }
})

export default StackRoutes;