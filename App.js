import 'react-native-gesture-handler';
import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native';
import Profile from './linkup-frontend/src/components/profile/index.js';
import users from './assets/data/candidates'
import Animated, { useSharedValue, useAnimatedStyle} from 'react-native-reanimated'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const App = () =>{

  const sharedValue = useSharedValue(1);

  const profileStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: sharedValue.value * 500 - 250,
      },
    ],
  }));

  return (
    <View style={styles.pageContainer}>
      <Animated.View style = {[styles.animatedCard, profileStyle]}>
      <Profile user={users[0]} />
      </Animated.View>
      <Pressable onPress={() => (sharedValue.value = Math.random())}
        style={{position: 'absolute', top: 250, zIndex: 100}}>
        <Text>Meow</Text>
        </Pressable>
    </View>
  );
}; 

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedCard: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;