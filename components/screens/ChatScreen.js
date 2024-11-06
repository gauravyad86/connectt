
import React, { useContext, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { MyContext } from '../MyContext';
import users from '@/assets/data/users';
import connectlogo from "@/assets/images/connect2.jpg";
import Bottombar from './Bottombar/bottombar';
import ChatSection from "@/components/Pages/chatSection"
import { useNavigation } from 'expo-router';
import TileView from './TileView';

const { width, height } = Dimensions.get( 'window' );

export default function Chatscreen () {
  const navigation = useNavigation()

  const { bgColor, lightTheme, lightColor } = useContext( MyContext );
  const [ filteredData, setFilteredData ] = useState( users );
  const [ searchQuery, setSearchQuery ] = useState( '' );
  const [ activeTab, setActiveTab ] = useState( 'Messages' ); // 'Messages' or 'Matches'
  const [ activeSubTab, setActiveSubTab ] = useState( 'All' ); // 'All' or 'Focus'
  const [ activeSubTabMatches, setActiveSubTabMatches ] = useState( 'List' ); // 'All' or 'Focus'
  const [ activeSubTabMatchesTile, setActiveSubTabMatchesTile ] = useState( 'parents' ); // 'All' or 'Focus'
  const [ focusChatUser, setFocusChatUser ] = useState( null ); // To hold the user in "Focus" chat

  const [ messages, setMessages ] = useState( [] ); // **Added state for messages**
  const [ currentMessage, setCurrentMessage ] = useState( '' ); // **State for current message input**
  const scrollViewRef = useRef(); // **Reference for ScrollView to auto-scroll**
  const [ tileViewUser, setTileViewUser ] = useState( filteredData[ 0 ] ); // Var

  const handleSearch = ( query ) => {
    setSearchQuery( query );
    const filtered = query
      ? users.filter( ( item ) => item.name.toLowerCase().includes( query.toLowerCase() ) )
      : users;
    setFilteredData( filtered );
  };
  const handleUserClick = ( user ) => {
    setSelectedUser( user );
    setMessages( [] ); // **Clear messages when a new user is selected (optional)**
  };
  const handleTabChange = ( tab ) => {
    setActiveTab( tab );
    setActiveSubTab( 'All' ); // Reset sub-tab to 'All' on main tab change
    setFocusChatUser( null ); // Reset focus chat user
    setSearchQuery( '' ); // Reset search query on tab change
  };

  const handleSubTabChange = ( subTab ) => {
    setActiveSubTab( subTab );
    if ( subTab === 'Focus' ) {
      setFocusChatUser( filteredData[ 0 ] ); // Set a default user for "Focus" (change as needed)
    } else {
      setFocusChatUser( null );
    }
  };
  const handleTabChange2 = ( tab ) => {
    setActiveTab( tab );
    setActiveSubTabMatches( 'Tile' )
  }
  const handleSubTabChange2 = ( subTab ) => {
    setActiveSubTabMatches( subTab );
    setActiveSubTab( null )

  };
  const handleSubTabChange3 = ( subTab ) => {
    setActiveSubTabMatchesTile( subTab );
    setActiveSubTab( null )
    if ( subTab === 'Parents' ) {
      console.log( "fdfdf" )
    } else {
      console.log( "else" )
    }
  };
  const handleUserClickInListView = ( user ) => {
    setTileViewUser( user ); // Set selected user in Tile View
    setActiveSubTabMatches( 'Tile' ); // Switch to Tile View
  };

  const handleNavigation = ( action ) => {
    const currentIndex = filteredData.findIndex( ( user ) => user === tileViewUser );
    if ( action === 'next' && currentIndex < filteredData.length - 1 ) {
      setTileViewUser( filteredData[ currentIndex + 1 ] );
    } else if ( action === 'previous' && currentIndex > 0 ) {
      setTileViewUser( filteredData[ currentIndex - 1 ] );
    } else if ( action === 'first' ) {
      setTileViewUser( filteredData[ 0 ] );
    } else if ( action === 'last' ) {
      setTileViewUser( filteredData[ filteredData.length - 1 ] );
    }
  };
  return (
    <View style={ [ styles.root, { backgroundColor: lightTheme } ] }>
      <View style={ styles.navbar }>
        <View style={ styles.icontext }>
          <Image source={ connectlogo } style={ { height: 25, width: 25 } } />
          <Text style={ [ styles.text, { color: "#FF8C00" } ] }>Connect</Text>
        </View>
        <TouchableOpacity style={ styles.righticons } onPress={ () => navigation.navigate( 'shield' ) }>
          <FontAwesome6 name="shield" size={ 25 } color={ bgColor } />
        </TouchableOpacity>
      </View>

      {/* Tabs for Messages and Matches */ }
      <View style={ styles.tabContainer }>
        <TouchableOpacity onPress={ () => handleTabChange( 'Messages' ) }>
          <Text style={ [ styles.tabText, activeTab === 'Messages' && styles.activeTab ] }>Messages</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity onPress={ () => handleTabChange2( 'Matches' ) }>
          <Text style={ [ styles.tabText, activeTab === 'Matches' && styles.activeTab ] }>Matches</Text>
        </TouchableOpacity>
      </View>

      {/* Search Box */ }
      <TextInput
        style={ styles.searchBox }
        placeholder="Search"
        value={ searchQuery }
        onChangeText={ handleSearch }
      />

      {/* Sub-tabs for All and Focus */ }
      { activeTab === 'Messages' && (
        <View style={ styles.subTabContainer }>
          <TouchableOpacity onPress={ () => {
            handleSubTabChange( 'All' )
          } }>
            <Text style={ [ styles.subTabText, activeSubTab === 'All' && styles.activeSubTab ] }>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => handleSubTabChange( 'Focus' ) }>
            <Text style={ [ styles.subTabText, activeSubTab === 'Focus' && styles.activeSubTab ] }>Focus</Text>
          </TouchableOpacity>
        </View>
      ) }

      { activeTab === 'Matches' && (
        <View style={ styles.subTabContainer }>
          <TouchableOpacity onPress={ () => {
            handleSubTabChange2( 'Tile' )
          } }>
            <Text style={ [ styles.subTabText, activeSubTabMatches === 'Tile' && styles.activeSubTab ] }>TileView</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => handleSubTabChange2( 'List' ) }>
            <Text style={ [ styles.subTabText, activeSubTabMatches === 'List' && styles.activeSubTab ] }>List View</Text>
          </TouchableOpacity>
        </View>
      ) }
      { activeTab === 'Messages' ? (
        activeSubTab === 'Focus' && focusChatUser ? (
          <View style={ styles.chatSection }>
            <View style={ styles.chatHeader }>
              <Image source={ { uri: focusChatUser.image } } style={ styles.chatUserImage } />
              <Text style={ styles.chatUserName }>{ focusChatUser.name }</Text>
            </View>
            <ChatSection />
          </View>
        ) : (
          <ScrollView style={ styles.users }>
            <View style={ styles.messHeading }>
              <Text style={ [ styles.messagetext, { color: lightColor } ] }>Messages</Text>
              <Text style={ [ styles.messagetext, { color: bgColor } ] }>({ filteredData.length })</Text>
            </View>
            { filteredData.map( ( user ) => (
              <TouchableOpacity
                key={ user.id }
                onPress={ () => {
                  setActiveSubTab( 'Focus' );
                  setFocusChatUser( user );
                } }>
                <View style={ styles.mess }>
                  <Image source={ { uri: user.image } } style={ styles.image } />
                  <View style={ styles.messageContent }>
                    <Text style={ [ styles.name, { color: lightColor } ] }>{ user.name }</Text>
                    <Text style={ styles.bio }>{ user.bio }</Text>
                    <View style={ styles.underline } />
                  </View>
                </View>
              </TouchableOpacity>
            ) ) }
          </ScrollView>
        )
      ) : activeTab === 'Matches' && activeSubTabMatches === 'List' ? (
        <ScrollView style={ styles.listView }>
          { filteredData.map( ( user ) => (
            <TouchableOpacity
              key={ user.id }
              onPress={ () => {
                setActiveSubTabMatches( 'Tile' )
                set
              } }>
              <View style={ styles.mess }>
                <Image source={ { uri: user.image } } style={ styles.image } />
                <View style={ styles.messageContent }>
                  <Text style={ [ styles.name, { color: lightColor } ] }>{ user.name }</Text>
                  <Text style={ styles.bio }>{ user.bio }</Text>
                  <View style={ styles.underline } />
                </View>
              </View>
            </TouchableOpacity>
          ) ) }
        </ScrollView>
      ) : (
        <>

          <View style={ styles.subTabContainer }>
            <TouchableOpacity onPress={ () => {
              handleSubTabChange3( 'parents' )
            } }>
              <Text style={ [ styles.subTabText, activeSubTabMatchesTile === 'parents' && styles.activeSubTab ] }>Parents</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => handleSubTabChange3( 'child' ) }>
              <Text style={ [ styles.subTabText, activeSubTabMatchesTile === 'child' && styles.activeSubTab ] }>Child</Text>
            </TouchableOpacity>
          </View>

          {
            <>
              <View style={ styles.tileViewContainer }>
                <Image source={ { uri: tileViewUser.image } } style={ styles.tileViewImage } />
                <Text style={ styles.tileViewName }>{ tileViewUser.name }</Text>
                <Text style={ styles.tileViewBio }>{ tileViewUser.bio }</Text>
              </View>
              <View style={ styles.navigationButtons }>
                <TouchableOpacity onPress={ () => handleNavigation( 'first' ) }>
                  <Ionicons name="play-skip-back" size={ 24 } color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => handleNavigation( 'previous' ) }>
                  <Ionicons name="play-back-sharp" size={ 24 } color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => handleNavigation( 'next' ) }>
                  <Ionicons name="play-forward-sharp" size={ 24 } color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => handleNavigation( 'last' ) }>
                  <Ionicons name="play-skip-forward" size={ 24 } color="black" />
                </TouchableOpacity>
              </View>
            </>

          }
          {/* <TileView /> */ }

        </>
      ) }

      <Bottombar />
    </View>
  );
}

