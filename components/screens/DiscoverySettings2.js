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
} from 'react-native';
import Slider from '@react-native-community/slider';
import { MyContext } from '../MyContext';
import MultiSelect from './react-native-multiple-select-fix';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import connectlogo from '@/assets/images/connect2.jpg';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import InputField from '../InputField';

const DiscoverySettings2 = () => {
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
			</View>
			<ScrollView contentContainerStyle={styles.container}>
				{/* Maximum Distance */}
				<View style={styles.setting}>
					<Text style={styles.settingText}>Maximum Distance</Text>
					<Slider
						style={styles.slider}
						minimumValue={1}
						maximumValue={50}
						step={5}
						thumbTintColor={lightColor}
						onValueChange={setDistance}
						value={distance}
					/>
					<Text style={styles.sliderText}>{distance} km</Text>
				</View>

				{/* Gender */}

				{/* Age Range */}
				{/* <View style={styles.setting}>
					<Text style={styles.settingText}>Age Range</Text>
					<Text>
						From {ageRange.lower} to {ageRange.upper}
					</Text>
					<Slider
						style={styles.slider}
						minimumValue={18}
						maximumValue={65}
						step={1}
						value={ageRange.lower}
						onValueChange={(value) => handleAgeRangeChange('lower', value)}
						thumbTintColor={lightColor}
					/>
					<Slider
						style={styles.slider}
						minimumValue={ageRange.lower + 1}
						maximumValue={65}
						step={1}
						value={ageRange.upper}
						onValueChange={(value) => handleAgeRangeChange('upper', value)}
						thumbTintColor={lightColor}
					/>
				</View> */}

				{/* Show Outside Age Range */}
				{/* <View style={styles.setting}>
					<Text style={styles.settingText}>Show Outside Age Range</Text>
					<Switch
						value={showOutsideAgeRange}
						onValueChange={() => setShowOutsideAgeRange(!showOutsideAgeRange)}
					/>
				</View> */}

				{/* Language (Multi-select) */}
				{/* <View style={styles.setting}>
					<Text style={styles.settingText}>Language</Text>
					<MultiSelect
						items={languageOptions}
						uniqueKey='id'
						onSelectedItemsChange={setSelectedLanguages}
						selectedItems={selectedLanguages}
						selectText='Pick Languages'
						searchInputPlaceholderText='Search Languages...'
						tagRemoveIconColor='#FF8C00'
						tagBorderColor='#FF8C00'
						selectedItemTextColor='#FF8C00'
						selectedItemIconColor='#FF8C00'
						itemTextColor='#000'
						displayKey='name'
						submitButtonText='Submit'
						tagContainerStyle={styles.tagContainer}
					/>
				</View> */}

				<View style={{ marginBottom: 15 }}>
					<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
						Introduce yourself
					</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='District'
							value={form.district}
							onChange={(value) => handleInputChange('district', value)}
							placeholder='Enter district'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='State'
							value={form.state}
							onChange={(value) => handleInputChange('state', value)}
							placeholder='Enter state'
							style={{ width: '48%' }}
						/>
					</View>

					<View style={styles.setting}>
						<Text style={styles.settingText}>Gender</Text>
						<View style={styles.selectionContainer}>
							<TouchableOpacity
								style={[
									styles.selectionItem,
									gender === 'M' && styles.selected,
								]}
								onPress={() => setGender('M')}
							>
								<Text style={styles.selectionText}>Male</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.selectionItem,
									gender === 'F' && styles.selected,
								]}
								onPress={() => setGender('F')}
							>
								<Text style={styles.selectionText}>Female</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View
						style={[
							styles.setting,
							{
								justifyContent: 'space-between',
								alignItems: 'center',
								flexDirection: 'row',
							},
						]}
					>
						<Text style={styles.settingText}>Show Outside Age Range</Text>
						<Switch
							value={showOutsideAgeRange}
							onValueChange={() => setShowOutsideAgeRange(!showOutsideAgeRange)}
						/>
					</View>
					<View
						style={[
							styles.setting,
							{
								justifyContent: 'space-between',
								alignItems: 'center',
								flexDirection: 'row',
							},
						]}
					>
						<Text style={styles.settingText}>
							Show Others if I ran out of location
						</Text>
						<Switch
							value={showOutsideAgeRange}
							onValueChange={() => setShowOutsideAgeRange(!showOutsideAgeRange)}
						/>
					</View>

					<View style={styles.container}>
						<Text style={styles.title}>Select Age Range</Text>
						<Text style={styles.rangeText}>
							Age: {ageRange[0]} - {ageRange[1]}
						</Text>

						{/* Slider */}
						<Slider
							style={styles.slider}
							minimumValue={18}
							maximumValue={100}
							step={1}
							value={10}
							onValueChange={handleSliderChange}
							minimumTrackTintColor='#FF8C00'
							maximumTrackTintColor='#d3d3d3'
							thumbTintColor='#FF8C00'
							trackClickable
						/>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Education'
							value={form.education}
							onChange={(value) => handleInputChange('education', value)}
							placeholder='Enter education'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Occupation'
							value={form.languagesKnown}
							onChange={(value) => handleInputChange('languagesKnown', value)}
							placeholder='Enter Occupation'
							style={{ width: '48%', flex: 1 }}
						/>
					</View>
				</View>

				<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
					<InputField
						label='Religion'
						value={form.religion}
						onChange={(value) => handleInputChange('religion', value)}
						placeholder='Enter religion'
						style={{ width: '48%', marginRight: 10 }}
					/>
					<InputField
						label='Caste'
						value={form.caste}
						onChange={(value) => handleInputChange('caste', value)}
						placeholder='Enter caste'
						style={{ width: '48%' }}
					/>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						console.log('Create Habit pressed');
						setModalVisible(true);
					}}
				>
					<Text style={styles.buttonText}>Create Profile</Text>
				</TouchableOpacity>

				<Modal
					transparent={true}
					visible={isModalVisible}
					animationType='fade'
					onRequestClose={closeModal} // Required for Android back button to close the modal
				>
					<View style={styles.modalOverlay}>
						<View style={styles.modalContent}>
							<MaterialIcons name='check-circle' size={60} color='#4CAF50' />
							<Text style={styles.modalTitle}>Success!</Text>
							<Text style={styles.modalText}>
								Your profile has been updated.
							</Text>

							<TouchableOpacity style={styles.closeButton} onPress={closeModal}>
								<Text style={styles.closeButtonText}>OK</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				{/* Additional fields for other criteria, such as Occupation, Caste, etc., go here */}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		backgroundColor: 'white',
	},
	setting: {
		marginBottom: 10,
		backgroundColor: 'white',
		paddingVertical: 0,
	},
	settingText: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	slider: {
		width: '100%',
		marginTop: 10,
	},
	sliderText: {
		fontSize: 14,
		textAlign: 'center',
		color: 'grey',
		marginTop: 5,
	},
	selectionContainer: {
		flexDirection: 'row',
	},
	selectionItem: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		marginRight: 10,
		flex: 1,
		alignItems: 'center',
	},
	selected: {
		backgroundColor: '#FF8C00',
	},
	selectionText: {
		fontSize: 16,
	},
	tagContainer: {
		backgroundColor: '#FF8C00',
		borderRadius: 10,
		padding: 5,
	},
	button: {
		backgroundColor: '#4287f5', // Match the blue color in the image
		padding: 15,
		borderRadius: 30,
		marginVertical: 20, // Adjust the margin as needed
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		width: '80%',
		padding: 20,
		backgroundColor: '#fff',
		borderRadius: 12,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#4CAF50',
		marginTop: 10,
	},
	modalText: {
		fontSize: 16,
		color: '#333',
		marginVertical: 10,
		textAlign: 'center',
	},
	closeButton: {
		backgroundColor: '#4CAF50',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
		marginTop: 15,
		width: '100%',
	},
	closeButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	root: {
		flex: 1,
		marginBottom: 80,
		backgroundColor: 'white',
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
		height: 80,
		backgroundColor: 'white',
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
});

export default DiscoverySettings2;
