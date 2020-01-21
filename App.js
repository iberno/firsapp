import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';


import Header from './components/header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/addTodo'
//import Sandbox from './components/sandbox'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Comprar Arroz', key: '1' },
    {text: 'Comprar Feijão', key: '2' },
    {text: 'Comprar Açucar', key: '3' },
    {text: 'Cortar o Cabelo', key: '4' },
    {text: 'Comprar Leite', key: '5' },
    {text: 'Lavar o Carro', key: '6' },
    {text: 'Viajar dia 22/01', key: '7' },
    {text: 'Conhecer Portugal', key: '8' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const pressSubmit = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
    }else {
      Alert.alert('Oops!', 'Necessário mais que 3 caracteres!', [
        {text: 'Ok', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header /> 
        <View style={styles.content}>
          <AddTodo pressSubmit={pressSubmit }/> 
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}            
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,   
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
})