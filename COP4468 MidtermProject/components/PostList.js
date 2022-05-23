import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function PostList({navigation}) {

  const [user, setUser] = useState([
    
  ]);

   const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    
    setUser(data.slice(0,20));

  };   
  
      fetchData();

  return (
    <View style={styles.container}>

      <FlatList
      keyExtractor={(item) => item.id} 
      data = {user}
      renderItem={({ item }) => (   

        <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {id:item.id})}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
        
      )} 

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


