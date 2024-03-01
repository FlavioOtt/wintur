import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

const bg_home = require("../assets/backgrounds/bg_home.jpg");

const config = require("../../config.json");

const Search = ({ navigation }) => {

    const [searchText, setSearchText] = React.useState("");

    return (
        <View style={styles.inicio}>
            
            <Image style={styles.img} source={bg_home} />

            <View style={{width: "100%", alignItems: "center"}}>
                <View style={styles.tamanho}>
                    <Text style={styles.textTitle}>Busca</Text>
                    <View style={styles.viewInput}>
                        <Feather style={styles.iconInput} name="search" size={24} color="#cccccc" />
                        <TextInput style={styles.input} onChangeText={setSearchText} value={searchText} placeholder="busca...." />
                    </View>
                </View>
                <View style={{width: "80%"}}>
                    <Text style={
                        {
                            color: "#ffffff",
                            margin: 5,
                            fontSize: 20
                        }
                    }>Sugestões</Text>
                    <View>
                        <Text style={styles.textSugestion}>Rio de Janeiro - RJ</Text>
                        <Text style={styles.textSugestion}>Gramado - RS</Text>
                        <Text style={styles.textSugestion}>Natal - RN</Text>
                        <Text style={styles.textSugestion}>Miami - FL</Text>
                        <Text style={styles.textSugestion}>Los Angeles - CA</Text>
                        <Text style={styles.textSugestion}>Barcelona - CA</Text>
                        <Text style={styles.textSugestion}>Dubai - EA</Text>
                        <Text style={styles.textSugestion}>Toronto - ON</Text>
                        <Text style={styles.textSugestion}>Nova Iorque - NYC</Text>
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
        color: "#ffffff",
        margin: 10,
        fontSize: 16
    },

    tamanho: {
        width: "80%",
        display: "flex",
    },
    input: {
        color: "#000000",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10
    },
    iconInput: {
        padding: 10
    },
    viewInput: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 10
    }
})

export default Search;
