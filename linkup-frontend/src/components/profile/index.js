import React from 'react'
import {Text, ImageBackground, View, StyleSheet, Pressable} from 'react-native'


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