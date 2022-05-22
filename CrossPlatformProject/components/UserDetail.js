import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import Constants from 'expo-constants';



export default function UserDetail({navigation}) {
  
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  
  useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users/" + navigation.getParam('id')).then(response => response.json()).then(user => {
        setUser(user);
        setAddress(user.address);
    });
  });

  return (
    
    <View style={styles.container}>
    
    <Text>{user.id}</Text>
    <Text>{user.name}</Text>
    <Text>{user.username}</Text>
    <Text>{user.email}</Text>
    <Text>{address.street}</Text>
  



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
