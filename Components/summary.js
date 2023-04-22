import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

export default function SummaryScreen({navigation, route}) {
    let questions = route.params.questions
    let a1 = route.params.a1
    let a2 = route.params.a2
    let a3 = route.params.a3
    let type = route.params.type
    let quizNum = route.params.quizNum
    let qNum = 0
    let points = 0

    const renderAnswers = ( {item} ) => {
        qNum++
        let correctAns = item.correct
        let correctAns2 
        let userAnswer 
        let userAnswer1, userAnswer2
   
        // For Multiple Choice & True or False Quizzes
        if (type === 0) {
            if (qNum === 1) {
                userAnswer = a1
                if (correctAns === userAnswer) {
                    points++
                }
            } else if (qNum === 2) {
                userAnswer = a2
                if (correctAns === userAnswer) {
                    points++
                }
            } else if (qNum === 3) {
                userAnswer = a3
                if (correctAns === userAnswer) {
                    points++
                }
            }  
            return (
            <>
            <Text style={styles.introText}>#{qNum} {item.prompt}</Text>
            {item.choices.map((q, index) => {
                let answerNum = index
                return (
                    <Text style={{fontSize: 18, paddingTop: 5,color: "white", textDecorationLine: index != item.correct? "line-through" : "none", textDecorationStyle: 'solid', 
                        textDecorationColor: 'red'}}>{++answerNum}. {q}</Text>
                )
            })}
            <View style={styles.ansText}>
                <Text style={styles.ansText}>Correct Answer: {++correctAns}</Text>
            </View>
            <View style={styles.ansText}>
                <Text style={styles.ansText}>You Answered: {++userAnswer}</Text>
            </View>
            <View style={styles.ansText}>
                <Text style={{fontSize: 20, paddingTop: 10, fontWeight: "bold", 
                color: correctAns === userAnswer || correctAns2 === userAnswer? "#359c52" : "#fc0330"}}>
                {correctAns === userAnswer || correctAns2 === userAnswer? "Correct! - 1/1 Points" : "Incorrect - 0/1 Points"}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.scoreText}>{qNum === 3? `Quiz Score: ${points}/3` : ''}</Text>
            </View>
            </>
            )
        // For Multi-Answer Quizzes
        } else if (type === 1) {
            
            if (qNum === 1) {
                correctAns = item.correct[0]
                correctAns2 = item.correct[1]
                userAnswer1 = parseInt(a1[0])
                userAnswer2 = parseInt(a1[1])
                if ((correctAns === userAnswer1 || correctAns === userAnswer2) && (correctAns2 === userAnswer1 || correctAns2 === userAnswer2)) {
                    points++
                }
            } else if (qNum === 2) {
                correctAns = item.correct[0]
                correctAns2 = item.correct[1]
                userAnswer1 = parseInt(a2[0])
                userAnswer2 = parseInt(a2[1])
                if ((correctAns === userAnswer1 || correctAns === userAnswer2) && (correctAns2 === userAnswer1 || correctAns2 === userAnswer2)) {
                    points++
                }
            } else if (qNum === 3) {
                correctAns = item.correct[0]
                correctAns2 = item.correct[1]
                userAnswer1 = parseInt(a3[0])
                userAnswer2 = parseInt(a3[1])
                if ((correctAns === userAnswer1 || correctAns === userAnswer2) && (correctAns2 === userAnswer1 || correctAns2 === userAnswer2)) {
                    points++
                }
            } 
            return (
            <>
            <Text style={styles.introText}>#{qNum} {item.prompt}</Text>
            {item.choices.map((q, index) => {
                let answerNum = index
                    return (
                        <Text style={{fontSize: 18, paddingTop: 5,color: "white", textDecorationLine: (index != item.correct[0] && index != item.correct[1])? "line-through" : "none", textDecorationStyle: 'solid', 
                            textDecorationColor: 'red'}}>{++answerNum}. {q}</Text>
                    )
            })}
            <View style={styles.ansText}>
                <Text style={styles.ansText}>Correct Answer: {++correctAns} & {++correctAns2}</Text>
            </View>
            <View style={styles.ansText}>
                <Text style={styles.ansText}>You Answered: {++userAnswer1} & {++userAnswer2}</Text>
            </View>
            <View style={styles.ansText}>
                <Text style={{fontSize: 20, paddingTop: 10, fontWeight: "bold", 
                color: (correctAns === userAnswer1 || correctAns === userAnswer2) && (correctAns2 === userAnswer1 || correctAns2 === userAnswer2)? "#359c52" : "#fc0330"}}>
                {(correctAns === userAnswer1 || correctAns === userAnswer2) && (correctAns2 === userAnswer1 || correctAns2 === userAnswer2)? "Correct! - 1/1 Points" : "Incorrect - 0/1 Points"}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.scoreText}>{qNum === 3? `Quiz Score: ${points}/3` : ''}</Text>
            </View>
            </>
            ) 
        // For Math & Fill in the Blank Quizzes
        } else if (type === 2 || type === 3) {
            if (qNum === 1) {
                userAnswer = a1
                if (correctAns.toUpperCase() === userAnswer.toUpperCase()) {
                    points++
                }
            } else if (qNum === 2) {
                userAnswer = a2
                if (correctAns.toUpperCase() === userAnswer.toUpperCase()) {
                    points++
                }
            } else if (qNum === 3) {
                userAnswer = a3
                if (correctAns.toUpperCase() === userAnswer.toUpperCase()) {
                    points++
                }
            } 
            return (
                <>
                <Text style={styles.introText}>#{qNum}   {item.prompt}</Text>
                <View style={styles.ansText}>
                    <Text style={styles.ansText}>Correct Answer: {correctAns}</Text>
                </View>
                <View style={styles.ansText}>
                    <Text style={styles.ansText}>You Answered: {userAnswer}</Text>
                </View>
                <View style={styles.ansText}>
                    <Text style={{fontSize: 20, paddingTop: 10, fontWeight: "bold", 
                        color: correctAns.toUpperCase() === userAnswer.toUpperCase()? "#359c52" : "#fc0330"}}>
                        {correctAns.toUpperCase() === userAnswer.toUpperCase()? "Correct! - 1/1 Points" : "Incorrect - 0/1 Points"}</Text>
                </View>
                 <View style={styles.container}>
                    <Text style={styles.scoreText}>{qNum === 3? `Quiz Score: ${points}/3` : ''}</Text>
                </View>
                </>
            )
        }
    }
    return (
        <View style={styles.appContainer}>
            <Text style={styles.titleText}>Summary</Text>
            <Text style={styles.quizTitle}>Quiz {quizNum}</Text>
            <FlatList data={questions} renderItem={renderAnswers}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>RETURN HOME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#14151F',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    marginTop: 20
  },
  introText: {
    fontSize: 20,
    paddingTop: 10,
    color: "#6A89FE",
    marginBottom: 7
  },
  quizTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#413F8C",
    margin: 20,
    marginTop: 10
  },
  qText: {
    fontSize: 18,
    paddingTop: 5,
    color: "white"
  },
  ansText: {
    fontSize: 16,
    color: "white",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 3
  },
  correctText: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
    color: "white",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  scoreText: {
    fontSize: 40,
    color: "#6A89FE",
    fontWeight: 'bold',
    padding: 30
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    margin: 25
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6A89FE"
  }
});