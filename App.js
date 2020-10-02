import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './Screens/HomeStackScreen';
import ActiveScreen from './Screens/ActiveScreen';
import CompleteScreen from './Screens/CompleteScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          let active = route.focused;
          if (route.name === 'Complete') {
            iconName = "done-all"
          } else if (route.name === 'Active') {
            iconName = "notifications-active"
          } else {
            iconName = "border-all"
          }

          return <MaterialIcons name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Active" component={ActiveScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Complete" component={CompleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
