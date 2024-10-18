import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TinderCard from '@/components/TinderCard/TinderCard';
import users from '@/assets/data/users';
import image from "@/assets/images/image.png"
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const TinderSwipeDemo = () => {
  const [ data, setData ] = useState( users )
  const swipe = useRef( new Animated.ValueXY() ).current;
  const rotate = useRef( new Animated.Value( 0 ) ).current;

  const panResponser = PanResponder.create( {
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: ( _, { dx, dy } ) => {
      console.log( 'dx:' + dx + ' dy:' + dy );
      swipe.setValue( { x: dx, y: dy } );
    },

    onPanResponderRelease: ( _, { dx, dy } ) => {
      console.log( 'released:' + 'dx:' + dx + ' dy:' + dy );
      let direction = Math.sign( dx );
      let isActionActive = Math.abs( dx ) > 200;
      if ( isActionActive ) {
        Animated.timing( swipe, {
          toValue: { x: 500 * dx, y: dy },
          useNativeDriver: true,
          duration: 500,
        } ).start( removeCard );
      } else {
        Animated.spring( swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        } ).start();
      }
    },
  } );
  const removeCard = useCallback( () => {
    setData( prepState => prepState.slice( 1 ) );
    swipe.setValue( { x: 0, y: 0 } );
  }, [ swipe ] );

  const handelSelection = useCallback(
    direction => {
      Animated.timing( swipe, {
        toValue: { x: direction * 500, y: 0 },
        useNativeDriver: true,
        duration: 500,
      } ).start( removeCard );
    },
    [ removeCard ],
  );
  const navigation = useNavigation()
  return (
    <View style={ { flex: 1 , justifyContent:"center", alignItems:"center"} }>
      { data
        .map( ( item, index ) => {
          let isFirst = index === 0;
          let dragHanlders = isFirst ? panResponser.panHandlers : {};
          return (
            <TinderCard
              item={ item }
              rotate={ rotate }
              isFirst={ isFirst }
              swipe={ swipe }
              { ...dragHanlders }
            />
          );
        } )
        .reverse() }

      <View
        style={ {
          width: '85%',
          position: 'absolute',
          height: 100,
          bottom: 40,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        } }>
        <TouchableOpacity
          style={ {
            width: 45,
            height: 45,
            backgroundColor: "#243437",
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          } }
          onPress={ () => {
            handelSelection( -1 );
          } }>
          <FontAwesome id='undoBtn' name="undo" size={ 25 } color="#d4aa37" />
        </TouchableOpacity>
        <TouchableOpacity
          style={ {
            width: 60,
            height: 60,
            backgroundColor: "#243437",
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          } }
          onPress={ () => {
            handelSelection( 1 );
          } }>
          <Entypo name="cross" id='CrossBtn' size={ 50 } color="#f32b96" />
        </TouchableOpacity>
        <TouchableOpacity
          style={ {
            width: 45,
            height: 45,
            backgroundColor: "#243437",
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          } }
          onPress={ () => {
            navigation.navigate( 'getsuperlikes' )
          } }>
          <FontAwesome name="star" size={ 25 } color="#1597fa" />
        </TouchableOpacity>
        <TouchableOpacity
          style={ {
            width: 60,
            height: 60,
            backgroundColor: "#243437",
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          } }
          onPress={ () => {
            handelSelection( -1 );
          } }>
          <FontAwesome name="heart" size={ 35 } color="#91d923" />

        </TouchableOpacity>
        <TouchableOpacity
          style={ {
            width: 45,
            height: 45,
            backgroundColor: "#243437",
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          } }
          onPress={ () => {
            navigation.navigate( 'boostscreen' )
          } }>
          <FontAwesome name="flash" size={ 25 } color="#c145ec" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default TinderSwipeDemo;