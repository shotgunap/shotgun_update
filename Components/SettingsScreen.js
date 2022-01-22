import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Text , Button, FlatList, TextInput, TouchableOpacity, Alert, TouchableHighlight} from 'react-native'
import {Image, Platform, Switch} from 'react-native'
import { Card } from "react-native-elements";
import {BoxShadow} from 'react-native-shadow'
import {MainTabNavigator} from '../Navigation/Navigation'
import {MainsStackNavigator} from '../Navigation/Navigation'


export default class SettingsScreen extends React.Component {
  render(){  
  return (
      <View style={styles.main}>
              
              <View style={styles.main_container}>
          
                  <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center'}}>
                      
                      <Image
                      style={styles.carte}
                      source={require('../image/carte.jpg')}
                      />
               
                     
                      
                       <Image
                      style={styles.imageprofil}
                      source={require('../image/empire.png')}
                      />      
                      
                      
          
                      <Text style={styles.nom}> ZHOU Alec </Text>
                      
  
                      <Text style={styles.texteprofiltitre}> Mes infos : </Text>
                      <Text style={styles.texteprofil}> je m'apelle henri, je veux réussir ma vie, et être aimé, et j'aime les nouilles </Text>
  
                      
                  </View>
                  
              </View>
          </View>
    );
  }
}
  

  const styles = StyleSheet.create({
  main_container: {
    justifyContent : 'center',
    alignItems : 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  main : {
    justifyContent : 'flex-start',
    flex : 1,
    alignItems: 'flex-start'
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
  carte : {
    marginLeft : -80,
    width : 450,
    height : 250,
    marginRight : 5,
    marginTop : -200
  },
  imageprofil : {
    width: 100,
    height: 100,
    marginTop : -60,
    borderRadius: 150/2
  },
  texteprofiltitre :{
    fontSize: 20,
    color : 'black',
    marginTop : 60,
    marginRight : 220,
    fontWeight: 'bold'
  },
  texteprofil :{
    fontSize: 15,
    color : 'black',
    marginRight : 10,
    marginLeft : 0,
    marginTop : 10
  },
  nom : {
    color : 'black',
    fontSize : 25,
    marginTop : 10,
    fontWeight: 'bold'
  },
  })