import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideOutLeft } from "react-native-reanimated";

const config = require("../../config.json");
const bg_apresentation = require("../assets/backgrounds/bg_apresentation.jpg");
const logo = require("../assets/logo.png");

const Apresentacao = ({ navigation }) => {

    const interval = setInterval(
        () => {

            navigation.navigate("SelectLogin");

            clearInterval(interval);

        }, 4000, 1
    );
     
    return (
        <Animated.View 
            style={styles.background}
            exiting={SlideOutLeft.duration(400)}
            entering={FadeIn}
        >

            <Image style={styles.img} source={bg_apresentation} />

            <View style={styles.bg_img}>

                <Text style={styles.welcome_text}>WinTur</Text>

                <Image source={logo} />

            </View>

            
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    background: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    img: {
        position: "absolute",
        left: 0,
        top: 0
    },
    bg_img: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    welcome_text: {
        color: "#ffffff",
        fontSize: 38,
        fontWeight: "bold"
    }
})

export default Apresentacao;
