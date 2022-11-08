import 'react-native-gesture-handler';
import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native';
import Profile from './linkup-frontend/src/components/profile/index.js';
import users from './assets/data/candidates'

const meow = {
  name: 'sir meowington',
  blurb: 'cute kitty',
  headshot: 'https://static.boredpanda.com/blog/wp-content/uploads/2019/07/1-5d2cd2a0ac058__880.jpg',
}

const App = () =>{
  return (
    <View style={styles.pageContainer}>
      <Profile user={users[0]} />
    </View>
  );
}; 

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;