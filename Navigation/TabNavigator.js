import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../Screens/Feed'
import CreateStory from '../Screens/CreateStory';

const Tab = createBottomTabNavigator();


export default class TabNavigator extends Component {
    render() {
        return (
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Feed Screen') {
                  iconName = focused ? 'book' : 'book-outline';
                } else if (route.name === 'Create Story Screen') {
                  iconName = focused ? 'create' : 'create-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'black',
            })}>
            <Tab.Screen name="Feed Screen" component={Feed} />
            <Tab.Screen name="Create Story Screen" component={CreateStory} />
          </Tab.Navigator>
    )
}
}