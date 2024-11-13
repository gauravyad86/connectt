

import { MyContext } from '../MyContext';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Data from '../../assets/data/Data';
import HomeViewMore from "@/components/screens/HomeViewMore"
import { LinearGradient } from 'expo-linear-gradient';
import connectlogo from "@/assets/images/connect2.jpg"
const { width, height } = Dimensions.get( 'window' );
export default function ViewMore ( { route } ) {
    const { user } = route.params;
    const [ gestureState, setGestureState ] = useState( null );
    const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 );
    const [ isExpanded, setIsExpanded ] = useState( true );
    const [ currentIndex, setCurrentIndex ] = useState( 0 );

    // Prepare the ordered list of users: [user, ...subParents, ...children]
    const userSequence = [
        user
    ];
    const { bgColor, lightTheme,showfamily,setShowfamily } = useContext( MyContext )
    const displayedUser = userSequence[ currentIndex ];
    console.log( "user", displayedUser )
    // Set images array from displayedUser
    const images = displayedUser.images || [];

    const handleGestureEvent = ( event ) => {
        const { translationX } = event.nativeEvent;

        if ( translationX > 100 ) { // Swipe right
            onTileNavigation( 'previous' );
        } else if ( translationX < -100 ) { // Swipe left
            onTileNavigation( 'next' );
        }
    };

    const handleGestureStateChange = ( event ) => {
        if ( event.nativeEvent.state === 5 ) { // Gesture ended
            setGestureState( null );
        }
    };

    const handleImageTap = () => {
        setCurrentImageIndex( ( prevIndex ) =>
            ( prevIndex + 1 ) % images.length ); // Cycle through images
    };

    const toggleExpandView = () => setIsExpanded( !isExpanded );

    // Function to handle navigating to the next user in sequence
    const handleNext = () => {
        if ( currentIndex < userSequence.length - 1 ) {
            setCurrentIndex( currentIndex + 1 );
        } else {
            setCurrentIndex( 0 ); // Reset to the first user if at the end
        }
    };

    // Function to handle navigating to the previous user in sequence
    const handlePrevious = () => {
        if ( currentIndex > 0 ) {
            setCurrentIndex( currentIndex - 1 );
        } else {
            setCurrentIndex( userSequence.length - 1 ); // Go to the last user if at the beginning
        }
    };

    return (
        <ScrollView contentContainerStyle={ styles.scrollContainer } vertical>
            <View style={ [ styles.navbar, { backgroundColor: lightTheme } ] }>
                <View style={ styles.icontext }>
                    <Image source={ connectlogo } style={ { height: 30, width: 30 } } />
                    <Text style={ [ styles.text, { color: "#FF8C00" } ] }>Connect</Text>
                </View>
                <View style={ styles.righticons }>
                    <TouchableOpacity onPress={ () => navigation.navigate( 'notifications' ) }>
                        <Ionicons name="notifications" size={ 26 } style={ styles.sheildicon } color={ bgColor } />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={ styles.imageContainer }>
                <View style={ styles.progressBarContainer2 }>
                    <View style={ styles.progressBarContainer }>
                        { images.map( ( _, index ) => (
                            <View
                                key={ index }
                                style={ [
                                    styles.progressBarSegment,
                                    { backgroundColor: index === currentImageIndex ? 'black' : '#d3d3d3' }
                                ] }
                            />
                        ) ) }
                    </View>
                </View>
                { images.length > 0 ? (
                    <TouchableOpacity onPress={ handleImageTap }>
                        {/* <Image source={ { uri: images[ currentImageIndex ] } } style={ styles.imageStyle } resizeMode="cover" /> */ }
                        <Image
                            source={ { uri: images[ currentImageIndex ] } }
                            style={ styles.imageStyle }
                            resizeMode="cover"
                        />
                        {/* Gradient overlay */ }
                        <LinearGradient
                            colors={ [ 'transparent', 'black' ] }
                            style={ styles.gradientOverlay }
                        />
                        {/* Text Overlay with User Name and Details */ }
                        <View style={ styles.textOverlay }>
                            <View>
                                <Text style={ styles.userName }>{ displayedUser.name || 'Unknown' }</Text>
                                <Text style={ styles.userDetails }>
                                    { displayedUser.caste || 'N/A' }, { displayedUser.religion || 'N/A' }
                                </Text>
                            </View>
                            <TouchableOpacity style={ styles.viewMoreButton } onPress={ toggleExpandView

                            }>
                                <FontAwesome name="arrow-down" size={ 24 } color="black" />

                                <Text style={ styles.viewMoreText }>view</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <Text>No images available</Text>
                ) }
            </View>
            <View style={ { width: width * 0.85 } }>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } }>
                    <Text style={ [ styles.caption2, { textAlign: "left" } ] }>{ displayedUser.relation }</Text>
                    <Text style={ [ styles.caption2, { textAlign: "center" } ] }>Match for Tom</Text>
                    <View style={ styles.relationContainer }>
                        <Octicons name="dot-fill" size={ 24 } color={ displayedUser.marriageStatus === 'open to marriage' ? 'green' : 'red' } style={ { marginRight: 2, } } />
                        <Text style={ [ styles.caption2, { textAlign: "right" } ] }>{ displayedUser.marriageStatus }</Text>
                    </View>
                </View>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 } }>
                    <Text style={ styles.caption }>{ displayedUser.name || 'Unknown' }</Text>
                    {/* <TouchableOpacity onPress={ handleNext } style={ styles.arrowButton }>
                        <MaterialCommunityIcons name="arrow-right" size={ 24 } color="black" />
                    </TouchableOpacity> */}
                </View>
            </View>
            { isExpanded && (
                <HomeViewMore currentData={ displayedUser } />
            ) }

        </ScrollView>
    );
};

