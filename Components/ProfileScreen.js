import React from 'react';
import { SafeAreaView, StyleSheet, View, Text , Button, FlatList, TextInput, TouchableOpacity, Alert, TouchableHighlight} from 'react-native'
import {Image, Platform, Switch} from 'react-native'
import {MainTabNavigator} from '../Navigation/Navigation'
import {MainsStackNavigator} from '../Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class ProfileScreen extends React.Component {
    render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('DetailsScreen')}
        />
      </View>
    );
  }
}