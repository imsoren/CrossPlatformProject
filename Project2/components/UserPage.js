import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function UserPage({navigation}) {

  const [user, setUser] = useState([
    
  ]);

   const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setUser(data);

  };   
  
  return (
    <View style={styles.container}>

      <Button
    onPress={fetchData}
    title="UserPage"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    />
      <FlatList
      keyExtractor={(item) => item.id}
      data = {user}
      renderItem={({ item }) => (   
        <TouchableOpacity onPress={() => navigation.navigate('UserDetail', {id:item.id})}>
          <Text>{item.name}</Text>
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

