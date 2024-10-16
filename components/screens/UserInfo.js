import Nav from '@/components/screens/nav';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Pressable, Button } from 'react-native';
import plans from "@/assets/data/plans"
import { useNavigation } from 'expo-router';

const UserInfo = () => {
  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const onSwipe = ( event ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round( contentOffsetX / 300 );
    setCurrentIndex( index );
  };
  const activeColor = "#FD297B";
  const color = "grey";
  const displays = {
    display: "show"
  }
  const displaysNon = {
    display: "none"
  }
  const [ activScreen, setActivieScreen ] = useState( 'Home' );
  const navigation = useNavigation()

  return (
    <ScrollView style={ styles.container }>
      {/* Header */ }
      <Nav  ></Nav>
      {/* Profile Section */ }
      <View style={ styles.profileSection }>
        <View style={ styles.profilePicContainer }>
          <Image
            source={ { uri: 'https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain' } }
            style={ styles.profilePic }
          />
          <TouchableOpacity style={ styles.editIcon }>
            <Pressable style={ styles.editText }><Text>✏️</Text></Pressable>
          </TouchableOpacity>
        </View>
        <View style={ styles.progressContainer }>
          <Text style={ styles.progressText }>10% COMPLETE</Text>
        </View>
        <Text style={ styles.profileName }>Boss, 20</Text>
      </View>

      {/* Action Buttons */ }
      <View style={ styles.actionButtons }>
        <TouchableOpacity style={ styles.useractiveicons } onPress={ () => {
          navigation.navigate( 'getsuperlikes' )
        } }>
          <FontAwesome name="star" size={ 19 } color="#1597fa" />
          <Text style={ styles.actionText }>Get Super Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.useractiveicons }>
          <FontAwesome name="flash" size={ 19 } color="#c145ec" />
          <Text style={ styles.actionText }>Get Super Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.useractiveicons } onPress={ () => {
          navigation.navigate( 'subsription' )
        } }>
          <Fontisto name="tinder" color="red" size={ 19 } />
          <Text style={ styles.actionText }>Subsriptions</Text>
        </TouchableOpacity>
      </View>

      {/* Upgrade Section */ }
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={ false }
          onScroll={ onSwipe }
          scrollEventThrottle={ 16 }
        >
          { plans.map( ( plan, index ) => (
            <View style={ styles.upgradeSection }>

              <View style={ styles.upgrade }>
                <View style={ styles.upgradeTitle }>
                  <Fontisto style={ styles.icon } size={ 20 } name='tinder' color={ plan.color } />
                  <Text style={ { fontSize: 23, fontWeight: "500" } } >tinder</Text>
                  <View style={ { justifyContent: "center", alignItems: "center", height: "7%", width: "40%", marginTop: 7.5, backgroundColor: "gold" } } > <Text style={ { color: 'black', fontSize: 10, fontWeight: "bold" } }>GOLD</Text></View>
                </View>
                <TouchableOpacity style={ styles.selectButton } onPress={ () => {
                  navigation.navigate( "purchase" )
                } }>
                  <Text style={ [styles.selectButtonText] }>Upgrade</Text>
                </TouchableOpacity>
              </View>
              <View style={ styles.whatincluded }>
                <Text style={ styles.rowValue }> What's Included</Text>
                <View style={ styles.freeType } >
                  <Text style={ styles.freeTypeText } >Free</Text>
                  <Text style={ styles.freeTypeText } >{ plan.type }</Text>
                </View>
              </View>
              <View style={ styles.upgradeContent }>
                <View style={ styles.row }>
                  <Text style={ styles.rowTitle }>See Who Likes You</Text>
                  <Text style={ styles.rowValue }> —                     ✓</Text>
                </View>
                <View style={ styles.row }>
                  <Text style={ styles.rowTitle }>Top Picks</Text>
                  <Text style={ styles.rowValue }>—                    ✓</Text>
                </View>
                <TouchableOpacity>
                  <Text style={ styles.seeAllFeatures }>See All Features</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) ) }
        </ScrollView>
        <View style={ styles.indicatorContainer }>
          { plans.map( ( val, index ) => (
            <View
              key={ val.id }
              style={ [
                styles.indicator,
                { backgroundColor: index === currentIndex ? '#fff' : '#888' },
              ] }
            />
          ) ) }
        </View>
        <View style={ styles.topIcons } >
          <TouchableOpacity onPress={ () => {
            navigation.navigate( "User" )
            setActivieScreen( "Home" )
          } } ><Fontisto size={ 30 } name='tinder' color={ activScreen === 'Home' ? activeColor : color } ></Fontisto>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => {
            setActivieScreen( "Grid" )
          } }> <MaterialCommunityIcons name="view-grid" size={ 24 } color={ activScreen === 'Grid' ? activeColor : color } />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {
            navigation.navigate( "4starscreen" )
            setActivieScreen( "Star" )
          } }> <MaterialCommunityIcons size={ 30 } name='star-four-points' color={ activScreen === 'Star' ? activeColor : color } ></MaterialCommunityIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {
            navigation.navigate( "chatscreen" )
            setActivieScreen( "Chat" )
          } }> <Ionicons name='chatbubbles' size={ 30 } color={ activScreen === 'Chat' ? activeColor : color }  ></Ionicons></TouchableOpacity>
          <TouchableOpacity

            onPress={ () => {
              navigation.navigate( "user" )
              setActivieScreen( "User" )
            } }
          > <FontAwesome name='user' size={ 30 } color={ activScreen === 'User' ? activeColor : color }  ></FontAwesome></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 35,
  },
  selectButton:{
    height:"100%",
    width:"50%",
    backgroundColor:"gold",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
  },
  selectButtonText:{
    fontSize:20,
    fontWeight:"700"
 
  },
  topIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    padding: 10,
    position: 'absolute',
    top: 231,
    alignItems: 'center',
    // zIndex: 10,

  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: -11,
    // color:"gold",
    marginRight: 3
  },
  actionText: {
    color: '#1597fa',
    fontSize: 12,
  },
  useractiveicons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    backgroundColor: "#111419",
    borderRadius: 10,
  },
  buttons: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 20,
    height: 20,
    padding: 7,
    justifyContent: 'center',
    alignItems: "center",

    borderWidth: 1,
    borderColor: '#ccc',
  },
  profileSection: {
    alignItems: 'center',
    height: "60%",
    backgroundColor: "#111419",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  profilePicContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#ff5b5b',
    borderRadius: 20,
    padding: 5,
  },
  editText: {
    // color: '#fff',
  },
  progressContainer: {
    backgroundColor: '#ff7b5b',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  progressText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    height: "15%",

  },
  upgrade: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
  ,
  actionButton: {
    alignItems: 'center',
    width: "30%",

    height: "100%",
    //  borderColor: '#ff6347', // Tomato color for the border
    borderWidth: 3, // Set border width to make the color visible
    borderRadius: 10,

  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  getMoreText: {
    // color: '#3d84f5',
    fontSize: 12,
  },
  upgradeSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 220,
    width: 348

  },
  upgradeTitle: {
    // fontSize: ,
    // fontWeight: 'bold','
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  upgradeContent: {
    marginTop: 15,
    color: "black"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  rowTitle: {
    // fontWeight: 'bold',
    fontSize: 13,
    fontWeight: "500"
  },
  rowValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  seeAllFeatures: {
    color: '#ffcc00',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    justifyContent: "center",
    margin: "auto"
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  whatincluded: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:10,
  },
  freeType: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  freeTypeText: {
    marginLeft: 18,
    marginRight: 18,
    fontWeight: 'bold',
    fontSize: 16,
  }
} );


export default UserInfo;
