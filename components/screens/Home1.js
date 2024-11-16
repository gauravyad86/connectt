import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
	Alert,
	ScrollView,
	FlatList,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useContext, useEffect, useRef, useState } from 'react';
import { MyContext } from '../MyContext';
import {
	AntDesign,
	Feather,
	FontAwesome,
	FontAwesome5,
	MaterialCommunityIcons,
	Octicons,
} from '@expo/vector-icons';
import Data from '../../assets/data/Data';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
const { width, height } = Dimensions.get('window');

export const ProfileComp = () => {
	const [currentParentIndex, setCurrentParentIndex] = useState(0);
	const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [section, setSection] = useState('parent');
	const { lightTheme, showfamily } = useContext(MyContext);
	const currentParent = Data.parentUsers[currentParentIndex] || {};
	const subParentData = currentParent.subParents || [];
	const childData = currentParent.children || [];
	function trimName(name, maxLength) {
		if (name.length > maxLength) {
			return name.slice(0, maxLength) + '...';
		}
		return name;
	}
	let currentData, images;

	if (section === 'parent') {
		currentData = currentParent;
		images = currentParent.images || [];
	} else if (section === 'subparent') {
		currentData = subParentData[currentPersonIndex] || {};
		images = currentData.images || [];
	} else if (section === 'child') {
		currentData = childData[currentPersonIndex] || {};
		images = currentData.images || [];
	}
	const flatListRef = useRef(null);

	const combinedData = [
		...subParentData.map((item, index) => ({
			...item,
			type: 'subparent',
			id: `subparent-${index}`,
		})),
		...childData.map((item, index) => ({
			...item,
			type: 'child',
			id: `child-${index}`,
		})),
	];

	const scrollRight = () => {
		flatListRef.current.scrollToOffset({
			offset: 100, // Adjust the offset based on item width
			animated: true,
		});
	};
	console.log({ images });

	return (
		<View>
			<LinearGradient
				colors={['gray', 'black']}
				style={styles.gradientOverlay}
				start={{ x: 0, y: 0 }} // Set start to (0, 0) for top-to-bottom gradient
				end={{ x: 0, y: 1 }} // Set end to (0, 1) for top-to-bottom gradient
			/>
			<View style={[styles.middleSection, { width: '100%', marginTop: 0 }]}>
				<View
					style={[
						styles.imageContainer,
						{
							width: '100%',
							flex: 1,
							// backgroundColor: 'gray',
						},
					]}
				>
					{/* Progress Bar inside Image */}
					<View style={styles.progressBarContainer2}>
						<View style={styles.progressBarContainer}>
							{images.map((_, index) => (
								<View
									key={index}
									style={[
										styles.progressBarSegment,
										{
											backgroundColor:
												index === currentImageIndex ? 'black' : '#d3d3d3',
										},
									]}
								/>
							))}
						</View>
					</View>

					<View
						style={{
							flex: 1,
							position: 'absolute',
							top: 410,
							backgroundColor: 'red',
							width: '100%',
						}}
					>
						{images.map((_, index) => (
							<View
								key={index}
								style={[
									styles.progressBarSegment,
									{
										backgroundColor:
											index === currentImageIndex ? 'black' : '#d3d3d3',
									},
								]}
							/>
						))}
					</View>
					{currentData ? (
						<TouchableOpacity>
							<Image
								source={{ uri: images[currentImageIndex] }}
								style={[
									styles.imageStyle,
									{ width: width, height: height * 0.74 },
								]}
								resizeMode='cover'
							/>
							{/* Gradient overlay */}
							<LinearGradient
								colors={['transparent', 'black']}
								style={styles.gradientOverlay}
							/>
							{/* Text Overlay with User Name and Details */}
						</TouchableOpacity>
					) : (
						<Text>No user data available</Text>
					)}
				</View>

				<View style={{ width: '100%', zIndex: 100 }}>
					<View style={[styles.textOverlay, { width: '100%' }]}>
						<View>
							<Text style={styles.userName}>
								{currentData.name || 'Unknown'}
							</Text>
							<Text style={styles.userDetails}>
								{currentData.caste || 'N/A'}, {currentData.religion || 'N/A'}
							</Text>
						</View>
						<TouchableOpacity style={styles.viewMoreButton}>
							<FontAwesome name='arrow-down' size={24} color='black' />

							<Text style={styles.viewMoreText}>view</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
							paddingHorizontal: 20,
						}}
					>
						{/* <Text style={ [ styles.caption2, { textAlign: "left" } ] }>{ currentData.relation }</Text> */}
						<Text
							style={[
								styles.caption2,
								{ textAlign: 'center', color: 'white', marginTop: 0 },
							]}
						>
							Match for Tom
						</Text>
						<View style={[styles.relationContainer, { marginTop: 0 }]}>
							<Octicons
								name='dot-fill'
								size={24}
								color={
									currentData.marriageStatus === 'open to marriage'
										? 'green'
										: 'red'
								}
								// style={{ marginRight: 2 }}
							/>
							<Text
								style={[
									styles.caption2,
									{ textAlign: 'right', color: 'white' },
								]}
							>
								{currentData.marriageStatus}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.familyContainer}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={{}}
							onPress={() => {
								navigation.navigate('relatives', {
									combinedData,
									images,
									currentData,
								});
							}}
						>
							<FontAwesome
								name='bars'
								size={28}
								color='orange'
								style={{
									margin: 10,
								}}
							/>
						</TouchableOpacity>

						<View
							style={{
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: 5,
							}}
						>
							<Text style={styles.familyMemberRole}>
								{trimName(currentData.name, 7)}
							</Text>
							<TouchableOpacity
								onPress={() => {
									setSection('parent');
									setCurrentPersonIndex(0);
								}}
								style={[
									styles.familyMemberContainer,
									{
										borderColor: section === 'parent' ? 'orange' : 'grey',
										borderRadius: 100,
										overflow: 'hidden',
									},
								]}
							>
								<Image
									source={{ uri: currentParent.images[0] }}
									style={styles.familyMemberImage}
								/>
							</TouchableOpacity>
							<Text style={styles.familyMemberRole}>Parent</Text>
						</View>

						<View style={{ flex: 1.4 }}>
							<FlatList
								ref={flatListRef}
								horizontal
								showsHorizontalScrollIndicator={false}
								data={combinedData}
								keyExtractor={(item) => item.id}
								renderItem={({ item, index }) => (
									<View
										style={{
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 5,
										}}
									>
										<Text style={styles.familyMemberRole}>
											{trimName(item.name, 7)}
										</Text>
										<TouchableOpacity
											onPress={() => {
												setSection(item.type);
												setCurrentPersonIndex(index);
											}}
											style={[
												styles.familyMemberContainer,
												{
													borderColor:
														section === item.type &&
														currentPersonIndex === index
															? 'orange'
															: '#FFC409',
													borderRadius: 100,
													overflow: 'hidden',
												},
											]}
										>
											<Image
												source={{ uri: item.images[0] }}
												style={styles.familyMemberImage}
											/>
										</TouchableOpacity>
										<Text style={styles.familyMemberRole}>
											{item.type === 'subparent'
												? `Subparent ${index + 1}`
												: `Child ${index + 1}`}
										</Text>
									</View>
								)}
							/>
						</View>
						<TouchableOpacity
							onPress={scrollRight}
							style={{
								padding: 5,
								borderRadius: 5,
							}}
						>
							<FontAwesome
								name='chevron-right'
								size={36}
								color={'#FFC409'}
								style={{
									margin: 5,
								}}
							/>
						</TouchableOpacity>
					</View>
					{/* <LinearGradient
						colors={['transparent', 'black']}
						style={[styles.gradientOverlay, { width: '100%', height: 20 }]}
						start={{ x: 0, y: 0 }} // Set start to (0, 0) for top-to-bottom gradient
						end={{ x: 0, y: 1 }} // Set end to (0, 1) for top-to-bottom gradient
					/> */}
				</View>
			</View>
			<View style={[styles.bottomBar, { position: 'relative' }]}>
				<LinearGradient
					colors={['black', 'transparent']}
					style={[
						styles.gradientOverlay,
						{
							top: 0,
							position: 'absolute',
							width: width,
							// left: 20,
							// borderRadius: 20,
							height: '50%',
						},
					]}
				/>
				{/* <LinearGradient
						colors={['transparent', 'black']}
						style={[
							styles.gradientOverlay,
							{
								top: -40,
								position: 'absolute',
								width: width,
								// left: 20,
								// borderRadius: 20,
								height: '100%',
							},
						]}
					/> */}
				<TouchableOpacity
					style={[styles.bigButton, { backgroundColor: lightTheme }]}
					// onPress={prevParent}
				>
					<MaterialCommunityIcons name='ban' size={width * 0.08} color='red' />
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.bigButton, { backgroundColor: lightTheme }]}
					// onPress={prevParent}
				>
					<AntDesign name='check' size={width * 0.08} color='red' />
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.bigButton, { backgroundColor: lightTheme }]}
					// onPress={nextParent}
				>
					<FontAwesome5 name='times' size={width * 0.08} color='green' />
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.bigButton,
						{ backgroundColor: lightTheme, color: 'black' },
					]}
				>
					<Feather name='share-2' size={width * 0.08} color='black' />
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default function Home1() {
	const [currentParentIndex, setCurrentParentIndex] = useState(0);
	const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [section, setSection] = useState('parent');
	const { lightTheme, showfamily } = useContext(MyContext);
	const currentParent = Data.parentUsers[currentParentIndex] || {};
	const subParentData = currentParent.subParents || [];
	const childData = currentParent.children || [];

	let currentData, images;
	if (section === 'parent') {
		currentData = currentParent;
		images = currentParent.images || [];
	} else if (section === 'subparent') {
		currentData = subParentData[currentPersonIndex] || {};
		images = currentData.images || [];
	} else if (section === 'child') {
		currentData = childData[currentPersonIndex] || {};
		images = currentData.images || [];
	}

	const flatListRef = useRef(null);

	const combinedData = [
		...subParentData.map((item, index) => ({
			...item,
			type: 'subparent',
			id: `subparent-${index}`,
		})),
		...childData.map((item, index) => ({
			...item,
			type: 'child',
			id: `child-${index}`,
		})),
	];

	const scrollRight = () => {
		flatListRef.current.scrollToOffset({
			offset: 100, // Adjust the offset based on item width
			animated: true,
		});
	};

	const activeTabText =
		section === 'parent'
			? 'Parent'
			: section === 'subparent'
			? 'Subparent'
			: 'Child';

	const onTapHandler = () => {
		if (images.length > 0) {
			const nextImageIndex = (currentImageIndex + 1) % images.length;
			setCurrentImageIndex(nextImageIndex);

			if (nextImageIndex === 0) {
				if (section === 'parent') {
					if (subParentData.length > 0) {
						setSection('subparent');
						setCurrentPersonIndex(0);
					} else if (childData.length > 0) {
						setSection('child');
						setCurrentPersonIndex(0);
					}
				} else if (section === 'subparent') {
					if (currentPersonIndex + 1 < subParentData.length) {
						setCurrentPersonIndex(currentPersonIndex + 1);
					} else if (childData.length > 0) {
						setSection('child');
						setCurrentPersonIndex(0);
					} else {
						setSection('parent');
					}
				} else if (section === 'child') {
					if (currentPersonIndex + 1 < childData.length) {
						setCurrentPersonIndex(currentPersonIndex + 1);
					} else {
						setSection('parent');
					}
				}
			}
		}
	};

	const navigation = useNavigation();
	const onSwipeHandler = (event) => {
		const { translationX, state } = event.nativeEvent;
		if (state === State.END) {
			if (translationX < -100) {
				nextParent();
			} else if (translationX > 100) {
				prevParent();
			}
		}
	};

	const nextParent = () => {
		setCurrentParentIndex((currentParentIndex + 1) % Data.parentUsers.length);
		resetViewToParent();
	};

	const prevParent = () => {
		setCurrentParentIndex(
			(currentParentIndex - 1 + Data.parentUsers.length) %
				Data.parentUsers.length
		);
		resetViewToParent();
	};

	const resetViewToParent = () => {
		setSection('parent');
		setCurrentPersonIndex(0);
		setCurrentImageIndex(0);
	};

	const [isExpanded, setIsExpanded] = useState(false);

	const onViewMorePress = (data) => {
		setIsExpanded(!isExpanded);
		navigation.navigate('view', { user: currentData });
	};
	const onListPress = () => {
		console.log('press on list');
	};
	function trimName(name, maxLength) {
		if (name.length > maxLength) {
			return name.slice(0, maxLength) + '...';
		}
		return name;
	}

	return (
		<ScrollView
			contentContainerStyle={{
				// alignItems: 'center',
				paddingBottom: 30,
				marginTop: 10,
			}}
			vertical
		>
			<LinearGradient
				colors={['gray', 'black']}
				style={styles.gradientOverlay}
				start={{ x: 0, y: 0 }} // Set start to (0, 0) for top-to-bottom gradient
				end={{ x: 0, y: 1 }} // Set end to (0, 1) for top-to-bottom gradient
			/>
			<View style={styles.middleSection}>
				<PanGestureHandler
					onGestureEvent={onSwipeHandler}
					onHandlerStateChange={onSwipeHandler}
				>
					<View
						style={[
							styles.imageContainer,
							{
								width: '100%',
								flex: 1,
								// backgroundColor: 'gray',
							},
						]}
					>
						{/* Progress Bar inside Image */}
						<View style={styles.progressBarContainer2}>
							<View style={styles.progressBarContainer}>
								{images.map((_, index) => (
									<View
										key={index}
										style={[
											styles.progressBarSegment,
											{
												backgroundColor:
													index === currentImageIndex ? 'black' : '#d3d3d3',
											},
										]}
									/>
								))}
							</View>
						</View>

						<View
							style={{
								flex: 1,
								position: 'absolute',
								top: 410,
								backgroundColor: 'red',
								width: '100%',
							}}
						>
							{images.map((_, index) => (
								<View
									key={index}
									style={[
										styles.progressBarSegment,
										{
											backgroundColor:
												index === currentImageIndex ? 'black' : '#d3d3d3',
										},
									]}
								/>
							))}
						</View>
						{currentData ? (
							<TouchableOpacity onPress={onTapHandler}>
								<Image
									source={{ uri: images[currentImageIndex] }}
									style={[
										styles.imageStyle,
										{ width: width, height: height * 0.74 },
									]}
									resizeMode='cover'
								/>
								{/* Gradient overlay */}
								<LinearGradient
									colors={['transparent', 'black']}
									style={styles.gradientOverlay}
								/>
								{/* Text Overlay with User Name and Details */}
							</TouchableOpacity>
						) : (
							<Text>No user data available</Text>
						)}
					</View>
				</PanGestureHandler>

				<View style={{ width: '100%', zIndex: 100 }}>
					<View style={[styles.textOverlay, { width: '100%' }]}>
						<View>
							<Text style={styles.userName}>
								{currentData.name || 'Unknown'}
							</Text>
							<Text style={styles.userDetails}>
								{currentData.caste || 'N/A'}, {currentData.religion || 'N/A'}
							</Text>
						</View>
						<TouchableOpacity
							style={styles.viewMoreButton}
							onPress={onViewMorePress}
						>
							<FontAwesome name='arrow-down' size={24} color='black' />

							<Text style={styles.viewMoreText}>view</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
							paddingHorizontal: 20,
						}}
					>
						{/* <Text style={ [ styles.caption2, { textAlign: "left" } ] }>{ currentData.relation }</Text> */}
						<Text
							style={[
								styles.caption2,
								{ textAlign: 'center', color: 'white', marginTop: 0 },
							]}
						>
							Match for Tom
						</Text>
						<View style={[styles.relationContainer, { marginTop: 0 }]}>
							<Octicons
								name='dot-fill'
								size={24}
								color={
									currentData.marriageStatus === 'open to marriage'
										? 'green'
										: 'red'
								}
								// style={{ marginRight: 2 }}
							/>
							<Text
								style={[
									styles.caption2,
									{ textAlign: 'right', color: 'white' },
								]}
							>
								{currentData.marriageStatus}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.familyContainer}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={{}}
							onPress={() => {
								navigation.navigate('relatives', {
									combinedData,
									images,
									currentData,
								});
							}}
						>
							<FontAwesome
								name='bars'
								size={28}
								color='orange'
								style={{
									margin: 10,
								}}
							/>
						</TouchableOpacity>

						<View
							style={{
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: 5,
							}}
						>
							<Text style={styles.familyMemberRole}>
								{trimName(currentData.name, 7)}
							</Text>
							<TouchableOpacity
								onPress={() => {
									setSection('parent');
									setCurrentPersonIndex(0);
								}}
								style={[
									styles.familyMemberContainer,
									{
										borderColor: section === 'parent' ? 'orange' : 'grey',
										borderRadius: 100,
										overflow: 'hidden',
									},
								]}
							>
								<Image
									source={{ uri: currentParent.images[0] }}
									style={styles.familyMemberImage}
								/>
							</TouchableOpacity>
							<Text style={styles.familyMemberRole}>Parent</Text>
						</View>

						<View style={{ flex: 1.4 }}>
							<FlatList
								ref={flatListRef}
								horizontal
								showsHorizontalScrollIndicator={false}
								data={combinedData}
								keyExtractor={(item) => item.id}
								renderItem={({ item, index }) => (
									<View
										style={{
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 5,
										}}
									>
										<Text style={styles.familyMemberRole}>
											{trimName(item.name, 7)}
										</Text>
										<TouchableOpacity
											onPress={() => {
												setSection(item.type);
												setCurrentPersonIndex(index);
											}}
											style={[
												styles.familyMemberContainer,
												{
													borderColor:
														section === item.type &&
														currentPersonIndex === index
															? 'orange'
															: '#FFC409',
													borderRadius: 100,
													overflow: 'hidden',
												},
											]}
										>
											<Image
												source={{ uri: item.images[0] }}
												style={styles.familyMemberImage}
											/>
										</TouchableOpacity>
										<Text style={styles.familyMemberRole}>
											{item.type === 'subparent'
												? `Subparent ${index + 1}`
												: `Child ${index + 1}`}
										</Text>
									</View>
								)}
							/>
						</View>
						<TouchableOpacity
							onPress={scrollRight}
							style={{
								padding: 5,
								borderRadius: 5,
							}}
						>
							<FontAwesome
								name='chevron-right'
								size={36}
								color={'#FFC409'}
								style={{
									margin: 5,
								}}
							/>
						</TouchableOpacity>
					</View>
					{/* <LinearGradient
						colors={['transparent', 'black']}
						style={[styles.gradientOverlay, { width: '100%', height: 20 }]}
						start={{ x: 0, y: 0 }} // Set start to (0, 0) for top-to-bottom gradient
						end={{ x: 0, y: 1 }} // Set end to (0, 1) for top-to-bottom gradient
					/> */}
				</View>

				<View style={[styles.bottomBar, { position: 'relative' }]}>
					<LinearGradient
						colors={['black', 'transparent']}
						style={[
							styles.gradientOverlay,
							{
								top: 0,
								position: 'absolute',
								width: width,
								// left: 20,
								// borderRadius: 20,
								height: '50%',
							},
						]}
					/>
					{/* <LinearGradient
						colors={['transparent', 'black']}
						style={[
							styles.gradientOverlay,
							{
								top: -40,
								position: 'absolute',
								width: width,
								// left: 20,
								// borderRadius: 20,
								height: '100%',
							},
						]}
					/> */}
					<TouchableOpacity
						style={[styles.bigButton, { backgroundColor: lightTheme }]}
						onPress={prevParent}
					>
						<FontAwesome5 name='ban' size={width * 0.08} color='red' />
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.bigButton, { backgroundColor: lightTheme }]}
						onPress={prevParent}
					>
						<AntDesign name='dislike2' size={width * 0.08} color='red' />
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.bigButton, { backgroundColor: lightTheme }]}
						onPress={nextParent}
					>
						<AntDesign name='like2' size={width * 0.08} color='green' />
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.bigButton, { backgroundColor: lightTheme }]}
					>
						<Feather name='share-2' size={width * 0.08} color='green' />
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	middleSection: {
		// alignItems: 'center',
		// justifyContent: 'center',
		paddingHorizontal: 0,
		marginTop: 45,
	},
	scrollContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		marginTop: 55,
	},
	relationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	// imageContainer: {
	//     borderColor: 'orange',
	//     borderWidth: 8,
	//     borderRadius: 10,
	//     overflow: 'hidden',
	//     marginBottom: 20,
	//     width: width * 0.85,
	//     height: height * 0.45,
	//     alignItems: "center",
	// },
	progressBarContainer: {
		flexDirection: 'row',
		width: '95%',
		height: 5,
		position: 'absolute',
		top: 8,
		zIndex: 1,
		paddingHorizontal: 5,
	},
	progressBarContainer2: {
		flexDirection: 'row',
		width: '100%',
		height: -10,
		position: 'absolute',
		alignItems: 'center',
		top: 100,
		zIndex: 1,
		paddingHorizontal: 5,
	},
	progressBarSegment: {
		flex: 1,
		marginHorizontal: 1,
		height: 50,
		width: 50,
	},
	imageContainer: {
		// borderColor: 'orange',
		// borderWidth: 8,
		borderRadius: 10,
		marginBottom: 20,
		width: '100%',
		height: height * 0.45,
		flex: 1,
	},
	imageStyle: {
		width: '100%',
		height: '100%',
	},
	gradientOverlay: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '50%', // Adjust the height for desired gradient coverage
	},
	textOverlay: {
		// position: 'absolute',
		flexDirection: 'row',
		width: width * 0.75,
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	userName: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
	},
	userDetails: {
		fontSize: 14,
		color: 'white',
	},
	progressBarContainer2: {
		flexDirection: 'row',
		width: '100%',
		height: 25,
		backgroundColor: 'gray',
		position: 'absolute',
		alignItems: 'center',
		top: 0,
		zIndex: 1,
		paddingHorizontal: 5,
	},
	progressBarSegment: {
		flex: 1,
		marginHorizontal: 1,
	},
	imageStyle: {
		width: width * 0.85,
		height: height * 0.45,
	},
	caption: {
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10,
		flex: 3,
	},
	caption2: {
		fontSize: 12,
		color: 'black',
	},
	quote: {
		fontSize: 16,
		color: 'black',
		marginBottom: 10,
	},
	viewMoreButton: {
		backgroundColor: 'orange',
		height: 50,
		width: 50,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewMoreText: {
		fontSize: 10,
		color: 'black',
	},
	arrowButton: {
		backgroundColor: 'orange',
		padding: 10,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 70,
		height: 80,
		backgroundColor: 'white', // Ensure no background color interferes
		borderBottomWidth: 0, // Remove any bottom border that might cause a line
	},
	bigButton: {
		width: width * 0.13,
		height: width * 0.13,
		backgroundColor: 'white',
		elevation: 5,
		borderRadius: width * 0.075,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 3.84,
	},
	familyContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 5,
		width: '100%',
		marginTop: 4,
	},
	shadowGradient: {
		position: 'absolute',
		width: '100%', // Adjust width as needed
		height: 4, // Adjust height as needed for shadow intensity
	},
	listButton: {
		marginRight: 10,
		backgroundColor: 'red',
		height: 30,
		width: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	nextButton: {
		marginLeft: 10,
	},
	familyMemberContainer: {
		alignItems: 'center',
		// padding: 5,
		borderRadius: 5,
		borderWidth: 5,
		marginHorizontal: 5,
		height: height * 0.1 + 8,
		width: width * 0.2 + 8,
	},
	familyMemberImage: {
		width: '100%',
		height: '100%',
		borderRadius: 2,
	},
	familyMemberRole: {
		fontSize: 12,
		marginTop: 2,
		color: 'white',
	},
});
