
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, Image, ScrollView, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Fontisto, Ionicons, FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useEffect, useState } from 'react';
import Bottombar from "./Bottombar/bottombar"
import { useNavigation } from 'expo-router';
import connectlogo from "@/assets/images/connect2.jpg"
import TinderSwipeDemo from "@/components/TinderCard/TinderSwipeDemo";
import { MyContext } from '../MyContext';
import ImageSwipeComponent from "@/components/screens/Middlesection"
import Home1 from "@/components/screens/Home1"
import Home2 from "@/components/screens/Home2"
import HomeViewMore from "@/components/screens/HomeViewMore"
const { width, height } = Dimensions.get( 'window' );

export default function () {
    const { bgColor, lightTheme,showfamily,setShowfamily } = useContext( MyContext )
    useEffect(() => {
        setShowfamily(false);
    }, [setShowfamily]);
    const navigation = useNavigation();
    const [ activeSubTabMatchesTile, setActiveSubTabMatchesTile ] = useState( 'parents' );
    const handleSubTabChange3 = ( subTab ) => {
        setActiveSubTabMatchesTile( subTab );
        if ( subTab === 'parents' ) {
            console.log( "Switching to Parents tab" );
        } else {
            console.log( "Switching to Child tab" );
        }
    };
    return (
        
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={[styles.navbar, { backgroundColor: lightTheme }]}>
                    <View style={styles.icontext}>
                        <Image source={connectlogo} style={{ height: 30, width: 30 }} />
                        <Text style={[styles.text, { color: "#FF8C00" }]}>Connect</Text>
                    </View>
                    <View style={styles.righticons}>
                        <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                            <Ionicons name="notifications" size={26} style={styles.sheildicon} color={bgColor} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Home1/>
                <Bottombar />
            </ScrollView>
    );
}

const styles = StyleSheet.create( {
  
    scrollContent: {
        flex:1,

        paddingBottom: height * 0.02,
        // paddingTop: height * 0.08, // To avoid content under the navbar
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
        paddingHorizontal: 10,
    },
    icontext: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
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
    subTabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 50,
    },
    subTabText: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 50,
        color: 'grey',
    },
    activeSubTab: {
        color: '#FF8C00',
    },
} );

