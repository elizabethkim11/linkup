import React from 'react'
import {View, Text, Alert, StyleSheet, SafeAreaView, Pressable, TextInput, Image} from 'react-native';
// import companies from 'linkup/assets/data/companies.js';
import { DataStore } from 'aws-amplify';
import {Recruiter} from '../../../src/models';

const Notifs = ({navigation}) => {

  const handleCandidate = () => {
    navigation.navigate("Candidate");
  };

  const handleNotifs = () => {
  navigation.navigate("Notifs");
  };

    return (
        <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: '#2F4961'}}>
            Potential Job Opportunities{"\n"}
          </Text>
          <View style={styles.companies}>
            {companies.map(company => (
              <View style={styles.company} key={company.companyID}>
                <Image source={{uri: company.logo}} style={styles.logo} />
              </View>
            ))}
          </View>
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
      padding: 20,
    },
    pageContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
  },
    companies: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    company: {
      width: 100,
      height: 100,
      margin: 5,
      borderRadius: 100,
  
      borderWidth: 3.2,
      padding: 7,
      borderColor: '#2F4961',
    },
    logo: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    nav_button1: {
      backgroundColor: '#b6c0e3',
      height: 35,
      width: 120,
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

export default Notifs;