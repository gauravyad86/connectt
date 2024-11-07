import React, { useState } from 'react';
import { View, Button ,StyleSheet, Pressable, Text, Dimensions} from 'react-native';
import Profile from './Profile';
const { width, height } = Dimensions.get( 'window' );
const ParentProfile = ({ parentData }) => {
  const [index, setIndex] = useState(0);
  const profiles = [parentData, ...parentData.subParents]; // Combine parent and sub-parents

  const nextProfile = () => setIndex((index + 1) % profiles.length);
  const prevProfile = () => setIndex((index - 1 + profiles.length) % profiles.length);
  console.log(parentData.subParents,"all parent data")
  return (
    <View style={{ alignItems: 'center' }}>
      <Profile profileData={profiles[index]} childrenData={parentData} children={false} />
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

export default ParentProfile;
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    // paddingHorizontal: 20,
    position:"absolute",
    marginTop:60
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