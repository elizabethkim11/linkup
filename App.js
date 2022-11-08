import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import styles from "./assets/styles";
// import Profile from './src/components/index.js';
// import candidates from './assets/data/candidates.js';
import Profile from './linkup-frontend/src/components/profile/index.js';

const meow = {
  name: 'sir meowington',
  blurb: 'cute kitty',
  headshot: 'https://static.boredpanda.com/blog/wp-content/uploads/2019/07/1-5d2cd2a0ac058__880.jpg',
}

const App = () =>{
  return (
    <View style={styles.pageContainer}>
      <Profile user={meow} />
    </View>
  );
}; 

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;