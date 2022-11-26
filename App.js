import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';
import Home from 'linkup/linkup-frontend/src/screens/Home.js';
import Notifs from 'linkup/linkup-frontend/src/screens/Notifs.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialCommunityIcons from 'react-native-vector-icons/MateralCommunityIcons';

const App = () => { 
  const color = "b5b5b5"
  const pressedColor = "#F76C6B"
  return ( 
    <SafeAreaView style={styles.root}>
      <View style={styles.pageContainer}> 
        <View style={styles.topNavigation}>
          {/* <Pressable>
            <FontAwesome name="user" size={30} color={color} />
          </Pressable>
          <FontAwesome name="user" size={30} color={color} /> */}
          {/* <Icon name="ios-chatbubbles" size={30} color={color} /> */}
        </View>
        <Home/>
      </View>
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;