const styles = StyleSheet.create( {

    scrollContent: {
        alignItems: 'center',
        paddingBottom: 30,
    },
    // imageContainer: {
    //     borderColor: 'orange',
    //     borderWidth: 8,
    //     borderRadius: 10,
    //     overflow: 'hidden',
    //     marginBottom: 20,
    //     width: width * 0.85,
    //     height: height * 0.45,
    //     alignItems: 'center',
    // },
    // imageStyle: {
    //     width: '100%',
    //     height: '100%',
    // },
    gradientOverlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%', // Adjust the height for desired gradient coverage
    },
    textOverlay: {
        // position: 'absolute',
        flexDirection: "row",
        bottom: height * .1,
        width: width * .75,
        left: 15,
        justifyContent: "space-between"
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
    navbar: {
        width: '100%',
        height: height * 0.07,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        zIndex: 10,
        top: 0,
        padding: 10,
    },
    icontext: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "red",
        marginLeft: 6,
        fontSize: 22,
        fontWeight: "500",
    },
    righticons: {
        flexDirection: "row",
        alignItems: "center",
    },
    sheildicon: {
        marginLeft: 25,
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        paddingVertical: 10,
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: "grey",
        height: "7%"
    },
    subTabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 50,
    },
    middleSection: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 55,
    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
       
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
        height: 25,
        backgroundColor: "gray",
        position: 'absolute',
        alignItems: "center",
        top: 0,
        zIndex: 1,
        paddingHorizontal: 5,
    },
    progressBarSegment: {
        flex: 1,
        marginHorizontal: 1,
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
        marginTop:55,
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
        flexDirection: "row",
        bottom: height * .1,
        width: width * .75,
        left: 15,
        justifyContent: "space-between"
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
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: 'transparent', // Ensure no background color interferes
        borderBottomWidth: 0, // Remove any bottom border that might cause a line
    },
    bigButton: {
        width: width * 0.15,
        height: width * 0.15,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: width * 0.075,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
    },
    familyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 5,
        width: width * .95,
        backgroundColor: "white",
        height: height * .18,

    },
    shadowGradient: {
        position: 'absolute',
        width: '100%', // Adjust width as needed
        height: 4, // Adjust height as needed for shadow intensity
    },
    listButton: {
        marginRight: 10,
        backgroundColor: "red",
        height: 30, width: 30,
        alignItems: 'center', justifyContent: "center",

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
        height: height * .1,
        width: width * .2
    },
    familyMemberImage: {
        width: "100%",
        height: "100%",
        borderRadius: 2,
    },
    familyMemberRole: {
        fontSize: 12,
        marginTop: 2,
    },
    subTabText: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 50,
        color: 'grey',
    },
    activeSubTab: {
        color: '#FF8C00',
    },
} );
