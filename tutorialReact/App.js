import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './src/screens/TelaInicial.jsx';
import HomeScreen from './src/screens/HomeScreen';
import LessonScreen from './src/screens/LessonScreen';
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
          name='HomeScreen'
          component={HomeScreen}>
        </Stack.Screen>

        <Stack.Screen
          name='LessonScreen'
          component={LessonScreen}>
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