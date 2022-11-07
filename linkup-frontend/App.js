import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native';
import Card from './src/components/LinkUpCard';


const App = () =>{
  return (
    <View style={styles.pageContainer}>
      <Card />
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