import { Styleshare } from '@icons-pack/react-simple-icons';
import { Auth, DataStore } from 'aws-amplify';
import React, {isValidElement, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable, TextInput,} from 'react-native';
// import {Auth} from 'aws-amplify';

const Company = () => {
    const [companyName, setCompanyName] = useState('');

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
    
    const validInput = () => {
        return companyName;
    };

    const save = async () => {
        if (!validInput()) {
            console.warn('Invalid input');
            return;
        }

        // const user = await Auth.currentAuthenticatedUser();
        // console.log(user);

        const newCompany = new Company({
            sub: user.attributes.sub,
            companyName,
            image: ''
        });
        console.log(newCompany);
        DataStore.save(newCompany);
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Company name" value={companyName} onChangeText={setCompanyName}/>
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

export default Company;