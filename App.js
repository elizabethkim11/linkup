import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from 'linkup/linkup-frontend/src/screens/Home.js'
import Notifs from 'linkup/linkup-frontend/src/screens/Notifs.js'
import { withAuthenticator } from 'aws-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure(config);

const App = () => { 
 
  return ( 
    <View style={styles.pageContainer}> 
      <Home />
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

export default withAuthenticator(App);