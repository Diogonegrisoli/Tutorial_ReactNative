import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './components/TelaInicial';
import Selecao from './components/Selecao';
import Introducao from './components/Introducao'
import ComponentesBasicos from './components/ComponentesBasicos';
import Estilizacao from './components/Estilizacao';
import Navegacao from './components/Navegacao';
import Hooks from './components/Hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name='TelaInicial'
          component={TelaInicial}>
        </Stack.Screen>

        <Stack.Screen
          name='Selecao'
          component={Selecao}>
        </Stack.Screen>

        <Stack.Screen
          name='Introducao'
          component={Introducao}>
        </Stack.Screen>

        <Stack.Screen
          name='ComponentesBasicos'
          component={ComponentesBasicos}>
        </Stack.Screen>

        <Stack.Screen
          name='Estilizacao'
          component={Estilizacao}>
        </Stack.Screen>

        <Stack.Screen
          name='Navegacao'
          component={Navegacao}>

        </Stack.Screen>

        <Stack.Screen
          name='Hooks'
          component={Hooks}>

        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282138ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});