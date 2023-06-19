import { StyleSheet, Text, View } from 'react-native';

const config = require("./config.json");

import Routes from "./src/routes"

const App = () => {
    return (
        <Routes />
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
