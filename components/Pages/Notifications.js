import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
const Notifications = () => {
    const navigation = useNavigation()
    return (

        <SafeAreaView style={ styles.container }>
            <TouchableOpacity onPress={ () => navigation.goBack() }>
                <View style={ styles.header }>
                    <Ionicons name="arrow-back" size={ 24 } color="red" />
                    <Text style={ { color: "white", marginLeft: 50, fontSize: 17 } }>Notifications</Text>
                </View>
            </TouchableOpacity>
            <View style={ styles.content }>
                {/* Add your image below, replace 'require' with your own path */ }
                <FontAwesome5 name="star-half-alt" size={50} color="yellow" />
                <Text style={ styles.title }>No notifications yet</Text>
                <Text style={ styles.description }>
                    Come back here to get information about matches and messages, profile insights and much more!
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#121212',
        // alignItems: 'center',
    },
    header: {
        fontSize: 15,
        height: "3%",
        // fontWeight: 'bold',
        // marginBottom: 10,
        backgroundColor: "#111419",
        color: "white",
        flexDirection: "row",
        // justifyContent:"space-around",
        marginLeft: 20,
        // alignItems:"center",
        marginTop: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        fontFamily: 'Cursive',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    icon: {
        width: 120,
        height: 120,
        marginBottom: 20,
        tintColor: '#7A7A7A',  // Optional: if you want the gray tone
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#A0A0A0',
        textAlign: 'center',
    },
} );

export default Notifications;