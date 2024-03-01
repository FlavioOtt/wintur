import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native"

import StackRoutes from "./stack.routes";

const Routes = () => {
    return (
        <NavigationContainer >
            <StackRoutes />
        </NavigationContainer>
    )
}



export default Routes;