import { Styleshare } from '@icons-pack/react-simple-icons';
import { Auth, DataStore } from 'aws-amplify';
import React, {isValidElement, useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet, SafeAreaView, Pressable, TextInput,} from 'react-native';
// import {Auth} from 'aws-amplify';

const Profile = () => {
    const [name, setName] = useState('');
    const [blurb, setBlurb] = useState('');
    const [school, setSchool] = useState('');
    const [year, setYear] = useState('');
    const [user, setUser] = useState(null);

    
    const validInput = () => {
        return name && blurb && school && year;
    };

    useEffect(() => {
        const getCurrentUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            const dbUsers = DataStore.query(
                User,
                u => u.sub === user.attributes.sub);
            if (dbUsers.length < 0) {
                return;
            }
            const dbUser = dbUsers[0];
            setName(dbUsers.name);
            setBlurb(dbUsers.blurb);
            setSchool(dbUsers.school);
            setYear(dbUsers.year);
        };
        getCurrentUser();
    }, []);

    const save = async () => {
        if (!validInput()) {
            console.warn('Invalid input');
            return;
        }

        if(user){
            user.name = name;
            user.blurb = blurb;
            user.school = school;
            user.year = year;

            DataStore.save(user);
        }
        else{
            const newCandidate = new Candidate({
                sub: user.attributes.sub,
                name,
                blurb,
                school,
                year,
                image: ''
            });
            console.log(newCandidate);
            DataStore.save(newCandidate);
        }

        Alert.alert("User saved successfully")

        // const user = await Auth.currentAuthenticatedUser();
        // console.log(user);
    }

    const dbUser = dbUser[0];
    setUser(dbUser);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="About you" multiline numberOfLines={5} value={blurb} onChangeText={setBlurb}/>
                <TextInput style={styles.input} placeholder="School" value={school} onChangeText={setSchool}/>
                <TextInput style={styles.input} placeholder="Graduation year" value={year} onChangeText={setYear}/>
                <Pressable onPress={save} style={styles.button}>
                    <Text>Save changes</Text>
                </Pressable>
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
    button: {
        backgroundColor: '#F63A6E',
        height: 35,
        justifyContent: 'center',
        margin: 30,
        alignItems: 'center',
        borderRadius: 20,
    },
});

export default Profile;