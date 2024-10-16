import { Fontisto } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Nav () {

  const navigation = useNavigation()
  return (
    <View style={ styles.navbar }>
      <View style={ styles.icontext }>
        <Pressable ><Fontisto style={ styles.icon } size={ 30 } name='tinder' ></Fontisto></Pressable>
        <Text style={ styles.text }  >tinder</Text>
      </View>
      <View style={ styles.righticons }>
        <Ionicons name="notifications" size={ 24 } style={ styles.sheildicon } color="grey" />
        {/* <FontAwesome6 name="shield" size={25} style={styles.sheildicon}color="grey" /> */ }
        <TouchableOpacity onPress={ ()=>{
          // navigation.navigate("setting")
        } }> <FontAwesome5 name="bars" size={ 24 } style={ styles.sheildicon } color="grey" /></TouchableOpacity>
        <TouchableOpacity onPress={ () => {
          navigation.navigate("setting")
        } }>  <Ionicons name="settings-sharp" size={ 24 } style={ styles.sheildicon } color="grey" /></TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create( {
  navbar: {
    width: '100%',
    height: '6%',
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  righticons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 5,
  },
  icontext: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    //  marginLeft:6,
  },
  text: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },
  icon: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },
  sheildicon: {
    marginRight: 8,
    marginLeft: 15,
  }
} )