import React from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native'
import companies from 'linkup/assets/data/companies.js'

const Notifs = () => {
    return (
        <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>
            Potential Job Opportunities
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
      padding: 10,
    },
    companies: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    company: {
      width: 100,
      height: 100,
      margin: 10,
      borderRadius: 50,
  
      borderWidth: 2,
      padding: 3,
      borderColor: '#F63A6E',
    },
    logo: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
  });

export default Notifs;