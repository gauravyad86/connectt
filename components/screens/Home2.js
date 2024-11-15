import Data from '@/assets/data/Data';
import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView,
	Dimensions,
	StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
import { PanGestureHandler } from 'react-native-gesture-handler';
import HomeViewMore from './HomeViewMore';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
const Home2 = (props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [view, setView] = useState(props.activeSubTabMatches); // 'list' or 'tile'
	const [userType, setUserType] = useState('parent'); // 'parent', 'subParent', 'child'

	const handleNavigate = (direction) => {
		let newIndex = currentIndex;
		if (direction === 'next') {
			newIndex = (currentIndex + 1) % Data.parentUsers.length; // Move to the next user (circular)
		} else if (direction === 'previous') {
			newIndex =
				(currentIndex - 1 + Data.parentUsers.length) % Data.parentUsers.length; // Move to the previous user (circular)
		}
		setCurrentIndex(newIndex); // Update state
		setUserType('parent'); // Reset to parent user type
	};

	const handleTileNavigation = (type) => {
		if (type === 'next') {
			if (
				userType === 'parent' &&
				Data.parentUsers[currentIndex].subParents.length
			) {
				setUserType('subParent');
			} else if (
				userType === 'subParent' &&
				Data.parentUsers[currentIndex].children.length
			) {
				setUserType('child');
			}
		} else if (type === 'previous') {
			if (
				userType === 'child' &&
				Data.parentUsers[currentIndex].subParents.length
			) {
				setUserType('subParent');
			} else if (userType === 'subParent') {
				setUserType('parent');
			}
		}
	};
	return (
		<View style={{ flex: 1, marginTop: 10 }}>
			{/* Tab Section: Switch between List and Tile View */}
			{/* <View style={ { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 } }>
                <TouchableOpacity onPress={ () => setView( 'list' ) } style={ { marginHorizontal: 10 } }>
                    <Text style={ { fontSize: 18, fontWeight: view === 'list' ? 'bold' : 'normal' } }>List View</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => setView( 'tile' ) } style={ { marginHorizontal: 10 } }>
                    <Text style={ { fontSize: 18, fontWeight: view === 'tile' ? 'bold' : 'normal' } }>Tile View</Text>
                </TouchableOpacity>
            </View> */}
			{view === 'list' ? (
				<ListView
					users={Data.parentUsers}
					onSelectUser={(index) => {
						setCurrentIndex(index);
						setView('tile');
						setUserType('parent');
					}}
				/>
			) : (
				<TileView
					user={Data.parentUsers[currentIndex]}
					userType={userType}
					onNavigate={handleNavigate}
					onTileNavigation={handleTileNavigation}
					onBackToList={() => setView('list')}
				/>
			)}
		</View>
	);
};

const ListView = ({ users, onSelectUser }) => (
	<ScrollView vertical style={styles.users}>
		{users.map((user, index) => {
			// Determine colors based on the index
			const circles =
				index === 0
					? ['red'] // First user: red
					: index === 1
					? ['red', 'green'] // Second user: red and green
					: ['black']; // Last user: black

			return (
				<TouchableOpacity
					key={index}
					onPress={() => onSelectUser(index)}
					style={{ marginRight: 20, alignItems: 'center' }}
				>
					<View style={styles.mess}>
						<Image source={{ uri: user.images[0] }} style={styles.image} />
						<View style={styles.messageContent}>
							<View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}
								>
									<View>
										<Text style={[styles.name, { color: 'black' }]}>
											{user.name}
										</Text>
										<Text style={styles.bio}>{user.quote}</Text>
									</View>
									<View style={{ flexDirection: 'row', gap: 8 }}>
										{/* Render circles based on the 'circles' array */}
										{circles.map((color, i) => (
											<View
												key={i}
												style={{
													height: 30,
													width: 30,
													backgroundColor: color,
													borderRadius: 100,
													borderWidth: 2,
													borderColor: 'black',
												}}
											/>
										))}
									</View>
								</View>
								<View style={styles.underline} />
							</View>
						</View>
					</View>
				</TouchableOpacity>
			);
		})}
	</ScrollView>
);

