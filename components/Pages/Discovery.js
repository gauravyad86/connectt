
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
const { width, height } = Dimensions.get( 'window' );
const lightTheme = "white";
const lightColor = "black"
const bgColor = "#FFA500";
export default function Discovery ( props ) {
  const { showHeader } = props;
  const [ maxDistance, setMaxDistance ] = useState( 5 );
  const [ ageRange, setAgeRange ] = useState( [ 29, 55 ] );
  const [ photo, setPhoto ] = useState( 0 );
  const [ showOnTinder, setShowOnTinder ] = useState( true );
  const [ lookingFor, setLookingFor ] = useState( 'Women' );
  const [ notifications, setNotifications ] = useState( {
    newMatches: 'Select',
    messages: 'Select',
    messageLikes: 'Select',
    superLikes: 'Select',
  } );

  const navigation = useNavigation();

  return (
    <>
      { showHeader && (
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <View style={ styles.header }>
            <Ionicons name="arrow-back" size={ 24 } color={ bgColor } />
            <Text style={ styles.headerText }>Discovery Settings</Text>
          </View>
        </TouchableOpacity>
      ) }

      {/* Maximum Distance */ }
      <View style={ styles.settingSection }>
        <View style={ styles.settingRow2 }>
          <Text style={ styles.label }>Maximum distance</Text>
          <Text style={ styles.sliderValue }>{ maxDistance } km</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 1 }
          maximumValue={ 100 }
          step={ 1 }
          value={ maxDistance }
          onValueChange={ value => setMaxDistance( value ) }
          minimumTrackTintColor="#FFA500"
          thumbTintColor="black"
        />
        <View style={ styles.settingRow2 }>
          <Text style={ styles.subLabel }>Show people further away if I run out of profiles to see</Text>
          <Switch
            value={ showOnTinder }
            onValueChange={ () => setShowOnTinder( !showOnTinder ) }
            trackColor={ { false: '#767577', true: '#FFA500' } }
            thumbColor={ showOnTinder ? '#FF495C' : 'black' }
          />
        </View>
      </View>

      {/* Looking For */ }
      <View style={ styles.settingSection }>
      <View style={ styles.settingRow2}>
        <Text style={ styles.label }>Show me</Text>
        </View>
        <TouchableOpacity onPress={ () => navigation.navigate( "lookingforwomen" ) }>
          <Ionicons name="chevron-forward" size={ 24 } color="#656f7b" />
        </TouchableOpacity>
      </View>

      {/* Age Range */ }
      <View style={ styles.settingSection }>
        <View style={ styles.settingRow2}>
          <Text style={ styles.label }>Age range</Text>
          <Text style={ styles.sliderValue }>{ ageRange[ 0 ] } - { ageRange[ 1 ] }+</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 18 }
          maximumValue={ 100 }
          step={ 1 }
          value={ ageRange[ 0 ] }
          onValueChange={ value => setAgeRange( [ value, ageRange[ 1 ] ] ) }
          minimumTrackTintColor="#FFA500"
          thumbTintColor="black"
        />
        <Text style={ styles.subLabel }></Text>
      </View>

      <Text style={ styles.infoText }>
        Tinder uses these preferences to suggest matches. Some match suggestions may not fall within your desired parameters.
      </Text>

      {/* Notifications */ }
      <Text style={ styles.sectionHeader }>Premium Discovery</Text>
      { [ 'New matches', 'Add languages', 'Open to', 'Zodiac', 'Education', 'Family Plans', 'COVID Vaccine', 'Personality Type', 'Communication Style', 'Love Style', 'Pet', 'Drinking', 'Smoking', 'Workout', 'Dietary Preference', 'Social Media', 'Sleeping Habits' ].map( ( label, index ) => (
        <View style={ styles.settingRow } key={ index }>
          <View style={ styles.iconLabelContainer }>
            { index === 0 ? <AntDesign name="eye" size={ 24 } color="#656f7b" /> :
              index === 1 ? <Ionicons name="language-sharp" size={ 24 } color="#656f7b" /> :
                index === 2 ? <AntDesign name="eye" size={ 24 } color="#656f7b" /> :
                  index === 3 ? <Ionicons name="moon-sharp" size={ 24 } color="#656f7b" /> :
                    index === 4 ? <MaterialCommunityIcons name="book-education-outline" size={ 24 } color="#656f7b" /> :
                      index === 5 ? <MaterialIcons name="family-restroom" size={ 24 } color="#656f7b" /> :
                        index === 6 ? <MaterialIcons name="vaccines" size={ 24 } color="#656f7b" /> :
                          index === 7 ? <MaterialCommunityIcons name="leaf-maple" size={ 24 } color="#656f7b" /> :
                            index === 8 ? <MaterialCommunityIcons name="message-text-clock" size={ 24 } color="#656f7b" /> :
                              index === 9 ? <MaterialCommunityIcons name="heart-settings" size={ 24 } color="#656f7b" /> :
                                index === 10 ? <MaterialIcons name="pets" size={ 24 } color="#656f7b" /> :
                                  index === 11 ? <MaterialIcons name="local-drink" size={ 24 } color="#656f7b" /> :
                                    index === 12 ? <MaterialCommunityIcons name="smoking" size={ 24 } color="#656f7b" /> :
                                      index === 13 ? <FontAwesome6 name="network-wired" size={ 24 } color="#656f7b" /> :
                                        index === 14 ? <Ionicons name="fast-food" size={ 24 } color="#656f7b" /> :
                                          index === 15 ? <Entypo name="email" size={ 24 } color="#656f7b" /> :
                                            <MaterialCommunityIcons name="sleep" size={ 24 } color="#656f7b" />
            }
            <Text style={ styles.label }>{ label }</Text>
          </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ itemValue => setNotifications( { ...notifications, superLikes: itemValue } ) }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      ) ) }
    </>
  );
}

const styles = StyleSheet.create( {
  // header: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 15,
  //   height: 50,

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: lightTheme,
  },
  headerText: {
    color: "#FFA500",
    marginLeft: "25%",
    fontSize: 17,
  },
  settingSection: {
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ccc",
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
    height: height * 0.06,
    paddingHorizontal: 10,

  },
  settingRow2: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
    height: height * 0.06,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  iconLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: lightColor,
    marginLeft: 0,
  },
  slider: {
    width: '100%',
    height:20,
    marginLeft: 10,
  },
  sliderValue: {
    fontSize: 14,
    color: "#FFA500",
  },
  subLabel: {
    fontSize: 12,
    color: lightColor,
  },
  infoText: {
    fontSize: 12,
    color: lightColor,
    textAlign: 'center',
    padding: 10,
    backgroundColor: lightTheme,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: "#FFA500",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: lightTheme,
  },
  // picker: {
  //   width: 100,
  //   color: lightColor,
  //   height: 30,
  //   paddingHorizontal: 5,
  // },
  picker: {
    height: height * 0.045,
    width: width * 0.3,
    color: lightColor, // Black text
    backgroundColor: lightTheme, // White background
    borderWidth: 2,
    borderColor: "black",
  }
} );

