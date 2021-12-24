import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/Stack';
import TabNavigator from './TabNavigator';
import StoryScreen from '../Screens/StoryScreens'

const Stack = createStackNavigator();

export default class StackNavigator extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="StoryScreen" component={StoryScreen} />
            </Stack.Navigator>
        )
    }
}