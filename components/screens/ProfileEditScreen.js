import React, { useContext, useEffect, useState } from 'react';
import {
	ScrollView,
	View,
	Button,
	Text,
	StyleSheet,
	TouchableOpacity,
	Modal,
	Image,
} from 'react-native';
import InputField from '../../components/InputField'; // Assuming InputField is a custom component
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { MyContext } from '../MyContext';
import connectlogo from '@/assets/images/connect2.jpg';
import * as ImagePicker from 'expo-image-picker';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProfileEditScreen = () => {
	const [images, setImages] = useState([]); // Array to store all images (profile and others)

	const handleImagePicker = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		console.log({ result: JSON.stringify(result) });

		if (!result.canceled) {
			setImages((prevImages) => [...prevImages, result.assets[0].uri]); // Add new image to the array
		}
		console.log(images);
	};

	useEffect(() => {
		console.log({ images });
	}, [images]);

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
	const { bgColor, lightTheme, lightColor } = useContext(MyContext);

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

			<ScrollView
				contentContainerStyle={{ paddingHorizontal: 20, marginTop: 10 }}
			>
				<View
					style={{
						// backgroundColor: 'red',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative',
					}}
				>
					{/* <TouchableOpacity onPress={handleImagePicker}>
						<Image
							source={{
								uri:
									images[0] ||
									'https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg',
							}}
							style={{
								width: 100,
								height: 100,
								borderRadius: 50,
								marginBottom: 20,
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleImagePicker}>
						<FontAwesome6
							name='plus'
							size={25}
							color={bgColor}
							style={{
								backgroundColor: 'white',
								borderRadius: 100,
								paddingHorizontal: 12,
								paddingVertical: 8,
								position: 'absolute',
								top: 20,
							}}
						/>
					</TouchableOpacity> */}

					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						{images.map((image, index) => (
							<Image
								key={index}
								source={{ uri: image }}
								style={{
									width: '30%',
									height: hp(18),
									marginRight: 10,
									marginBottom: 10,
									borderRadius: 25,
									shadowColor: 'black',
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.8,
									shadowRadius: 3.84,
									borderWidth: 3,
									borderColor: bgColor, // Light gray color for border
								}}
							/>
						))}
						{images.length < 6 && (
							<TouchableOpacity key='addImage' onPress={handleImagePicker}>
								<View
									style={{
										width: wp(30),
										height: hp(18),
										marginRight: 10,
										marginBottom: 10,
										justifyContent: 'center',
										alignItems: 'center',
										backgroundColor: '#fff', // White background
										borderWidth: 2,
										borderRadius: 15,
										borderColor: bgColor, // Light gray color for border
										borderStyle: 'dashed', // Dashed border
									}}
								>
									<FontAwesome6 name='plus' size={30} color={bgColor} />
								</View>
							</TouchableOpacity>
						)}
					</View>
				</View>

				{/* Geographic Info Section */}
				<View style={{ marginBottom: 15 }}>
					<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
						Introduce yourself
					</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Name'
							value={form.name}
							onChange={(value) => handleInputChange('name', value)}
							placeholder='Enter name'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Age'
							value={form.age}
							onChange={(value) => handleInputChange('age', value)}
							placeholder='Enter age'
							type='numeric'
							style={{ width: '48%', flex: 1 }}
						/>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Gender'
							value={form.gender}
							onChange={(value) => handleInputChange('gender', value)}
							placeholder='Enter gender'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Height'
							value={form.height}
							onChange={(value) => handleInputChange('height', value)}
							placeholder='Enter height'
							style={{ width: '48%', flex: 1 }}
						/>
					</View>

					<InputField
						label='Languages Known'
						value={form.languagesKnown}
						onChange={(value) => handleInputChange('languagesKnown', value)}
						placeholder='Enter languages known'
						style={{ width: '100%', flex: 1 }}
					/>
					<InputField
						label='Description/Bio'
						value={form.bio}
						onChange={(value) => handleInputChange('bio', value)}
						placeholder='Enter bio'
						type='textarea'
						style={{ marginBottom: 15 }}
					/>
				</View>
				<View
					style={{
						marginBottom: 15,
						borderTopColor: '#CCCCCC',
						borderTopWidth: 1,
						paddingTop: 10,
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
						Where you belongs
					</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='City'
							value={form.city}
							onChange={(value) => handleInputChange('city', value)}
							placeholder='Enter city'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='District'
							value={form.district}
							onChange={(value) => handleInputChange('district', value)}
							placeholder='Enter district'
							style={{ width: '48%', flex: 1 }}
						/>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='State'
							value={form.state}
							onChange={(value) => handleInputChange('state', value)}
							placeholder='Enter state'
							style={{ width: '100%', marginRight: 10 }}
						/>
					</View>
				</View>

				<View
					style={{
						marginBottom: 15,
						borderTopColor: '#CCCCCC',
						borderTopWidth: 1,
						paddingTop: 10,
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
						Details about your background
					</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						{/* Other Input Fields */}
						<InputField
							label='Income'
							value={form.income}
							onChange={(value) => handleInputChange('income', value)}
							placeholder='Enter income'
							type='numeric'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Education'
							value={form.education}
							onChange={(value) => handleInputChange('education', value)}
							placeholder='Enter education'
							style={{ width: '48%' }}
						/>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Company'
							value={form.company}
							onChange={(value) => handleInputChange('company', value)}
							placeholder='Enter company name'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Family Members'
							value={form.familyMembers}
							onChange={(value) => handleInputChange('familyMembers', value)}
							placeholder='Enter number'
							type='numeric'
							style={{ width: '48%' }}
						/>
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
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Animals'
							value={form.animals}
							onChange={(value) => handleInputChange('animals', value)}
							placeholder='Enter animals'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Places'
							value={form.places}
							onChange={(value) => handleInputChange('places', value)}
							placeholder='Enter places'
							style={{ width: '48%' }}
						/>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Personality Type'
							value={form.personalityType}
							onChange={(value) => handleInputChange('personalityType', value)}
							placeholder='Enter personality type'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Diet'
							value={form.diet}
							onChange={(value) => handleInputChange('diet', value)}
							placeholder='Veg/Non-veg'
							style={{ width: '48%' }}
						/>
					</View>

					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Alcohol'
							value={form.alcohol}
							onChange={(value) => handleInputChange('alcohol', value)}
							isSwitch
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Smoking'
							value={form.smoking}
							onChange={(value) => handleInputChange('smoking', value)}
							isSwitch
							style={{ width: '48%' }}
						/>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Sports'
							value={form.sports}
							onChange={(value) => handleInputChange('sports', value)}
							placeholder='Enter sports'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Travel'
							value={form.travel}
							onChange={(value) => handleInputChange('travel', value)}
							placeholder='Enter travel preferences'
							style={{ width: '48%' }}
						/>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
						<InputField
							label='Exercise'
							value={form.exercise}
							onChange={(value) => handleInputChange('exercise', value)}
							placeholder='Enter exercise details'
							style={{ width: '48%', marginRight: 10 }}
						/>
						<InputField
							label='Social Media Profiles'
							value={form.socialMedia}
							onChange={(value) => handleInputChange('socialMedia', value)}
							placeholder='Enter social media profiles'
							style={{ width: '48%' }}
						/>
					</View>
					{/* <InputField
					label='Last Active'
					value={form.lastActive}
					onChange={(value) => handleInputChange('lastActive', value)}
					placeholder='Enter last active timestamp'
					style={{ marginBottom: 15 }}
				/> */}
					{/* <InputField
					label='Status'
					value={form.status}
					onChange={(value) => handleInputChange('status', value)}
					isSwitch
					style={{ marginBottom: 15 }}
				/>
				<InputField
					label='Last Updated'
					value={form.lastUpdated}
					onChange={(value) => handleInputChange('lastUpdated', value)}
					placeholder='Enter last updated timestamp'
					style={{ marginBottom: 15 }}
				/> */}
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
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
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
		paddingHorizontal: wp(2),
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
		marginBottom: hp(8),
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
		height: hp(8),
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
	tileViewImage: {
		width: wp(25),
		height: hp(25),
		marginBottom: 10,
		marginTop: 10,
	},
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
export default ProfileEditScreen;
