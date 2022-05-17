import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  ReviewDetails:{
      screen: ReviewDetails,
  }
});

export default createAppContainer(AppNavigator);