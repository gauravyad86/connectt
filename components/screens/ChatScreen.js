import React, { useContext, useRef, useState } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	ScrollView,
	Dimensions,
	FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { MyContext } from '../MyContext';

import connectlogo from '@/assets/images/connect2.jpg';
import Bottombar from './Bottombar/bottombar';
import ChatSection from '@/components/Pages/chatSection';
import { useNavigation } from 'expo-router';

import Data from '../../assets/data/Data';
const { width, height } = Dimensions.get('window');

import Home2 from './Home2';
import { ProfileComp } from './Home1';
export default function Chatscreen() {
	const navigation = useNavigation();
	const { bgColor, lightTheme, lightColor } = useContext(MyContext);
	const [filteredData, setFilteredData] = useState(Data.parentUsers);
	const [searchQuery, setSearchQuery] = useState('');
	const [activeTab, setActiveTab] = useState('Messages'); // 'Messages' or 'Matches'
	const [activeSubTab, setActiveSubTab] = useState('All'); // 'All' or 'Focus'
	const [activeSubTabMatches, setActiveSubTabMatches] = useState('List'); // 'All' or 'Focus'
	const [activeSubTabMatchesTile, setActiveSubTabMatchesTile] =
		useState('parents'); // 'All' or 'Focus'
	const [focusChatUser, setFocusChatUser] = useState(null); // To hold the user in "Focus" chat
	const flatListRef = useRef(null);
	const scrollUp = () => {
		flatListRef.current.scrollToOffset({
			offset: 0, // Scroll to the top
			animated: true,
		});
	};

	const scrollDown = () => {
		flatListRef.current.scrollToEnd({
			animated: true, // Scroll to the bottom
		});
	};

	const [messages, setMessages] = useState([]); // **Added state for messages**
	const [TileUser, setTileUser] = useState(); // **Added state for messages**
	const [currentMessage, setCurrentMessage] = useState(''); // **State for current message input**
	const [tileViewUser, setTileViewUser] = useState(filteredData[0]); // Var
	const [tileViewUserIndex, setTileViewUserIndex] = useState(0);
	const handleSearch = (query) => {
		setSearchQuery(query);
		const filtered = query
			? users.filter((item) =>
					item.name.toLowerCase().includes(query.toLowerCase())
			  )
			: users;
		setFilteredData(filtered);
	};
	const handleUserClick = (user) => {
		setSelectedUser(user);
		setMessages([]); // **Clear messages when a new user is selected (optional)**
	};
	const handleTabChange = (tab) => {
		setActiveTab(tab);
		setActiveSubTab('All'); // Reset sub-tab to 'All' on main tab change
		setFocusChatUser(null); // Reset focus chat user
		setSearchQuery(''); // Reset search query on tab change
	};

	const handleSubTabChange = (subTab) => {
		setActiveSubTab(subTab);
		if (subTab === 'Focus') {
			setFocusChatUser(filteredData[0]); // Set a default user for "Focus" (change as needed)
		} else {
			setFocusChatUser(null);
		}
	};
	const handleTabChange2 = (tab) => {
		setActiveTab(tab);
		setActiveSubTabMatches('Tile');
	};
	const handleSubTabChange2 = (subTab) => {
		setActiveSubTabMatches(subTab);
		setActiveSubTab(null);
	};
	const handleSubTabChange3 = (subTab) => {
		setActiveSubTabMatchesTile(subTab);
		setActiveSubTab(null);
		if (subTab === 'Parents') {
			console.log('fdfdf');
		} else {
			console.log('else');
		}
	};

	const handleUserClickInListView = (index) => {
		setTileViewUserIndex(index);
		setActiveSubTabMatches('Tile');
	};

	const handleNavigation = (direction) => {
		let newIndex = tileViewUserIndex;
		if (direction === 'first') newIndex = 0;
		else if (direction === 'last') newIndex = Data.parentUsers.length - 1;
		else if (direction === 'previous')
			newIndex = Math.max(tileViewUserIndex - 1, 0);
		else if (direction === 'next')
			newIndex = Math.min(tileViewUserIndex + 1, Data.parentUsers.length - 1);
		setTileViewUserIndex(newIndex);
	};

	return (
		<View style={[styles.root, { backgroundColor: lightTheme }]}>
			<View style={styles.navbar}>
				<View style={styles.icontext}>
					<Image source={connectlogo} style={{ height: 30, width: 30 }} />
					<Text style={[styles.text, { color: '#FF8C00' }]}>Connect</Text>
				</View>

				{/* <TouchableOpacity onPress={ () => navigation.navigate( 'notifications' ) }>
                            <Ionicons name="notifications" size={ 26 } style={ styles.sheildicon } color={ bgColor } />
       </TouchableOpacity> */}
				<View style={styles.righticons}>
					<TouchableOpacity
						onPress={() => navigation.navigate('notifications')}
					>
						<Ionicons
							name='notifications'
							size={26}
							style={styles.sheildicon}
							color={bgColor}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.sheildicon}
						onPress={() => navigation.navigate('shield')}
					>
						<FontAwesome6 name='shield' size={25} color={bgColor} />
					</TouchableOpacity>
				</View>
			</View>

			{/* Tabs for Messages and Matches */}
			<View style={styles.tabContainer}>
				<TouchableOpacity onPress={() => handleTabChange('Messages')}>
					<Text
						style={[
							styles.tabText,
							activeTab === 'Messages' && styles.activeTab,
						]}
					>
						Messages
					</Text>
				</TouchableOpacity>
				<Text> | </Text>
				<TouchableOpacity onPress={() => handleTabChange2('Matches')}>
					<Text
						style={[
							styles.tabText,
							activeTab === 'Matches' && styles.activeTab,
						]}
					>
						Matches
					</Text>
				</TouchableOpacity>
			</View>

			{/* Search Box */}
			<TextInput
				style={styles.searchBox}
				placeholder='Search'
				value={searchQuery}
				onChangeText={handleSearch}
			/>

			{/* Sub-tabs for All and Focus */}
			{activeTab === 'Messages' && (
				<View style={styles.subTabContainer}>
					<TouchableOpacity
						onPress={() => {
							handleSubTabChange('All');
						}}
					>
						<Text
							style={[
								styles.subTabText,
								activeSubTab === 'All' && styles.activeSubTab,
							]}
						>
							All
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleSubTabChange('Focus')}>
						<Text
							style={[
								styles.subTabText,
								activeSubTab === 'Focus' && styles.activeSubTab,
							]}
						>
							Focus
						</Text>
					</TouchableOpacity>
				</View>
			)}

			{activeTab === 'Matches' && (
				<View style={styles.subTabContainer}>
					<TouchableOpacity
						onPress={() => {
							handleSubTabChange2('Tile');
						}}
					>
						<Text
							style={[
								styles.subTabText,
								activeSubTabMatches === 'Tile' && styles.activeSubTab,
							]}
						>
							TileView
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleSubTabChange2('List')}>
						<Text
							style={[
								styles.subTabText,
								activeSubTabMatches === 'List' && styles.activeSubTab,
							]}
						>
							List View
						</Text>
					</TouchableOpacity>
				</View>
			)}
			{activeTab === 'Messages' ? (
				activeSubTab === 'Focus' && focusChatUser ? (
					<View style={styles.chatSection}>
						<View style={styles.chatHeader}>
							<Image
								source={{ uri: focusChatUser.images[0] }}
								style={styles.chatUserImage}
							/>
							<Text style={styles.chatUserName}>{focusChatUser.name}</Text>
						</View>
						<ChatSection />
					</View>
				) : (
					<ScrollView style={styles.users}>
						<View style={styles.messHeading}>
							<Text style={[styles.messagetext, { color: lightColor }]}>
								Messages
							</Text>
							<Text style={[styles.messagetext, { color: bgColor }]}>
								({Data.parentUsers.length})
							</Text>
						</View>
						{filteredData.map((user) => (
							<TouchableOpacity
								key={user.id}
								onPress={() => {
									setActiveSubTab('Focus');
									setFocusChatUser(user);
								}}
							>
								<View style={styles.mess}>
									<Image
										source={{ uri: user.images[0] }}
										style={styles.image}
									/>
									<View style={styles.messageContent}>
										<Text style={[styles.name, { color: lightColor }]}>
											{user.name}
										</Text>
										<Text style={styles.bio}>{user.quote}</Text>
										<View style={styles.underline} />
									</View>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				)
			) : activeTab === 'Matches' && activeSubTabMatches === 'List' ? (
				// <ScrollView style={ styles.listView }>
				//   { Data.parentUsers.map( ( user ) => (
				//     <TouchableOpacity
				//       key={ user.id }
				//       onPress={ () => {
				//         setActiveSubTabMatches( 'Tile' )

				//       } }>
				//       <View style={ styles.mess }>
				//         <Image source={ { uri: user.image } } style={ styles.image } />
				//         <View style={ styles.messageContent }>
				//           <Text style={ [ styles.name, { color: lightColor } ] }>{ user.name }</Text>
				//           <Text style={ styles.bio }>{ user.quote }</Text>
				//           <View style={ styles.underline } />
				//         </View>
				//       </View>
				//     </TouchableOpacity>
				//   ) ) }
				// </ScrollView>
				<Home2
					activeSubTabMatches={'list'}
					setAcc={() => {
						setActiveTab('asdasd');
					}}
				/>
			) : (
				<View
					style={{
						flexGrow: 1,
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: 200,
						// paddingHorizontal: 20,
						position: 'relative',
					}}
				>
					<View
						style={{
							position: 'absolute',
							right: 0,
							top: -10,
							zIndex: 100,
						}}
					>
						<TouchableOpacity
							onPress={scrollUp}
							style={{
								padding: 5,
								borderRadius: 5,
							}}
						>
							<FontAwesome
								name='chevron-up'
								size={36}
								color={'#F57B21'}
								style={{
									margin: 5,
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={scrollDown}
							style={{
								padding: 5,
								borderRadius: 5,
							}}
						>
							<FontAwesome
								name='chevron-down'
								size={36}
								color={'#F57B21'}
								style={{
									margin: 5,
								}}
							/>
						</TouchableOpacity>
					</View>
					<FlatList
						ref={flatListRef}
						horizontal={false}
						data={[1, 2, 3, 4, 5]}
						contentContainerStyle={{ marginBottom: 200 }}
						keyExtractor={(item) => item.id}
						renderItem={({ item, index }) => <ProfileComp />}
					/>
				</View>
			)}
			<Bottombar />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	sheildicon: {
		marginLeft: 25,
	},
	navbar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingHorizontal: 10,
		width: '100%',
		height: height * 0.05,
	},
	righticons: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	messHeading: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	messagetext: {
		fontSize: 17,
		fontWeight: '500',
		marginLeft: 5,
	},
	navigationButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%',
		position: 'absolute',
		top: 350,
	},
	tileViewContainer: { alignItems: 'center', justifyContent: 'center' },
	tileViewImage: { width: 250, height: 250, marginBottom: 10, marginTop: 10 },
	tileViewName: { fontSize: 20, fontWeight: 'bold' },
	tileViewBio: {
		fontSize: 16,
		textAlign: 'center',
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	searchBox: {
		height: 35,
		marginTop: 5,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 0,
		width: '95%',
		marginLeft: 10,
		paddingLeft: 4,
	},
	tabContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 0,
	},
	tabText: {
		fontSize: 17,
		fontWeight: 'bold',
		marginHorizontal: 30,
		color: 'grey',
	},
	activeTab: {
		color: '#FF8C00',
	},
	subTabContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 5,
	},
	subTabText: {
		fontSize: 15,
		fontWeight: 'bold',
		marginHorizontal: 50,
		color: 'grey',
	},
	subTabText2: {
		fontSize: 15,
		fontWeight: 'bold',
		marginHorizontal: 65,
		color: 'grey',
	},
	activeSubTab: {
		color: '#FF8C00',
	},
	chatSection: {
		flex: 1,
		// padding: 10,
		backgroundColor: '#f0f0f0',
		paddingBottom: 50,
	},
	chatHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		paddingLeft: 10,
		backgroundColor: 'orange',
		height: height * 0.07,
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
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		paddingHorizontal: 10,
	},
	image: {
		width: 65,
		height: 65,
		borderRadius: 32.5,
	},
	name: {
		fontWeight: '600',
		fontSize: 18,
	},
	bio: {
		fontSize: 13,
	},
	messageContent: {
		flexDirection: 'column',
		justifyContent: 'center',
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
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		color: 'red',
		marginLeft: 6,
		fontSize: 22,
		fontWeight: '500',
	},
});
// import React, { useContext, useRef, useState } from 'react';
// import { View, Text, Image, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { FontAwesome6, Ionicons } from '@expo/vector-icons';
// import { MyContext } from '../MyContext';
// import connectlogo from "@/assets/images/connect2.jpg";
// import Bottombar from './Bottombar/bottombar';
// import { useNavigation } from 'expo-router';
// import Data from '@/assets/data/Data';
// const { width, height } = Dimensions.get('window');

