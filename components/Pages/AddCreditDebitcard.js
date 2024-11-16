import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Appearance,
	ScrollView,
	Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
const bgColor = '#FFA500';
const lightTheme = '#dee0db';
const lightColor = 'black';
export default function AddCreditDebitcard() {
	const colorScheme = Appearance.getColorScheme(); // Detect light or dark mode
	const isDarkMode = colorScheme === 'dark'; // Boolean to check if dark mode is active

	// Use state to store card details
	const [cardNumber, setCardNumber] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [cvv, setCvv] = useState('');
	const [cardholderName, setCardholderName] = useState('');
	const [state, setSatate] = useState('');
	const [Country, setCountry] = useState('');
	const navigation = useNavigation();
	return (
		<ScrollView style={styles.container} vertical={true}>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack();
				}}
				style={styles.header}
			>
				<Ionicons name='arrow-back' size={24} color={lightColor} />
				<Text
					style={{
						color: lightColor,
						marginLeft: 5,
						fontSize: 20,
						fontWeight: '500',
					}}
				>
					Add credit or debit card
				</Text>
			</TouchableOpacity>

			{/* Card Number Input */}
			<Text style={{ color: 'red', marginBottom: 10 }}>
				*All feild required
			</Text>
			<Text
				style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 16 }}
			>
				Card number
			</Text>
			<TextInput
				style={[
					styles.input,
					isDarkMode ? styles.darkInput : styles.lightInput,
				]}
				placeholder='Card Number'
				placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
				keyboardType='numeric'
				value={cardNumber}
				onChangeText={setCardNumber}
			/>

			{/* Expiry Date Input */}
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
					<Text
						style={{
							color: lightColor,
							zIndex: 100,
							opacity: 100,
							fontSize: 16,
						}}
					>
						Expiry Date
					</Text>
					<TextInput
						style={[
							{
								height: 50,
								borderColor: '#7B8799',
								borderWidth: 1,
								borderRadius: 3,
								paddingHorizontal: 10,
								fontSize: 16,
								backgroundColor: 'white',
								marginBottom: 10,
								width: width * 0.5,
							},
							isDarkMode ? styles.darkInput : styles.lightInput,
						]}
						placeholder=' MM/YY'
						placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
						keyboardType='numeric'
						value={expiryDate}
						onChangeText={setExpiryDate}
					/>
				</View>

				{/* CVV Input */}
				<View style={{ flexDirection: 'column', marginLeft: 5 }}>
					<Text
						style={{
							color: lightColor,
							zIndex: 100,
							opacity: 100,
							fontSize: 16,
						}}
					>
						CVC{' '}
					</Text>
					<TextInput
						style={[
							{
								height: 50,
								borderColor: '#7B8799',
								borderWidth: 1,
								borderRadius: 3,
								paddingHorizontal: 10,
								fontSize: 16,
								backgroundColor: 'white',
								marginBottom: 10,
								width: width * 0.4,
							},
							isDarkMode ? styles.darkInput : styles.lightInput,
						]}
						placeholder='CVV'
						placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
						keyboardType='numeric'
						secureTextEntry
						value={cvv}
						onChangeText={setCvv}
					/>
				</View>
			</View>

			{/* Cardholder Name Input */}
			<Text
				style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 16 }}
			>
				Cardholder Name
			</Text>
			<TextInput
				style={[
					styles.input,
					isDarkMode ? styles.darkInput : styles.lightInput,
				]}
				placeholder='Cardholder Name'
				placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
				value={cardholderName}
				onChangeText={setCardholderName}
			/>
			<Text
				style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 16 }}
			>
				Country/region
			</Text>
			<TextInput
				style={[
					styles.input,
					isDarkMode ? styles.darkInput : styles.lightInput,
				]}
				placeholder='country'
				placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
				value={Country}
				onChangeText={setCountry}
			/>
			<Text
				style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 16 }}
			>
				State
			</Text>

			<TextInput
				style={[
					styles.input,
					isDarkMode ? styles.darkInput : styles.lightInput,
				]}
				placeholder='State'
				placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
				value={state}
				onChangeText={setSatate}
			/>
			<Text style={styles.darkInput}>
				By Continuing, you creat a Google Payments account and agree to the
				Google Payments Terms of Service.
			</Text>
			<Text style={styles.darkInput}>
				The Privacy Notice describes how your data is handled
			</Text>
			{/* Submit Button */}
			<View style={styles.purchaseDetails}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{/* <View style={ styles.tindericonBackground }>
                        <Fontisto size={ 21 } name='connect' color="white" />
                    </View> */}
					<View style={{ marginLeft: 15 }}>
						<Text style={styles.purchaseItem}>
							15 Super Likes (Connect
							{'\n'}
							Dating App: Chat & Date)
						</Text>
					</View>
				</View>
				<Text style={styles.purchasePrice}>₹2,700.00</Text>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Save Card</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: lightTheme,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f2f2f2', // Light background for header
		padding: 10,
		borderRadius: 5,
	},
	headerText: {
		color: lightColor,
		marginLeft: 5,
		fontSize: 20,
		fontWeight: '500',
	},
	requiredField: {
		color: 'red',
		marginBottom: 10,
	},
	label: {
		color: lightColor,
		fontSize: 16,
		marginBottom: 5,
	},
	input: {
		height: 50,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		fontSize: 16,
		marginBottom: 10,
		backgroundColor: '#fff', // Light input background
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	column: {
		flex: 1,
		marginRight: 5,
	},
	infoText: {
		color: lightColor,
		marginTop: 10,
	},
	purchaseDetails: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 40,
	},
	purchaseItemContainer: {
		marginLeft: 15,
	},
	purchaseItem: {
		color: lightColor,
		fontSize: 18,
	},
	purchasePrice: {
		color: lightColor,
		fontSize: 18,
	},
	tinderIconBackground: {
		width: 30,
		height: 30,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
	},
	button: {
		backgroundColor: bgColor,
		padding: 15,
		borderRadius: 30,
		alignItems: 'center',
	},
	buttonText: {
		color: lightColor,
		fontSize: 18,
		fontWeight: 'bold',
	},
});
