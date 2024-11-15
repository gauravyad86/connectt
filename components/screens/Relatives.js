import React, { useState, useContext } from 'react';
import {
	View,
	ScrollView,
	Text,
	StyleSheet,
	TouchableOpacity,
	Switch,
	Image,
	Modal,
	FlatList,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { MyContext } from '../MyContext';
import MultiSelect from './react-native-multiple-select-fix';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import connectlogo from '@/assets/images/connect2.jpg';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import InputField from '../InputField';
import { useRoute } from '@react-navigation/native';

const Relatives = () => {
	const route = useRoute();
	const { combinedData, images, currentData } = route.params;

	const [distance, setDistance] = useState(80);
	const [gender, setGender] = useState('M');
	const [ageRange, setAgeRange] = useState({ lower: 27, upper: 39 });
	const [showOutsideAgeRange, setShowOutsideAgeRange] = useState(false);
	const [selectedLanguages, setSelectedLanguages] = useState([]);
	const { bgColor, lightTheme, lightColor } = useContext(MyContext);

	const [form, setForm] = useState({
		email: '',
		mobileNumber: '',
		name: '',
		age: '',
		gender: '',
		height: '',
		state: '',
		district: '',
		city: '',
		languagesKnown: '',
		income: '',
		education: '',
		occupationType: '',
		company: '',
		familyMembers: '',
		religion: '',
		caste: '',
		animals: '',
		places: '',
		bio: '',
		personalityType: '',
		alcohol: false,
		smoking: false,
		diet: '',
		sports: '',
		travel: '',
		exercise: '',
		socialMedia: '',
		lastActive: '',
		status: true,
		lastUpdated: '',
	});
	const [isModalVisible, setModalVisible] = useState(false);

	const handleInputChange = (field, value) => {
		setForm((prevForm) => ({ ...prevForm, [field]: value }));
	};
	const closeModal = () => {
		setModalVisible(false);
	};

	// Language options (sample options, can be adjusted)
	const languageOptions = [
		{ id: '1', name: 'English' },
		{ id: '2', name: 'Spanish' },
		{ id: '3', name: 'French' },
		{ id: '4', name: 'German' },
	];

	const handleSliderChange = (values) => {
		setAgeRange(values);
	};

	const handleAgeRangeChange = (type, value) => {
		setAgeRange((prevRange) => ({ ...prevRange, [type]: value }));
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={[{ backgroundColor: lightTheme }]}>
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
			</View>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View style={styles.imageContainer}>
					{images.map((_, index) => (
						<Image
							source={{ uri: images[index] }}
							style={styles.imageStyle}
							resizeMode='cover'
						/>
					))}
				</View>

				<View>
					<Text style={styles.userName}>{currentData?.name || 'Unknown'}</Text>
					<Text style={styles.userDetails}>
						{currentData?.caste || 'N/A'}, {currentData?.religion || 'N/A'}
					</Text>
				</View>
			</View>
			<FlatList
				data={combinedData}
				contentContainerStyle={{ flex: 1, justifyContent: 'flex-start' }}
				keyExtractor={(user) => user.id}
				renderItem={({ item: user }) => (
					<TouchableOpacity
						onPress={() => {
							setActiveSubTab('Focus');
							setFocusChatUser(user);
						}}
					>
						<View style={styles.mess}>
							<Image source={{ uri: user.images[0] }} style={styles.image} />
							<View style={styles.messageContent}>
								<Text style={[styles.name, { color: lightColor }]}>
									{user.name}
								</Text>
								<Text style={styles.bio}>{user.quote}</Text>
								<View style={styles.underline} />
							</View>
						</View>
					</TouchableOpacity>
				)}
				// onEndReached={loadMoreUsers} // Load more data when end of list is reached
				// onEndReachedThreshold={0.5} // Adjust for when to trigger loading more items
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	imageContainer: {
		borderColor: 'orange',
		borderWidth: 8,
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: 20,
		width: '60%',
		height: 200,
		alignItems: 'center',
	},
	sheildicon: {
		marginLeft: 25,
	},
	navbar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		width: '100%',
		height: 100,
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
		height: 40,
		marginTop: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 5,
		width: '95%',
		marginLeft: 10,
		paddingLeft: 4,
	},
	tabContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
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
		height: 100,
	},
	chatUserImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	progressBarContainer: {
		flexDirection: 'row',
		width: '95%',
		height: 5,
		position: 'absolute',
		top: 8,
		zIndex: 1,
		paddingHorizontal: 5,
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
		width: '100%',
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
	progressBarContainer2: {
		flexDirection: 'row',
		width: '100%',
		height: 25,
		backgroundColor: 'gray',
		position: 'absolute',
		alignItems: 'center',
		top: 0,
		zIndex: 1,
		paddingHorizontal: 5,
	},
	progressBarSegment: {
		flex: 1,
		marginHorizontal: 1,
	},
	imageStyle: {
		width: '100%',
		height: '100%',
	},
	caption: {
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10,
		flex: 3,
	},
	caption2: {
		fontSize: 12,
		color: 'black',
	},
	quote: {
		fontSize: 16,
		color: 'black',
		marginBottom: 10,
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

export default Relatives;
