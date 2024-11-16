import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import {
	FontAwesome,
	MaterialCommunityIcons,
	Entypo,
	Ionicons,
} from '@expo/vector-icons';

// ProfileDetails component now expects currentData as a prop
export default function ProfileDetails({ currentData, hide = false }) {
	const handleShareProfile = () => {
		Alert.alert('Share Profile', `Share ${currentData.name}'s profile`);
	};

	const handleReportProfile = () => {
		Alert.alert('Report Profile', `Report ${currentData.name}'s profile`);
	};

	const handleBlockProfile = () => {
		Alert.alert('Block Profile', `Block ${currentData.name}'s profile`);
	};
	return (
		<ScrollView style={styles.container}>
			{/* Additional Info Section */}
			<View style={styles.section}>
				<View style={styles.row}>
					<Ionicons
						name='location-outline'
						size={20}
						color='black'
						style={styles.icon}
					/>
					<Text style={styles.label}>State</Text>
					<Text style={styles.value}>
						{currentData.state || 'Not Specified'}
					</Text>
				</View>
				<View style={styles.row}>
					<Ionicons
						name='business-outline'
						size={20}
						color='black'
						style={styles.icon}
					/>
					<Text style={styles.label}>District</Text>
					<Text style={styles.value}>
						{currentData.district || 'Not Specified'}
					</Text>
				</View>
				<View style={styles.row}>
					<MaterialCommunityIcons
						name='map-marker-radius'
						size={20}
						color='black'
						style={styles.icon}
					/>
					<Text style={styles.label}>Location Preference</Text>
					<Text style={styles.value}>
						{currentData.locationPreference || 'Other'}
					</Text>
				</View>
				<View style={styles.row}>
					<Ionicons
						name='male-female-outline'
						size={20}
						color='black'
						style={styles.icon}
					/>
					<Text style={styles.label}>Gender</Text>
					<Text style={styles.value}>
						{currentData.gender === 'M' ? 'Male' : 'Female'}
					</Text>
				</View>
				<View style={styles.row}>
					<Ionicons
						name='calendar-outline'
						size={20}
						color='black'
						style={styles.icon}
					/>
					<Text style={styles.label}>Age Range</Text>
					<Text style={styles.value}>{currentData.ageRange}</Text>
				</View>
				{currentData.outsideAgeRange && (
					<View style={styles.row}>
						<MaterialCommunityIcons
							name='account-outline'
							size={20}
							color='black'
							style={styles.icon}
						/>
						<Text style={styles.label}>Outside Age Range</Text>
						<Text style={styles.value}>{currentData.outsideAgeRange}</Text>
					</View>
				)}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		marginTop: 10,
		paddingBottom: 20,
		width: '90%',
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 5,
	},
	subtitle: {
		fontSize: 14,
		color: '#666',
		marginBottom: 15,
	},
	actionButtons: {
		marginTop: 20,
	},
	actionButton: {
		backgroundColor: 'orange',
		padding: 15,
		borderRadius: 8,
		alignItems: 'center',
		marginBottom: 10,
	},
	actionButtonText: {
		color: 'black',
		fontSize: 16,
		fontWeight: 'bold',
	},
	section: {
		backgroundColor: '#ffffff',
		padding: 15,
		borderRadius: 8,
		marginBottom: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 2,
	},
	sectionTitle: {
		fontSize: 16,
		color: '#555',
		fontWeight: 'bold',
		marginBottom: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	icon: {
		marginRight: 10,
	},
	label: {
		flex: 1,
		fontSize: 14,
		color: 'black',
	},
	value: {
		fontSize: 14,
		color: 'black',
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	footerButton: {
		width: 50,
		height: 50,
		backgroundColor: '#ddd',
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inviteSection: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#ddd',
		padding: 10,
		borderRadius: 8,
		marginTop: 20,
	},
	inviteText: {
		color: '#333',
		flex: 1,
	},
	inviteButton: {
		backgroundColor: '#4CAF50',
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 5,
	},
	inviteButtonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});
