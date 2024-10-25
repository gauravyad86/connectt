import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import users from '@/assets/data/users';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default function Message () {
    const navigation = useNavigation()
    const activeColor = "#F76C6B";
    const color = "grey";
    const [ activScreen, setActivieScreen ] = useState( 'Home' );
    return (

        <ScrollView vertical={ true } showsHorizontalScrollIndicator={ false } style={ styles.users }>
            <View style={ styles.messHeading }>
                <Text style={ styles.messagetext } >Messages</Text>
                <Text style={ [styles.messagetext, {color:"red"}] } >(1)</Text>
                
            </View>
            { users.map( user => (
                <TouchableOpacity onPress={ () => {
                    navigation.navigate( "chatsection" )
                } } key={ user.id }>
                    <View style={ styles.mess } key={ user.id }>
                        <Image source={ { uri: user.image } } style={ styles.image } />
                        <View style={ styles.messageContent }>
                            <Text style={ styles.name }>{ user.name }</Text>
                            <Text style={ styles.bio }>{ user.bio }</Text>
                            <View style={ styles.underline } />
                        </View>
                    </View>
                </TouchableOpacity>
            ) )
            }
             <View style={{height:"4%", width:"100%", backgroundColor:"black"}}>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create( {

    container: {
        padding: 10,
        // marginTop:30
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: 700,
        // marginLeft: 8
        padding: 10,
        paddingBottom:110,
        marginBottom:15,

    },
    messHeading: {
        flexDirection: "row",
        alignItems: "center",
        
    },
    underline: {
        borderBottomColor: '#555962',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 10,
        flex: 1, // This allows the underline to expand to fill the width
    },
    topIcons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        position: 'absolute',
        bottom: -47,
        left: 0,
        right: 0,
        height: 60,
        alignItems: 'center',
        zIndex: 10,

    },
    messagetext: {
        color: "white",
        fontSize: 17,
        fontWeight: "500",
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 0
    },
    mess: {
        width: "100%",
        height: 90,
        flexDirection: "row",
        borderWidth: 2,
        // borderColor: '#F63A6E',
        alignItems: "center",
        marginTop: 10
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 120,
    },
    name: {
        color: "white",
        marginTop: 4,
        fontWeight: "600",
        fontSize: 18,
    }
    ,
    bio: {
        color: "#95999E",
        marginTop: 3,
        // fontWeight:600,
        fontSize: 13,
    },
    messageContent: {
        flexDirection: "column",
        // justifyContent:"flex-start",
        justifyContent: "center",
        marginLeft: 12,
        width: "54%",
        marginTop: 8,

    }
    // 
} );
