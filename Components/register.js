import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

export default function RegisterScreen({navigation}) {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [email, setEmail] = useState('')

    // Validate First Name 
    const [checkFName, setCheckFName] = useState(false)

    const handleFName = (e) => {
        let regex = /^[^\d=?\\/@#%^&*()]+$/
        setFirstname(e)
        if (regex.test(e)) {
            setCheckFName(false)
        } else {
            setCheckFName(true)
        }
    }

    // Validate Last Name 
    const [checkLName, setCheckLName] = useState(false)

    const handleLName = (e) => {
        let regex = /^[^\d=?\\/@#%^&*()]+$/
        setLastname(e)
        if (regex.test(e)) {
            setCheckLName(false)
        } else {
            setCheckLName(true)
        }
    }

    // Validate Password 
    const [checkUpper, setCheckUpper] = useState(false)
    const [checkLower, setCheckLower] = useState(false)
    const [checkNum, setCheckNum] = useState(false)
    const [checkNonAlphaNum, setCheckNonAlphaNum] = useState(false)
    const handlePassword = (e) => {
        const containsUppercase = /^(?=.*[A-Z]).*$/
        const containsLowercase = /^(?=.*[a-z]).*$/
        const containsNumber = /^(?=.*[0-9]).*$/
        const containsNonAlphaNum = /^(?=.*[^a-zA-Z0-9]).*$/
        setPassword(e)
        setCheckUpper(true)
        setCheckLower(true)
        setCheckNum(true)
        setCheckNonAlphaNum(true)
        if (containsUppercase.test(e) && containsLowercase.test(e) && containsNumber.test(e) && containsNonAlphaNum.test(e)) {
            setCheckUpper(false)
            setCheckLower(false)
            setCheckNum(false)
            setCheckNonAlphaNum(false)
        } else if (!containsUppercase.test(e) && containsLowercase.test(e) && containsNumber.test(e) && containsNonAlphaNum.test(e)) {
            setCheckUpper(true)
            setCheckLower(false)
            setCheckNum(false)
            setCheckNonAlphaNum(false)
        } else if (containsUppercase.test(e) && !containsLowercase.test(e) && containsNumber.test(e) && containsNonAlphaNum.test(e)) {
            setCheckUpper(false)
            setCheckLower(true)
            setCheckNum(false)
            setCheckNonAlphaNum(false)
        } else if (containsUppercase.test(e) && containsLowercase.test(e) && !containsNumber.test(e) && containsNonAlphaNum.test(e)) {
            setCheckUpper(false)
            setCheckLower(false)
            setCheckNum(true)
            setCheckNonAlphaNum(false)
        } else if (containsUppercase.test(e) && containsLowercase.test(e) && containsNumber.test(e) && !containsNonAlphaNum.test(e)) {
            setCheckUpper(false)
            setCheckLower(false)
            setCheckNum(false)
            setCheckNonAlphaNum(true)
        } 
    }

    // Validate Confirm Password
    const [checkConfirmPass, setCheckConfirmPass] = useState(false)
    const handleConfirmPass = (e) => {
        setConfirmpassword(e)
        if (password === e) {
            setCheckConfirmPass(false)
            checkReg(false)
        } else {
            setCheckConfirmPass(true)
        }
    }

    // Validate Email
    const [checkEmail, setCheckEmail] = useState(false)

    const handleEmail = (e) => {
        let regex = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]/
        setEmail(e)
        if (regex.test(e)) {
            setCheckEmail(false)
        } else {
            setCheckEmail(true)
        }
    }

    const [reg, checkReg] = useState(true)
    const checkRegistration = () => {
        if (!reg && !checkFName && !checkLName && !checkUpper && !checkLower && !checkNum && !checkNonAlphaNum && !checkConfirmPass && !checkEmail) {
            navigation.navigate("Home")
        } 
    }


    return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Register Now</Text>
      <Text style={styles.introText}>Please Fill Out Entire Form to Continue</Text>
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} testID="firstname" placeholder='First Name' value={firstname} onChangeText={text=>handleFName(text)}/>
      </View>
      {checkFName? (
        <Text style={styles.errorText}>Error: Can only include letters & symbols, no numbers</Text> ) : ( <Text></Text>)
      }
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} testID="lastname" placeholder='Last Name' value={lastname} onChangeText={text=>handleLName(text)}/>
      </View>
      {checkLName? (
        <Text style={styles.errorText}>Error: Can only include letters & symbols, no numbers</Text> ) : ( <Text></Text>)
      }
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} testID="email" placeholder='Email' value={email} onChangeText={text=>handleEmail(text)}/>
      </View>
      {checkEmail? (
        <Text style={styles.errorText}>Error: Email must contain @ and '.'</Text> ) : ( <Text></Text>)
      }
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} testID="username" placeholder='Username' value={username} onChangeText={text=>setUsername(text)}/>
      </View>
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} testID="password" placeholder='Password' value={password} secureTextEntry onChangeText={text=>handlePassword(text)}/>
      </View>
      {checkUpper? (
        <Text style={styles.errorText}>Password must have at least one Uppercase Character</Text> ) : ( <Text></Text>)
      }
      {checkLower? (
        <Text style={styles.errorText}>Password must have at least one Lowercase Character</Text> ) : ( <Text></Text>)
      }
      {checkNum? (
        <Text style={styles.errorText}>Password must contain at least one Number</Text> ) : ( <Text></Text>)
      }
      {checkNonAlphaNum? (
        <Text style={styles.errorText}>Password must contain at least one Non-Alpha Numeric Character</Text> ) : ( <Text></Text>)
      }
      <View style={styles.loginContainer}>
          <TextInput style={styles.input} testID="confirmpassword" placeholder='Confirm Password' secureTextEntry value={confirmpassword} onChangeText={text=>handleConfirmPass(text)}/>
      </View>
      {checkConfirmPass? (
        <Text style={styles.errorText}>Does not match password entered</Text> ) : ( <Text></Text>)
      }
      <TouchableOpacity style={styles.button} onPress={() => checkRegistration()}>
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
      marginBottom: 15
    },
    button: {
        backgroundColor: "#6A89FE",
        padding: 12,
        paddingHorizontal:20,
        borderRadius: 8,
        margin: 30
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
      marginTop: 10,
    },
    buttonContainer: {
      marginTop: 20,
      marginBottom: 30
    },
    errorText: {
      color: "#fc0330",
      fontWeight: 'bold'
    }
});
