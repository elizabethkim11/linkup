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
  runOnJS
} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
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
           [screenWidth * -2, 0, screenWidth * 2], [1,0.5,1])
      }
    ],
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
        translateX.value = withSpring(-screenWidth*2)
      }
      else {
        translateX.value = withSpring(screenWidth*1.5, {}, 
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
      <View style={styles.nextProfContainer}>
        <Animated.View style = {[styles.animatedCard, nextProfStyle]}>
          <Profile user={nextProfile} />
        </Animated.View>
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style = {[styles.animatedCard, profileStyle]}>
          <Profile user={currProfile} />
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextProfContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',

  }
});

export default App;