// export default function Chatscreen() {
//   const navigation = useNavigation();
//   const { bgColor, lightTheme, lightColor } = useContext(MyContext);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeTab, setActiveTab] = useState('Messages'); // 'Messages' or 'Matches'
//   const [activeSubTab, setActiveSubTab] = useState('All'); // 'All' or 'Focus'
//   const [activeSubTabMatches, setActiveSubTabMatches] = useState('List'); // 'List' or 'Tile'
//   const [focusChatUser, setFocusChatUser] = useState(null); // For Focus chat user
//   const [tileViewUser, setTileViewUser] = useState(Data.parentUsers[0]); // For Tile View user

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setActiveSubTab('All');
//     setFocusChatUser(null);
//     setSearchQuery('');
//   };

//   const handleTabChange2 = (tab) => {
//     setActiveTab(tab);
//     setActiveSubTabMatches('Tile');
//   };

//   const handleSubTabChange2 = (subTab) => {
//     setActiveSubTabMatches(subTab);
//     setActiveSubTab(null);
//   };

//   const handleUserClickInListView = (user) => {
//     setTileViewUser(user);
//     setActiveSubTabMatches('Tile');
//   };

//   const handleNavigation = (action) => {
//     const currentIndex = Data.parentUsers.findIndex((user) => user === tileViewUser);
//     if (action === 'next' && currentIndex < Data.parentUsers.length - 1) {
//       setTileViewUser(Data.parentUsers[currentIndex + 1]);
//     } else if (action === 'previous' && currentIndex > 0) {
//       setTileViewUser(Data.parentUsers[currentIndex - 1]);
//     } else if (action === 'first') {
//       setTileViewUser(Data.parentUsers[0]);
//     } else if (action === 'last') {
//       setTileViewUser(Data.parentUsers[Data.parentUsers.length - 1]);
//     }
//   };

