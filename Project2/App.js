import { Text, View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import Constants from 'expo-constants';
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import UserPage from './components/UserPage.js';
import UserDetail from './components/UserDetail.js';
import PostList from './components/PostList.js';
import PostDetail from './components/PostDetail.js';

const AppNavigator = createStackNavigator(
  
  {
    UserPage: {screen: UserPage},
    UserDetail: {screen: UserDetail},
    PostList: {screen: PostList},
    PostDetail: {screen: PostDetail},
  },
  
  {
    initialRouteName: 'UserPage',
    
    headerMode: 'none',
  }

)



export default createAppContainer(AppNavigator);
