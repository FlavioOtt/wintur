import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native"

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";

const Routes = () => {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}

export default Routes;