const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		alignItems: 'center',
		paddingVertical: 10,
		paddingBottom: 20,
	},
	mess: {
		width: width - 20,
		height: 90,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		paddingHorizontal: 10,
	},
	image: {
		width: 65,
		height: 65,
		borderRadius: 32.5,
	},
	name: {
		fontWeight: '600',
		fontSize: 18,
	},
	bio: {
		fontSize: 13,
	},
	messageContent: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 12,
		flex: 1,
	},
	underline: {
		borderBottomColor: '#555962',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginTop: 10,
		flex: 1,
	},
	icontext: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		color: 'red',
		marginLeft: 6,
		fontSize: 22,
		fontWeight: '500',
	},
	relationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	imageContainer: {
		borderColor: 'orange',
		borderWidth: 8,
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: 20,
		width: width * 0.85,
		height: height * 0.45,
		alignItems: 'center',
	},
	progressBarContainer: {
		flexDirection: 'row',
		width: '95%',
		height: 5,
		position: 'absolute',
		top: 5,
		zIndex: 1,
		paddingHorizontal: 5,
	},
	progressBarContainer2: {
		flexDirection: 'row',
		width: '93%',
		height: 25,
		backgroundColor: 'gray',
		position: 'absolute',
		alignItems: 'center',
		top: 2,
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
		// borderWidth: 8,
		// borderColor: "orange",
	},
	caption: {
		fontSize: 20,
		fontWeight: 'bold',
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
		backgroundColor: 'silver',
		borderRadius: 5,
		padding: 6,
		alignItems: 'center',
		width: '45%',
		marginBottom: 4,
	},
	viewMoreText: {
		// fontWeight: 'bold',
		fontSize: 14,
		color: 'black',
	},
	arrowButton: {
		backgroundColor: '#FFD700',
		padding: 10,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const TileView = ({
	user,
	userType,
	onNavigate,
	onTileNavigation,
	onBackToList,
}) => {
	const [gestureState, setGestureState] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isExpanded, setIsExpanded] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Prepare the ordered list of users: [user, ...subParents, ...children]
	const userSequence = [
		user,
		...(user.subParents || []),
		...(user.children || []),
	];
	const displayedUser = userSequence[currentIndex] || user;

	// Set images array from displayedUser
	const images = displayedUser.images || [];

	const handleGestureEvent = (event) => {
		const { translationX } = event.nativeEvent;

		if (translationX > 100) {
			// Swipe right
			onTileNavigation('previous');
		} else if (translationX < -100) {
			// Swipe left
			onTileNavigation('next');
		}
	};

	const handleGestureStateChange = (event) => {
		if (event.nativeEvent.state === 5) {
			// Gesture ended
			setGestureState(null);
		}
	};

	const handleImageTap = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
	};

	const toggleExpandView = () => setIsExpanded(!isExpanded);

	// Function to handle navigating to the next user in sequence
	const handleNext = () => {
		if (currentIndex < userSequence.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setCurrentIndex(0); // Reset to the first user if at the end
		}
	};

	// Function to handle navigating to the previous user in sequence
	const handlePrevious = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		} else {
			setCurrentIndex(userSequence.length - 1); // Go to the last user if at the beginning
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer} vertical>
			<View style={styles.imageContainer}>
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
				{images.length > 0 ? (
					<TouchableOpacity onPress={handleImageTap}>
						<Image
							source={{ uri: images[currentImageIndex] }}
							style={styles.imageStyle}
							resizeMode='cover'
						/>
					</TouchableOpacity>
				) : (
					<Text>No images available</Text>
				)}
			</View>
			<View style={{ width: width * 0.85 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text style={[styles.caption2, { textAlign: 'left' }]}>
						{displayedUser.relation}
					</Text>
					<Text style={[styles.caption2, { textAlign: 'center' }]}>
						Match for Tom
					</Text>
					<View style={styles.relationContainer}>
						<Octicons
							name='dot-fill'
							size={24}
							color={
								displayedUser.marriageStatus === 'open to marriage'
									? 'green'
									: 'red'
							}
							style={{ marginRight: 2 }}
						/>
						<Text style={[styles.caption2, { textAlign: 'right' }]}>
							{displayedUser.marriageStatus}
						</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginVertical: 5,
					}}
				>
					<Text style={styles.caption}>{displayedUser.name || 'Unknown'}</Text>
					<TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
						<MaterialCommunityIcons
							name='arrow-right'
							size={24}
							color='black'
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.viewMoreButton}
					onPress={toggleExpandView}
				>
					<Text style={styles.viewMoreText}>
						{isExpanded ? 'View Less' : 'View More'}
					</Text>
				</TouchableOpacity>
				{isExpanded && <HomeViewMore currentData={displayedUser} />}
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					width: '80%',
				}}
			>
				<TouchableOpacity onPress={() => onNavigate('previous')}>
					<Ionicons name='play-skip-back' size={26} color='black' />
				</TouchableOpacity>
				<TouchableOpacity onPress={handlePrevious}>
					<Ionicons name='play-back-sharp' size={30} color='black' />
				</TouchableOpacity>
				<TouchableOpacity onPress={handleNext}>
					<Ionicons name='play-forward-sharp' size={30} color='black' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => onNavigate('next')}>
					<Ionicons name='play-skip-forward' size={26} color='black' />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Home2;
