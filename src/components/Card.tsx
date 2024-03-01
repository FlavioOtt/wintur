import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import api from "../../api";

const config = require("../../config.json");

const Card = (props) => {

    let res;

    if (props.toShow === "all"){ 
        res = (
            <View style={styles.container}>
                <View style={styles.rowt}>
    
                    <Text style={styles.textT}>#1</Text>
                    <Text style={styles.name}>NOME</Text>
                    
                </View>
    
                <View style={styles.rowm}>
    
                    <Text style={styles.text}>Ínicio: 00/00/00</Text>
                    <Text style={styles.numberColabs}>Colaboradores: 1</Text>
    
                </View>
    
                <View>
    
                    <Text style={styles.text}>Rua Auto João Muratore, 35 </Text>
                    <Text style={styles.text}>Santa Rosa, Taquara - RS</Text>
    
                </View>
            </View>
        );
    }else{
        res = (
            <View style={{justifyContent: "center", alignItems: "center", height: "95%"}}>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 18, 
                        textAlign: "center",
                        
                    }}                
                >
                    Ocorreu um erro inesperado no código fonte, entre em contato com o desenvolvedor.
                </Text>
            </View>
        )
    }
    
    return res;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: config.colors.third,
        height: 110,
        justifyContent: "space-around",
        width: "95%",
        borderRadius: 15,
        margin: "2%",
        padding: 5,
        paddingLeft: 10
    },

    numberColabs: {
        color: "#fff",
        marginLeft: 30,
        fontSize: 16
    },

    rowt: {
        flexDirection: "row",
        alignItems: "center"
    },

    rowm: {
        flexDirection: "row",
        alignItems: "center"
    },

    text: {
        color: "#fff",
        fontSize: 16
    },

    textT: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },

    name: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 30
    },
})

export default Card;

/*(
        <View>
            <View>

                <Text>Cliente {data.cliente_nfos.nome}</Text>
                <Text>N° {data.id_pedidos}</Text>
                
            </View>

            <View>

                <Text>Ínicio: {data.data_inicio}</Text>
                <Text>Endereço: {data.cliente_infos.endereco}</Text>

            </View>
        </View>
    )*/