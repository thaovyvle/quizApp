import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home</Text>
            <Text style={styles.introText}>Select A Quiz</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.firstButton} onPress={() => navigation.navigate("Quiz", {questions: quiz1, index:0, type: 0, quizNum: 1})}>
                    <Text style={styles.buttonText}>Quiz 1</Text>
                    <Text style={styles.buttonText2}>Multiple Choice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quiz", {questions: quiz2, index:0, type: 1, quizNum: 2})}>
                    <Text style={styles.buttonText}>Quiz 2</Text>
                    <Text style={styles.buttonText2}> Multi - Answer</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.firstButton} onPress={() => navigation.navigate("Quiz", {questions: quiz3, index:0, type: 0, quizNum: 3})}>
                    <Text style={styles.buttonText}>Quiz 3</Text>
                    <Text style={styles.buttonText2}>  True or False  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quiz", {questions: quiz4, index:0, type: 2, quizNum: 4})}>
                    <Text style={styles.buttonText}>Quiz 4</Text>
                    <Text style={styles.buttonText2}>Math Problems</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.firstButton} onPress={() => navigation.navigate("Quiz", {questions: quiz5, index:0, type: 3, quizNum: 5})}>
                    <Text style={styles.buttonText}>Quiz 5</Text>
                    <Text style={styles.buttonText2}>Fill in the Blank</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
let quiz1 = [{
    "prompt": "Which of these U.S. states does NOT border Canada?",
    "type": "multiple-choice",
    "choices": [
      "Indiana",
      "Alaska",
      "Maine",
      "Minnesota",
    ],
    "correct": 0
  },
  {
    "prompt": "Which country does NOT require a U.S. passport to visit?",
    "type": "multiple-choice",
    "choices": [
      "Jamaica",
      "Bahamas",
      "Guam",
      "Mexico",
    ],
  "correct": 2
  },
  {
    "prompt": "What is the largest country in the world?",
    "type": "multiple-choice",
    "choices": [
      "China",
      "Russia",
      "Canada",
      "United States",
    ],
    "correct": 1
}]
let quiz2 = [{
    "prompt": "Which of these pop singer(s)'s hits include Roar and Problem?",
    "type": "multi-answer",
    "choices": [
      "Britney Spears",
      "Katy Perry",
      "Taylor Swift",
      "Arianna Grande",
    ],
    "correct": [1,3]
  },
  {
    "prompt": "Harry Styles and Justin Timberlake were members of which boy band(s)?",
    "type": "multi-answer",
    "choices": [
      "NSYNC",
      "Backstreet Boys",
      "5 Seconds of Summer",
      "One Direction",
    ],
  "correct": [0,3]
  },
  {
    "prompt": "Which singer(s) had a 2013 smash hit single named Blurred Lines?",
    "type": "multi-answer",
    "choices": [
      "John Legend",
      "Pharrel Williams",
      "Robin Thicke",
      "Justin Bieber",
    ],
    "correct": [1,2]
}]
let quiz3 = [{
    "prompt": "The chemical make up of food often changes when you cook it.",
    "type": "true-false",
    "choices": [
      "True",
      "False",
    ],
    "correct": 0
  },
  {
    "prompt": "Electrons are larger than molecules.",
    "type": "true-false",
    "choices": [
      "True",
      "False",
    ],
  "correct": 1
  },
  {
    "prompt": "The human skeleton is made up of 203 bones.",
    "type": "true-false",
    "choices": [
      "True",
      "False",
    ],
    "correct": 1
}]
let quiz4 = [{
    "prompt": "8 * 4 - 12",
    "type": "math",
    "choices": "",
    "correct": "20"
  },
  {
    "prompt": "2(x + 6) - 2",
    "type": "math",
    "choices": "",
    "correct": "-5"
  },
  {
    "prompt": "4(2x - 4) = 8(2x + 5)",
    "type": "math",
    "choices": "",
    "correct": "-7"
}]
let quiz5 = [{
    "prompt": "The Big Bang  _____",
    "type": "fill",
    "choices": "",
    "correct": "Theory"
  },
  {
    "prompt": "The  _______  Diaries",
    "type": "fill",
    "choices": "",
    "correct": "Vampire"
  },
  {
    "prompt": "Gilmore  ____",
    "type": "fill",
    "choices": "",
    "correct": "Girls"
}]

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
    fontSize: 20,
    paddingTop: 10,
    color: "#6A89FE",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#6A89FE",
    padding: 30,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
    marginLeft: 30,
    marginBottom: 30
  },
  firstButton: {
    backgroundColor: "#6A89FE",
    padding: 30,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
    marginLeft: 0,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  buttonText2: {
    fontSize: 14,
    color: "white",
    margin: 10
  },
  buttonContainer: {
    flexDirection: "row",
  }
});