import React from 'react'
import {Text, ImageBackground, View, StyleSheet} from 'react-native'

const Profile = () => {
    return(
        <View style={styles.profile}>
        <ImageBackground
          source={{
            uri: 'https://static.boredpanda.com/blog/wp-content/uploads/2019/07/1-5d2cd2a0ac058__880.jpg'
          }}
          style={styles.headshot}>
          <View style={styles.profileInner}>
            <Text style={styles.name}>sir meowington</Text>
            <Text style={styles.blurb}>cute kitty</Text>
          </View>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
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
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  blurb: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
    marginHorizontal: 10,
  }
});


  export default Card;