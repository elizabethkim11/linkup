import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable, TextInput,} from 'react-native';
import Profile from 'linkup/linkup-frontend/src/components/profile/index.js';
import users from 'linkup/assets/data/candidates'
import Animation from 'linkup/linkup-frontend/src/components/animation/index.js'
// import {DataStore} from '@aws.amplify';
// import {User} from '../models';

const Home = ({navigation}) => { 
  const [activeScreen, setActiveScreen] = useState('');

  const onSwipeLeft = (user) => {
    console.warn("Rejected", user.name)
  };

  const onSwipeRight = (user) => {
    console.warn("Connected with", user.name)
  };

  const handleSwipe = () => {
    navigation.navigate("Home");
};

const handleInfo = () => {
  navigation.navigate("Recruiter");
};

  return ( 
    <View style={styles.pageContainer}> 
      {/* <Pressable onPress={() => setActiveScreen('Swipe')} style={styles.button1}>
          <Text>Recruiter</Text>
      </Pressable>
      <Pressable onPress={() => setActiveScreen('Info')} style={styles.button2}>
          <Text>Candidate</Text>
      </Pressable>
      {activeScreen === 'Swipe' && <Home />}
      {activeScreen === 'Info' && <Recruiter />} */}
      <Animation
        data={users}
        renderItem={({item}) => <Profile user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />

      <View style={{ flexDirection: "row" }}>
            <View>
                <Pressable onPress={handleSwipe} style={styles.nav_button}>
                    <Text>Swipe</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={handleInfo} style={styles.nav_button}>
                    <Text>My Profile</Text>
                </Pressable>
            </View>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});

export default Home;