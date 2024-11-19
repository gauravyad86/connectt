import React, { useContext, useState, useRef } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Animated,
	Dimensions,
	Modal,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';
import { MyContext } from '@/components/MyContext';
import UserProfileForm from '@/components/screens/Form/UserProfileForm';
import { useNavigation } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

const Profile = ({ totaluser, profileData }) => {
	const navigation = useNavigation();
	const [isAddModalVisible, setAddModalVisible] = useState(false);
	const [isEditModalVisible, setEditModalVisible] = useState(false);

	const { User, setUser } = useContext(MyContext);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = profileData?.images || [];

	// Animated values for image transitions
	const translateXAnim = useRef(new Animated.Value(0)).current;
	const opacityAnim = useRef(new Animated.Value(1)).current;

	const handleImageTap = () => {
		Animated.parallel([
			Animated.timing(translateXAnim, {
				toValue: -width * 0.2,
				duration: 150,
				useNativeDriver: true,
			}),
			Animated.timing(opacityAnim, {
				toValue: 0,
				duration: 150,
				useNativeDriver: true,
			}),
		]).start(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
			translateXAnim.setValue(width * 0.2);
			opacityAnim.setValue(0);

			Animated.parallel([
				Animated.timing(translateXAnim, {
					toValue: 0,
					duration: 200,
					useNativeDriver: true,
				}),
				Animated.timing(opacityAnim, {
					toValue: 1,
					duration: 200,
					useNativeDriver: true,
				}),
			]).start();
		});
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{/* Profile Content */}
			<View style={styles.profileContent}>
				<TouchableOpacity onPress={handleImageTap}>
					<Animated.Image
						source={{ uri: images[currentImageIndex] }}
						style={[
							styles.image,
							{
								transform: [{ translateX: translateXAnim }],
								opacity: opacityAnim,
							},
						]}
					/>
				</TouchableOpacity>

				<View style={styles.nameContainer}>
					<Text style={styles.name}>{profileData.name}</Text>
				</View>

				{/* Action Buttons */}
				<View style={styles.actionButtonsBelowProfile}>
					{/* Add Button */}
					<TouchableOpacity
						style={styles.button}
						onPress={() => setAddModalVisible(true)}
						accessibilityLabel='Open Add Profile Modal'
						activeOpacity={0.7}
					>
						<Text style={styles.buttonText}>Add</Text>
					</TouchableOpacity>

					{/* Edit Button */}
					<TouchableOpacity
						style={styles.button}
						onPress={() => setEditModalVisible(true)}
						accessibilityLabel='Open Edit Profile Modal'
						activeOpacity={0.7}
					>
						<Text style={styles.buttonText}>Edit</Text>
					</TouchableOpacity>

					{/* Discovery Button */}
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							navigation.navigate('discoverysettings');
						}}
						accessibilityLabel='Navigate to Discovery Settings'
						activeOpacity={0.7}
					>
						<Text style={styles.buttonText}>Discovery</Text>
					</TouchableOpacity>
				</View>
			</View>

			{/* Profile Details Form */}
			<UserProfileForm profileData={profileData} />

			{/* Add Modal */}
			<Modal
				transparent={true}
				visible={isAddModalVisible}
				animationType='fade'
				onRequestClose={() => setAddModalVisible(false)}
			>
				<TouchableWithoutFeedback onPress={() => setAddModalVisible(false)}>
					<View style={styles.modalOverlay}>
						<TouchableWithoutFeedback>
							<View style={styles.addModalContent}>
								<TouchableOpacity
									style={styles.modalCloseButton}
									onPress={() => setAddModalVisible(false)}
								>
									<MaterialIcons name='close' size={24} color='black' />
								</TouchableOpacity>

								<Text style={styles.modalTitle}>
									Choose which profile you need to add
								</Text>

								<TouchableOpacity
									style={styles.modalButton}
									onPress={() => {
										navigation.navigate('profileupdate', {
											profileType: 'parent',
										});
										setAddModalVisible(false);
									}}
								>
									<Text style={styles.modalButtonText}>Parent Profile</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.modalButton}
									onPress={() => {
										navigation.navigate('profileupdate', {
											profileType: 'child',
										});
										setAddModalVisible(false);
									}}
								>
									<Text style={styles.modalButtonText}>Child Profile</Text>
								</TouchableOpacity>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			{/* Edit Modal */}
			<Modal
				transparent={true}
				visible={isEditModalVisible}
				animationType='slide'
				onRequestClose={() => setEditModalVisible(false)}
			>
				<TouchableWithoutFeedback onPress={() => setEditModalVisible(false)}>
					<View style={styles.modalOverlay}>
						<TouchableWithoutFeedback>
							<View style={styles.editModalContent}>
								<TouchableOpacity
									style={styles.modalCloseButton}
									onPress={() => setEditModalVisible(false)}
								>
									<MaterialIcons name='close' size={24} color='black' />
								</TouchableOpacity>

								<Text style={styles.modalTitle}>Edit Profile</Text>

								{/* Edit Form in Scrollable Modal */}
								<ScrollView contentContainerStyle={styles.modalFormContainer}>
									<UserProfileForm
										profileData={profileData}
										onCancel={() => setEditModalVisible(false)}
										isEdit={true}
									/>
								</ScrollView>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: width * 0.05,
		paddingBottom: 20,
		marginTop: 10,
	},
	profileContent: {
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: width * 0.05,
	},
	image: {
		width: 170,
		height: 170,
		borderRadius: 5,
		marginVertical: 10,
	},
	nameContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 10,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	actionButtonsBelowProfile: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 5,
	},
	button: {
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: hp(2),
		marginHorizontal: hp(1),
		borderColor: 'black',
		borderWidth: 1,
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	addModalContent: {
		width: '80%',
		maxHeight: '60%',
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 20,
		alignItems: 'center',
		alignSelf: 'center',
	},
	editModalContent: {
		width: '95%',
		height: '90%',
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 10,
		alignItems: 'center',
		alignSelf: 'center',
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		marginVertical: 10,
		textAlign: 'center',
	},
	modalButton: {
		backgroundColor: '#F57B21',
		paddingVertical: 12,
		paddingHorizontal: 25,
		borderRadius: 8,
		marginTop: 10,
		width: '90%',
	},
	modalButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalCloseButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		padding: 5,
	},
	modalFormContainer: {
		flexGrow: 1,
		justifyContent: 'flex-start',
		paddingBottom: 20,
		paddingHorizontal: 10,
	},
});

export default Profile;
