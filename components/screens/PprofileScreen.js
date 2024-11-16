import React from 'react';
import HomeViewMore from '@/components/screens/HomeViewMore';
import { View } from 'react-native';

const PprofileScreen = ({ route }) => {
	const { currentData } = route.params;

	return (
		<View>
			<HomeViewMore currentData={currentData} />
		</View>
	);
};

export default PprofileScreen;
