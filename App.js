import { StatusBar } from 'expo-status-bar';
import { useState } from "react"
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import CalculatorButton from './components/CalculatorButton';


export default function App() {
  const [input, setInput] = useState("")
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const symbols = ["/", "*", "+", "-", "="]


  const handleButtonPress = (button) => {

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
      setInput((eval(input)).toString())
      return
    }
    setInput(prev => prev + button)
    return
  }

  return (
    <View style={styles.container}>

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
            style={styles.dotButton}
          >
            <CalculatorButton content={"."} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setInput(prev => prev.slice(0, -1))}
            style={styles.deleteButton}
          >
            <CalculatorButton content={"DELETE"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setInput("")}
            style={styles.dotButton}
          >
            <CalculatorButton content={"CE"} />
          </TouchableOpacity>
        </View>
        <View style={styles.symbolsContainers}>
          {symbols.map(s => (
            <TouchableOpacity
              key={s}
              onPress={() => {
                if (input === ""
                  || ["+", "-", "/", "."].includes(input[input.length - 1])
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
