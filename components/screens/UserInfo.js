import { Entypo, FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Pressable, Button, Dimensions } from 'react-native';
import plans from "@/assets/data/plans"
import { useNavigation } from 'expo-router';
import Bottombar from './Bottombar/bottombar';
import { MyContext } from '../MyContext';
const { width, height } = Dimensions.get( 'window' );
const UserInfo = () => {
  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const onSwipe = ( event ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round( contentOffsetX / 300 );
    setCurrentIndex( index );
  };
  const navigation = useNavigation();
  const showheader = true;
  const {setUser} = useContext(MyContext)
  return (
    <ScrollView style={ styles.container }>
      {/* Header */ }
      <View style={ styles.navbar }>
        <View style={ styles.icontext }>
          <Fontisto style={ styles.icon } size={ 30 } name='tinder' />
          <Text style={ styles.text }  >tinder</Text>
        </View>
        <View style={ styles.righticons }>
          {/* <TouchableOpacity onPress={ () => {
            navigation.navigate( "shield" )
          } }>
            <FontAwesome6 name="shield" size={ 26 } style={ styles.sheildicon } color="grey" />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={ () => {
            navigation.navigate( 'setting', { showheader } )
            console.log( "object" )
          } }>
            <Ionicons name="settings" size={ 25 } style={ styles.sheildicon } color="grey" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {
            setUser(false)
          } }>
           
            <Entypo name="log-out" size={ 25 } style={ styles.sheildicon } color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Profile Section */ }
      <View style={ styles.profileSection }>
        <View style={ styles.profilePicContainer }>
          <Image
            source={ { uri: 'https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain' } }
            style={ styles.profilePic }
          />
          <TouchableOpacity style={ styles.editIcon } onPress={ () => { navigation.navigate( 'editprofile' ) } }>
            <Text style={ styles.editText }>edit</Text>
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
          <FontAwesome name="star" size={ 25 } color="#1597fa" />
          <Text style={ styles.actionText }>GET MORE </Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.useractiveicons } onPress={ () => {
          navigation.navigate( 'subsription' )
        } } >
          <FontAwesome name="flash" size={ 25 } color="#c145ec" />
          <Text style={ styles.actionText }>GET MORE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.useractiveicons } onPress={ () => {
          navigation.navigate( 'subsription' )
        } }>
          <Fontisto name="tinder" color="red" size={ 25 } />
          <Text style={ styles.actionText }>Subsriptions</Text>
        </TouchableOpacity>
      </View>

      {/* Upgrade Section */ }

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={ false }
        onScroll={ onSwipe }
        scrollEventThrottle={ 16 }

      >
        { plans.map( ( plan, index ) => (

          <View style={ styles.upgradeSection } key={ plan.id }>
            <View style={ styles.upgrade }>
              <View style={ styles.upgradeTitle }>
                <Fontisto style={ { color: plan.id === 1 ? '#d7aa3e' : plan.id === 2 ? 'platinum' : '#ff4d46', marginRight: 5, } } size={ 24 } name='tinder' />
                <Text style={ { fontSize: 23, fontWeight: "500" } } >tinder</Text>
                <View style={ [ styles.typesstyle, { backgroundColor: plan.id === 1 ? '#d7aa3e' : plan.id === 2 ? '#4B494D' : '#ff4d46' } ] } >
                  <Text style={ [ { fontSize: 10, fontWeight: "bold" }, { color: plan.id === 1 ? 'black' : plan.id === 2 ? 'white' : 'black' } ] }>{ plan.type }</Text>
                </View>
              </View>
              <TouchableOpacity style={ [ styles.selectButton, { backgroundColor: plan.id === 1 ? '#d7aa3e' : plan.id === 2 ? '#4B494D' : '#ff4d46' } ] } onPress={ () => {
                navigation.navigate( "seewholikeyoumore" )
              } }>
                <Text style={ [ styles.selectButtonText, { color: plan.id === 1 ? 'black' : plan.id === 2 ? 'white' : 'black' } ] }>upgrade</Text>
              </TouchableOpacity>
            </View>
            <View style={ styles.whatincluded }>
              <Text style={ styles.rowValue }>What's Included</Text>
              <View style={ styles.freeType } >
                <Text style={ styles.freeTypeText } >Free</Text>
                <Text style={ styles.freeTypeText } >{ plan.type }</Text>
              </View>
            </View>
            {/* <View style={ styles.upgradeContent }> */ }
            <View style={ styles.whatincluded }>
              <Text style={ styles.rowTitle }>{ plan.title1 }</Text>
              <View style={ styles.freeType } >
                {/* <Text style={ styles.freeTypeText }>—      </Text> */ }
                <Text style={ styles.freeTypeText } >✓  </Text>
              </View>
            </View>
            <View style={ styles.row }>
              <Text style={ styles.rowTitle }>{ plan.title2 }</Text>
              <View style={ styles.freeType } >
                {/* <Text style={ styles.freeTypeText } >—     </Text> */ }
                <Text style={ styles.freeTypeText } >✓  </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={ [ styles.seeAllFeatures, { color: plan.id === 1 ? 'gold' : plan.id === 2 ? '#4B494D' : '#ff4d46' } ] }>See All Features</Text>
            </TouchableOpacity>
            {/* </View> */ }
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
      <Bottombar />
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
  selectButton: {
    height: height * .04,
    width: width * .3,
    // backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  selectButtonText: {
    fontSize: 20,
    fontWeight: "700",
  },
  typesstyle: {
    justifyContent: "center", alignItems: "center", height: height * .02, width: "26%", marginTop: 7.5, borderRadius: 5
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
    height: "44%",
    backgroundColor: "#111419",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    marginTop: 30
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
    height: "12%",

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
    height: height * .65,
    width: 420,
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
    alignItems: "center"
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
    // color: '#ffcc00',
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
    marginTop: 10,
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
  },
  navbar: {
    width: '100%',
    height: '7%',
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    top: 0,
    padding: 10,
  },
  righticons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 5,
  },
  icontext: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    //  marginLeft:6,
  },
  text: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },
  icon: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },
  sheildicon: {
    marginRight: 8,
    marginLeft: 15,
  },
  bottomBar: {
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
  },
} );


export default UserInfo;
