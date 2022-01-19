// Components/Search.js

import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Text , Button, FlatList, TextInput, TouchableOpacity, Alert, TouchableHighlight} from 'react-native'
import {Image, Platform, Switch} from 'react-native'
import { Card } from "react-native-elements";
import {BoxShadow} from 'react-native-shadow'

export default function HomeScreen() {


    return (
      <View style={styles.main}>
              
              <View style={styles.main_container}>
          
                  <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center'}}>
                      
                      <Image
                      style={styles.image2}
                      source={require('../image/ski.jpg')}
                      />
  
                      <BoxShadow setting={{width:150,
    height:10,
    color:"#000",
    border:1,
    radius:9,
    opacity:0.2,
    x:0,
    y:10,
    style:{marginVertical:5}}}>
               
                      <TouchableOpacity>
                      
                       <Image
                      style={styles.image}
                      source={require('../image/logo_final.png')}
                      />      
                      
                      </TouchableOpacity>
  
                      </BoxShadow>
          
  
                      <TouchableOpacity  onPress={() => {  
                        Alert.alert(
                          "Règle",
                       "Atention, si vous appuyez sur le bouton avant le Top, vous avez 1 seconde de pénalité !",
                       [
                         { text: "OK thanks!"}
                       ]
                       )}}>
                      <Image
                      style={styles.image3}
                      source={require('../image/point-information.jpg')}
                      />
                      </TouchableOpacity>
  
                      <Text style={styles.weski}> Weski 2022 </Text>
  
  
                      <Text style={[styles.heure]}>
                      15h 43min 28s
                      </Text>
  
                      
                  </View>
                  <Image
                      style={styles.image4}
                      source={require('../image/maxresdefault.jpg')}
                      />
              </View>
          </View>
    );
  }


  const styles = StyleSheet.create({
  main_container: {
    justifyContent : 'center',
    alignItems : 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  Button: {
    marginTop : 40,
    marginRight : 250,
  
  },
  main : {
    justifyContent : 'flex-start',
    flex : 1,
    alignItems: 'flex-start'
  },
  image2 : {
    marginLeft : -80,
    width : 450,
    height : 200,
    marginRight : 5,
    marginTop : -120,
    borderRadius: 20/2,
  
  },
  heure : {
    color : 'black',
    marginTop : 20,
    fontSize : 40,
    fontWeight: 'bold',
    borderWidth : 2,
    borderRadius: 20/2
  
  },
  pub : {
    flex: 1,
    backgroundColor: 'orange',
    width : 100
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
  image3 : {
    width : 30,
    height : 30,
    marginTop : 10
  },
  weski : {
    color : 'black',
    fontSize : 40,
    marginTop : 20
  },
  image4 : {
    width : 300,
    height : 50,
    marginTop : -40,
    
  }
  })