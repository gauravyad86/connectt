
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';

import connectlogo from "@/assets/images/connect2.jpg";
import { MyContext } from '../MyContext';


const { width, height } = Dimensions.get( 'window' );
const lightTheme = "white";
import data from "./usersection/Data"
import Bottombar from './Bottombar/bottombar';
import ParentProfile from "@/components/screens/usersection/ParentProfile"
import ChildProfile from "@/components/screens/usersection/ChildProfile"
const UserInfo = () => {
  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const navigation = useNavigation();
  const { bgColor, lightTheme, lightColor, setUser } = useContext( MyContext );
  const [ showParent, setShowParent ] = useState( true ); // Toggle state
  const [ activeTab, setActiveTab ] = useState( 'Parent Profile' );

  console.log( data.parentUser )

  return (
    <View style={ styles.container }>
      <View style={ [ styles.navbar, { backgroundColor: lightTheme } ] }>
        <View style={ styles.icontext }>
          <Image source={ connectlogo } style={ { height: 25, width: 25 } } />
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

      <View style={ styles.tabs }>
        <TouchableOpacity onPress={ () => {
          setShowParent( true )
          setActiveTab( 'Parent Profile' )
        } }>
          <Text style={ [ styles.tab, activeTab === 'Parent Profile' && styles.activeTab ] }>Parent Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => {
          setShowParent( false )
          setActiveTab( 'Child Profile' )
        } }>
          <Text style={ [ styles.tab, activeTab === 'Child Profile' && styles.activeTab ] }>Child Profile
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={ styles.scrollContent }>
        { showParent ? (
          <ParentProfile parentData={ data.parentUser } />
        ) : (
          <ChildProfile childrenData={ data.parentUser.children } />
        ) }
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
    height: height * .07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    top: 0,
    padding: 10,
  },
  scrollContent: {
    // paddingTop: 70,
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
    fontWeight: "bold"
  },
  settingSection: {
    width: "100%",
    height: 40,
    // paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
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
  tabs: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingBottom:10, },
  tab: { marginHorizontal: 10, fontSize: 16, color: 'gray' },
  activeTab: { color: 'orange', borderBottomColor: 'orange', },
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

// import React, { useContext, useState } from 'react';
// import connectlogo from "@/assets/images/connect2.jpg"
// import { View, Text, Button, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
// import { Entypo, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { MyContext } from '../MyContext';
// import data from "./usersection/Data"
// import Bottombar from './Bottombar/bottombar';
// import ParentProfile from "@/components/screens/usersection/ParentProfile"
// import ChildProfile from "@/components/screens/usersection/ChildProfile"
// const { width, height } = Dimensions.get( 'window' );
// const UserInfo = () => {
// const [ showParent, setShowParent ] = useState( true ); // Toggle state
// const [ activeTab, setActiveTab ] = useState( 'Parent Profile' );

// const { lightTheme, bgColor } = useContext( MyContext )
// console.log( data.parentUser )
//   return (
//     <View style={ styles.container }>
//       {/* Header */ }
//       <View style={ [ styles.navbar, { backgroundColor: lightTheme } ] }>
//         <View style={ styles.icontext }>
//           <Image source={ connectlogo } style={ { height: 25, width: 25 } } />
//           <Text style={ [ styles.text, { color: "#FF8C00" } ] }>Connect</Text>
//         </View>
//         <View style={ styles.righticons }>
//           <TouchableOpacity onPress={ () => navigation.navigate( 'setting' ) } style={ { marginLeft: 25 } }>
//             <Ionicons name="settings" size={ 25 } color={ bgColor } />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={ () => setUser( false ) } style={ { marginLeft: 25 } }>
//             <Entypo name="log-out" size={ 25 } color={ bgColor } />
//           </TouchableOpacity>
//         </View>
//       </View>
// <View style={ styles.tabs }>
//   <TouchableOpacity onPress={ () => {
//     setShowParent( true )
//     setActiveTab( 'Parent Profile' )
//   } }>
//     <Text style={ [ styles.tab, activeTab === 'Parent Profile' && styles.activeTab ] }>Parent Profile
//     </Text>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={ () => {
//     setShowParent( false )
//     setActiveTab( 'Child Profile' )
//   } }>
//     <Text style={ [ styles.tab, activeTab === 'Child Profile' && styles.activeTab ] }>Child Profile
//     </Text>
//   </TouchableOpacity>
// </View>

// {/*
// { showParent ? (
//   <ParentProfile parentData={ data.parentUser } />
// ) : (
//   <ChildProfile childrenData={ data.parentUser.children } />
// ) } */}
//       <Bottombar />
//     </View>
//   );
// };

// export default UserInfo;

// const styles = StyleSheet.create( {
//   container: { flex: 1, backgroundColor: '#fff', justifyContent: "center" },
//   navbar: {
//     width: '100%',
//     height: height * .07,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "absolute",
//     zIndex: 10,
//     top: 0,
//     padding: 10,
//   },
//   icontext: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   text: {
//     color: "red",
//     marginLeft: 6,
//     fontSize: 22,
//     fontWeight: "500",
//   },
// tabs: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', },
// tab: { marginHorizontal: 10, fontSize: 16, color: 'gray' },
// activeTab: { color: 'orange',  borderBottomColor: 'orange', },
//   righticons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   sheildicon: {
//     marginLeft: 25,
//   },


// } );
