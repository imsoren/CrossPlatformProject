import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import PostList from './PostList.js';
import UserPage from './UserPage.js';


import { Card } from 'react-native-paper';

export default function HomePage({navigation}) {
 
  
  return (
    <View style={styles.container}>

      <Button
    onPress={() =>
        navigation.navigate("UserPage")}
    title="UserPage"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    />

      <Button
    onPress={() =>
        navigation.navigate("PostList")}
    title="PostList"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    />


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  
  
});
