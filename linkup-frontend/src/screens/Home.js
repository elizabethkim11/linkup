import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable, TextInput,} from 'react-native';
import Profile from 'linkup/linkup-frontend/src/components/profile/index.js';
// import users from 'linkup/assets/data/candidates'
import Animation from 'linkup/linkup-frontend/src/components/animation/index.js'
import { DataStore } from 'aws-amplify';
import {User} from '../../../src/models';


const Home = ({navigation}) => { 
  const [activeScreen, setActiveScreen] = useState('');
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrUser] = useState(null);

  useEffect(()=>{
    const fetchUser = async () => {
      setUsers(await DataStore.query(User));
    }
    fetchUser();
  }, []);

  const onSwipeLeft = () => {
    if (!currentUser) {
      return;
    }
    console.warn("Rejected", currentUser.name)
  };

  const onSwipeRight = () => {
    if (!currentUser) {
      return;
    }
    console.warn("Connected with", currentUser.name)
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
        setCurrUser = {setCurrUser}
        renderItem={({item}) => <Profile user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />

      <View style={{ flexDirection: "row" }}>
            <View>
                <Pressable onPress={handleSwipe} style={styles.nav_button1}>
                    <Text style={{fontWeight: 'bold'}}>Swipe</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={handleInfo} style={styles.nav_button2}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>My Profile</Text>
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
  nav_button1: {
      bottom: 20,
      backgroundColor: '#b6c0e3',
      height: 35,
      //right: -40,
      width: 100,
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 20,
  },
  nav_button2: {
      bottom: 20,
      backgroundColor: '#6c7868',
      height: 35,
      //right: -30,
      width: 100,
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 20,
  },
});

export default Home;