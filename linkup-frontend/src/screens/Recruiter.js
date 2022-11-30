import { Styleshare } from '@icons-pack/react-simple-icons';
import { Auth, DataStore } from 'aws-amplify';
import React, {isValidElement, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable, TextInput,} from 'react-native';
import Home from 'linkup/linkup-frontend/src/screens/Home.js';


const Recruiter = ({navigation}) => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    useEffect(() => {
        const getCurrentUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            const dbUsers = DataStore.query(
                Recruiter,
                u => u.sub === user.attributes.sub);
            if (dbUsers.length < 0) {
                return;
            }
            const dbUser = dbUsers[0];
            setName(dbUsers.name);
            setCompany(dbUsers.company);
        };
        getCurrentUser();
    }, []);

    const validInput = () => {
        return name && company;
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
            Company: '',
            Name: '',
            sub: recruiter.attributes.sub,
            Type: 'Recruiter'
        });

        // const user = await Auth.currentAuthenticatedUser();
        Alert.alert("User saved successfully");
        console.log(newRecruiter);
        DataStore.save(newRecruiter);

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

    };

    return (
        
        <SafeAreaView style={styles.root}>

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="Company" value={company} onChangeText={setCompany}/>
                <Pressable onPress={save} style={styles.save_button}>
                    <Text>Save changes</Text>
                </Pressable>
            </View>

            <View style={styles.pageContainer}>
            <View>
                <Pressable onPress={handleSwipe} style={styles.nav_button1}>
                    <Text>Swipe</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={handleInfo} style={styles.nav_button2}>
                    <Text>My Profile</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => Auth.signOut()} style={styles.signout_button}>
                    <Text>Sign Out</Text>
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
    },
    save_button: {
        backgroundColor: '#F63A6E',
        height: 35,
        justifyContent: 'center',
        margin: 5,
        alignItems: 'center',
        borderRadius: 20,
    },
    nav_button1: {
        backgroundColor: '#89CFF0',
        height: 35,
        width: 100,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    nav_button2: {
        backgroundColor: '#89CFF0',
        height: 35,
        width: 100,
        justifyContent: 'center',
        alignSelf: "flex-start",
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    signout_button: {
        backgroundColor: '#AA0000',
        height: 35,
        width: 100,
        justifyContent: 'center',
        alignSelf: "flex-start",
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
});

export default Recruiter;