import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
import Like from 'linkup/assets/data/images/LIKE.png'
import Nope from 'linkup/assets/data/images/nope.png'
// import Home from './linkup-frontend/src/screens/Home.js'

const Animation = (props) =>{ 
  const {data, renderItem, onSwipeLeft, onSwipeRight} = props;

  const [currIndex, setCurrIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currIndex + 1)
  const currProfile = data[currIndex];
  const nextProfile = data[nextIndex];

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
           [screenWidth * -2, 0, screenWidth * 2], [1,0.4,1]),
      },
    ],
    opacity: interpolate(translateX.value,
        [screenWidth * -2, 0, screenWidth * 2], [1,0.3,1]),
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
      const onSwipe = translateX.value > 0 ? onSwipeRight : onSwipeLeft;

      onSwipe && runOnJS(onSwipe)(currProfile); // NEED TO FIX THIS BUG :(
    },
  });

  useEffect(() => {
    setNextIndex(currIndex+1)
    translateX.value = 0;
  }, [currIndex, translateX]); 


  return ( 
    <View style={styles.root}>
      {nextProfile && (
        <View style={styles.nextProfContainer}>
          <Animated.View style = {[styles.animatedProf, nextProfStyle]}>
            {renderItem({item: nextProfile})}
          </Animated.View>
        </View>
      )}
      {currProfile ? (
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style = {[styles.animatedProf, profileStyle]}>
          <Animated.Image source={Like} style={[styles.like, {left: 10}, hireStyle]}
          resizeMode = 'contain'/> 
          <Animated.Image source={Nope} style={[styles.like, {right: 10}, rejectStyle]}
          resizeMode = 'contain'/> 
          {renderItem({item: currProfile})}
        </Animated.View>
      </PanGestureHandler>
      ):
        (
          <View>
            <Text> No Users Found</Text>
          </View>

        )
      
      }
    </View>
  );
}; 

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  animatedProf: {
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
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

export default Animation;