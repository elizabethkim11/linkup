import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import Profile from './linkup-frontend/src/components/profile/index.js';
import users from './assets/data/candidates'
import Animation from './linkup-frontend/src/components/animation/index.js'
// import Home from './linkup-frontend/src/screens/Home.js'

const App = () => { 

  const onSwipeLeft = (user) => {
    console.warn("Rejected", user.name)
  };

  const onSwipeRight = (user) => {
    console.warn("Connected with", user.name)
  };

  return ( 
    <View style={styles.pageContainer}> 
      <Animation
        data={users}
        renderItem={({item}) => <Profile user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
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