import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

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
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    />
      
      <FlatList
      
      keyExtractor={(item) => item.id}
      data = {user}
      renderItem={({ item }) => (

        <Text style = {styles.item} >Title: {item.title}. Body : {item.body} </Text>
      
      )} 
 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 1,
    
  },
  
});

