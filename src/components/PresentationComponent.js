import React, { Component, useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StyleSheet } from 'react-native';

import styles from '../styles/MainStyles';






export default PresentationComponent = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const userData = {
    email: "",
    password: ""
  }


  const pressed = () => {
    userData.email = email;
    userData.password = password;
    Alert.alert("email:  "+ userData.email + "\n passoword:  "+userData.password) 

  };



  return (<View style={styles.container}>

    <Image
      source={require('../../src/image/eu.jpg')}
      style={styles.logo}
    />
 
    <TextInput
      style={styles.input}
      placeholder="Informe seu e-mail"
      value={email}
      onChangeText={(value) => setEmail(value)}
    />


    <TextInput
      style={styles.input}
      placeholder="Digite sua senha"
      secureTextEntry={true}
      value={password}
      onChangeText={(value) => setPassword(value)}
    />

    <TouchableOpacity
      style={styles.button} onPress={() => { pressed() }}>
      <Text style={styles.buttonText}>Acessar</Text>

    </TouchableOpacity>

  </View>)

}
