// import companies from 'linkup/assets/data/companies.js';
import { DataStore } from 'aws-amplify';
import {Recruiter} from '../../../src/models';
import {View, Text, Alert, StyleSheet, SafeAreaView, Pressable, TextInput, Image, Switch} from 'react-native';
import companies from 'linkup/assets/data/companies.js'
import React, { useEffect, useState } from "react";

const Notifs = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [currCompanies, setCurrCompanies] = useState([]);

  var test = [];
  useEffect(()=>{
    const fetchUser = async () => {
      test = await DataStore.query(Recruiter);
      setCurrCompanies(await DataStore.query(Recruiter))
    }
    fetchUser();
  }, []);

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
            Potential Jobs
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#2F4961'}}> 
            {"\n"}Only show companies{"\n"}that have swiped right:
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{bottom: 35, left: 230}}
          />
          <View style={styles.companies}>
            {currCompanies.map(company => (
              <View style={styles.company} key={company.Name}>
                <Image source={{uri: company.Company}} style={styles.logo} />
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
      justifyContent: 'center',
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