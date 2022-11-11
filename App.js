import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import Profile from './linkup-frontend/src/components/profile/index.js';
import users from './assets/data/candidates'
import Animated, { useSharedValue, 
  useAnimatedStyle, 
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
  withSpring,
  runOnJS,
} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import NativeAsyncSQLiteDBStorage from 'react-native/Libraries/Storage/NativeAsyncSQLiteDBStorage';
import Like from './assets/data/images/LIKE.png'
import Nope from './assets/data/images/nope.png'
// import Home from './linkup-frontend/src/screens/Home.js'

const App = () =>{ 
  const [currIndex, setCurrIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currIndex + 1)
  const currProfile = users[currIndex];
  const nextProfile = users[nextIndex];

  const {width: screenWidth} =  useWindowDimensions();
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue( () => 
    interpolate(translateX.value, [0, screenWidth * 2], [0,60]) + 'deg',
  );

  const profileStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value
      },
      {
        rotate: rotate.value
      },
    ],
  }));

  const nextProfStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(translateX.value,
           [screenWidth * -2, 0, screenWidth * 2], [1,0.4,1])
      }
    ],
  }));

  const hireStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, screenWidth / 2], [0,1]),
  }));

  const rejectStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -screenWidth / 2], [0,1]),
  }));

//what to do when user drags and releases items
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startPos=translateX.value
    },
    onActive: (event, context) => {
      translateX.value = context.startPos + event.translationX;
    },
    onEnd: (event) => {
      if (-125 < event.translationX && event.translationX < 125 ) {
        translateX.value = withSpring(0);
        return;
      }
      if (event.translationX <= -125) {
        translateX.value = withSpring(-screenWidth*2, {}, 
          () => runOnJS(setCurrIndex)(currIndex+1))
      }
      else {
        translateX.value = withSpring(screenWidth*2, {}, 
          () => runOnJS(setCurrIndex)(currIndex+1))
      }
    },
  });

  useEffect(() => {
    setNextIndex(currIndex+1)
    translateX.value = 0;
  }, [currIndex, translateX]); 


  return ( 
    <View style={styles.pageContainer}>
      {nextProfile && (
        <View style={styles.nextProfContainer}>
          <Animated.View style = {[styles.animatedCard, nextProfStyle]}>
            <Profile user={nextProfile} />
          </Animated.View>
        </View>
      )}
      {currProfile && (
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style = {[styles.animatedCard, profileStyle]}>
          <Animated.Image source={Like} style={[styles.like, {left: 10}, hireStyle]}
          resizeMode = 'contain'/> 
          <Animated.Image source={Nope} style={[styles.like, {right: 10}, rejectStyle]}
          resizeMode = 'contain'/> 
         <Profile user={currProfile} />
        </Animated.View>
      </PanGestureHandler>
      )}
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
    width: '90%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextProfContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',

  },
  like: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 10,
    zIndex:1,
  }
});

export default App;