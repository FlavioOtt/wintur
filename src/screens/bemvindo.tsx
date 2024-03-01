import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const config = require("../../config.json");
const bg_welcome = require("../assets/backgrounds/bg_welcome.jpg")

const Bemvindo = ({ navigation }) => {

    const interval = setInterval(
        () => {

            navigation.navigate("Apresentacao");

            clearInterval(interval);

        }, 4000, 1
    );
     
    return (
        <Animated.View 
            style={styles.background}
            exiting={FadeOut}
            entering={FadeIn}
        >

            <Image style={styles.img} source={bg_welcome} />

            <View style={styles.bg_text}>
                <Text style={styles.welcome_textbe}>Seja</Text>
                <Text style={styles.welcome_text}>BEM-VINDO</Text>
            </View>
            
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    background: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    img: {
        position: "absolute",
        left: 0,
        top: 0
    },
    bg_text: {

    },
    welcome_textbe: {
        color: "#ffffff",
        marginLeft: 30,
        fontSize: 28
    },
    welcome_text: {
        color: "#ffffff",
        marginLeft: 30,
        fontSize: 38,
        fontWeight: "bold"
    }
})

export default Bemvindo;