//   return (
//     <View style={[styles.root, { backgroundColor: lightTheme }]}>
//       <View style={styles.navbar}>
//         <View style={styles.icontext}>
//           <Image source={connectlogo} style={{ height: 25, width: 25 }} />
//           <Text style={[styles.text, { color: "#FF8C00" }]}>Connect</Text>
//         </View>
//         <TouchableOpacity style={styles.righticons} onPress={() => navigation.navigate('shield')}>
//           <FontAwesome6 name="shield" size={25} color={bgColor} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.tabContainer}>
//         <TouchableOpacity onPress={() => handleTabChange('Messages')}>
//           <Text style={[styles.tabText, activeTab === 'Messages' && styles.activeTab]}>Messages</Text>
//         </TouchableOpacity>
//         <Text> | </Text>
//         <TouchableOpacity onPress={() => handleTabChange2('Matches')}>
//           <Text style={[styles.tabText, activeTab === 'Matches' && styles.activeTab]}>Matches</Text>
//         </TouchableOpacity>
//       </View>

//       <TextInput
//         style={styles.searchBox}
//         placeholder="Search"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />

//       {activeTab === 'Messages' ? (
//         <ScrollView style={styles.users}>
//           <View style={styles.messHeading}>
//             <Text style={[styles.messagetext, { color: lightColor }]}>Messages</Text>
//             <Text style={[styles.messagetext, { color: bgColor }]}>({Data.parentUsers.length})</Text>
//           </View>
//           {Data.parentUsers.map((user) => (
//             <TouchableOpacity
//               key={user.name}
//               onPress={() => {
//                 setActiveSubTab('Focus');
//                 setFocusChatUser(user);
//               }}>
//               <View style={styles.mess}>
//                 <Image source={{ uri: user.image }} style={styles.image} />
//                 <View style={styles.messageContent}>
//                   <Text style={[styles.name, { color: lightColor }]}>{user.name}</Text>
//                   <Text style={styles.bio}>{user.marriageStatus}</Text>
//                   <View style={styles.underline} />
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       ) : activeTab === 'Matches' && activeSubTabMatches === 'List' ? (
//         <ScrollView style={styles.listView}>
//           {Data.parentUsers.map((user) => (
//             <TouchableOpacity
//               key={user.name}
//               onPress={() => handleUserClickInListView(user)}>
//               <View style={styles.mess}>
//                 <Image source={{ uri: user.image }} style={styles.image} />
//                 <View style={styles.messageContent}>
//                   <Text style={[styles.name, { color: lightColor }]}>{user.name}</Text>
//                   <Text style={styles.bio}>{user.marriageStatus}</Text>
//                   <View style={styles.underline} />
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       ) : (
//         <View style={{ justifyContent: "center", alignItems: "center" }}>
//           <View style={styles.tileViewContainer}>
//             <Image source={{ uri: tileViewUser.image }} style={styles.tileViewImage} />
//             <Text style={styles.tileViewName}>{tileViewUser.name}</Text>
//             <Text style={styles.tileViewBio}>{tileViewUser.marriageStatus}</Text>
//           </View>
//           <View style={styles.navigationButtons}>
//             <TouchableOpacity onPress={() => handleNavigation('first')}>
//               <Ionicons name="play-skip-back" size={26} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleNavigation('previous')}>
//               <Ionicons name="play-back-sharp" size={30} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleNavigation('next')}>
//               <Ionicons name="play-forward-sharp" size={30} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleNavigation('last')}>
//               <Ionicons name="play-skip-forward" size={26} color="black" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       <Bottombar />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   root: { flex: 1 },
//   navbar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     width: '100%',
//     height: height * 0.07,
//   },
//   icontext: { flexDirection: "row", alignItems: "center" },
//   text: { color: "red", marginLeft: 6, fontSize: 22, fontWeight: "500" },
//   tabContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   tabText: {
//     fontSize: 17,
//     fontWeight: "bold",
//     marginHorizontal: 30,
//     color: 'grey',
//   },
//   activeTab: { color: '#FF8C00' },
//   searchBox: {
//     height: 40,
//     marginTop: 15,
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 5,
//     width: "95%",
//     marginLeft: 10,
//     paddingLeft: 4,
//   },
//   users: { marginVertical: 10 },
//   mess: {
//     width: width - 20,
//     height: 90,
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//     paddingHorizontal: 10,
//   },
//   image: { width: 65, height: 65, borderRadius: 32.5 },
//   name: { fontWeight: "600", fontSize: 18 },
//   bio: { fontSize: 13 },
//   messageContent: { flexDirection: "column", marginLeft: 12, flex: 1 },
//   underline: {
//     borderBottomColor: '#555962',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     marginTop: 10,
//     flex: 1,
//   },
//   tileViewContainer: { alignItems: "center" },
//   tileViewImage: { width: 200, height: 200, borderRadius: 100 },
//   tileViewName: { fontSize: 24, fontWeight: "600", marginVertical: 10 },
//   tileViewBio: { fontSize: 18 },
//   navigationButtons: { flexDirection: "row", justifyContent: "space-evenly", width: "80%", marginTop: 20 },
// });
