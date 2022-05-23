import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import Constants from 'expo-constants';



export default function PostDetail({navigation}) {
  
  const [post, setPost] = useState([]);

  
  useEffect(() => { 
    
        fetch("https://jsonplaceholder.typicode.com/posts" + navigation.getParam('id')).then(response => response.json()).then(post => {

        setPost(post);
     
      
    });
  });

  return (
    
    <View style={styles.container}>
    
    <Text>{post.userId}</Text>
    <Text>{post.id}</Text>
    <Text>{post.body}</Text>
  
    
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
