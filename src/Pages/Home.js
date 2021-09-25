import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <ImageBackground style={estilo.fundoimg} resideMode="repeat" source={require('../../assets/musica.jpg')}>
      <Text style={estilo.titulo}> App de Música </Text>
        
      </ImageBackground>
      
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundoimg: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 30,
    textAlign: 'center',
    color: '#DC143C',
    fontWeight:'bold',
  }
});
