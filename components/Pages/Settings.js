
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import DiscoverySettings from './DiscoverySetting';
import { useNavigation } from 'expo-router';
import Discovery from './Discovery';

const { height } = Dimensions.get( 'window' );
const bgColor="#FFA500";
const lightTheme="white";
const lightColor="black"


const Settings = () => {
  const subscriptionOptions = [
    {
      title: 'Connect Platinum',
      description: 'Priority Likes, See Who Likes You & More!',
      icon: <Fontisto name="tinder" size={ 20 } color="black" />,
      navigateTo: 'platinumsub',
    },
    {
      title: 'Connect Gold',
      description: 'See Who Likes You & More!',
      icon: <Fontisto name="tinder" size={ 20 } color={bgColor}/>,
      navigateTo: 'seewholikeyoumore',
    },
    {
      title: 'Connect Plus',
      description: 'Unlimited Likes & More!',
      icon: <Fontisto name="tinder" size={ 20 } color="#FF4500" />,
      extraIcon: <AntDesign name="plus" size={ 20 } color="red" />,
      navigateTo: 'redsubscription',
    },
  ];

  const actionButtons = [
    {
      title: 'Get Super Likes',
      icon: <FontAwesome name="star" size={ 20 } color="#1597fa" />,
      navigateTo: 'getsuperlikes',
    },
    {
      title: 'Get Boosts',
      icon: <FontAwesome name="flash" size={ 20 } color="#c145ec" />,
      navigateTo: 'boostscreen',
    },
  ];
  const navigation = useNavigation();

  return (
    <ScrollView style={ styles.container } contentContainerStyle={ { flexGrow: 1 } } vertical={ true }>
      <TouchableOpacity style={ styles.header } onPress={ () => navigation.goBack() }>
        <Ionicons name="arrow-back" size={ 24 } color="black"  Style={{marginLeft:10}}/>
        <Text style={ { color: "black", marginLeft: "25%", fontSize: 18 , fontWeight:"bold"} }>Settings</Text>
      </TouchableOpacity>
      <View style={ styles.subscriptionSection }>
        { subscriptionOptions.map( ( option, index ) => (
          <TouchableOpacity
            key={ index }
            style={ styles.subscriptionOption }
            onPress={ () => navigation.navigate( option.navigateTo ) }
          >
            <View style={ styles.box }>
              { option.icon }
              <Text style={ styles.optionTitle }>{ option.title }</Text>
              { option.extraIcon }
            </View>
            <Text style={ styles.optionDesc }>{ option.description }</Text>
          </TouchableOpacity>
        ) ) }
      </View>

      <View style={ styles.actionSection }>
        { actionButtons.map( ( button, index ) => (
          <TouchableOpacity
            key={ index }
            style={ styles.actionButton }
            onPress={ () => navigation.navigate( button.navigateTo ) }
          >
            <View style={ styles.buttons2 }>{ button.icon }</View>
            <Text style={ styles.actionText }>{ button.title }</Text>
          </TouchableOpacity>
        ) ) }
      </View>

      <TouchableOpacity style={ styles.incognito }>
        <View style={ styles.buttons2 }>
          <Entypo name="eye-with-line" size={ 22 } color="grey" />
        </View>
        <Text style={ styles.optionTitle }>Go Incognito</Text>
      </TouchableOpacity>

      <Text style={ { color: "black", paddingHorizontal: 10, fontSize: 17, marginBottom: 5, fontWeight: "500" } }>
       Discovery Settings
      </Text>
      <Discovery showHeader={ false }/>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: lightTheme,
    paddingBottom:30,
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    height: 60,
    // backgroundColor: "#111419",
    // color: "white",
    // backgroundColor: bgColor, // Light mode header background
    color: lightColor,
    backgroundColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -6,
    marginBottom: 10,
  },
  subscriptionSection: {
    marginBottom: 20,
  },
  subscriptionOption: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 10,
    // backgroundColor: "#111419",
    // backgroundColor: bgColor,
    backgroundColor: "#ccc",
    borderRadius: 2,
    height: height * 0.1,
  },
  icon: {
    marginRight: 5,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: '600',
    // color: "white",
    color: lightColor,
    marginLeft: 5,
  },
  optionDesc: {
    fontSize: 12,
    color: lightColor
  },
  actionSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: "8%",

  },
  actionButton: {

    // backgroundColor: "#111419",
    backgroundColor: "#ccc",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "49%",
    height: height * 0.12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  actionText: {
    color: '#1597fa',
    fontSize: 13,
    fontWeight:"bold"
  },
  buttons: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 20,
    height: 20,
    padding: 7,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttons2: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'white',
  },
  incognito: {
    // backgroundColor: "#111419",
    backgroundColor: "#ccc",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "5%",
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  }
} );

export default Settings;
