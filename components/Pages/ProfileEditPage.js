import {
	Entypo,
	FontAwesome6,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import {
	ScrollView,
	View,
	Text,
	Dimensions,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
	FlatList,
	Modal,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
const { width, height } = Dimensions.get('window');
import InterestsInput from '@/components/Pages/Interests';
import InterestsInput2 from '@/components/Pages/Interest2';
import InterestsInput3 from '@/components/Pages/Interest3';
import { Picker } from '@react-native-picker/picker';
import InterestsInput4 from './Interest4';
const bgColor = '#FFA500';
const lightTheme = 'white';
// const lightColor = "black";
export default function ProfileEditPage() {
	const [media, setMedia] = useState([null, null, null, null, null, null]);
	const [aboutMe, setAboutMe] = useState('');
	const [prompt, setPrompt] = useState('');
	const [percent, setPercent] = useState(0);

	const promptOptions = ['Prompt 1', 'Prompt 2', 'Prompt 3'];
	const updateProfileCompletionPercentage = () => {
		const totalBoxes = 9; // Total media boxes
		const filledBoxes = media.filter((item) => item !== null).length;
		const mediaPercentage = (filledBoxes / totalBoxes) * 100;
		const aboutMePercentage = aboutMe.trim() ? 30 : 0;
		setPercent(aboutMePercentage);
	};
	// Handle Image Upload
	const handleImageUpload = (index) => {
		const options = {
			mediaType: 'photo',
			quality: 1,
		};

		launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.errorMessage) {
				Alert.alert('Error', response.errorMessage);
			} else {
				const imageUri = response.assets[0].uri;
				const updatedMedia = [...media];
				updatedMedia[index] = imageUri;
				setMedia(updatedMedia);
			}
		});
	};

	const [showModal, setShowModal] = useState(false);
	const [selectedPrompt, setSelectedPrompt] = useState('');
	//  propmt

	// State to manage modal visibility and prompt selection

	// Array of predefined prompt sentences
	const prompts = [
		'What makes me unique?',
		'My dream vacation is...',
		'The best way to spend a weekend is...',
		'A fun fact about me is...',
		'My go-to comfort food is...',
		'If I could have any superpower, it would be...',
		"I'm passionate about...",
		'My favorite way to relax is...',
		'I could talk for hours about...',
		"The best advice I've ever received is...",
	];

	// Handle prompt selection and close the modal
	const selectPrompt = (prompt) => {
		setSelectedPrompt(prompt);
		setShowModal(false); // Hide modal after selecting
	};

	const handleSave = () => {
		// Add functionality to save the images, aboutMe text, and selected prompt
		Alert.alert(
			'Profile Saved!',
			'Your profile has been updated successfully.'
		);
	};
	const [notifications, setNotifications] = useState({
		newMatches: 'Select',
		messages: 'Select',
		messageLikes: 'Select',
		superLikes: 'Select',
	});
	return (
		<ScrollView contentContainerStyle={styles.container} vertical={true}>
			{/* Media Section */}
			<Text style={styles.title}>Edit Profile</Text>

			<View style={styles.mediaContainer}>
				{media.map((item, index) => (
					<TouchableOpacity
						key={index}
						style={styles.mediaBox}
						onPress={() => {
							updateProfileCompletionPercentage();
							handleImageUpload(index);
						}}
					>
						{item ? (
							<Image source={{ uri: item }} style={styles.imagePreview} />
						) : (
							<Entypo name='plus' size={width * 0.1} color='#f32b96' />
						)}
					</TouchableOpacity>
				))}
			</View>
			{/* About Me Section */}
			<Text style={styles.sectionTitle}>About Me</Text>
			<TextInput
				style={styles.textInput}
				placeholder='Write about yourself'
				placeholderTextColor='#aaa'
				multiline
				value={aboutMe}
				onChangeText={setAboutMe}
			/>
			{/* 
      <TouchableOpacity onPress={ () => setShowModal( true ) } style={ styles.promptButton }>
        <Text style={ styles.promptButtonText }>
          { selectedPrompt ? selectedPrompt : "Select a Prompt" }
        </Text>
      </TouchableOpacity> */}
			{/* interest */}
			<Text style={styles.sectionTitle}>Interests</Text>
			<InterestsInput />
			<Text style={styles.sectionTitle}>Languages I Know</Text>
			<InterestsInput2 />
			<Text style={styles.sectionTitle}>Relationship Type</Text>
			<InterestsInput3 />

			<Text style={styles.sectionTitle}>Basic</Text>
			{/*Zodiac */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Ionicons name='moon-sharp' size={22} color='#656f7b' />
					<Text style={styles.label}>Zodiac</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Education */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialCommunityIcons
						name='book-education-outline'
						size={22}
						color='#656f7b'
					/>
					<Text style={styles.label}>Education</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Famili plans */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialIcons name='family-restroom' size={22} color='#656f7b' />
					<Text style={styles.label}>Family Plans</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*COVID Vaccine */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialIcons name='vaccines' size={22} color='#656f7b' />

					<Text style={styles.label}>COVID Vaccine </Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
			</View>
			{/* </View> */}
			{/*Personlity Type */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialCommunityIcons name='leaf-maple' size={22} color='#656f7b' />
					<Text style={styles.label}>Personlity Type</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Communication Style */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialCommunityIcons
						name='message-text-clock'
						size={22}
						color='#656f7b'
					/>
					<Text style={styles.label}>Communication Style</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Love Style */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialCommunityIcons
						name='heart-settings'
						size={22}
						color='#656f7b'
					/>
					<Text style={styles.label}>Love Style</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			<Text style={styles.sectionTitle}>Lifestyle</Text>
			{/*Pet */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialIcons name='pets' size={22} color='#656f7b' />
					<Text style={styles.label}>Pet</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Drinking */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialIcons name='local-drink' size={22} color='#656f7b' />
					<Text style={styles.label}>Drinking</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Smoking */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialCommunityIcons name='smoking' size={22} color='#656f7b' />
					<Text style={styles.label}>Smoking</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
			</View>
			{/* </View> */}
			{/*Workout */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<FontAwesome6 name='network-wired' size={22} color='#656f7b' />
					<Text style={styles.label}>Education</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Dietary Preference */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Ionicons name='fast-food' size={22} color='#656f7b' />
					<Text style={styles.label}>Dietary Preference </Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Social Media */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Entypo name='email' size={22} color='#656f7b' />
					<Text style={styles.label}>Social Media</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			{/*Sleeping Habits */}
			<View style={styles.settingRow}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MaterialCommunityIcons name='sleep' size={22} color='#656f7b' />
					<Text style={styles.label}>Sleeping Habits</Text>
				</View>
				{/* <View style={ styles.pickerContainer }> */}
				<Picker
					selectedValue={notifications.superLikes}
					style={styles.picker}
					onValueChange={(itemValue) =>
						setNotifications({ ...notifications, superLikes: itemValue })
					}
				>
					<Picker.Item label='Select' value='On' />
					<Picker.Item label='Off' value='Off' />
				</Picker>
				{/* </View> */}
			</View>
			<Text style={styles.sectionTitle}>Gender</Text>
			<InterestsInput4 />

			{/* Modal for prompt selection */}
			<Modal
				transparent={true}
				visible={showModal}
				animationType='slide'
				onRequestClose={() => setShowModal(false)}
			>
				{/* Background view to make main screen dim */}
				<View style={styles.modalBackground}>
					{/* Modal content container */}
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>Choose a Prompt</Text>

						{/* List of prompts */}
						<FlatList
							data={prompts}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => selectPrompt(item)}
									style={styles.promptItem}
								>
									<Text style={styles.promptText}>{item}</Text>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</Modal>

			{/* <View style={ styles.footer }>
          <TouchableOpacity style={ styles.saveButton } onPress={ () => handleSave() }>
            <Text style={ styles.saveButtonText }>Save</Text>
          </TouchableOpacity>
        </View> */}
		</ScrollView>
	);
}

// Handle Save (You can define what to do with the saved data here)

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 10,
		paddingBottom: 100,
		backgroundColor: lightTheme, // Light background
	},
	title: {
		color: 'black', // Black text
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	mediaContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	mediaBox: {
		width: '47%',
		height: 150,
		backgroundColor: bgColor, // Orange background for media boxes
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		borderRadius: 8,
	},
	settingRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		height: height * 0.06,
		paddingHorizontal: 10,
	},
	label: {
		fontSize: 18,
		color: 'black', // Black text
		fontWeight: '400',
		marginLeft: 10,
	},
	imagePreview: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
	},
	sectionTitle: {
		color: 'black', // Black text
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
	},
	textInput: {
		backgroundColor: '#f5f5f5', // Light grey background for text input
		color: 'black', // Black text
		padding: 10,
		marginBottom: 20,
		height: 120,
		textAlignVertical: 'top',
	},
	promptButton: {
		backgroundColor: '#ff6f00', // Darker shade of orange for button
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	},
	promptButtonText: {
		color: lightTheme, // White text
		fontSize: 16,
	},
	modalBackground: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed effect
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		backgroundColor: lightTheme, // White background for modal
		padding: 20,
		borderRadius: 10,
		width: '80%',
		height: '50%',
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
		color: 'black', // Black text
	},
	promptItem: {
		padding: 10,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	promptText: {
		fontSize: 16,
		color: 'black', // Black text
	},
	picker: {
		height: height * 0.04,
		width: width * 0.3,
		color: 'black', // Black text
		backgroundColor: lightTheme, // White background
		borderWidth: 2,
		borderColor: 'black', // Black border
	},
	searchBox: {
		width: '100%',
		padding: 10,
		marginVertical: 10,
		borderRadius: 8,
		backgroundColor: '#f2f2f2',
		fontSize: 16,
	},
	interestItem: {
		padding: 15,
		borderBottomColor: '#ddd',
		borderBottomWidth: 1,
	},
	interestText: {
		fontSize: 16,
	},
});
