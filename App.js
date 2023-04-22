import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
import WelcomeScreen from "./Components/welcome.js"
import LoginScreen from "./Components/login.js"
import RegisterScreen from "./Components/register.js"
import HomeScreen from "./Components/home.js"
import QuizScreen from "./Components/quiz.js"
import SummaryScreen from "./Components/summary.js"

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

