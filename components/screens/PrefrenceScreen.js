import React from 'react';
import HomeViewMore from '@/components/screens/HomeViewMore';
import { View } from 'react-native';

const PrefrenceScreen = ({ route }) => {
	const { currentData } = route.params;

	return (
		<View>
			<HomeViewMore currentData={currentData} />
		</View>
	);
};

export default PrefrenceScreen;
