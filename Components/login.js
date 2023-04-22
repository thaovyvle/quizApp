import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

const loginData = ([
    {username: "test", password: "Test1@"},
])

export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginMsg, setLoginMsg] = useState(false)

    const checkLogin = (username,password) => {
    const userInput = loginData.map(item => {
      if (item.username === username && item.password === password) {
        setLoginMsg(false)
        navigation.navigate("Home")
      } else {
        setLoginMsg(true)
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login Now</Text>
      <Text style={styles.introText}>Please login to continue our app</Text>
      <br></br>
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={text=>setUsername(text)}/>
      </View>
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} placeholder='Password' value={password} secureTextEntry onChangeText={text=>setPassword(text)}/>
      </View>
      <br></br>
      {loginMsg? (
        <Text style={styles.errorText}>Invalid Username or Password. Try Again</Text> ) : ( <Text></Text>)
      }
      <TouchableOpacity style={styles.button} onPress={() => checkLogin(username,password)}>
                <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.accountText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
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
    color: "#6A89FE", 
    marginBottom:20
  },
  button: {
    backgroundColor: "#413F8C",
    padding: 12,
    paddingHorizontal:25,
    borderRadius: 8,
    margin: 10,
    marginBottom: 75
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  loginContainer: {
    width: '50%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30
  },
  errorText: {
    color: "#fc0330",
    fontWeight: 'bold'
  },
  accountText: {
    fontSize: 18,
    paddingTop: 10,
    color: "white",
    marginTop: 20
  },
  button2: {
    backgroundColor: "#6A89FE",
    padding: 12,
    paddingHorizontal:20,
    borderRadius: 8,
    margin: 15
  },
});