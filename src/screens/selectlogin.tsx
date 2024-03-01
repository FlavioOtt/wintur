import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideInRight } from "react-native-reanimated";

const config = require("../../config.json");
const bg_selectlogin = require("../assets/backgrounds/bg_selectlogin.jpg");
const logo = require("../assets/logo.png");

const Selectlogin = ({ navigation }) => {
     
    return (

        <Animated.View 
            style={styles.background}
            exiting={FadeOut}
            entering={SlideInRight}
        >

            <Image style={styles.img} source={bg_selectlogin} />

            <View style={styles.backgroundView}>

                <Text style={styles.text}>JUNTE-SE A NÓS</Text>

                <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.btnText}>Cadastrar-se</Text>
                </TouchableOpacity>

                <Text style={styles.text}>JÁ POSSUI UMA CONTA ?</Text>

                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.btnText}>Conectar-se</Text>
                </TouchableOpacity>


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
    backgroundView: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "45%",
        width: "100%"
    },
    img: {
        position: "absolute",
        left: 0,
        top: 0
    },
    text: {
        color: "#ffffff",
        fontSize: 26
    },
    btnCadastro: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#330077",

        width: 220,
        height: 60,

        borderRadius: 20
    },
    btnLogin: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#5C00D8",

        width: 220,
        height: 60,

        borderRadius: 20
    },
    btnText: {
        fontSize: 24,
        color: "#ffffff",
    }
})

export default Selectlogin;
