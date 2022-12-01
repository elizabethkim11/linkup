import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
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
import Like from 'linkup/assets/data/images/hired.png'
import Nope from 'linkup/assets/data/images/rejected.png'
import Resume from 'linkup/assets/data/images/ebeth.png'
import Modal from "react-native-modal";



// import Home from './linkup-frontend/src/screens/Home.js'



const Animation = (props) => { 
  const {data, renderItem, onSwipeLeft, onSwipeRight, setCurrUser} = props;
  const [currIndex, setCurrIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currIndex + 1)
  const currProfile = data[currIndex];
  const nextProfile = data[nextIndex];
  const {width: screenWidth} =  useWindowDimensions();
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue( () => 
    interpolate(translateX.value, [0, screenWidth * 2], [0,60]) + 'deg',
  );

    const [isModalVisible, setModalVisible] = useState(false);
  

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

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

  // const resumeStyle = useAnimatedStyle(() => ({
  //   opacity: isHeadshot ? 0:1,
  // }));

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
      onSwipe && runOnJS(onSwipe)();
     },
  },);

  useEffect(() => {
    setNextIndex(currIndex+1)
    translateX.value = 0;
  }, [currIndex, translateX]); 

  useEffect(() => {
    setCurrUser(currProfile)
  }, [currProfile, setCurrUser]); 


  return ( 
    <View style={styles.root}>
      {nextProfile && (
        <View style={styles.nextProfContainer}>
          <Animated.View style = {[styles.animatedProf, nextProfStyle]}>
          <Pressable onPress={toggleModal} style={styles.resumeButton}>
            <Text style={{fontSize: 27}}>📝</Text>
              <Modal isVisible={isModalVisible}>
              <Animated.Image source={Resume} style={styles.aniResume}
            resizeMode = 'contain'/> 

              <Pressable title="Close" onPress={toggleModal} style={styles.closeButton}>
                <Text style={{fontSize:20, color:'white',}}>X</Text>
              </Pressable>
              </Modal>
            </Pressable>
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
            <Text>Oops, no more candidates right now!</Text>
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
  resumeButton: {
    backgroundColor: '#b87046',
    height: 50,
    bottom: 370,
    right: 250,
    //right: -30,
    width: 70,
    position: 'absolute',
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 999,
  },
  closeButton: {
    backgroundColor: 'red',
    height: 30,
    bottom: 505,
    right: 290,
    //right: -30,
    width: 30,
    position: 'absolute',
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 999,
  },
  animatedProf: {
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aniResume: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    buttoms: 40,
    zIndex:1,
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
    zIndex:2,
  }
});


export default Animation;