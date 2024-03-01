import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

const bg_home = require("../assets/backgrounds/bg_home.jpg");
const profile = require("../assets/profiles/profile-0.png");

const config = require("../../config.json");

const Search = ({ navigation }) => {

    return (
        <View style={styles.inicio}>
            
            <Image style={styles.img} source={bg_home} />

            <View style={{width: "100%", height: "80%", alignItems: "center", justifyContent: "space-evenly"}}>
                <View style={
                    {
                        width: "80%",
                        display: "flex",
                    }
                }>
                    <Text style={styles.textTitle}>Seu perfil</Text>
                </View>
                <View style={styles.tamanho}>
                    <Image style={styles.imgProfile} source={profile} />
                    <Text style={styles.textName}>Jorgina Silva</Text>
                </View>
                <View style={{width: "80%"}}>
                    <Text style={styles.textSugestion}>Canela - RS</Text>
                    <Text style={styles.textSugestion}>jorginasilva@gmail.com</Text>
                    <Text style={styles.textSugestion}>20 anos</Text>
                    <Text style={styles.textSugestion}>Viagens a trabalho</Text>

                </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    inicio: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    img: {
        position: "absolute",
        left: 0,
        top: 0
    },
    textTitle: {
        color: "#ffffff",
        fontWeight: "400",
        fontSize: 28,
        marginBottom: 10
    },
    textName: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 28,
        marginBottom: 10
    },
    textSugestion: {
        color: "#ffffff",
        margin: 10,
        fontSize: 18
    },

    tamanho: {
        width: "80%",
        display: "flex",
        alignItems: "center"
    },
    imgProfile: {
        width: 180,
        height: 180,
        margin: 15
    }
})

export default Search;
