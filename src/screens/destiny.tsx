import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

const bg_home = require("../assets/backgrounds/bg_home.jpg");

const config = require("../../config.json");

const Destiny = ({ navigation }) => {

    return (
        <View style={styles.inicio}>
            
            <Image style={styles.img} source={bg_home} />

            <View style={{width: "100%", alignItems: "center"}}>
                <View style={{width: "80%"}}>
                    <Text style={styles.textTitle}>Seleção de destinos</Text>
                    <View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Rio de Janeiro</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Gramado</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Natal</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Miami</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Los Angeles</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Barcelona</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Dubai</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Toronto</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                        <View style={styles.bgSugestions}>
                            <Text style={styles.textSugestion}>Nova Iorque</Text>
                            <AntDesign name="right" size={24} color="purple" />                    
                        </View>
                    </View>
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
    textSugestion: {
        fontSize: 16,
        maxWidth: "80%"
    },

    bgSugestions: {
        width: "100%",
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    }
})

export default Destiny;
