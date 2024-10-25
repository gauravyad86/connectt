
import { View, Text, StyleSheet, TouchableOpacity, Dimensions , Platform,} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Fontisto, Ionicons, FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Bottombar from "./Bottombar/bottombar"
import { useNavigation } from 'expo-router';
import TinderSwipeDemo from "@/components/TinderCard/TinderSwipeDemo";
const { width, height } = Dimensions.get('window');
export default function () {
   
    const navigation = useNavigation();
    const onpressHandler = () => {
        navigation.navigate("tindercard");
    }
    return (
        <GestureHandlerRootView style={styles.flexOne}>
            <SafeAreaView style={styles.root}>
                {/* Navbar */}
                <View style={styles.navbar}>
                    <View style={styles.icontext}>
                        <Fontisto style={styles.icon} size={22} name='tinder' color={"red"} />
                        <Text style={styles.text}>tinder</Text>
                    </View>
                    <View style={styles.righticons}>
                        <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                            <Ionicons name="notifications" size={26} style={styles.sheildicon} color="grey" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("discoverysetting")}>
                            <FontAwesome5 name="bars" size={26} style={styles.sheildicon} color="grey" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TinderSwipeDemo />
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
        backgroundColor: "black",
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

