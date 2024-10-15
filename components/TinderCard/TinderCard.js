import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    useAnimatedGestureHandler,
    interpolate,
    withSpring,
    runOnJS,
  } from 'react-native-reanimated';

export default function TinderCard ( props,isfirst, swipe, ...rest ) {
    return (
        <View style={ styles.card  }>
            <ImageBackground source={ props.image } style={ styles.image }> </ImageBackground>
            <LinearGradient
                // Background Linear Gradient
                colors={ [ 'transparent', 'rgba(0,0,1,.9)' ] }
                style={ styles.background }
            />
            <Text style={ styles.name }>{ props.name } "age" </Text>
            <Text style={ styles.bio }>{ props.bio } </Text>
        </View>
    )
}
const styles = StyleSheet.create( {
    card: {
        width: '100%',
        height: '110%',
        //   borderRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#fefefe',
        top: -60,
        // justifyContent:"flex-end",
        position: "absolute",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    image: {
        width: "100%",
        height: '110%',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    cardInner: {
        padding: 10,
    },
    name: {
        fontSize: 25,
        color: 'white',
        position: "absolute",
        fontWeight: 'bold',
        top: 450,
    },
    bio: {
        fontSize: 18,
        color: 'white',
        position: "absolute",
        top: 480,
        marginTop: 7,
    },
    background: {
        width: '100%',
        height: '112%',
        //   borderRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        position: "absolute",
    }
} );