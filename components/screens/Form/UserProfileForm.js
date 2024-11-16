import { MyContext } from '@/components/MyContext';
import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet,
	Button,
	Dimensions,
	Modal,
	TouchableOpacity,
	Alert,
} from 'react-native';

const { width } = Dimensions.get('window');

const UserProfileForm = ({ profileData }) => {
	const [formData, setFormData] = useState({
		UID: '',
		email: '',
		mobileNumber: '',
		name: '',
		age: '',
		gender: '',
		height: '',
		location: '',
		income: '',
		education: '',
		profession: '',
		company: '',
		familyMembers: '',
		religion: '',
		caste: '',
		animals: '',
		places: '',
		bio: '',
		languages: '',
		personalityType: '',
		alcohol: '',
		smoking: '',
		diet: '',
		sports: '',
		travel: '',
		exercise: '',
		socialMediaProfiles: '',
		photos: '',
		status: '',
	});

	const [modalVisible, setModalVisible] = useState(false);
	const [currentField, setCurrentField] = useState('');
	const { setUser } = useContext(MyContext);
	const options = {
		gender: ['Male', 'Female', 'Other'],
		religion: ['Hindu', 'Muslim', 'Christian', 'Other'],
		animals: ['Dog', 'Cat', 'None', 'Other'],
		personalityType: ['Introvert', 'Extrovert', 'Ambivert'],
		diet: ['Vegetarian', 'Non-Vegetarian'],
		alcohol: ['Yes', 'No'],
		smoking: ['Yes', 'No'],
		exercise: ['Yes', 'No'],
		sports: ['Yes', 'No'],
		travel: ['Yes', 'No'],
	};

	const handleChange = (key, value) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	const handleSelect = (field) => {
		setCurrentField(field);
		setModalVisible(true);
	};

	const handleOptionSelect = (value) => {
		setFormData((prev) => ({ ...prev, [currentField]: value }));
		setModalVisible(false);
	};

	const handleSubmit = () => {
		// Displaying the submitted data in the input fields (already set in formData)
		console.log('Form Data:', formData);
	};

	const handleShareProfile = () => {
		Alert.alert('Share Profile', `Share ${formData.name}'s profile`);
	};

	const handleReportProfile = () => {
		setUser(false);
		Alert.alert('Report Profile', `Report ${formData.name}'s profile`);
	};

	const handleBlockProfile = () => {
		Alert.alert('Block Profile', `Block ${formData.name}'s profile`);
	};

	return (
		<ScrollView
			contentContainerStyle={{
				paddingVertical: 20,
				paddingHorizontal: width * 0.05,
				alignItems: 'center',
				flexGrow: 1,
				justifyContent: 'center',
				paddingBottom: 100,
			}}
		>
			<Text style={styles.title}>Profile View</Text>
			{/* Form Fields */}
			<LabelledInput
				label='Open for marriage'
				value={formData.openTomarriage}
				onChange={(text) => handleChange('openformarriage', text)}
			/>
			<LabelledInput
				label='Email'
				value={formData.email}
				onChange={(text) => handleChange('email', text)}
			/>
			<LabelledInput
				label='Mobile Number'
				value={formData.mobileNumber}
				onChange={(text) => handleChange('mobileNumber', text)}
			/>
			<LabelledInput
				label='Name'
				value={formData.name}
				onChange={(text) => handleChange('name', text)}
			/>
			<LabelledInput
				label='Age'
				value={formData.age}
				onChange={(text) => handleChange('age', text)}
				keyboardType='numeric'
			/>
			{/* Modal Selection Fields */}
			<LabelledInput
				label='Gender'
				value={formData.gender}
				onPressSelect={() => handleSelect('gender')}
			/>
			<LabelledInput
				label='Religion'
				value={formData.religion}
				onPressSelect={() => handleSelect('religion')}
			/>
			<LabelledInput
				label='Animals'
				value={formData.animals}
				onPressSelect={() => handleSelect('animals')}
			/>
			<LabelledInput
				label='Personality Type'
				value={formData.personalityType}
				onPressSelect={() => handleSelect('personalityType')}
			/>
			<LabelledInput
				label='Diet'
				value={formData.diet}
				onPressSelect={() => handleSelect('diet')}
			/>
			<LabelledInput
				label='Alcohol'
				value={formData.alcohol}
				onPressSelect={() => handleSelect('alcohol')}
			/>
			<LabelledInput
				label='Travel'
				value={formData.travel}
				onPressSelect={() => handleSelect('travel')}
			/>
			<LabelledInput
				label='Exercise'
				value={formData.exercise}
				onPressSelect={() => handleSelect('exercise')}
			/>
			<LabelledInput
				label='Sports'
				value={formData.sports}
				onPressSelect={() => handleSelect('sports')}
			/>

			{/* Other Fields */}
			<LabelledInput
				label='Height'
				value={formData.height}
				onChange={(text) => handleChange('height', text)}
			/>
			<LabelledInput
				label='Location (State, District, City)'
				value={formData.location}
				onChange={(text) => handleChange('location', text)}
			/>
			<LabelledInput
				label='Income'
				value={formData.income}
				onChange={(text) => handleChange('income', text)}
			/>
			<LabelledInput
				label='Education'
				value={formData.education}
				onChange={(text) => handleChange('education', text)}
			/>
			<LabelledInput
				label='Profession/Occupation'
				value={formData.profession}
				onChange={(text) => handleChange('profession', text)}
			/>
			<LabelledInput
				label='Company'
				value={formData.company}
				onChange={(text) => handleChange('company', text)}
			/>
			<LabelledInput
				label='Number of Family Members'
				value={formData.familyMembers}
				onChange={(text) => handleChange('familyMembers', text)}
				keyboardType='numeric'
			/>
			<LabelledInput
				label='Caste'
				value={formData.caste}
				onChange={(text) => handleChange('caste', text)}
			/>
			<LabelledInput
				label='Places'
				value={formData.places}
				onChange={(text) => handleChange('places', text)}
			/>
			<LabelledInput
				label='Description/Bio'
				value={formData.bio}
				onChange={(text) => handleChange('bio', text)}
			/>
			<LabelledInput
				label='Languages Known'
				value={formData.languages}
				onChange={(text) => handleChange('languages', text)}
			/>

			<Button
				title='Save'
				onPress={handleSubmit}
				style={{ backgroundColor: 'orange' }}
			/>
			<View style={styles.actionButtons}>
				<TouchableOpacity
					style={styles.actionButton}
					onPress={handleShareProfile}
				>
					<Text style={styles.actionButtonText}>
						Disable {formData.name}'s Profile
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.actionButton}
					onPress={handleReportProfile}
				>
					<Text style={styles.actionButtonText}>Logout</Text>
				</TouchableOpacity>
			</View>

			{/* Modal for Selection */}
			<Modal transparent={true} visible={modalVisible} animationType='slide'>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.modalTitle}>Select {currentField}</Text>
						{options[currentField]?.map((option) => (
							<TouchableOpacity
								key={option}
								onPress={() => handleOptionSelect(option)}
								style={styles.optionButton}
							>
								<Text style={styles.optionText}>{option}</Text>
							</TouchableOpacity>
						))}
						<Button title='Close' onPress={() => setModalVisible(false)} />
					</View>
				</View>
			</Modal>
		</ScrollView>
	);
};

