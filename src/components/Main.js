import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Loading from './Loading';
import Login from './Login';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import
//  MaterialCommunityIcons
// from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';  
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


function Main() {

  function HomeScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function Add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add More!</Text>
    </View>
  );
}

function Overview() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Spending Overview!</Text>
    </View>
  );
}

function Goals() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Savings Goals!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

function Tabs(){
  return (
    <>
    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="triangle" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Add" component={Add} options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Overview" component={Overview} options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Goals" component={Goals} options={{
          tabBarLabel: 'Goals',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Account" component={Profile} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
    </>
  );
}



  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}



export default Main;



