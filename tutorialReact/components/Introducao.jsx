import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';


export default function Introducao({navigation}) {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.titulo}>BIG FACE TUTORIALS</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.subtitulo}>O que é o React Native?</Text>

                <Text style={styles.paragrafo}>
                    React Native é um framework de desenvolvimento mobile criado pelo Facebook que permite
                    criar aplicativos nativos para iOS e Android usando JavaScript e React. A grande vantagem
                    é que você escreve o código uma vez e ele funciona em ambas as plataformas.
                </Text>

                <Text style={styles.subtitulo}>Por que usar React Native?</Text>
                <Text style={styles.paragrafo}>
                    • Desenvolvimento multiplataforma: Um único código para iOS e Android{'\n'}
                    • Performance nativa: Os componentes são compilados para código nativo{'\n'}
                    • Hot Reload: Veja as mudanças instantaneamente{'\n'}
                    • Comunidade ativa: Milhares de bibliotecas e suporte
                </Text>

            </ScrollView>

            <View>
                <TouchableOpacity style={styles.botaoVoltar} onPress={()=>{navigation.navigate('Selecao')}}>
                   <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#312c4eff',
        alignItems: 'center',
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
        borderColor: 'grey',
        width: '100%'
    },
    paragrafo: {
        fontSize: 16,
        color: '#ddd',
        lineHeight: 22,
        marginBottom: 15,
        textAlign: 'justify'
    },
    scrollView: {
        width: '90%'
    },
    subtitulo: {
        fontSize: 20,
        margin: 20,
        color: '#fff'
    },
    botaoVoltar: {
        color: '#fff',
        backgroundColor: "#16112bff",
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 3,
        width: 130,
        height: 55,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 15
    }
});