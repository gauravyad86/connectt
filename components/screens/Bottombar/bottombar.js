
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function Bottombar () {
    const activeColor = "#FD297B";
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
            backgroundColor: "black",
            position: "absolute",
            bottom: 0,
            borderTopWidth: 1,
            borderTopColor: "grey",
            height: "7%"
        } }>
            <TouchableOpacity onPress={ () => handlePress( "Home" ) }>
                <Fontisto size={ 30 } name='tinder' color={ activeScreen === 'Home' ? activeColor : color } />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => handlePress( "gridscreen" ) }>
                <MaterialCommunityIcons name="view-grid" size={ 24 } color={ activeScreen === 'gridscreen' ? activeColor : color } />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => handlePress( "4starscreen" ) }>
                <MaterialCommunityIcons size={ 30 } name='star-four-points' color={ activeScreen === '4starscreen' ? activeColor : color } />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => handlePress( "chatscreen" ) }>
                <Ionicons name='chatbubbles' size={ 30 } color={ activeScreen === 'chatscreen' ? activeColor : color } />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => handlePress( "user" ) }>
                <FontAwesome name='user' size={ 30 } color={ activeScreen === 'user' ? activeColor : color } />
            </TouchableOpacity>
        </View>
    );
}
