

import { MyContext } from '../MyContext';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Data from '../../assets/data/Data';
import HomeViewMore from "@/components/screens/HomeViewMore"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
const { width, height } = Dimensions.get( 'window' );
import connectlogo from "@/assets/images/connect2.jpg"
export default function ViewMore ( { route } ) {
    const { userData } = route.params;
    const [ currentParentIndex, setCurrentParentIndex ] = useState( 0 );
    const [ currentPersonIndex, setCurrentPersonIndex ] = useState( 0 );
    const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 );
    const [ section, setSection ] = useState( "parent" );
    const [ ViewMore, setViewmore ] = useState( false );
    const { lightTheme, showfamily } = useContext( MyContext );
    const currentParent = Data.parentUsers[ currentParentIndex ] || {};
    const subParentData = currentParent.subParents || [];
    const childData = currentParent.children || [];

    let currentData, images;
    if ( section === "parent" ) {
        currentData = currentParent;
        images = currentParent.images || [];
    } else if ( section === "subparent" ) {
        currentData = subParentData[ currentPersonIndex ] || {};
        images = currentData.images || [];
    } else if ( section === "child" ) {
        currentData = childData[ currentPersonIndex ] || {};
        images = currentData.images || [];
    }

    const activeTabText = section === "parent" ? "Parent" : section === "subparent" ? "Subparent" : "Child";

    const onTapHandler = () => {
        if ( images.length > 0 ) {
            const nextImageIndex = ( currentImageIndex + 1 ) % images.length;
            setCurrentImageIndex( nextImageIndex );

            if ( nextImageIndex === 0 ) {
                if ( section === "parent" ) {
                    if ( subParentData.length > 0 ) {
                        setSection( "subparent" );
                        setCurrentPersonIndex( 0 );
                    } else if ( childData.length > 0 ) {
                        setSection( "child" );
                        setCurrentPersonIndex( 0 );
                    }
                } else if ( section === "subparent" ) {
                    if ( currentPersonIndex + 1 < subParentData.length ) {
                        setCurrentPersonIndex( currentPersonIndex + 1 );
                    } else if ( childData.length > 0 ) {
                        setSection( "child" );
                        setCurrentPersonIndex( 0 );
                    } else {
                        setSection( "parent" );
                    }
                } else if ( section === "child" ) {
                    if ( currentPersonIndex + 1 < childData.length ) {
                        setCurrentPersonIndex( currentPersonIndex + 1 );
                    } else {
                        setSection( "parent" );
                    }
                }
            }
        }
    };

    const navigation = useNavigation();
    const onSwipeHandler = ( event ) => {
        const { translationX, state } = event.nativeEvent;
        if ( state === State.END ) {
            if ( translationX < -100 ) {
                nextParent();
            } else if ( translationX > 100 ) {
                prevParent();
            }
        }
    };

    const nextParent = () => {
        setCurrentParentIndex( ( currentParentIndex + 1 ) % Data.parentUsers.length );
        resetViewToParent();
    };

    const prevParent = () => {
        setCurrentParentIndex( ( currentParentIndex - 1 + Data.parentUsers.length ) % Data.parentUsers.length );
        resetViewToParent();
    };

    const resetViewToParent = () => {
        setSection( "parent" );
        setCurrentPersonIndex( 0 );
        setCurrentImageIndex( 0 );
    };

    const toggleChildSubParentView = () => {
        if ( section === "parent" && subParentData.length > 0 ) {
            setSection( "subparent" );
            setCurrentPersonIndex( 0 );
        } else if ( section === "subparent" ) {
            if ( currentPersonIndex + 1 < subParentData.length ) {
                setCurrentPersonIndex( currentPersonIndex + 1 );
            } else if ( childData.length > 0 ) {
                setSection( "child" );
                setCurrentPersonIndex( 0 );
            } else {
                setSection( "parent" );
            }
        } else if ( section === "child" ) {
            if ( currentPersonIndex + 1 < childData.length ) {
                setCurrentPersonIndex( currentPersonIndex + 1 );
            } else {
                setSection( "parent" );
            }
        }
        setCurrentImageIndex( 0 );
    };

    const [ isExpanded, setIsExpanded ] = useState( false );

    const onViewMorePress = ( data ) => {
        // setIsExpanded( !isExpanded );
        navigation.navigate( 'view', { userdata: currentData } )
    };
    const onListPress = () => {
        console.log( "press on list" )
    };
    function trimName ( name, maxLength ) {
        if ( name.length > maxLength ) {
            return name.slice( 0, maxLength ) + '...';
        }
        return name;
    }
    return (
        <PanGestureHandler onGestureEvent={ onSwipeHandler } onHandlerStateChange={ onSwipeHandler }>
            
            <ScrollView contentContainerStyle={ { alignItems: 'center', paddingBottom: 30, marginTop: 10, } } vertical>
            <View style={ [ styles.navbar, { backgroundColor: lightTheme } ] }>
                    <View style={ styles.icontext }>
                        <Image source={ connectlogo } style={ { height: 30, width: 30 } } />
                        <Text style={ [ styles.text, { color: "#FF8C00" } ] }>Connect</Text>
                    </View>
                    <View style={ styles.righticons }>
                        <TouchableOpacity onPress={ () => navigation.navigate( 'notifications' ) }>
                            <Ionicons name="notifications" size={ 26 } style={ styles.sheildicon } color="orange" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.middleSection }>
                    <View style={ styles.imageContainer }>
                        {/* Progress Bar inside Image */ }
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

                        { currentData ? (
                            <TouchableOpacity onPress={ onTapHandler }>
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
                                        <Text style={ styles.userName }>{ currentData.name || 'Unknown' }</Text>
                                        <Text style={ styles.userDetails }>
                                            { currentData.caste || 'N/A' }, { currentData.religion || 'N/A' }
                                        </Text>
                                    </View>
                                    <TouchableOpacity style={ styles.viewMoreButton } onPress={ onViewMorePress

                                    }>
                                        <FontAwesome name="arrow-down" size={ 24 } color="black" />

                                        <Text style={ styles.viewMoreText }>view</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <Text>No user data available</Text>
                        ) }
                    </View>
                    <HomeViewMore currentData={ currentData } />
                </View>
            </ScrollView>
        </PanGestureHandler>
    );
}

const styles = StyleSheet.create( {

    scrollContent: {
        paddingBottom: height * 0.1,
        // paddingTop: height * 0.08, // To avoid content under the navbar
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
