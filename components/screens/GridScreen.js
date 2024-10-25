
import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView,Platform, Dimensions } from 'react-native';
import { FontAwesome, FontAwesome5, FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import GridBox from '../Pages/GridBox';
import Bottombar from './Bottombar/bottombar';

const { width, height } = Dimensions.get( 'window' );

export default function GridScreen () {
   
    const navigation = useNavigation();

    return (
        <SafeAreaView style={ styles.root }>
            {/* Navbar */ }
            <View style={ styles.navbar }>
                <View style={ styles.icontext }>
                    <Fontisto style={ styles.icon } size={ 22 } name='tinder' color={ "red" } />
                    <Text style={ styles.text }>tinder</Text>
                </View>
                <View style={ styles.righticons }>
                    <TouchableOpacity onPress={ () => navigation.navigate( 'notifications' ) }>
                        <Ionicons name="notifications" size={ 26 } style={ styles.sheildicon } color="grey" />
                    </TouchableOpacity>
                   
                </View>
            </View>

            {/* Scrollable content */ }
            <ScrollView contentContainerStyle={ styles.scrollContent }>
                {/* Welcome message */ }
                <View style={ styles.messagess }>
                    <Text style={ styles.message }>Welcome to explore</Text>
                </View>
                {/* Card with ImageBackground */ }
                <View style={ styles.card }>
                    <ImageBackground
                        source={ { uri: "https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain" } }
                        style={ styles.image }>
                        <View style={ styles.cardInner }>
                            <Text style={ styles.name }>Long-term partner</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={ styles.messagess }>
                    <Text style={ styles.message }>Goal-driven dating</Text>
                </View>
                <View style={ { marginTop: height * 0.01 } }>
                    <Text style={ styles.goaltext }>Find people with similar relationship goals</Text>
                </View>

                {/* GridBox component */ }
                <GridBox />
            </ScrollView>

            {/* Fixed Bottom Navigation Bar */ }
           <Bottombar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create( {
    root: {
        flex: 1,
        backgroundColor: "black",
        paddingBottom:50,
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
        top:0,
        padding:10,
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
    righticons: {
        flexDirection: "row",
        alignItems: "center",
    },
    sheildicon: {
        marginLeft: 25,
    },
    messagess: {
        marginTop: height * 0.009,
        paddingHorizontal: width * 0.05,
    },
    message: {
        color: "white",
        fontSize: width * 0.05,
        fontWeight: "500",
    },
    goaltext: {
        color: "#CECECE",
        fontSize: width * 0.04,
        paddingHorizontal: width * 0.05,
    },
    card: {
        width: '90%',
        height: height * 0.2,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: height * 0.02,
    },
    righticons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: width * .005
    },
    sheildicon: {
        marginRight: 8,
        marginLeft: width * .1,
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
        fontSize: width * 0.06,
        color: 'white',
        fontWeight: '600',
    },
    scrollContent: {
        // paddingBottom: height * 0.1, // Extra padding to avoid overlap with the bottom bar
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
         height:"7%"
    },
} );
