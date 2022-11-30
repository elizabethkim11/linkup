import React from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native'
import companies from 'linkup/assets/data/companies.js'

const Notifs = ({navigation}) => {
    return (
        <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: '#F63A6E'}}>
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
      borderColor: '#F63A6E',
    },
    logo: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
  });

export default Notifs;