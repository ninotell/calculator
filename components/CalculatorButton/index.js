import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons';


export default function CalculatorButton({ content }) {
  return (
    <View style={[
      styles.calculatorButtonContainer,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(content)
        ? { backgroundColor: "#f09a36" }
        : { backgroundColor: "#a6a6a6" },
      content === "CE"
        ? {
          width: 250,
          backgroundColor: "#ff837c"
        }
        : { width: 80 }
    ]}>
      {
        content === "DELETE"
          ? <FontAwesome5 name="backspace" size={24} color="black" />
          : <Text style={styles.content}>{content === "*" ? "X" : content}</Text>
      }
    </View>
  )
}

