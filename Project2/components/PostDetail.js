import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import Constants from 'expo-constants';



export default function PostDetail({navigation}) {
  
  const [PostDetail, setPostDetail] = useState([]);

  
  useEffect(() => { 
    
        fetch("https://jsonplaceholder.typicode.com/posts/" + navigation.getParam('id')).then(response => response.json()).then(PostDetail => {

        setPostDetail(PostDetail);
     
      
    });
  });

  return (
    
    <View style={styles.container}>

    <Text>User ID: {PostDetail.userId}</Text>
    <Text>Title: {PostDetail.title}</Text>
     <Text>Body: {PostDetail.body}</Text>
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
