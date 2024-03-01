import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = require("../../config.json");

const Home = ({ navigation }) => {

    return (
        <View style={styles.inicio}>
            <Text>PAGINA EM DESENVOLVIMENTO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inicio: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Home;
