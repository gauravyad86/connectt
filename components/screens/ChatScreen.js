
import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import { MyContext } from '../MyContext';
import users from '@/assets/data/users';
import connectlogo from "@/assets/images/connect2.jpg";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Bottombar from './Bottombar/bottombar';
import { FontAwesome6 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Chatscreen() {
  const { bgColor, lightTheme, lightColor } = useContext(MyContext);
  const [filteredData, setFilteredData] = useState(users);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = query
      ? users.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
      : users;
    setFilteredData(filtered);
  };

  return (
    <View style={[styles.root, { backgroundColor: lightTheme }]}>
      <View style={styles.navbar}>
        <View style={styles.icontext}>
          <Image source={connectlogo} style={{ height: 25, width: 25 }} />
          <Text style={[styles.text, { color: "#FF8C00" }]}>Connect</Text>
        </View>
        <TouchableOpacity style={ styles.righticons } onPress={ () => {
            navigation.navigate( "shield" )
          } }>
            <FontAwesome6 name="shield" size={ 25 } style={ styles.sheildicon } color={ bgColor } />
          </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.searchBox}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <View style={styles.messHeading}>
        <Text style={[styles.messagetext, { color: lightColor }]}>Messages</Text>
        <Text style={[styles.messagetext, { color: bgColor }]}>({filteredData.length})</Text>
      </View>

      <ScrollView style={styles.users}>
        {filteredData.map((user) => (
          <TouchableOpacity key={user.id} onPress={() => navigation.navigate("chatsection")}>
            <View style={styles.mess}>
              <Image source={{ uri: user.image }} style={styles.image} />
              <View style={styles.messageContent}>
                <Text style={[styles.name, { color: lightColor }]}>{user.name}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
                <View style={styles.underline} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Bottombar />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: 'transparent',
    width: '100%',
    height: height*.07,
    // backgroundColor: "white",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // position: "absolute",
    zIndex: 10,
    // top:0,
    // padding:10,

  },
  searchBox: {
    height: 40,
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    width: "95%",
    marginLeft: 10,
    paddingLeft: 4,
  },
  messHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  messagetext: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 5,
  },
  users: {
    flex: 1,
    paddingHorizontal: 10,
  },
  mess: {
    width: width - 20,
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
  },
  bio: {
    fontSize: 13,
  },
  messageContent: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 12,
    flex: 1,
  },
  underline: {
    borderBottomColor: '#555962',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    flex: 1,
  },
  icontext: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },
});
