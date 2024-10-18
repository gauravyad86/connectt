import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, Animated, TouchableOpacity, StyleSheet } from 'react-native';

const { width } = Dimensions.get( 'window' );

const BoostScreen = () => {
  const navigation= useNavigation()
  const [ lightOn, setLightOn ] = useState( false );
  const animatedOpacity = useRef( new Animated.Value( 0 ) ).current;
  const scrollX = useRef( new Animated.Value( 0 ) ).current;

  // Toggle light animation
  useEffect( () => {
    const toggleLight = setInterval( () => {
      setLightOn( prev => !prev );
    }, 3000 );

    return () => clearInterval( toggleLight );
  }, [] );

  useEffect( () => {
    Animated.timing( animatedOpacity, {
      toValue: lightOn ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    } ).start();
  }, [ lightOn ] );

  const plans = [
    { id: 1, title: '20 Boosts', price: '₹175.00/ea', save: 'Save 41%' },
    { id: 2, title: '10 Boosts', price: '₹100.00/ea', save: 'Save 30%' },
    { id: 3, title: '5 Boosts', price: '₹50.00/ea', save: 'Save 20%' },
  ];

  const renderPlans = () => {
    return plans.map( ( plan, index ) => {
      const inputRange = [
        ( index - 1 ) * width * 0.7,
        index * width * 0.7,
        ( index + 1 ) * width * 0.7,
      ];

      const scale = scrollX.interpolate( {
        inputRange,
        outputRange: [ 0.8, 1, 0.8 ],
        extrapolate: 'clamp',
      } );

      return (
        <Animated.View
          key={ plan.id }
          style={ [ styles.planCard, { transform: [ { scale } ] } ] }
        >
          <View style={ {
            width: width * 0.8,
            height: 35,
            // borderRadius: 10,
            borderTopEndRadius: 10, borderTopLeftRadius: 10,
            marginTop: -15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "white",
            borderColor: '#555962',
            // marginBottom: 20
          } }> <Text style={ { color: "#c145ec", fontWeight: "500", fontSize: 20 } }> POPULAR</Text></View>
          <Text style={ styles.planTitle }>{ plan.title }</Text>
          <View style={ styles.buttons } id='flashBtn'>
            <FontAwesome name="flash" size={ 30 } color="#c145ec" />
          </View>
          <Text style={ styles.planPrice }>{ plan.price }</Text>
          <TouchableOpacity style={ styles.selectButton } onPress={()=>navigation.navigate("homepagestarselect")}>
            <Text style={ styles.selectButtonText }>Select</Text>
          </TouchableOpacity>
        </Animated.View>
      );
    } );
  };

  return (
    <View style={ styles.container }>
      {/* Scrollable content */ }
      <ScrollView contentContainerStyle={ styles.scrollContainer }>
        
        {/* Upper part with animation */ }
        <View style={ styles.animationContainer }>
          <Animated.View style={ [ styles.lightEffect, { opacity: animatedOpacity } ] } />
          <Text style={ styles.illustrationText }>People Illustration with Light Effect</Text>
        </View>

        {/* Horizontal ScrollView for cards */ }
        <View style={ styles.planSection }>
          <Text style={ styles.title }>Be Seen</Text>
          <Text style={ styles.upgradeText }>Be a top profile in your are for 30 minutes to get more matches
          </Text>

          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={ false }
            snapToInterval={ width * 0.7 }
            decelerationRate="fast"
            bounces={ false }
            scrollEventThrottle={ 16 }
            onScroll={ Animated.event(
              [ { nativeEvent: { contentOffset: { x: scrollX } } } ],
              { useNativeDriver: true }
            ) }
            contentContainerStyle={ { paddingHorizontal: ( width - width * 0.7 ) / 2 } }
          >
            { renderPlans() }
          </Animated.ScrollView>
        </View>
      </ScrollView>
      {/* Or Divider */ }
      <View style={ styles.dividerContainer }>
        <View style={ styles.line } />
        <Text style={ styles.orText }>or</Text>
        <View style={ styles.line } />
      </View>
      {/* Fixed bottom button */ }
      <View style={ styles.bottombox }>
        <Text style={ styles.bottomText }>1 free Boost a month</Text>
        <View style={ styles.header2 }>
          <View style={ { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } }>
            <Fontisto name="tinder" size={ 22 } color="yellow" style={ styles.icon } />
            <Text style={ styles.tinderGoldText }>Get Tinder Gold</Text>
          </View>
          <TouchableOpacity style={ styles.goldSelectButton } onPress={ () => {
            navigation.navigate( "boostselect" )
          } }>
            <Text style={ styles.goldSelectButtonText }>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent:"center", 
    // alignItems:"center"
  },
  scrollContainer: {

    // paddingBottom: 100,
     // Extra padding for scroll view so content isn't blocked by the fixed button
  },
  animationContainer: {
    height: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  lightEffect: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffd700',
  },
  buttons: {
    backgroundColor: "white",
    borderRadius: 55,
    width: 55,
    height: 55,
    // padding: 7,
    margin: 15,
    justifyContent: 'center',
    alignItems: "center"

  },
  upgradeText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 10,
    padding: 10
  },
  illustrationText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  planSection: {
    // paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '500',
    textAlign: 'center',
  },
  description: {
    color: '#aaa',
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  planCard: {
    width: width * 0.8,
    height: 240,
    // width: "60%",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    // marginHorizontal: 10,
    // backgroundColor: '#333',
    // padding: 20,
    // borderRadius: 15,
    // marginHorizontal: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginRight: 9,
    // padding: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: -20,
    marginBottom:22
  },
  line: {
    height: 1,
    backgroundColor: '#555962',
    width: '40%',
  },
  orText: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 10,
    fontWeight: "bold"
  },
  planTitle: {
    color: 'white',
    fontSize: 23,
    marginBottom: 7,
    fontWeight: "500",
    marginTop: 5,

  },
  planPrice: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  planSave: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#9b59b6',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  selectButton: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  selectButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "500"
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  continueButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottombox: {
    borderWidth: 1,
    borderColor: '#555962',
    borderRadius: 10,
    padding: 15,
    // marginVertical: -5,
    justifyContent: 'center',
    alignItems: 'center',
    width:"90%",
    margin:"3%",
  },
  bottomText: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  tinderGoldText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 5,
  },
  goldSelectButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#555962',
  },
  goldSelectButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  }, background: {
    width: '100%',
    height: '100%',
    //   borderRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    top: -40
  },
} );

export default BoostScreen;