const styles = StyleSheet.create( {
  root: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: '100%',
    height: height * 0.07,
  },
  messHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  messagetext: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 5,
  },
  navigationButtons: { flexDirection: 'row', justifyContent: 'space-around', width: '60%', position: "absolute", top: 550, },
  tileViewContainer: { alignItems: 'center', justifyContent: 'center' },
  tileViewImage: { width: 250, height: 250, marginBottom: 10, marginTop: 10, },
  tileViewName: { fontSize: 20, fontWeight: 'bold' },
  tileViewBio: { fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 20 },
  searchBox: {
    height: 40,
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    width: "95%",
    marginLeft: 10,
    paddingLeft: 4,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  tabText: {
    fontSize: 17,
    fontWeight: "500",
    marginHorizontal: 5,
    color: 'grey',
  },
  activeTab: {
    color: '#FF8C00',
  },
  subTabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  subTabText: {
    fontSize: 15,
    fontWeight: "500",
    marginHorizontal: 10,
    color: 'grey',
  },
  activeSubTab: {
    color: '#FF8C00',
  },
  chatSection: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  chatUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatUserName: {
    fontSize: 18,
    fontWeight: '600',
  },
  chatMessages: {
    flex: 1,
    marginBottom: 10,
  },
  messageBubble: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  messageText: {
    fontSize: 15,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  messageInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  mess: {
    width: width - 20,
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
  },
  bio: {
    fontSize: 13,
  },
  messageContent: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 12,
    flex: 1,
  },
  underline: {
    borderBottomColor: '#555962',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    flex: 1,
  },
  icontext: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "red",
    marginLeft: 6,
    fontSize: 22,
    fontWeight: "500",
  },

} );
