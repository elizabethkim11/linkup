import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from 'linkup/linkup-frontend/src/screens/Home.js'
import Notifs from 'linkup/linkup-frontend/src/screens/Notifs.js'

const App = () => { 
 
  return ( 
    <View style={styles.pageContainer}> 
      <Notifs />
    </View>
  );
}; 

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;