// Reusable component for labeled input with an optional select button
const LabelledInput = ({
	label,
	value,
	onChange,
	keyboardType = 'default',
	onPressSelect,
}) => (
	<View style={styles.inputContainer}>
		<Text style={styles.label}>{label}</Text>
		{onPressSelect ? (
			<TouchableOpacity onPress={onPressSelect} style={styles.input}>
				<Text style={{ color: value ? 'gray' : 'gray' }}>
					{value || `Select ${label}`}
				</Text>
			</TouchableOpacity>
		) : (
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChange}
				keyboardType={keyboardType}
				placeholder={label}
			/>
		)}
	</View>
);

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: width * 0.05,
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	actionButtons: {
		marginTop: 20,
	},
	actionButton: {
		backgroundColor: 'orange',
		padding: 10,
		borderRadius: 8,
		alignItems: 'center',
		marginBottom: 10,
	},
	actionButtonText: {
		color: 'black',
		fontSize: 16,
		fontWeight: 'bold',
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	inputContainer: {
		width: width * 0.85,
		marginBottom: 15,
	},
	label: {
		fontSize: 14,
		color: 'black',
		marginBottom: 5,
	},
	input: {
		width: '100%',
		borderColor: 'gray',
		borderWidth: 1,
		padding: 8,
		borderRadius: 5,
		backgroundColor: 'white',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		alignItems: 'center', // Center the modal content horizontally
	},
	modalContent: {
		width: '80%', // Adjust the width as needed
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	optionButton: {
		padding: 10,
		width: '100%',
		alignItems: 'center',
	},
	optionText: {
		fontSize: 16,
		color: 'black',
	},
});

export default UserProfileForm;
