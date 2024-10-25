import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
const { width, height } = Dimensions.get( 'window' );

export default function Discovery(props) {
    const { showHeader } = props; 
    const [ maxDistance, setMaxDistance ] = useState( 5 );
  const [ ageRange, setAgeRange ] = useState( [ 29, 55 ] );
  const [ photo, setPhoto ] = useState( 0 );
  const [ showOnTinder, setShowOnTinder ] = useState( 'On' ); // Dropdown for Show Me on Tinder
  const [ lookingFor, setLookingFor ] = useState( 'Women' ); // Dropdown for Looking For
  const [ notifications, setNotifications ] = useState( {
    newMatches: 'Select',
    messages: 'Select',
    messageLikes: 'Select',
    superLikes: 'Select',
  } );
    const navigation= useNavigation()
  return (
   <>
    { showHeader && (
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <View style={ styles.header }>
            <Ionicons name="arrow-back" size={ 24 } color="red" />
            <Text style={ { color: "white", marginLeft: "25%", fontSize: 17 } }>Discovery Settings</Text>
          </View>
        </TouchableOpacity>
      ) }
      {/* Maximum Distance */ }
      <View style={ styles.maxdistance }>
        <View style={ styles.settingRow2 }>
          <Text style={ styles.label2 }>Maximum distance</Text>
          <Text style={ styles.sliderValue }>{ maxDistance } km</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 1 }
          maximumValue={ 100 }
          step={ 1 }
          value={ maxDistance }
          onValueChange={ ( value ) => setMaxDistance( value ) }
          minimumTrackTintColor="#FF495C"
          thumbTintColor="white"
        />
        <View style={ styles.settingRow2 }>
          <Text style={ styles.afterslidertext2 } >Show people further away if I run out{ '\n' }of profiles to see</Text>
          <Switch
            value={ showOnTinder }
            onValueChange={ () => setShowOnTinder( !showOnTinder ) }
            trackColor={ { false: '#767577', true: '#FF495C' } }
            thumbColor={ showOnTinder ? '#FF495C' : '#f4f3f4' }
          />
        </View>
      </View>
      {/* Looking For */ }
      <View style={ styles.lokingforwommen }>
        <Text style={ styles.label2 }>Show me</Text>
        <TouchableOpacity onPress={ () => {
          navigation.navigate( "lookingforwomen" )
        } }>
          <Ionicons name="chevron-forward" size={ 24 } color="#656f7b" />
        </TouchableOpacity>
      </View>

      {/* Age Range */ }
      <View style={ styles.maxdistance }>
        <View style={ styles.settingRow2 }>
          <Text style={ styles.label2 }>Age range</Text>
          <Text style={ styles.sliderValue }>{ ageRange[ 0 ] } - { ageRange[ 1 ] }+</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 18 }
          maximumValue={ 100 }
          step={ 1 }
          value={ ageRange[ 0 ] }
          onValueChange={ ( value ) => setAgeRange( [ value, ageRange[ 1 ] ] ) }
          minimumTrackTintColor="#FF495C"
          thumbTintColor="white"
        />
        <View style={ styles.settingRow2 }>
          <Text style={ styles.afterslidertext2 } >Show people slightly out of my preferred { '\n' }range if Irun out of profiles to see</Text>
          <Switch
            value={ showOnTinder }
            onValueChange={ () => setShowOnTinder( !showOnTinder ) }
            trackColor={ { false: '#767577', true: '#FF495C' } }
            thumbColor={ showOnTinder ? '#FF495C' : '#f4f3f4' }
          />
        </View>
      </View>
      <Text style={ styles.afterslidertext }  >Tinder uses these preferences to suggest matches. Some match suggestions may not fall within your desired parameters</Text>


      {/* Notifications */ }
      <Text style={ styles.sectionHeader }>Premium Discovery</Text>
      <View style={ styles.numberofphotos }>
        <View style={ styles.settingRow2 }>
          <Text style={ styles.label2 }>Minimum number of photos</Text>
          <Text style={ styles.sliderValue }>{ photo }</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 1 }
          maximumValue={ 51 }
          step={ 1 }
          value={ photo }
          onValueChange={ ( value ) => setPhoto( value ) }
          minimumTrackTintColor="#FF495C"
          thumbTintColor="white"
        />
      </View>
      {/* New Matches */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <AntDesign name="eye" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>New matches</Text>
        </View>
        {/* <View style={ styles.pickerContainer }> */}
          <Picker
            selectedValue={ notifications.newMatches }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, newMatches: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Men" value="Off" />
          </Picker>
        </View>
      {/* </View> */}

      {/* Add languages */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Ionicons name="language-sharp" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Add languages</Text>
        </View>
        {/* <View style={ styles.pickerContainer }> */}
          <Picker
            selectedValue={ notifications.messages }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, messages: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>

        {/* </View> */}
      </View>

      {/* Message Likes */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <AntDesign name="eye" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Open to</Text>
        </View>
        {/* <View style={ styles.pickerContainer }> */}
          <Picker
            selectedValue={ notifications.messageLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, messageLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
          {/* </View> */ }
        {/* </View> */}
      </View>

      {/*Zodiac */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Ionicons name="moon-sharp" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Zodiac</Text>
        </View>
        {/* <View style={ styles.pickerContainer }> */}
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        {/* </View>. */}
        </View>
      {/*Education */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="book-education-outline" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Education</Text>
        </View>
        {/* <View style={ styles.pickerContainer }> */}
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        
      </View>
      {/*Famili plans */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="family-restroom" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Family Plans</Text>
        </View>
        {/* <View style={ styles.pickerContainer }> */}
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      
      </View>
      {/*COVID Vaccine */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="vaccines" size={ 24 } color="#656f7b" />

          <Text style={ styles.label }>COVID Vaccine </Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>

      </View>
      {/*Personlity Type */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="leaf-maple" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Personlity Type</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
          {/* </View> */ }
      </View>
      {/*Communication Style */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="message-text-clock" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Communication Style</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
      {/*Love Style */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="heart-settings" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Love Style</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
      {/*Pet */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="pets" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Pet</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
      {/*Drinking */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="local-drink" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Drinking</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
      {/*Smoking */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="smoking" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Smoking</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
      {/*Workout */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <FontAwesome6 name="network-wired" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Education</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      {/*Dietary Preference */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Ionicons name="fast-food" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Dietary Preference </Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
      {/*Social Media */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Entypo name="email" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Social Media</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
      {/*Sleeping Habits */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="sleep" size={ 24 } color="#656f7b" />
          <Text style={ styles.label }>Sleeping Habits</Text>
        </View>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
      </View>
   </>
  )
}

const styles = StyleSheet.create( {
    container9: {
      flex: 1,
      backgroundColor: 'black',
      color: "green",
      // display:"none"
      paddingHorizontal: 15
  
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 10,
      color: 'white',
  
    },
    settingRow: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      width: "100%",
      // height:height*.5,
      height: height * .06,
      paddingHorizontal: 5
  
    },
    settingRow2: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      width: "100%",
  
  
    },
    lokingforwommen: {
      fontSize: 15,
      height: "4%",
      width: "100%",
      // fontWeight: 'bold',
      // marginBottom: 10,
      backgroundColor: "#111419",
      color: "white",
      flexDirection: "row",
      justifyContent: "space-between",
      // marginLeft: 20,
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
      padding: 10,
    },
    header: {
      fontSize: 15,
      height: 60,
      width: "100%",
      // fontWeight: 'bold',
      // marginBottom: 10,
      backgroundColor: "#111419",
      color: "white",
      flexDirection: "row",
      // justifyContent:"space-around",
      // marginLeft: 20,
      alignItems: "center",
      marginTop: -6,
      marginBottom: 10,
    },
    label2: {
      fontSize: 19,
      color: "white",
      fontWeight: "300",
      marginLeft: 0,
    },
    label: {
      fontSize: 19,
      color: "white",
      fontWeight: "300",
      marginLeft: 15,
  
    },
    slider: {
      width: '100%',
      height: 40,
      color: "white",
    },
    sliderValue: {
      fontSize: 15,
      color: 'white',
      color: "white",
      fontWeight: "600"
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 1,
      overflow: 'hidden',
      width: 100,
      height: height * .02, justifyContent: "center", alignItems: "center"
    },
    afterslidertext: {
      fontSize: 13,
      color: "#656f7b",
    },
    afterslidertext2: {
      fontSize: 13,
      color: "white",
    },
    picker:{
      height:height*.04,
      width:width*.3,
      color:"white", backgroundColor:"black",
      borderWidth:1,
      borderColor:"white",
      marginLeft:10,
     },
  
    subText: {
      fontSize: 12,
      color: '#555',
    },
    maxdistance: {
      height: "10%",
      paddingHorizontal: 10,
      backgroundColor: "#111419",
      borderRadius: 5,
      // marginBottom: 10,
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: 'center',
  
    },
    numberofphotos: {
      height: "8%",
      padding: 15,
      backgroundColor: "#111419",
      borderRadius: 5,
      marginBottom: 10,
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: 'center',
      marginRight: 2,
      marginLeft: 2
    }
  } );
  
//   export default Discovery;
  