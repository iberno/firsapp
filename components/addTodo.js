import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function AddTodo({ pressSubmit }) {
  const [text, setText] = useState('');
  
  const changeHandler = (val) => {
    setText(val)
  }
  
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}        
      />
      <Button 
        onPress={() => pressSubmit(text)}
        title='add Todo' 
        color="tomato"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc' 
  }
})

