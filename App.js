import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';
import Home from 'linkup/linkup-frontend/src/screens/Home.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Signup from 'linkup/linkup-frontend/src/screens/Signup.js';
import Candidate from './linkup-frontend/src/screens/Candidate';
import Notifs from './linkup-frontend/src/screens/Notifs';
import Recruiter from 'linkup/linkup-frontend/src/screens/Recruiter.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import MaterialCommunityIcons from 'react-native-vector-icons/MateralCommunityIcons';

import Amplify from "@aws-amplify/core";
import config from './src/aws-exports.js';
import {withAuthenticator} from 'aws-amplify-react-native';
import Recruiters from './linkup-frontend/src/screens/Recruiter';
import Candidates from './linkup-frontend/src/screens/Candidate';


Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => { 
  const Stack = createNativeStackNavigator();
  // const [activeScreen, setActiveScreen] = useState('HOME');

  return ( 
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{ gestureEnabled: false }}
        initialRouteName="Signup"
      >
        <Stack.Screen
          name="Recruiter"
          component={Recruiters}
          // num={num} 
          // setNum={setNum}
        />
        <Stack.Screen
          // options={{ gestureEnabled: false }}
          name="Candidate"
          component={Candidates}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Notifs"
          component={Notifs}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />


      </Stack.Navigator>
    </NavigationContainer>
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

export default withAuthenticator(App);