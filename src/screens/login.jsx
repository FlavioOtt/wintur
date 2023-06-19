import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from "../../api";

const config = require("../../config.json");

const Login = ({navigation}) => {

    const [ cargo, setCargo ] = useState("administrador");
    const [ senha, setSenha ] = useState("");

    const setLogin = async () => {

        const headers = {
            "Content-Type": "application/json",
            "headers": {
                "cargo": cargo,
                "senha": senha
            },
            "Authorization": "Q0lNT0w=",
        };

        try {
            const response = await api.get("http://192.168.3.74:3001/user/login", headers);
            const { data } = response;

            console.log(cargo);

            if (data.auth === true){

                console.log("Logou");

                AsyncStorage.setItem("user:login", "true");
                AsyncStorage.setItem("userInfos", JSON.stringify(data.user))

                navigation.navigate("Home");

            }

        } catch (error) {
            console.error("Não logou", error)
        }

    }

    return (
        <View style={styles.background}>

            <View style={styles.header}>
                <Image style={styles.logo} source={require("../assets/RHtrans.png")} />

                <Text style={styles.title}>{config.company.name}</Text>
            </View>

            <View style={styles.picker}>
                <Picker
                    selectedValue={cargo}
                    style={{color: "#fff"}}
                    onValueChange={(itemValue, _) => setCargo(itemValue)}
                >
                    <Picker.Item label="Administrador" value="administrador" />
                    <Picker.Item label="Colaborador" value="colab" />
                    <Picker.Item label="Sócio" value="socio" />
                </Picker>
            </View>

            <TextInput
                style={styles.input}
                placeholder="senha"
                secureTextEntry={true}
                onChangeText={text => setSenha(text)}
            />

            <TouchableOpacity onPress={ () => setLogin() } style={styles.btnLogin}>
                <Text style={styles.textBtn}>Entrar</Text>
            </TouchableOpacity>

        </View>        
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: config.colors.disable,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 20
    },

    input: {
        color: "#fff",
        width: "100%",
        height: 40,
        fontSize: 16,
        backgroundColor: config.colors.second,
        paddingLeft: 15,
        borderRadius: 20,
        margin: 5
    },

    picker: {
        backgroundColor: config.colors.second, 
        borderRadius: 20,
        width: "100%",
        justifyContent: "center",
        marginLeft: 5,
        padding: 0,
        height: 40
    },

    textBtn: {
        width: "80%",
        backgroundColor: config.colors.primary,
        textAlign: "center", 
        textAlignVertical: "center",
        color: "#fff", 
        height: 40,
        fontSize: 18,
        borderRadius: 20,
    },  

    btnLogin: {
        width: "100%",
        alignItems: "center",
        borderRadius: 20,
        margin: 5,
    },

    logo: {
        width: 75,
        height: 75
    },

    title: {
        paddingLeft: 10,
        fontFamily: "Roboto",
        textAlignVertical: "center",
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        flex: 1
    },

    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    }
})

export default Login;
