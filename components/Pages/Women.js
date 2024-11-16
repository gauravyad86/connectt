import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from 'react-native';

const Women = () => {
	const [selectedOption, setSelectedOption] = useState('Everyone');
	const options = ['Men', 'Women', 'Everyone'];
	const navigation = useNavigation();

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={styles.backButton}>{'<'}</Text>
				</TouchableOpacity>
				<Text style={styles.headerText}>Show Me</Text>
			</View>

			<Text style={styles.title}>Show Me</Text>

			{options.map((option, index) => (
				<TouchableOpacity
					key={index}
					style={styles.option}
					onPress={() => setSelectedOption(option)}
				>
					<Text style={styles.optionText}>{option}</Text>
					{selectedOption === option && <Text style={styles.checkMark}>✔</Text>}
				</TouchableOpacity>
			))}

			<View style={styles.infoContainer}>
				<Text style={styles.infoText}>Connect welcomes everyone.</Text>
				<Text style={styles.description}>
					Discovery settings now show users who include more information about
					their gender identity. Once users add information about their gender,
					they can choose to be shown in searches that best reflect their
					identity.
				</Text>
				<TouchableOpacity>
					<Text style={styles.learnMore}>
						Learn more about Connect's gender feature.
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white', // Light mode background
		paddingHorizontal: 20,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	backButton: {
		fontSize: 24,
		color: 'black', // Light mode text color
	},
	headerText: {
		fontSize: 18,
		color: 'black', // Light mode text color
		marginLeft: 10,
	},
	title: {
		fontSize: 24,
		color: 'black', // Light mode text color
		fontWeight: 'bold',
		marginBottom: 20,
	},
	option: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc', // Light mode border color
	},
	optionText: {
		fontSize: 18,
		color: 'black', // Light mode text color
	},
	checkMark: {
		fontSize: 18,
		color: '#ff0000', // Keep check mark color
	},
	infoContainer: {
		marginTop: 30,
	},
	infoText: {
		fontSize: 16,
		color: 'black', // Light mode text color
		fontWeight: 'bold',
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		color: '#333', // Darker grey for readability in light mode
		marginBottom: 20,
	},
	learnMore: {
		fontSize: 14,
		color: '#ff4500', // Keep the learn more link color
		textDecorationLine: 'underline',
	},
});

export default Women;
