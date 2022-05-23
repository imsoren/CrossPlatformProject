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
        setGeo(user.address.geo);
        setCompany(user.company);
      
    });
  });

  return (
    
    <View style={styles.container}>
    
    <Text>Id: {user.id}</Text>
    <Text>Name: {user.name}</Text>
    <Text>Username: {user.username}</Text>
    <Text>Email: {user.email}</Text>
    <Text>Street: {address.street}</Text>
    <Text>Suite: {address.suite}</Text>
    <Text>City: {address.city}</Text>
    <Text>Zipcode: {address.zipcode}</Text>
    <Text>Lat: {geo.lat}</Text>
    <Text>Lng: {geo.lng}</Text>
    <Text>Phone: {user.phone}</Text>
    <Text>Website: {user.website}</Text>
    <Text>CompanyName: {company.name}</Text>
    <Text>CompanyCatchPhrase: {company.catchPhrase}</Text> 
    <Text>Companybs: {company.bs}</Text>
    
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
