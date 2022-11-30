import { Styleshare, Whitesource } from '@icons-pack/react-simple-icons';
import { Auth, DataStore } from 'aws-amplify';
import React, {isValidElement, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable, TextInput, Alert,} from 'react-native';
import Home from 'linkup/linkup-frontend/src/screens/Home.js';
import {Recruiter} from '../../../src/models';

const Recruiters = ({navigation}) => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //         const user = await Auth.currentAuthenticatedUser();
    //         const dbUsers = DataStore.query(
    //             User,
    //             Recruiter,
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
    // if (activeScreen == 'Swipe' &&) {
    //     console.warn('Invalid input');
    //     return;
    // }
    //         setCompany(dbUsers.company);
    //     };
    //     getCurrentUser();
    // }, []);

    const validInput = () => {
        return company;
    };

    const handleSwipe = () => {
          navigation.navigate("Home");
      };

    const handleInfo = () => {
        navigation.navigate("Recruiter");
    };

    const save = async () => {
        // if (!validInput()) {
        //     console.warn('Invalid input');
        //     return;
        // }

        const recruiter = await Auth.currentAuthenticatedUser();

        const newRecruiter = new Recruiter({
            Company: 'company',
            Name: 'name',
            sub: recruiter.attributes.sub,
            Type: 'Recruiter'
        });

        // const user = await Auth.currentAuthenticatedUser();
        // Alert.alert("User saved successfully");
        console.log(newRecruiter);
        await DataStore.save(new Recruiter({
            Company: company,
            Name: name,
            sub: recruiter.attributes.sub,
            Type: 'Recruiter'
        }));
        Alert.alert('Recruiter successfully created!');
        

        const test = await DataStore.query(
            Recruiter,
            u => u.Company.eq('apple')
        );


        // async function updatePost(id, newTitle) {
        //     try{
        //     const original = await DataStore.query(Recruiter, id);
        //     await DataStore.save(
        //       Post.copyOf(original, updated => {
        //         updated.title = newTitle
        //       })
        //     );
        //     }
        //     catch{
        //         throw error; 
        //     }
        // }

        const newCandidate = new Recruiter({
            sub: user.attributes.sub,
            company,
        });
        console.log(newCandidate);
        DataStore.save(newCandidate);
    };

    return (
        
        <SafeAreaView style={styles.root}>

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Company name" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholder="Company logo image link address" value={company} onChangeText={setCompany}/>
                <Pressable onPress={save} style={styles.save_button}>
                    <Text style={styles.savetext}>Save changes</Text>
                </Pressable>
            </View>

            <View style={styles.pageContainer}>
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
            <View>
                <Pressable onPress={() => Auth.signOut()} style={styles.signout_button}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Sign Out</Text>
                </Pressable>
            </View>
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
        flex: 2,
        
    },
    pageContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    input: {
        margin: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        fontSize: 20,
        lineHeight: 50,
    },
    savetext: {
        color: 'white',
        fontWeight: 'bold'
    },
    save_button: {
        top: 50,
        backgroundColor: '#2F4961',
        height: 40,
        width: 200,
        justifyContent: 'center',
        margin: 5,
        left: 75,
        right: 20,
        alignItems: 'center',
        borderRadius: 20,
    },
    nav_button1: {
        backgroundColor: '#b6c0e3',
        height: 35,
        width: 100,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    nav_button2: {
        backgroundColor: '#6c7868',
        height: 35,
        width: 100,
        justifyContent: 'center',
        alignSelf: "flex-start",
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    signout_button: {
        backgroundColor: '#661624',
        height: 35,
        width: 100,
        justifyContent: 'center',
        alignSelf: "flex-start",
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
});

export default Recruiters;