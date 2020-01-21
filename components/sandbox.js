import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  boxOne: {

    backgroundColor: 'violet',
    padding: 20,
  },
  boxTwo: {
    backgroundColor: 'indigo',
    padding: 20,
  },
  boxThree: {
    backgroundColor: 'purple',
    padding: 20,
  },
  boxFour: {
    backgroundColor: 'magenta',
    padding: 20,
  }
})