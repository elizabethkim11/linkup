import { Styleshare, Whitesource } from '@icons-pack/react-simple-icons';
import { Auth, DataStore } from 'aws-amplify';
import React, {isValidElement, useEffect, useState} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {View, Text, StyleSheet, SafeAreaView, Pressable, TextInput,} from 'react-native';
// import {Auth} from 'aws-amplify';
import Recruiter from 'linkup/linkup-frontend/src/screens/Recruiter.js';
import Candidate from 'linkup/linkup-frontend/src/screens/Candidate.js';

const Signup = ({navigation}) => {
    const [activeScreen, setActiveScreen] = useState('');

    const handleRecruiter = () => {
        navigation.navigate("Recruiter");
      };
    
      const handleCandidate = () => {
        navigation.navigate("Candidate");
      }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                {/* <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder="What you are looking for" multiline numberOfLines={5} value={blurb} onChangeText={setBlurb}/> */}
                <Pressable onPress={handleRecruiter} style={styles.button1}>
                    <Text style={styles.recruitertext}>Recruiter</Text>
                    <Text style={styles.recruitertext}>💼</Text>
                </Pressable>
                
                <Pressable onPress={handleCandidate} style={styles.button2}>
                    <Text style={styles.candtext}>Candidate</Text>
                    <Text style={styles.candtext}>📋</Text>
                </Pressable>
                {activeScreen === 'Recruit' && <Recruiter />}
                {activeScreen === 'Cand' && <Candidate />}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        padding: 10,
    },
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        fontSize: 20,
    },
    button1: {
        backgroundColor: '#a9bcdb',
        height: 270,
        width: 300,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 40,
    },
    candtext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
    },
    recruitertext: {
        fontWeight: 'bold',
        fontSize: 50,
    },
    button2: {
        backgroundColor: '#30374f',
        height: 270,
        width: 300,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 40,
    },
    nav_button: {
        backgroundColor: '#89CFF0',
        height: 35,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
});

export default Signup;