import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const InputField = ({
	label,
	value,
	onChange,
	placeholder,
	type = 'default',
	icon = null,
	isSwitch = false,
	style = {},
}) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.label}>{label}</Text>

			<View style={styles.inputContainer}>
				{/* Display the icon if provided */}
				{icon && (
					<MaterialIcons
						name={icon}
						size={20}
						color='gray'
						style={styles.icon}
					/>
				)}

				{/* Render either TextInput or Switch based on isSwitch prop */}
				{isSwitch ? (
					<Switch
						value={value}
						onValueChange={onChange}
						thumbColor={value ? '#34D399' : '#D1D5DB'} // Thumb color based on value
						trackColor={{ false: '#E5E7EB', true: '#A7F3D0' }} // Track color based on value
					/>
				) : (
					<TextInput
						style={styles.input}
						value={value}
						onChangeText={onChange}
						placeholder={placeholder}
						placeholderTextColor='#a1a1a1'
						keyboardType={type}
					/>
				)}
			</View>
		</View>
	);
};

const styles = {
	container: {
		marginBottom: 16,
	},
	label: {
		color: '#4B5563', // gray-700 equivalent
		marginBottom: 8,
		fontWeight: '400',
		fontSize: 14,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
		borderColor: '#D1D5DB', // gray-300 equivalent
		borderWidth: 1,
	},
	icon: {
		marginRight: 8,
	},
	input: {
		flex: 1,
		color: '#111827', // gray-900 equivalent
		fontSize: 16,
	},
};

export default InputField;
