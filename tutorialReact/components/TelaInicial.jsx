import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function TelaInicial({navigation}) {




    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Título */}
            <View style={styles.container}>
                <Text style={styles.titulo}>BIG FACE TUTORIALS</Text>
            </View>

            {/* Selecionar a linguagem */}
            <View style={{ margin: 15 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Selecione sua linguagem</Text>

                {/* Botão do React para navegação */}
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Selecao")}>
                    <Image source={require('../React Native.png')} style={{ width: 80, height: 80, marginRight: 15 }}>
                    </Image>
                    <Text style={{ fontSize: 30, color: '#fff' }}>React Native</Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 30, fontSize: 20, color: '#cccbcbff' }}>"Ain, só tem essa?" - SIM</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#312c4eff',
        justifyContent: 'flex-start',
    },
    titulo: {
        marginTop: 10,
        fontSize: 26,
        fontWeight: '600',
        color: '#ffffff',
    },
    container: {
        backgroundColor: "#16112bff",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    botao: {
        marginTop: 10,
        backgroundColor: '#3c3349ff',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#fff"
    }
})