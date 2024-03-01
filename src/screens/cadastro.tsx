import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
const bg_cadastro = require("../assets/backgrounds/bg_cadastro.jpg");

const config = require("../../config.json");

const Cadastro = ({ navigation }) => {

    const [textEmail, setTextEmail] = useState("")
    const [textUser, setTextUser] = useState("")
    const [textPass, setTextPass] = useState("")

    return (
        <View style={styles.inicio}>
            
            <Image style={styles.img} source={bg_cadastro} />
            
            <View style={styles.backgroundView}>
                <Text style={styles.text}>Cadastre-se</Text>
                <TextInput 
                    onChangeText={setTextEmail}
                    value={textEmail}
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput 
                    onChangeText={setTextUser}
                    value={textUser}
                    placeholder="Usuário"
                    style={styles.input}
                />
                <TextInput 
                    onChangeText={setTextPass}
                    value={textPass}
                    placeholder="Senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.btnText}>Cadastrar-se</Text>
                </TouchableOpacity>

                <Text style={styles.textOr}>ou</Text>

                <View style={styles.btnGoogle}>
                    <Text style={styles.btnTextGoogle}>LOGIN GOOGLE</Text>
                </View>
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        position: "absolute",
        left: 0,
        top: 0
    },
    backgroundView: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "60%",
        width: "100%"
    },
    inicio: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#ffffff",
        fontSize: 38,
        fontWeight: "300"
    },
    input: {
        borderRadius: 20,
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: 10,
        paddingLeft: 15,
        fontSize: 24,
        width: "75%",
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
    btnGoogle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#ffffff",

        width: 220,
        height: 60,

        borderRadius: 20
    },
    btnTextGoogle: {
        fontSize: 24,
        color: "#000000",
    },
    btnText: {
        fontSize: 24,
        color: "#ffffff",
    },
    textOr: {
        color: "#ffffff"
    }
})

export default Cadastro;
