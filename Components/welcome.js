import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.introText}>Welcome To The</Text>
            <Text style={styles.titleText}>Quiz App</Text>
            <Image source={require('./quizImg.png')} style={{width: 300, height: 300}} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14151F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 50,
    color: "white",
    fontWeight: 'bold',
    padding: 15
  },
  introText: {
    fontSize: 18,
    paddingTop: 10,
    color: "#6A89FE"
  },
  button: {
    backgroundColor: "#413F8C",
    padding: 12,
    paddingHorizontal:25,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});