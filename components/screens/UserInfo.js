
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import Bottombar from './Bottombar/bottombar';
import connectlogo from "@/assets/images/connect2.jpg";
import { MyContext } from '../MyContext';


const { width, height } = Dimensions.get( 'window' );
const lightTheme = "white";

const UserInfo = () => {
  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const navigation = useNavigation();
  const { bgColor, lightTheme, lightColor, setUser } = useContext( MyContext );

  return (
    <View style={ styles.container }>
      <View style={ [ styles.navbar, { backgroundColor: lightTheme } ] }>
        <View style={ styles.icontext }>
        <Image source={connectlogo} style={{ height: 25, width: 25 }} />
          <Text style={ [ styles.text, { color: "#FF8C00" } ] }>Connect</Text>
        </View>
        {/* <View style={ styles.righticons }>
          <TouchableOpacity onPress={ () => navigation.navigate( 'setting' ) } style={ { marginLeft: 25 } }>
            <Ionicons name="settings" size={ 25 } color={ bgColor } />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => setUser( false ) } style={ { marginLeft: 25 } }>
            <Entypo name="log-out" size={ 25 } color={ bgColor } />
          </TouchableOpacity>
        </View> */}
      </View>

      {/* Scrollable Content */ }
      <ScrollView contentContainerStyle={ styles.scrollContent }>
        {/* Profile Section */ }
        <View style={ styles.profileSection }>
          <View style={ styles.profilePicContainer }>
            <Image
              source={ { uri: 'https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain' } }
              style={ styles.profilePic }
            />
          </View>
          <View style={ styles.progressContainer }>
            <Text style={ styles.progressText }>10% COMPLETE</Text>
          </View>
          <Text style={ [ styles.profileName, { color: lightColor } ] }>Boss, 20</Text>

          {/* Logout and Edit Buttons */ }
          <View style={ styles.actionButtonsBelowProfile }>
            <TouchableOpacity style={ [ styles.button, { backgroundColor: bgColor } ] } onPress={ () => setUser( false ) }>
              <Text style={ styles.buttonText }>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [ styles.button, { backgroundColor: bgColor } ] } onPress={ () => navigation.navigate( 'editprofile' ) }>
              <Text style={ styles.buttonText }>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */ }
        <View style={ styles.actionButtons }>
          <TouchableOpacity style={ [ styles.useractiveicons, { backgroundColor: lightTheme } ] } onPress={ () => navigation.navigate( 'getsuperlikes' ) }>
            <FontAwesome name="star" size={ 25 } color="#1597fa" />
            <Text style={ styles.actionText }>GET MORE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ [ styles.useractiveicons, { backgroundColor: lightTheme } ] } onPress={ () => navigation.navigate( 'subsription' ) }>
             <Image source={connectlogo} style={{ height: 25, width: 25 }} />
            <Text style={ [ styles.actionText, { color: bgColor } ] }>SUBSCRIPTIONS</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={ styles.settingSection }>
          <Text style={ styles.label }>Discover</Text>
        </View> */}
        {/* <Discovery /> */}
      </ScrollView>
      <Bottombar />
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  navbar: {
    width: '100%',
    height: height*.07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    top: 0,
    padding: 10,
  },
  scrollContent: {
    paddingTop: 70,
    paddingBottom: 70,
    alignItems: 'center',
  },
  righticons: {
    flexDirection: "row",
  },
  label: {
    fontSize: 20,
    color: "black",
    marginLeft: 0,
    fontWeight:"bold"
  },
  settingSection: {
    width:"100%",
    height:40,
    // paddingHorizontal: 10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: lightTheme,
  },
  icontext: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 22,
    width: 22,
  },
  text: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },
  profileSection: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "95%",
    marginBottom: 10,
    backgroundColor: lightTheme,
    height: 300,
  },
  profilePicContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    backgroundColor: '#ff5b5b',
    borderRadius: 5,
    padding: 4,
    marginTop: 3,
  },
  progressContainer: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  progressText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  actionButtonsBelowProfile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FF8C00',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  useractiveicons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    backgroundColor: "#111419",
    borderRadius: 10,
    height: 80,
  },
  actionText: {
    color: '#1597fa',
    fontSize: 13,
  },
} );

export default UserInfo;
