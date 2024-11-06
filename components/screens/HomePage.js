
import { View, Text, StyleSheet, TouchableOpacity, Dimensions , Platform, Image,} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Fontisto, Ionicons, FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import Bottombar from "./Bottombar/bottombar"
import { useNavigation } from 'expo-router';
import connectlogo from "@/assets/images/connect2.jpg"
import TinderSwipeDemo from "@/components/TinderCard/TinderSwipeDemo";
import { MyContext } from '../MyContext';
import ImageSwipeComponent from "@/components/screens/Middlesection"
const { width, height } = Dimensions.get('window');

export default function () {
    const {  bgColor,lightTheme} = useContext( MyContext )
    const navigation = useNavigation();
    const onpressHandler = () => {
        navigation.navigate("tindercard");
    }
    return (
        <GestureHandlerRootView style={styles.flexOne}>
            <SafeAreaView style={styles.root}>
                {/* Navbar */}
                <View style={[styles.navbar, {backgroundColor:lightTheme}]}>
                    <View style={styles.icontext}>
                        {/* <Fontisto style={styles.icon} size={22} name='tinder' color={"red"} /> */}
                        <Image source={connectlogo}style={{height:25, width:25}} />
                        <Text style={[styles.text, {color:"#FF8C00"}]}>Connect</Text>
                    </View>
                    <View style={styles.righticons}>
                        <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                            <Ionicons name="notifications" size={26} style={styles.sheildicon} color={bgColor} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate("setting")}>
                            <Ionicons name="settings" size={26} style={styles.sheildicon}  color={bgColor}  />
                        </TouchableOpacity> */}
                    </View>
                </View>
                {/* <TinderSwipeDemo /> */}
                <ImageSwipeComponent/>
               <Bottombar/>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    root: {
        flex: 1,
        backgroundColor: "white",
    },
    navbar: {
        width: '100%',
        height: height*.07,
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
        justifyContent:"center"
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
         height:"7%"
    },
});

