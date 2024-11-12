import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, TouchableOpacityBase } from 'react-native';
import { useNavigation } from 'expo-router';

import connectlogo from "@/assets/images/connect2.jpg";
import { MyContext } from '../MyContext';

const { width, height } = Dimensions.get('window');
const lightTheme = "white";



import Bottombar from './Bottombar/bottombar';
import ParentProfile from "@/components/screens/usersection/ParentProfile";
import ChildProfile from "@/components/screens/usersection/ChildProfile";
import Data from '@/assets/data/Data';

const UserInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const { bgColor, lightTheme, lightColor, setUser } = useContext(MyContext);
  const [showParent, setShowParent] = useState(true); // Toggle state
  const [activeTab, setActiveTab] = useState('Parent Profile');

  // Access parent data at current index and its children data
  const parentData = Data.parentUsers[currentIndex] || {};
  const childrenData = parentData.children || []; //

  return (
    <View style={styles.container}>
      <View style={[styles.navbar, { backgroundColor: lightTheme }]}>
        <View style={styles.icontext}>
          <Image source={connectlogo} style={{ height: 30, width: 30 }} />
          <Text style={[styles.text, { color: "#FF8C00" }]}>Connect</Text>
        </View>
       
        <View style={ styles.righticons }>
                <TouchableOpacity onPress={ () => navigation.navigate( 'notifications' ) }>
                            <Ionicons name="notifications" size={ 26 } style={ styles.sheildicon } color={ bgColor } />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => setUser( false ) }>
             <AntDesign name="logout" size={24} color="orange"style={ styles.sheildicon } />
        </TouchableOpacity>
         </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => {
          setShowParent(true);
          setActiveTab('Parent Profile');
        }}>
          <Text style={[styles.tabText2, activeTab === 'Parent Profile' && styles.activeTab]}>Parent Profile</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity onPress={() => {
          setShowParent(false);
          setActiveTab('Child Profile');
        }}>
          <Text style={[styles.tabText, activeTab === 'Child Profile' && styles.activeTab]}>Child Profile</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {showParent ? (
          <ParentProfile parentData={parentData} />
        ) : (
          <ChildProfile childrenData={parentData.children} />
        )}
      </ScrollView>

      <Bottombar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  navbar: {
    width: '100%',
    height: height * 0.07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    top: 0,
    padding: 10,
  },
  scrollContent: {
    paddingBottom: 70,
    alignItems: 'center',
  },
  icontext: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },
  tabs: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 , marginTop:60, backgroundColor:"white", height:height*.05, justifyContent:"center", alignItems:"center"},
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
    height:height*.035
  },
  tabText: {
    fontSize: 17,
    fontWeight: "bold",
     marginLeft:25,
    color: 'grey',
  },
  tabText2: {
    fontSize: 17,
    fontWeight: "bold",
     marginRight:25,
    color: 'grey',
  },
  activeTab: {
    color: '#FF8C00',
  },
  actionButtonsBelowProfile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  sheildicon: {
    marginLeft: 25,
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
  righticons: {
    flexDirection: "row",
    alignItems: "center",
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
});

export default UserInfo;
