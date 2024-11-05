import React, { useState } from 'react';
import Discovery from "@/components/Pages/Discovery"
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
const { width, height } = Dimensions.get( 'window' );

const DiscoverySettings = ( props ) => {
  
  
  const navigation = useNavigation()
  return (
    <ScrollView vertical={ true } showsHorizontalScrollIndicator={ false } style={ [ styles.container9 ] }>
       <Discovery showHeader={true}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  container9: {
    flex: 1,
    // backgroundColor: 'white',
    color: "green",
    paddingHorizontal: 5

  },


} );

export default DiscoverySettings;
