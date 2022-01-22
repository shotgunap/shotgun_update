import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Text , Button, FlatList, TextInput, TouchableOpacity, Alert, TouchableHighlight} from 'react-native'
import {Image, Platform, Switch} from 'react-native'
import { Card } from "react-native-elements";
import {BoxShadow} from 'react-native-shadow'
import DetailsScreen from '../Components/DetailsScreen'
import HomeScreen from '../Components/HomeScreen'
import SettingsScreen from "../Components/SettingsScreen";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Components/ProfileScreen";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


export default function MainTabNavigator() {
  
  return (

    
  <NavigationContainer>



  <Tab.Navigator 
        screenOptions = {{
          showlabel : false,
          headerShown: false,
          style : {
            position : 'absolute',
            bottom : 25,
            left : 20,
            right : 20,
            elevation : 0,
            backgroundColor : '#ffffff',
            borderRadius : 15,
            heigth : 90,
            
          }
        }}
      >

        <Tab.Screen 
        name="liste"
        options ={{
                tabBarIcon : ({focused}) => (
                  <View>
                    <Image source={require('../image/tache.png')}
                    resizeMode = 'contain'
                    style = {{
                      width : 25,
                      height : 25
                    }}
                    /> 

                  </View>
                )
              }}>
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={DetailsScreen}
              />
              <SettingsStack.Screen name="home" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        
        
        
        <Tab.Screen
                name='home'
                options ={{
                tabBarIcon : ({focused}) => (
                  <View>
                    <Image source={require('../image/shotgun.png')}
                    resizeMode = 'contain'
                    style = {{
                      width : 50,
                      height : 50
                    }}
                    /> 

                  </View>
                )
              }}>
                {() => (
                 <HomeStack.Navigator>
                    <HomeStack.Screen name="Home" component={HomeScreen} />
                    <HomeStack.Screen name="Details" component={DetailsScreen} />
                  </HomeStack.Navigator>
                )}
              </Tab.Screen>
                  
              <Tab.Screen
                  name='profil'
                  component={SettingsScreen}
                  options ={{
                    tabBarIcon : ({focused}) => (
                      <View>
                        <Image source={require('../image/profil.png')}
                        resizeMode = 'contain'
                        style = {{
                          width : 25,
                          height : 25
                        }}
                        /> 

                      </View>
                    )
                  }}
              />
        </Tab.Navigator>
  </NavigationContainer>



  );
}