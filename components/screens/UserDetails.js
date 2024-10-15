
import { View, Text, Image, StyleSheet, Platform, Pressable, TouchableOpacity, ImageBackground, ImageBackgroundBase } from 'react-native';
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import Nav from '@/components/Navbar/nav';
import { Link, useNavigation } from 'expo-router';
import BottomBar from "@/components/screens/BottomBar"

import image from "@/assets/images/nope.png"
// import { Link } from 'expo-router';
// import Settings from '@/components/discovery/DiscoverySettings';

export default function App () {
    const activeColor = "#FD297B";
    const color = "grey";
    const displays = {
        display: "show"
    }
    const displaysNon = {
        display: "none"
    }
    const [ disStayle, setDisStyle ] = useState( displaysNon );
    const [ activScreen, setActivieScreen ] = useState( 'Home' );
    const [ crossScreen, setCrossScreen ] = useState( false );
    if ( crossScreen ) {
        console.log( "clicked" )
    } else {
        console.log( "not clicked" )
    }
    const onpressHandler = () => {
        console.log( "clicked gh" )
    }
    const navigation = useNavigation()
    return (

        <GestureHandlerRootView style={ { flex: 1 } }>
            <SafeAreaView style={ styles.root }>
                <Nav ></Nav>

                {/* card */ }
                <View style={ styles.card }>
                    <ImageBackground
                        source={ "https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain"}
                        style={ styles.image }>
                        <View style={ styles.cardInner }>
                            <Text style={ styles.name }>hello</Text>
                            <Text style={ styles.bio }>hello</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{justifyContent:"center", alignItems:"center"} }>

                    <View style={ styles.icons }>
                        <View style={ styles.buttons }>
                            <Pressable onPress={ onpressHandler }   >
                                <FontAwesome id='undoBtn' name="undo" size={ 30 } color="#d4aa37" />
                            </Pressable>
                        </View>

                        <View style={ styles.buttons } > <Entypo name="cross" id='CrossBtn' size={ 30 } color="#f32b96" /></View>
                        <TouchableOpacity onPress={ () => {
          navigation.navigate( 'getsuperlikes' )
        } }>
                        <View style={ styles.buttons } id='StarBtn' > <FontAwesome name="star" size={ 30 } color="#1597fa" /></View>
                        </TouchableOpacity>
      
                        <View style={ styles.buttons } id='Heartbtn'>
                            <FontAwesome name="heart" size={ 30 } color="#91d923" />
                        </View>
                        <View style={ styles.buttons } id='flashBtn'>
                            <FontAwesome name="flash" size={ 30 } color="#c145ec" />
                        </View>
                    </View>
                </View>
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
               <BottomBar/>
            </SafeAreaView>
        </GestureHandlerRootView >
    );
}

const styles = StyleSheet.create( {
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "lightPink"
    },
    root: {
        flex: 1,
        backgroundColor: "black"
    },
    card: {
        width: '100%',
        height: '77%',
        borderRadius: 10,
        backgroundColor: '#fefefe',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    
        elevation: 11,
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    
        justifyContent: 'flex-end',
      },
      cardInner: {
        padding: 10,
      },
      name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
      },
      bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
      },
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
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '85%',
        padding: 10,
        // position: "absolute",
        alignItems:"center"
        // top: 560,
    },
    buttons: {
        backgroundColor: "#232322",
        borderRadius: 50,
        width: 50,
        height: 50,
        padding: 7,
        justifyContent: 'center',
        alignItems: "center"

    },
} );
