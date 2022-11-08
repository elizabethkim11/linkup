import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native';
import Profile from './src/components/profile';


const App = () =>{
  return (
    <View style={styles.pageContainer}>
      <Profile />
    </View>
  );
}; 

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;