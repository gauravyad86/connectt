
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, StatusBar, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import Bottombar from './Bottombar/bottombar';
import Chat_Picks_click from '../Pages/Chat_Picks_click';
const { width, height } = Dimensions.get( 'window' );
import users from '@/assets/data/users';
import connectlogo from "@/assets/images/connect2.jpg"
import { MyContext } from '../MyContext';
const BottomStarScreen = () => {
    const { bgColor,lightColor,lightTheme } = useContext( MyContext )
    const [ activScreen, setActivieScreen ] = useState( 'picks' );
    const navigation = useNavigation()
    return (
        <View style={ styles.container6 }>
            {/* navbar */ }
            <View style={[styles.navbar, {backgroundColor:lightTheme}]}>
                <View style={ styles.icontext }>
                    <Image source={ connectlogo } style={ { height: 25, width: 25 } } />
                    <Text style={ [ styles.text, { color: "#FF8C00" } ] }>Connect</Text>
                </View>
                <View style={ styles.righticons }>
                    <TouchableOpacity onPress={ () => {
                        navigation.navigate( 'notifications' )
                    } }>
                        <Ionicons name="notifications" size={ 24 } style={ styles.sheildicon } color={bgColor} /></TouchableOpacity>
                    {/* <FontAwesome6 name="shield" size={25} style={styles.sheildicon}color="grey" /> */ }
                    <TouchableOpacity onPress={ () => {
                        navigation.navigate( "discoverysetting" )
                    } }><FontAwesome5 name="bars" size={ 24 } style={ styles.sheildicon } color={bgColor} /></TouchableOpacity>

                </View>
            </View>
            <View style={ { width: "100%" } }>
                <View style={ styles.likePageTop }>
                    <Text style={[
                        styles.likesCount,{color:lightColor}]
                    }>0 likes</Text>
                </View></View>
            <View style={ [styles.underline ,{backgroundColor:lightColor}]} />
            <TouchableOpacity style={ styles.button } onPress={ () => {
                navigation.navigate( 'seewholikeyoumore' )
            } } >
                <Text style={ styles.buttonText }>See who likes you</Text>
            </TouchableOpacity>
            <Bottombar />
        </View>
    );
};

const styles = StyleSheet.create( {
    container6: {
        flex: 1,
        // backgroundColor: 'black', // Dark background color
        alignItems: "center",
        backgroundColor: "white",

    },
    likePageTop: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "17%"
    },
    header: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: '#1B1B1B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#FF5A60', // Tinder red color
        fontSize: 24,
        fontWeight: 'bold',
    },
    underline: {
        width: "100%",
        height: ".05%",
       
    },

    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        paddingVertical: 10,
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: "grey",
        height: "7%"
    },
    main: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    likesCount: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "500"
    },
    // upgradeText: {
       
    //     fontSize: 17,
    //     textAlign: 'center',
    //     // marginBottom: 30,
    //     marginTop: 20
    // },
    heartContainer: {
        alignItems: 'center',
        // marginBottom: 30,
        position: "relative",
        top: 200

    },
    heartIcon: {
        // width: 50,
        // height: 50,
        // marginBottom: 10,
    },
    goldText: {
        fontSize: 16,
        textAlign: 'center',
        // marginTop:-30
    },

    buttonText: {
        color: '#1B1B1B',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#1B1B1B',
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    navbar: {
        width: '100%',
        height: height*.07,
        // backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        zIndex: 10,
        top: 0,
        padding: 10,
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
    },
    background: {
        width: width * .7,
        height: '100%',
        borderRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        position: "absolute",
    },
    likePageTop: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 60,
    },
    header: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: '#1B1B1B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#FF5A60', // Tinder red color
        fontSize: 24,
        fontWeight: 'bold',
    },
    main: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    likesCount: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "500"
    },
    upgradeText: {
        fontSize: 17,
        textAlign: 'center',
        // marginBottom: 30,
        marginTop: 10
    },
    heartContainer: {
        alignItems: 'center',
        // marginBottom: 30,
        position: "relative",
        top: 200

    },
    root: {
        width: '100%',
        height: "100%",
        flex: 1,
        padding: 10,
    },

    users: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // height: 140,
    },
    user: {
        // width: 167,
        // height: 250,
        margin: 3,
        borderRadius: 10,
        // justifyContent:"center",
        alignItems: "center",

    },
    image: {
        width: width * .6,
        height: height * .4,
        borderRadius: 10,
    },
    name: {
        color: "white",
        marginTop: 5,
        fontSize: 22,
        position: "absolute",
        top: 180,
        left: 0,
    },
    name2: {
        color: "orange",
        marginTop: 5,
        fontSize: 22,
        position: "absolute",
        top: 210,
        left: 0,
    },
    heartIcon: {
        // width: 50,
        // height: 50,
        // marginBottom: 10,
    },
    priceButton: {
        backgroundColor: 'white',
        height: "6%",
        width: "45%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: "25%",
        marginVertical: "25%"
    },
    priceText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    goldText: {
        color: 'white', // Gold color
        fontSize: 16,
        textAlign: 'center',
        // marginTop:-30
    },
    button: {
        backgroundColor: '#FFDA44',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        height: "7%",
        width: "60%",
        borderRadius: 38,

        position: "absolute",
        justifyContent: "center",
        bottom: 70,
        alignItems: "center"
    },

    buttonText: {
        color: '#1B1B1B',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#1B1B1B',
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        fontSize: 24,
        color: '#FFFFFF',
    },
} );

export default BottomStarScreen;
