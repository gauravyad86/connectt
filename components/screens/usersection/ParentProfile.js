import React, { useState } from 'react';
import {
	View,
	Button,
	StyleSheet,
	Pressable,
	Text,
	Dimensions,
} from 'react-native';
import Profile from './Profile';
import { FontAwesome5 } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const ParentProfile = ({ parentData }) => {
	const [index, setIndex] = useState(0);
	// const profiles = parentData.; // Combine parent and sub-parents
	const profiles = [parentData, ...(parentData.subParents || [])];
	const nextProfile = () => setIndex((index + 1) % profiles.length);
	const prevProfile = () =>
		setIndex((index - 1 + profiles.length) % profiles.length);
	console.log(parentData, 'all parent data');
	return (
		<View style={{ alignItems: 'center' }}>
			<Profile
				profileData={profiles[index]}
				totaluser={parentData}
				children={false}
			/>
			<View style={styles.buttonContainer}>
				<Pressable style={styles.button} onPress={prevProfile}>
					<FontAwesome5 name='less-than' size={24} color='#F77C1E' />
				</Pressable>
				<Pressable style={styles.button} onPress={nextProfile}>
					<FontAwesome5 name='greater-than' size={24} color='#F77C1E' />
				</Pressable>
			</View>
		</View>
	);
};

export default ParentProfile;
const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
		// paddingHorizontal: 20,
		position: 'absolute',
		marginTop: 75,
		height: height * 0.1,
	},
	button: {
		backgroundColor: 'white', // Button color (adjust as needed)
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
