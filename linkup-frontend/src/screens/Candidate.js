import { Styleshare } from '@icons-pack/react-simple-icons';
import { Auth, DataStore } from 'aws-amplify';
import React, {isValidElement, useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet, SafeAreaView, Pressable, TextInput,} from 'react-native';
import {User} from '../../../src/models';

const Candidates = ({navigation}) => {
    const [name, setName] = useState('');
    const [blurb, setBlurb] = useState('');
    const [school, setSchool] = useState('');
    const [year, setYear] = useState('');
    const [headshot, setHeadshot] = useState('');
    const [resume, setResume] = useState('');
    // const [user, setUser] = useState(null);

    
    const validInput = () => {
        return name && blurb && school && year && headshot && resume;
    };

    const handleCandidate = () => {
        navigation.navigate("Candidate");
    };

    const handleNotifs = () => {
      navigation.navigate("Notifs");
    };

    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //         const user = await Auth.currentAuthenticatedUser();
    //         const dbUsers = DataStore.query(
    //             User,
    //             u => u.sub === user.attributes.sub);
    //         if (dbUsers.length < 0) {
    //             return;
    //         }
    //         // const dbUser = dbUsers[0];
    //         setName(dbUsers.name);
    //         setBlurb(dbUsers.blurb);
    //         setSchool(dbUsers.school);
    //         setYear(dbUsers.year);
    //     };
    //     getCurrentUser();
    // }, []);

    const save = async () => {
        if (!validInput()) {
            console.warn('Invalid input');
            return;
        }

        const candidate = await Auth.currentAuthenticatedUser();

        const newCandidate = new User({
            name: name,
            image: headshot,
            bio: blurb,
            resume: resume,
            school: school,
            year: year,
            Type: 'Candidate',
            sub: candidate.attributes.sub
        });

        console.log(newCandidate);
        await DataStore.save(newCandidate);
        Alert.alert('Candidate successfully created!');
        

        const test = await DataStore.query(
            User,
            u => u.Company.eq('apple')
        );

    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="About you" multiline numberOfLines={5} value={blurb} onChangeText={setBlurb}/>
                <TextInput style={styles.input} placeholder="School" value={school} onChangeText={setSchool}/>
                <TextInput style={styles.input} placeholder="Graduation year" value={year} onChangeText={setYear}/>
                <TextInput style={styles.input} placeholder="Headshot image link address" value={headshot} onChangeText={setHeadshot}/>
                <TextInput style={styles.input} placeholder="Resume image link address" value={resume} onChangeText={setResume}/>
                <Pressable onPress={save} style={styles.button}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>Save changes</Text>
                </Pressable>
            </View>
            <View style={styles.pageContainer}>
            <View>
                <Pressable onPress={handleNotifs} style={styles.nav_button1}>
                    <Text style={{fontWeight: 'bold'}}>Notifications</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={handleCandidate} style={styles.nav_button2}>
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
        flex: 2,
        padding: 10,
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
    button: {
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
        width: 110,
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

export default Candidates;