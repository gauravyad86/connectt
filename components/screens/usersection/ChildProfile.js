import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import Profile from './Profile';
import { FontAwesome5 } from '@expo/vector-icons';
const { width, height } = Dimensions.get( 'window' );
const ChildProfile = ( { childrenData } ) => {
  // Check if childrenData exists and has data
  if ( !childrenData || childrenData.length === 0 ) {
    return <Text>Child data is unavailable.</Text>;
  }
  const [ index, setIndex ] = useState( 0 );

  const nextProfile = () => setIndex( ( index + 1 ) % childrenData.length );
  const prevProfile = () => setIndex( ( index - 1 + childrenData.length ) % childrenData.length );
  console.log( childrenData, "all childerren data" )
  return (
    <View style={ { alignItems: 'center', } }>
      <Profile profileData={ childrenData[ index ] } totaluser={ childrenData } children={ true } />
      <View style={ styles.buttonContainer }>
      <Pressable style={styles.button} onPress={prevProfile}>
        <FontAwesome5 name="less-than" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.button} onPress={nextProfile}>
        <FontAwesome5 name="greater-than" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default ChildProfile;
const styles = StyleSheet.create( {
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    // paddingHorizontal: 20,
    position: "absolute",
    marginTop: 75,
    height: height * .1
  },
  button: {
    backgroundColor: 'orange', // Button color (adjust as needed)
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
} );