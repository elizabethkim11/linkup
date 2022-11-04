// import React from 'react'
// import {Text, ImageBackground, View, StyleSheet} from 'react-native'

// const Profile = (props) => {
//     const {name, headshot, blurb} = props; // add school, year, major
//     return (
//         <View style={styles.profile}>
//             <ImageBackground
//                 source={{
//                     uri: headshot,
//                 }}
//                 style={styles.headshot}>
//                 <View style={styles.profileInner}>
//                     <Text style={styles.name}>{name}</Text>
//                     <Text style={styles.blurb}>{blurb}</Text>
//                 </View>
//             </ImageBackground>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     profile: {
//       width: '100%',
//       height: '100%',
//       borderRadius: 10,
//       backgroundColor: '#fefefe',
  
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 5,
//       },
//       shadowOpacity: 0.36,
//       shadowRadius: 6.68,
  
//       elevation: 11,
//     },

//     headshot: {
//       width: '100%',
//       height: '100%',
//       borderRadius: 10,
//       overflow: 'hidden',
  
//       justifyContent: 'flex-end',
//     },

//     profileInner: {
//       padding: 10,
//     },

//     name: {
//       fontSize: 30,
//       color: 'white',
//       fontWeight: 'bold',
//     },

//     blurb: {
//       fontSize: 18,
//       color: 'white',
//       lineHeight: 25,
//     },
//   });

//   export default Profile;