
import { View, Text, Image, StyleSheet, Platform, Pressable, TouchableOpacity, ImageBackground, ImageBackgroundBase } from 'react-native';
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import TinderSwipeDemo from "@/components/TinderCard/TinderSwipeDemo"
import image from "@/assets/images/nope.png"
// import { Link } from 'expo-router';
// import Settings from '@/components/discovery/DiscoverySettings';

export default function App () {
    const activeColor = "#FD297B";
    const color = "grey";

    const [ activScreen, setActivieScreen ] = useState( 'Home' );
    const [ crossScreen, setCrossScreen ] = useState( false );
    if ( crossScreen ) {
        console.log( "clicked" )
    } else {
        console.log( "not clicked" )
    }
    const onpressHandler = () => {
        navigation.navigate( "tindercard" )
    }
    const navigation = useNavigation()
    return (

        <GestureHandlerRootView style={ { flex: 1 } }>
            <SafeAreaView style={ styles.root }>
                {/* navbar */ }

                <View style={ styles.navbar }>
                    <View style={ styles.icontext }>
                        <Pressable ><Fontisto style={ styles.icon } size={ 30 } name='tinder' ></Fontisto></Pressable>
                        <Text style={ styles.text }  >tinder</Text>
                    </View>
                    <View style={ styles.righticons }>
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate( 'notifications' )
                        } }>
                            <Ionicons name="notifications" size={ 24 } style={ styles.sheildicon } color="grey" /></TouchableOpacity>
                        {/* <FontAwesome6 name="shield" size={25} style={styles.sheildicon}color="grey" /> */ }
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate( "discoverysetting" )
                        } }> <FontAwesome5 name="bars" size={ 24 } style={ styles.sheildicon } color="grey" /></TouchableOpacity>

                    </View>
                </View>


                {/* card */ }


                <TinderSwipeDemo />
                
                <View style={ styles.topIcons } >
                    <TouchableOpacity onPress={ () => {
                        navigation.navigate( "User" )
                        setActivieScreen( "Home" )
                    } } ><Fontisto size={ 30 } name='tinder' color={ activScreen === 'Home' ? activeColor : color } ></Fontisto>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => {
                        navigation.navigate( "gridscreen" )
                        setActivieScreen( "Grid" )
                    } }> <MaterialCommunityIcons name="view-grid" size={ 24 } color={ activScreen === 'Grid' ? activeColor : color } />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => {
                        navigation.navigate( "4starscreen" )
                        setActivieScreen( "Star" )
                    } }> <MaterialCommunityIcons size={ 30 } name='star-four-points' color={ activScreen === 'Star' ? activeColor : color } ></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => {
                        navigation.navigate( "chatscreen" )
                        setActivieScreen( "Chat" )
                    } }> <Ionicons name='chatbubbles' size={ 30 } color={ activScreen === 'Chat' ? activeColor : color }  ></Ionicons></TouchableOpacity>
                    <TouchableOpacity

                        onPress={ () => {
                            navigation.navigate( "user" )
                            setActivieScreen( "User" )
                        } }
                    > <FontAwesome name='user' size={ 30 } color={ activScreen === 'User' ? activeColor : color }  ></FontAwesome></TouchableOpacity>
                </View>
                {/* <BottomBar /> */ }
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
    background: {
        width: '100%',
        height: '100%',
        //   borderRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        position: "absolute",
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
        position: "absolute",
        top: 668,
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
        alignItems: "center"
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
    navbar: {
        width: '100%',
        height: '7%',
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        zIndex: 10,
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
} );
