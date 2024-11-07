import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Pressable ,Dimensions} from 'react-native';
import Profile from './Profile';
const { width, height } = Dimensions.get( 'window' );
const ChildProfile = ( { childrenData } ) => {
  // Check if childrenData exists and has data
  if ( !childrenData || childrenData.length === 0 ) {
    return <Text>Child data is unavailable.</Text>;
  }
  const [ index, setIndex ] = useState( 0 );

  const nextProfile = () => setIndex( ( index + 1 ) % childrenData.length );
  const prevProfile = () => setIndex( ( index - 1 + childrenData.length ) % childrenData.length );
console.log(childrenData,"all childerren data")
  return (
    <View style={ { alignItems: 'center',} }>
   
      <Profile profileData={ childrenData[ index ] }  childrenData={childrenData} children={true} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={prevProfile}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={nextProfile}>
          <Text style={styles.buttonText}>{">"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChildProfile;
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    // paddingHorizontal: 20,
    position:"absolute",
    marginTop:60,
    height:height*.1
  },
  button: {
    backgroundColor: '#007BFF', // Button color (adjust as needed)
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
});