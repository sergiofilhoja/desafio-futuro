import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import axios from 'axios';

export default () => {
  const [nome, setNome] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = async () => {
    if (nome !== '' && number !== '' && email !== '') {
      const baseUrl = 'http://localhost:3000/pessoas';
      const id = Math.random();

      if (number.length > 9 || number.length < 9) {
        Alert.alert('Aviso', 'Campo de telefone incorreto, siga conforme o sombreado.')
      } else {
        const pessoa = {id, nome, number, email}
        const response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pessoa)
        });
  
        if (response.status === 201) {
          const request = axios({
            method: 'get',
            url: baseUrl
          }).then((response) => {
            console.log(response.data)
          })
    
          Alert.alert('Sucesso!', 'Cadastro realizado com sucesso.')
        } else {
          Alert.alert('Erro', 'Ocorreu um problema ao inserir o usuário.')
        }
      }

    } else {
      Alert.alert('Aviso', 'Os campos não estão preenchidos correctamente.')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30 }} >Pessoa</Text>
        
        <Text style={{ fontSize: 16 }}>Nome</Text>
        <TextInput
          placeholder="Nome"
          style={{ marginTop: 8, padding: 15, borderColor: 'black', borderWidth: 1, marginBottom: 10}}
          value={nome}
          onChangeText={(t) => setNome(t)}
        />

        <Text style={{ fontSize: 16 }}>Telefone</Text>
        <TextInput
          placeholder="00000000"
          keyboardType='number-pad'
          style={{ marginTop: 8, padding: 15, borderColor: 'black', borderWidth: 1, marginBottom: 10}}
          value={number}
          onChangeText={(t) => setNumber(t)}
        />

        <Text style={{ fontSize: 16 }}>Email</Text>
        <TextInput
          placeholder="email@email.com"
          keyboardType='email-address'
          style={{ marginTop: 8, padding: 15, borderColor: 'black', borderWidth: 1, marginBottom: 10}}
          value={email}
          onChangeText={(t) => setEmail(t)}
        />

        <TouchableOpacity 
          onPress={handleAdd}
          style={{ padding: 20, backgroundColor: '#3234A3', alignItems: 'center', marginTop: 10 }}
        >
          <Text style={{ fontSize: 18, color: '#FFF' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
