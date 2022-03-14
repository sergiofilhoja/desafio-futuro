import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default () => {
  const [cat, setCat] = useState();

  const handleImage = async () => {
    
    const baseUrl = 'https://api.thecatapi.com/v1/images/search';

    const request = await axios({
      method: 'get',
      url: baseUrl
    }).then((response) => {
      setCat(response.data[0])
      console.log(cat)
    })
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Gatos</Text>

      <View style={{ alignSelf: 'center', marginTop: 30 }}>
        <Image style={{ width: 330, height: 330}} source={{ uri: cat?.url }} />
        <TouchableOpacity style={{ backgroundColor: '#3234A3', padding: 20, alignItems: 'center', marginTop: 15 }} onPress={handleImage}>
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>Mais um!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
