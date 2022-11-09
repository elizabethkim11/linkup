import 'react-native-gesture-handler';
import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import Profile from './linkup-frontend/src/components/profile/index.js';
import users from './assets/data/candidates'
import Animated, { useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  useAnimatedGestureHandler
} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'
const App = () =>{

  const translateX = useSharedValue(0);

  const profileStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value
      },
    ],
  }));
//what to do when user drags and releases items
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_,context) => {
      console.log('start')
    },
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      console.log('done')
    },
  });
  return (
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style = {[styles.animatedCard, profileStyle]}>
          <Profile user={users[0]} />
        </Animated.View>
      </PanGestureHandler>
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