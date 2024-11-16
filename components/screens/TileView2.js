import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';
import { MyContext } from '../MyContext';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Data from '../../assets/data/Data';
import HomeViewMore from "@/components/screens/HomeViewMore"
const { width, height } = Dimensions.get( 'window' );

export default function TileView2 ( { parent } ) {
    const [ currentParentIndex, setCurrentParentIndex ] = useState( 0 );
    const [ currentPersonIndex, setCurrentPersonIndex ] = useState( 0 );
    const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 );
    const [ section, setSection ] = useState( "parent" );
    const [ ViewMore, setViewmore ] = useState( false );

    const { lightTheme } = useContext( MyContext );

    const currentParent = parent || {};
    const subParentData = currentParent.subParents || [];
    const childData = currentParent.children || [];
    console.log( parent, "user" )
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

    const onViewMorePress = () => {
        setIsExpanded( !isExpanded );
    };
    return (

        <PanGestureHandler onGestureEvent={ onSwipeHandler } onHandlerStateChange={ onSwipeHandler }>
            <View style={ styles.middleSection }>
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

                    { currentData ? (
                        <TouchableOpacity onPress={ onTapHandler } >
                            <Image source={ { uri: images[ currentImageIndex ] } } style={ styles.imageStyle } resizeMode="cover" />
                        </TouchableOpacity>
                    ) : (
                        <Text>No user data available</Text>
                    ) }
                </View>
                <View style={ { width: width * 0.85 } }>
                    <View style={ { justifyContent: "space-between", flexDirection: "row", alignItems: "center" } }>
                        <Text style={ [ styles.caption2, { flex: 1, textAlign: "left" } ] }>{ currentData.relation }</Text>
                        <Text style={ [ styles.caption2, { flex: 2, textAlign: "center" } ] }>Match for Tom</Text>
                        <View style={ styles.relationContainer }>
                                <Octicons name="dot-fill" size={ 24 } color={ currentData.marriageStatus === 'open to marriage' ? 'green' : 'red' } style={ { marginRight: 2, } } />
                                {/* { backgroundColor: currentData.marriageStatus === 'open to marriage' ? 'green' : 'red' } */ }
                                <Text style={ [ styles.caption2, { flex: 1, textAlign: "right" } ] }>{ currentData.marriageStatus }</Text>
                        </View>

                    </View>
                    <View style={ { justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginVertical: 5 } }>
                        <Text style={ styles.caption }>{ currentData.name || "Unknown" }</Text>
                        <TouchableOpacity onPress={ toggleChildSubParentView } style={ styles.arrowButton }>
                            <MaterialCommunityIcons name="arrow-right" size={ 24 } color="black" />
                        </TouchableOpacity>
                    </View>

                    <Text style={ styles.quote }>{ currentData.quote || "No quote available" }</Text>

                    <TouchableOpacity style={ styles.viewMoreButton } onPress={ onViewMorePress }>
                        <Text style={ styles.viewMoreText }>View More</Text>
                    </TouchableOpacity>
                </View>
                { isExpanded ? <HomeViewMore currentData={ currentData } /> : null }
                <View style={ styles.bottomBar }>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ prevParent }>
                        <MaterialCommunityIcons name="undo-variant" size={ width * 0.08 } color="#d4aa37" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ nextParent }>
                        <AntDesign name="like2" size={ width * 0.08 } color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ prevParent }>
                        <AntDesign name="dislike2" size={ width * 0.08 } color="orange" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] }>
                        <Feather name="share-2" size={ width * 0.08 } color="#1597fa" />
                    </TouchableOpacity>
                </View>
            </View>
        </PanGestureHandler>
    );
}


const styles = StyleSheet.create( {
    middleSection: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 55,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    subTabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    relationContainer: {
        flexDirection: 'row', // Aligns the dot and text in a row
        alignItems: 'center', // Centers the content vertically
    },
    dotContainer: {
        width: 10, // Adjust size as needed
        height: 10, // Adjust size as needed
        borderRadius: 5, // Makes it a circle
        marginRight: 8, // Space between dot and text
    },
    dot: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    subTabText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'grey',
    },
    activeSubTab: {
        color: '#FF8C00',
    },
    imageContainer: {
        borderColor: '#d3d3d3',
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        alignItems: "center"
    },
    progressBarContainer: {
        flexDirection: 'row',
        width: '98%',
        height: 5,
        position: 'absolute',
        top: 3,  // Add a small offset to create visible spacing from the top
        zIndex: 1,
        //    textAlign:"center",
        marginTop: 4,
        paddingHorizontal: 5, // Add space between the top of the image and the progress bar
    },
    progressBarContainer2: {
        flexDirection: 'row',
        width: '97%',
        height: 25,
        backgroundColor: "gray",
        position: 'absolute',
        alignItems: "center",
        top: 3,  // Add a small offset to create visible spacing from the top
        zIndex: 1,
        marginTop: 1,
        paddingHorizontal: 5, // Add space between the top of the image and the progress bar
    },
    progressBarSegment: {
        flex: 1,
        marginHorizontal: 1,

    },
    imageStyle: {
        width: width * 0.85,
        height: height * 0.45,
        borderWidth: 4,
        borderColor: "orange",
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
        backgroundColor: '#FFD700',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        width: '50%',
    },
    viewMoreText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    arrowButton: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewMoreButton: {
        backgroundColor: '#FFD700',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        width: '50%',
        marginVertical: 10,
    },
    viewMoreText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    arrowButton: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        bottom: 20, // Use 'bottom' to place it consistently above the screen edge
        position: 'absolute',
    },
    bigButton: {
        width: width * 0.15,
        height: width * 0.15,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: width * 0.075,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
    },
} );
