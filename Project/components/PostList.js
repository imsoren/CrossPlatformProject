import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function PostList({navigation}) {

  const [user, setUser] = useState([
    
  ]);

   const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    setUser(data);

  };   
  
  return (
    <View style={styles.container}>

      <Button
    onPress={fetchData}
    title="PostList"
    color="#841584"
    />
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


