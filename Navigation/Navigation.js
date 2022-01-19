import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Text , Button, FlatList, TextInput, TouchableOpacity, Alert, TouchableHighlight} from 'react-native'
import {Image, Platform, Switch} from 'react-native'
import { Card } from "react-native-elements";
import {BoxShadow} from 'react-native-shadow'


function getshotgun(id){
  return fetch('http://localhost:8080/api/shotgun/:' + id, {
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



function HomeScreen({ navigation }) {
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

function WeskiScreen({ navigation }) {
  return (
    <View style={styles.main}>
            
            <View style={styles.main_container}>
        
                <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center'}}>
                    
                    <Image
                    style={styles.image2}
                    source={require('../image/ski.jpg')}
                    />
            
                    <TouchableOpacity>
                    
                     <Image
                    style={styles.image}
                    source={require('../image/logo_final.png')}
                    />      
                    
                    </TouchableOpacity>
        

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

function DetailsScreen({navigation}) {
  return (
    <View style={styles.main_container2}> 
      <View style={styles.ecran2}>
        <View style={styles.recherche2}>
        <TextInput 
                    style={styles.textinput2} 
                    placeholder='event'
        />
        <Button  style ={styles.Button2} title='Rechercher' onPress={() => getshotgun('7861821')}/>
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
        renderItem={({item}) => <Button color= "#f9c2ff" style={styles.item2} title={item.key} image={item.image} onPress={() => navigation.navigate('Weski')}/>}
      />
        </View>
      </View>
      </View>
  );
}


function SettingsScreen({ navigation }) {
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

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Prochain shotgun" component={WeskiScreen} />
      <HomeStack.Screen name="Liste" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Profil" component={SettingsScreen} />
      <SettingsStack.Screen name="Liste" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const DetailsStack = createNativeStackNavigator();

function DetailsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Liste" component={DetailsScreen} />
      <SettingsStack.Screen name="Weski" component={WeskiScreen} />

    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  main_container2: {
    flex: 1,
  },
  recherche2 : {
    flex : 1,
    alignItems: 'center'
  },
  text2 : {
    color : 'rgb(83,166,34)',
    fontWeight: "bold",
    marginLeft: 50,
    marginRight: 50,
    fontSize: 20,
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
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
image3 : {
  width : 30,
  height : 30,
  marginTop : 10
},
ecran1 : {
  flex : 2
},
ecran2 : {
  flex : 14
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


export default function App() {
  
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
                  name='liste'
                  component={DetailsStackScreen}
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
                  }}
              />
              <Tab.Screen
                  name='home'
                  component={HomeStackScreen}
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
                  }}
              />
              <Tab.Screen
                  name='profil'
                  component={SettingsStackScreen}
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
