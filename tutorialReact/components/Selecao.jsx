import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Selecao({navigation}) {
   


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.titulo}>BIG FACE TUTORIALS</Text>
            </View>

            {/* Painel de módulos */}
            <View style={styles.painelModulos}>
                <Text style={styles.modulosTitulo}>MÓDULOS</Text>

                 <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Introducao")}>
                      <Text style={{ fontSize: 16, color: '#fff' }}>1. Introdução ao React Native</Text>
                  </TouchableOpacity>

                 <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("ComponentesBasicos")}>
                      <Text style={{ fontSize: 16, color: '#fff' }}>2. Componentes Básicos</Text>
                  </TouchableOpacity>

                 <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Estilizacao")}>
                      <Text style={{ fontSize: 16, color: '#fff' }}>3. Estilização com StyleSheet</Text>
                  </TouchableOpacity>

                 <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Navegacao")}>
                      <Text style={{ fontSize: 16, color: '#fff' }}>4. Navegação entre Telas</Text>
                  </TouchableOpacity>

                 <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Hooks")}>
                      <Text style={{ fontSize: 16, color: '#fff' }}>5. Hooks (useState, useEffect)</Text>
                  </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
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
        backgroundColor: '#16112bff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey',
        width: '100%',
    },
    painelModulos: {
        marginTop: 30,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        width: '95%',
        backgroundColor: '#16112bff',
        padding: 15,
        borderRadius: 8,
        zIndex: 1000,
    },
    modulosTitulo: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginBottom: 15,
    },
    botao: {
        marginTop: 10,
        backgroundColor: '#3c3349ff',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#fff",
        width: '70%'
    },
});










































// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, useState } from 'react-native'
// import { SafeAreaView } from 'react-native-web';
// import DropDownPicker from 'react-native-dropdown-picker';


// export default function Selecao() {


//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <View style={styles.container}>
//                 <Text style={styles.titulo}>BIG FACE TUTORIALS</Text>
//             </View>

//             {/* Painel de módulos */}
//             <View style={{ marginTop: 30, alignItems: 'center', borderWidth: 1, borderColor: '#fff', width: '95%', backgroundColor: "#16112bff" }}>
//                 <Text style={{ fontSize: 20, fontWeight: 'semibold', color: 'white' }}>MÓDULOS</Text>

//                 <DropDownPicker
//                     > 
                    
//                 </DropDownPicker>

//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: '#282138ff',
//         alignItems: 'center'
//     },
//     titulo: {
//         fontFamily: 'Arial',
//         marginTop: 10,
//         fontSize: 26,
//         fontWeight: 'semibold',
//         color: "#ffffff"
//     },
//     container: {
//         backgroundColor: "#16112bff",
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderBottomWidth: 1,
//         borderColor: 'grey',
//         width: '100%'
//     }
// })