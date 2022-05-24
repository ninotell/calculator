import { StatusBar } from 'expo-status-bar';
import { useState } from "react"
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './Styles';
import CalculatorButton from './components/CalculatorButton';


export default function App() {
  const [input, setInput] = useState("")
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  const symbols = ["/", "*", "+", "-", "="]

  const countString = (str, letter) => {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

      // check if the character is at that position
      if (str.charAt(i) == letter) {
        count += 1;
      }
    }
    return count;
  }

  const handleButtonPress = (button) => {

    if (button === "()") {
      if (input.length === 0
        || input[input.length - 1] === "("
        || symbols.includes(input[input.length - 1])) {
        setInput(prev => prev + "(")
        return
      } else {
        if (countString(input, "(") > countString(input, ")")) {
          setInput(prev => prev + ")")
          return
        } else {
          return
        }
      }
    }

    if (button === ".") {
      let currentNumbers = []
      let currentOperators = []
      currentOperators = symbols.filter(s => input.includes(s))
      if (currentOperators.length === 0 && input.includes(".")) {
        return
      }
      for (let i of currentOperators) {
        currentNumbers = input.split(i)
        console.log(currentNumbers)
        if ((currentNumbers[currentNumbers.length - 1]).includes(".")) {
          return
        }
      }
    }


    if (button === "=") {
      try {
        setInput((eval(input
          .replace("%",
            input[input.length - 1] === "%"
              ? "/100"
              : "/100*"
          )
        )).toString())
        return
      }
      catch (error) {
        Alert.alert("Error", "Invalid format", ["Ok"])
        setInput("")
        return
      }
    }
    setInput(prev => prev + button)
    return
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Text style={[
        styles.input,
        input.length <= 7
          ? { fontSize: 70 }
          : input.length <= 17
            ? { fontSize: 60 }
            : { fontSize: 40 }
      ]}>{input}</Text>
      <View style={styles.bodyContainer}>
        <View style={styles.numbersContainer}>
          <TouchableOpacity
            onPress={() => setInput("")}
          >
            <CalculatorButton content={"AC"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("()")}
          >
            <CalculatorButton content={"()"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (input.length === 0 || input.includes("%")) ? {} : handleButtonPress("%")}
          >
            <CalculatorButton content={"%"} />
          </TouchableOpacity>
          {numbers.map(n => (
            <TouchableOpacity
              key={n}
              onPress={() => handleButtonPress(n)}
            >
              <CalculatorButton content={n} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => {
              if (["+", "-", "/", "."].includes(input[input.length - 1])) {
                return
              }
              handleButtonPress(".")
            }}
          >
            <CalculatorButton content={"."} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setInput(prev => prev.slice(0, -1))}
          >
            <CalculatorButton content={"DELETE"} />
          </TouchableOpacity>
        </View>
        <View style={styles.symbolsContainers}>
          {symbols.map(s => (
            <TouchableOpacity
              key={s}
              onPress={() => {
                if (input === ""
                  || ["+", "-", "*", "/", ".", "("].includes(input[input.length - 1])
                  || input[input.length - 1] === s) {
                  return
                } else {
                  handleButtonPress(s)
                }
              }}
            >
              <CalculatorButton content={s} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </View>
  );
}
