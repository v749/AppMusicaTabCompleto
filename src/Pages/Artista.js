import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Os Melhores Artistas </Text>

      <FlatList
        data={artistas}
        keyExtractor={(item)=>{item.uid.toString()}}
        renderItem={({item}) =>
          <View style={estilo.artista}>
            <View>
              <Text style={estilo.txtArtista}>{item.nome}</Text>
            </View>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up-outline"
                  size={20}
                  color={'red'}
                />{' '}
                {item.like} Curtidas
              </Text>
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-check"
                  size={20}
                  color={'green'}
                />{' '}
                {item.seguidores} Seguidores
              </Text>
            </View>
          </View>
        }
      />
    </View>
  );
}

const artistas = [
  {
    uid: 1,
    nome: 'Zé Ramalho',
    like: 598,
    seguidores: 5689
  },
  {
    uid: 2,
    nome: 'Mamonas Assassinas',
    like: 895,
    seguidores: 3694
  },
  {
    uid: 3,
    nome: 'Raul Seixas',
    like: 2369,
    seguidores: 3610
  },
  {
    uid: 4,
    nome: 'Engenheiros do Hawai',
    like: 369,
    seguidores: 1230
  },

]

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 30,
  },
  artista: {
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtArtista: {
    fontSize: 20    
  },
});
