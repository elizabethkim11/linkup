import React, {useState, useEffect} from 'react';
import {Text, ImageBackground, View, StyleSheet, Pressable, Image, TouchableOpacity, Alert} from 'react-native'
const Resume = '../../../../assets/data/images/resume.png'

const handleResume = () => {
  console.warn("ok")
};
//style={{ width: 50, height: 50, justifyContent: "left", bottom: 310, left: 10 }}
const Profile = (props) => {

    const {name, image, bio, school, year} = props.user;

    return(
        <View style={styles.profile}>
        <ImageBackground
          source={{
            uri: image,
          }}
          style={styles.headshot}>
            
        </ImageBackground>
        <View style={styles.profileInner}>
          <Text style={styles.name}>{name}</Text>
          {/* <Text>{console.warn(image)}</Text> */}
          <Text style={styles.blurb}>{bio}</Text>
          <Text style={styles.blurb}>{school} {year}</Text>
          {/*<Image source={{uri: resume}} style={{width:50,height:50, zIndex: 999, bottom: 550, justifyContent: 'center', alignItems: 'center', }}></Image>*/}
        </View>
        {/* <Pressable onPress={() => Auth.signIn("username", password )}>
          <Text> Sign In</Text>
        </Pressable>

        <Pressable onPress={() => Auth.signOut()}>
          <Text> Sign Out </Text>
        </Pressable> */}

        </View>
    )
}

const styles = StyleSheet.create({
  resumeButton: {
    backgroundColor: '#b87046',
    height: 50,
    bottom: 310,
    //right: -30,
    width: 70,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 999,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    top: 50,
    backgroundColor: '#2F4961',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  profileInner: {
    padding: 10,
  },
  headshot: { // update to be square on top half of screen to make room for text!
    width: '100%',
    height: '100%',
    borderRadius: 10,
    bottom: 110,
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },
  name: {
    bottom: 110,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
    // textShadowColor: '#000',
    // textShadowOffset: {
    //   width: 1,
    //   height: 1
    // },
    // textShadowRadius: 1,
    // fontFamily: 'Times New Roman',
  },
  blurb: {
    bottom: 108,
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'white',
    lineHeight: 25,
    marginHorizontal: 10,
    // textShadowColor: '#000',
    // textShadowOffset: {
    //   width: .5,
    //   height: .5
    // },
    // textShadowRadius: 1,
    // fontFamily: 'Times New Roman'
  }
});


  export default Profile;