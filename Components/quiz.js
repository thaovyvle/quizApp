import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Text, ButtonGroup } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

export default function QuizScreen({navigation, route}) {
    let questions = route.params.questions
    let index = route.params.index
    let type = route.params.type
    let quizNum = route.params.quizNum
    let qNum = index

    const [selectedIndex, setSelectedIndex] = useState();
    const [selectedIndexes,setSelectedIndexes] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [text, setText] = useState('')

    const QuizType = ({ question }) => {
      const [textInput, setInput] = useState('');

      if (type === 0) {
        return (
          <>
          <ButtonGroup
            buttons={questions[index].choices}
            vertical 
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            buttonStyle={{ width: 200 }}
            buttonContainerStyle={{ backgroundColor: "white", height: 50 }}
            selectedButtonStyle={{ backgroundColor: "#6A89FE" }}
            containerStyle={{marginBottom: 30}}
          />
          <TouchableOpacity style={styles.button} onPress={() => {setUserAnswers([...userAnswers, selectedIndex]), setSelectedIndex(), nextScreen()}}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText2}>RETURN HOME</Text>
          </TouchableOpacity>
          </>
        )
      } else if (type === 1) {
        return (
          <>
          <ButtonGroup
            buttons={questions[index].choices}
            vertical 
            selectedIndexes={selectedIndexes}
            onPress={(value) => {
              setSelectedIndexes(value);
            }}
            selectMultiple
            buttonStyle={{ width: 200 }}
            buttonContainerStyle={{ backgroundColor: "white", height: 50 }}
            selectedButtonStyle={{ backgroundColor: "#6A89FE" }}
            containerStyle={{marginBottom: 30}}
          />
          <TouchableOpacity style={styles.button} onPress={() => {setUserAnswers([...userAnswers, selectedIndexes]), setSelectedIndexes(), nextScreen()}}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText2}>RETURN HOME</Text>
          </TouchableOpacity>
          </>
        )
      } else if (type === 2) {
        return (
          <>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>= </Text>
            <TextInput style={styles.input} placeholder='' value={textInput} onChangeText={(text)=> setInput(text)}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => {setUserAnswers([...userAnswers, textInput]), setSelectedIndexes(), nextScreen(textInput)}}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText2}>RETURN HOME</Text>
          </TouchableOpacity>
          </>
        )
      } else if (type === 3) {
        return (
          <>
          <View style={styles.inputContainer2}>
            <TextInput style={styles.input2} placeholder='Fill In the TV-Show Title' value={textInput} onChangeText={text=>setInput(text)}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => {setUserAnswers([...userAnswers, textInput]), setSelectedIndexes(), nextScreen(textInput)}}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText2}>RETURN HOME</Text>
          </TouchableOpacity>
          </>
        )
      }   
    }

    const ItemSeparatorView = () => {
        return (
            <View style={{ height: 20, width: '100%', backgroundColor: '#14151F' }}/>
        )
    }
    const renderButtons = ( {item} ) => {
        return (
            <Button color={item === selectedItem? "#353D5C" : "#6A89FE"} title={item} onPress={()=> {
                setSelected(item)
                setColor(true)
            }}></Button>
        )
    }

    const nextScreen = (textIn) => {
        if (index != 2) {
            navigation.navigate("Quiz", {questions: questions, index: ++index, type: type, quizNum: quizNum})
        } else if (index === 2) {
            userAnswers[2] = selectedIndex
            if(type === 1) {
              userAnswers[2] = selectedIndexes
            } if (type === 2 || type === 3) {
              userAnswers[2] = textIn
            }
            navigation.navigate("Summary", {questions: questions, a1: userAnswers[0], a2: userAnswers[1], a3: userAnswers[2], type: type, quizNum: quizNum})
        }
    }

    console.log({userAnswers})
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Quiz {quizNum}</Text>
            <Text style={styles.introText}>Question #{++qNum}</Text>
            <Text style={styles.qText}>{questions[index].prompt}</Text>
            <QuizType question={questions}></QuizType>
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
    fontSize: 60,
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
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20
  },
  button2: {
    backgroundColor: "#6A89FE",
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 50
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6A89FE"
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
  qText: {
    fontSize: 22,
    padding: 30,
    color: "white",
    fontWeight: "bold"
  },
  inputContainer: {
    width: '10%',
    flexDirection: "row",
  },
  input: {
    width: '50%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 5
  },
  inputText: {
    fontSize: 25,
    paddingTop: 12,
    color: "#6A89FE",
    fontWeight: "bold",
    marginRight: 15
  },
  inputContainer2: {
    width: '20%',
  },
  input2: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 5
  },
});
