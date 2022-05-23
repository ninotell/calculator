import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Number({number}) {
  return (
    <View style={[styles.numberContainer, number === 0 ? {width: 250} : {width: 80}]}>
      <Text style={styles.number}>{number}</Text>
    </View>
  )
}

