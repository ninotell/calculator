import { StatusBar } from 'expo-status-bar';
import { useState } from "react"
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import Number from './components/Number';


export default function App() {
  const [input, setInput] = useState("")
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const symbols = ["/", "*", "+", "-", "="]

  let hasSymbol = false
  const handleButtonPress = (button) => {
    if (button === "=") {
      setInput((eval(input)).toString())
      return
    }
    if (symbols.includes(input[(input.length) - 1]) && symbols.includes(button)) {
      console.log("error")
      return
    }
    setInput(prev => prev + button)
    return


  }

  return (
    <View style={styles.container}>

      <Text style={styles.input}>{input}</Text>
      <View style={styles.bodyContainer}>
        <View style={styles.numbersContainer}>
          {numbers.map(n => (
            <TouchableOpacity
              key={n}
              onPress={() => handleButtonPress(n)}
            >
              <Number number={n} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.symbolsContainers}>
          {symbols.map(s => (
            <TouchableOpacity
              key={s}
              onPress={() => handleButtonPress(s)}
            >
              <Number number={s} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </View>
  );
}
