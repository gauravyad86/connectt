
import { MyContext } from '@/components/MyContext';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useCallback, useContext, useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import connectlogo from "@/assets/images/connect2.jpg"
import silverrlogo from "@/assets/images/silverrlogo.png"
const { width, height } = Dimensions.get( 'window' );
export default function Bottombar () {
    const { bgColor } = useContext( MyContext )
    const activeColor = bgColor;
    const color = "grey";
    const [ activeScreen, setActiveScreen ] = useState( 'Home' );
    const navigation = useNavigation();

    const handlePress = ( screen ) => {
        setActiveScreen( screen );
        navigation.navigate( screen );
    };
    useFocusEffect(
        useCallback( () => {
            const currentRoute = navigation.getState().routes[ navigation.getState().index ].name;
            setActiveScreen( currentRoute );
        }, [ navigation ] )
    );
    return (
        <View style={ {
            flexDirection: "row",
            justifyContent: "space-around",
            width: '100%',
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            borderTopWidth: 1,
            borderTopColor: "grey",
            height: height * .09
        } }>
            <TouchableOpacity onPress={ () => handlePress( "Home" ) }>
                {
                    activeScreen === 'Home' ? ( <Image source={ connectlogo } style={ { height: 55, width: 55, } } /> ) : (<Image source={ silverrlogo } style={ { height: 100, width: 50, } } />)
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => handlePress( "user" ) }>
                <FontAwesome5 name="user-circle" size={ 45 } color={ activeScreen === 'user' ? activeColor : color } />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => handlePress( "chatscreen" ) }>
                {/* <AntDesign name="message1" size={ 24 } color="black" /> */ }
                <AntDesign name="message1" size={ 45 } color={ activeScreen === 'chatscreen' ? activeColor : color } />
            </TouchableOpacity>

        </View>
    );
}
