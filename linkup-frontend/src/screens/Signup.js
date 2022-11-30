import { Styleshare } from '@icons-pack/react-simple-icons';
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

    // const [name, setName] = useState('');
    // const [blurb, setBlurb] = useState('');
    // const [email, setEmail] = useState('');

    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //         const user = await Auth.currentAuthenticatedUser();
    //         const dbUsers = DataStore.query(
    //             User,
    //             u => u.sub === user.attributes.sub);
    //         if (dbUsers.length < 0) {
    //             return;
    //         }
    //         const dbUser = dbUsers[0];
    //         setName(dbUsers.name);
    //         setBlurb(dbUsers.blurb);
    //         setSchool(dbUsers.school);
    //         setYear(dbUsers.year);
    //     };
    //     getCurrentUser();
    // }, []);
    
    // const validInput = () => {
    //     return name && blurb && email;
    // };

    // const save = async () => {
    //     if (!validInput()) {
    //         console.warn('Invalid input');
    //         return;
    //     }

    //     // const user = await Auth.currentAuthenticatedUser();
    //     // console.log(user);

    //     const newCandidate = new Candidate({
    //         sub: user.attributes.sub,
    //         name,
    //         blurb,
    //         email,
    //     });
    //     console.log(newCandidate);
    //     DataStore.save(newCandidate);
    // };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                {/* <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder="What you are looking for" multiline numberOfLines={5} value={blurb} onChangeText={setBlurb}/> */}
                <Pressable onPress={handleRecruiter} style={styles.button1}>
                    <Text>Recruiter</Text>
                </Pressable>
                <Pressable onPress={handleCandidate} style={styles.button2}>
                    <Text>Candidate</Text>
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
    },
    input: {
        margin: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        fontSize: 20,
    },
    button1: {
        backgroundColor: '#89CFF0',
        height: 50,
        width: 150,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    button2: {
        backgroundColor: '#FF5733',
        height: 50,
        right: -180,
        top: -70,
        width: 150,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
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