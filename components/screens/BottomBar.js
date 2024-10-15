import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BottomBar () {
    const activeColor = "#FD297B";
    const color = "grey"; 
    const [ activScreen, setActivieScreen ] = useState( 'Home' );
    return (
        <View style={ styles.topIcons } >
            <TouchableOpacity onPress={ () => {
                navigation.navigate( "Modal" )
                setActivieScreen("Home")
            } } ><Fontisto size={ 30 } name='tinder' color={ activScreen === 'Home' ? activeColor : color } ></Fontisto></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setActivieScreen("Grid")
            }}> <MaterialCommunityIcons name="view-grid" size={ 24 } color={ activScreen === 'Grid' ? activeColor : color } /></TouchableOpacity>
            <TouchableOpacity onPress={ () => {
                navigation.navigate( "4starscreen" )
                setActivieScreen("Star")
            } }> <MaterialCommunityIcons size={ 30 } name='star-four-points' color={ activScreen === 'Star' ? activeColor : color } ></MaterialCommunityIcons></TouchableOpacity>
            <TouchableOpacity onPress={ () => {
                navigation.navigate( "chatscreen" )
                setActivieScreen("Chat")
            } }> <Ionicons name='chatbubbles' size={ 30 } color={ activScreen === 'Chat' ? activeColor : color }  ></Ionicons></TouchableOpacity>
            <TouchableOpacity
                //  onPress={()=>{
                //     navigation.navigate("user")
                // }}
                onPress={ () => navigation.navigate( "user" ) }
            > <FontAwesome name='user' size={ 30 } color={ activScreen === 'User' ? activeColor : color }  ></FontAwesome></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create( {
topIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    padding: 10,
    // position:"absolute",
    // top:660,
    borderTopColor: "black",
    // display:"block"
    zIndex: 10000,
    opacity: 1000,

},
})