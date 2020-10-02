import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';


const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{

    }} initialRouteName="HomeScreen" >
      <Stack.Screen
        options={{
          title: "All todos"
        }}
        name="HomeScreen"
        component={HomeScreen} />

      <Stack.Screen
        options={{
          title: "SingleTodoScreen"
        }}
        name="DetailScreen"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;