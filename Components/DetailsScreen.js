import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Text , Button, FlatList, TextInput, TouchableOpacity, Alert, TouchableHighlight} from 'react-native'
import {Image, Platform, Switch} from 'react-native'
import { Card } from "react-native-elements";
import {BoxShadow} from 'react-native-shadow'
import HomeScreen from './HomeScreen'



export default function DetailsScreen() {

/*   constructor(props) {
    super(props)
    this.state = {
      id: "",
      nom_shotgun: "",
      date_shotgun: "",
      nb_place: "",
      photo_shotgun: "",
    }
  } */

  function getshotgun(id){
    return fetch('http://192.168.0.101:8080/api/shotgun/:' + id, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    }
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })
  }

  function changeid(text){
    this.setState({id : text})
  }

  function gotoshotgun(){
    this.props.navigation.navigate("HomeScreen")
  }

  return (
    <View style={styles.main_container2}> 
      <View style={styles.ecran2}>
        <View style={styles.recherche2}>
        <TextInput 
                    style={styles.textinput2} 
                    placeholder='event id'
                    onChangeText = {(text) => this._changeid(text)}    
        />
        <Button  style ={styles.Button2} title='Rechercher' onPress={() => this._getshotgun(text)}/>
        
        </View>
        
        <View style={styles.texte2}>
        <FlatList
        data={[
          {key: 'WESKI',
          année : '2020',
         image : <Image
         style={styles.image2}
         source={require('../image/ski.jpg')}
         />},

          {key: 'WESURF',
          année : '2021',
          image : <Image
          style={styles.image2}
          source={require('../image/ski.jpg')}
          />
        }
        ]}
        renderItem={({item}) => <Button color= "#f9c2ff" style={styles.item2} title={item.key} image={item.image} onPress={() =>( this.props.navigation.navigate("HomeScreen"))}/>}
      />
        </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  main_container2: {
    flex: 1,
  },
  recherche2 : {
    flex : 1,
    alignItems: 'center'
  },
  texte2 : {
    flex : 3,
    justifyContent: 'space-between',
    marginVertical: 6,
    color : 'rgb(83,166,34)'
  },
  item2: {
    padding: 20,
    marginVertical: 6
  },
  textinput2: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 30,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 85,
    width : 200
  },
  Button2: {
    marginTop : 20,
    marginLeft : 50,
    marginRight : 50,
},
Button: {
  marginTop : 40,
  marginRight : 250,

},
image2 : {
  marginLeft : -80,
  width : 450,
  height : 200,
  marginRight : 5,
  marginTop : -120,
  borderRadius: 20/2,

},
image: {
  width: 150,
  height: 150,
  marginTop : -60,
  borderRadius: 150/2,
  borderWidth : 2,
  borderColor : 'white',
  backgroundColor: 'rgba(231,76,60,1)',
},
ecran2 : {
  flex : 14
},
weski : {
  color : 'black',
  fontSize : 40,
  marginTop : 20
},
bouton : {
  backgroundColor : 'white',
  borderColor: 'black',
  borderWidth: 1,
  width : 360,
  height : 60,
  justifyContent : 'flex-end',
  flexDirection: 'row',
  justifyContent : 'space-evenly'
}
})