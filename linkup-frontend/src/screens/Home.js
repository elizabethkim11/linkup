import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Profile from 'linkup/linkup-frontend/src/components/profile/index.js';
import users from 'linkup/assets/data/candidates'
import Animation from 'linkup/linkup-frontend/src/components/animation/index.js'

const Home = () => { 

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
    width: '100%'
  },
});

export default Home;