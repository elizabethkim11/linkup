import 'react-native-gesture-handler';
import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import Profile from './linkup-frontend/src/components/profile/index.js';
import users from './assets/data/candidates'
import Animated, { useSharedValue, 
  useAnimatedStyle, 
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate
} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const App = () =>{ 
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
//what to do when user drags and releases items
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startPos=translateX.value
    },
    onActive: (event, context) => {
      translateX.value = context.startPos + event.translationX;
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