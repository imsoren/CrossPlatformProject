import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import Constants from 'expo-constants';



export default function UserDetail({navigation}) {
  
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  const [geo, setGeo] = useState([]);
  const [company, setCompany] = useState([]);
  
  useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users/" + navigation.getParam('id')).then(response => response.json()).then(user => {

        setUser(user);
        setAddress(user.address);
        setGeo(address.geo);
        setCompany(user.company);
      
    });
  });

  return (
    
    <View style={styles.container}>
    
    <Text>{user.id}</Text>
    <Text>{user.name}</Text>
    <Text>{user.username}</Text>
    <Text>{user.email}</Text>
    <Text>{address.street}</Text>
    <Text>{address.suite}</Text>
    <Text>{address.city}</Text>
    <Text>{address.zipcode}</Text>
    <Text>{address.lat}</Text>
    <Text>{address.lng}</Text>
    <Text>{user.phone}</Text>
    <Text>{user.website}</Text>
    <Text>{company.name}</Text>
    <Text>{company.catchPhrase}</Text> 
    <Text>{company.bs}</Text>
    
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
