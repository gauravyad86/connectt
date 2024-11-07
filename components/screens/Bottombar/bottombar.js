
import { MyContext } from '@/components/MyContext';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useCallback, useContext, useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import connectlogo from "@/assets/images/connect2.jpg"
const { width, height } = Dimensions.get('window');
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
            paddingVertical: 10,
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            borderTopWidth: 1,
            borderTopColor: "grey",
            height: height*.13
        } }>
            <TouchableOpacity onPress={ () => handlePress( "Home" ) }>
                {/* <Fontisto size={ 30 } name='tinder' color={ activeScreen === 'Home' ? activeColor : color } /> */ }
                <Image source={ connectlogo } style={ { height: 60, width: 60, } } />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => handlePress( "chatscreen" ) }>
                {/* <AntDesign name="message1" size={ 24 } color="black" /> */}
            <AntDesign name="message1" size={ 50 } color={ activeScreen === 'chatscreen' ? activeColor : color } />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => handlePress( "user" ) }>
             <FontAwesome5 name="user-circle" size={ 50 } color={ activeScreen === 'user' ? activeColor : color } /> 
            </TouchableOpacity>
          
        </View>
    );
}
