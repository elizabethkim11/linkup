import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';
import Home from 'linkup/linkup-frontend/src/screens/Home.js';
import Notifs from 'linkup/linkup-frontend/src/screens/Notifs.js';
import Profile from 'linkup/linkup-frontend/src/screens/Profile.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Signup from 'linkup/linkup-frontend/src/screens/Signup.js';
//import Recruiter from 'linkup/linkup-frontend/src/screens/Recruiter.js';
// import MaterialCommunityIcons from 'react-native-vector-icons/MateralCommunityIcons';

//import Amplify from 'aws-amplify';
//import config from './src/aws-exports';
// ignore authenticator for now!!!
// import {withAuthenticator} from './src/aws-amplify-react-native';


// Amplify.configure(config);

const App = () => { 
  // const [activeScreen, setActiveScreen] = useState('HOME');

  const color = "b5b5b5"
  const pressedColor = "#F76C6B"
  return ( 
    <SafeAreaView style={styles.root}>
      <View style={styles.pageContainer}> 
        {/* <View style={styles.topNavigation}> */}
          {/* <Pressable>
            <FontAwesome name="user" size={30} color={color} />
          </Pressable>
          <FontAwesome name="user" size={30} color={color} /> */}
          {/* <Icon name="ios-chatbubbles" size={30} color={color} /> */}
        {/* </View> */}
        <Signup />
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