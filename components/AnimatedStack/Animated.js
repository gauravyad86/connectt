import React, { useRef } from 'react';
import { PanResponder, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import users from '@/assets/data/users';
import TinderCard from "@/components/TinderCard/TinderCard.js";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedGestureHandler,
    useDerivedValue,
    interpolate,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function TinderSwap () {
    // Replace ValueXY with individual shared values for x and y
    const {width}= useWindowDimensions();
    const translateX = useSharedValue( 0 );
    const rotate= useDerivedValue(()=>{
        interpolate(translateX.value,[-width,width], [0,60]+ 'deg')
    })
    const cardStyle = useAnimatedStyle( () => ( {
        transform: [ {
            translateX: translateX.value * ( 500 - 250 )
        },
    {
        rotate: rotate.value
    } ]
        // opacity:sharedvalue.value

    } ) )
    const translateY = useSharedValue( 0 );

    const panResponder = PanResponder.create( {
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: ( _, { dx, dy } ) => {
            // Update shared values during drag
            translateX.value = dx;
            translateY.value = dy;
        },
        onPanResponderRelease: ( _, { dx, dy } ) => {
            console.log( "dx" + dx, "dy" + dy );
            // Optionally, use spring animation to reset or handle end of gesture
            translateX.value = withSpring( dx );
            translateY.value = withSpring( dy);
        },
    } );
   
    return (
        <View style={ { color: "white", height: "79%", width: "100%" } }>
            { users.map( ( item, index ) => {
                return (
                    <PanGestureHandler>
                        <Animated.View key={ item.id } style={ [ styles.animatedCard, cardStyle ] }>
                            <TinderCard
                                // isFirst={ isFirst }
                                image={ item.image }
                                bio={ item.bio }
                                name={ item.name }
                                // { ...dragHandler }
                            />
                            <Pressable onPress={ () => ( translateX.value = withSpring( Math.random() ) ) }><Text> Change value</Text></Pressable>
                        </Animated.View>
                    </PanGestureHandler>
                );
            } ).reverse() }
        </View>
    );
}

const styles = StyleSheet.create( {
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    animatedCard: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",

    },
} )
