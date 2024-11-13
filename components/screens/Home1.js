import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useContext, useEffect, useRef, useState } from 'react';
import { MyContext } from '../MyContext';
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Data from '../../assets/data/Data';
import HomeViewMore from "@/components/screens/HomeViewMore"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
const { width, height } = Dimensions.get( 'window' );

export default function Home1 () {
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
        setIsExpanded( !isExpanded );
        navigation.navigate( 'view', { user: currentData } )
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
                    <View style={ { width: width * 0.85 } }>
                        <View style={ { justifyContent: "space-between", flexDirection: "row", alignItems: "center" } }>
                            {/* <Text style={ [ styles.caption2, { textAlign: "left" } ] }>{ currentData.relation }</Text> */ }
                            <Text style={ [ styles.caption2, { textAlign: "center" } ] }>Match for Tom</Text>
                            <View style={ styles.relationContainer }>
                                <Octicons name="dot-fill" size={ 24 } color={ currentData.marriageStatus === 'open to marriage' ? 'green' : 'red' } style={ { marginRight: 2, } } />
                                <Text style={ [ styles.caption2, { textAlign: "right" } ] }>{ currentData.marriageStatus }</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Family members-----------------------------</Text>
                        </View>

                    </View>


                    <View style={ styles.familyContainer }>

                        <LinearGradient
                            colors={ [ 'rgba(0, 0, 0, 0.3)', 'transparent' ] }
                            start={ { x: 0, y: 0 } }
                            end={ { x: 0.5, y: 0 } }
                            style={ [ styles.shadowGradient, { top: 0, left: 0 } ] }
                        />

                        {/* List Button */ }

                        <TouchableOpacity style={ styles.listButton } onPress={ onListPress }>
                            <FontAwesome name="list" size={ 24 } color="black" />
                        </TouchableOpacity>

                        {/* Family Members */ }

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={ false }
                            contentContainerStyle={ { flexDirection: "row", alignItems: "center" } }
                            style={ { width: '100%' } } // Ensure the scroll view takes up full width
                        >
                            <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center" } }>
                                <Text style={ styles.familyMemberRole }>{ trimName( currentData.name, 7 ) }</Text>
                                <TouchableOpacity
                                    onPress={ () => {
                                        setSection( "parent" );
                                        setCurrentPersonIndex( 0 );
                                    } }
                                    style={ [
                                        styles.familyMemberContainer,
                                        { borderColor: section === "parent" ? 'orange' : 'grey' }
                                    ] }
                                >
                                    <Image source={ { uri: currentParent.images[ 0 ] } } style={ styles.familyMemberImage } />

                                </TouchableOpacity>
                                <Text style={ styles.familyMemberRole }>Parent</Text>
                            </View>
                            {/* Subparent Indicators */ }
                            { subParentData.map( ( subParent, index ) => (
                                <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center" } }>
                                    <Text style={ styles.familyMemberRole }>{ trimName( subParent.name, 7 ) }</Text>
                                    <TouchableOpacity
                                        key={ `subparent-${ index }` }
                                        onPress={ () => {
                                            setSection( "subparent" );
                                            setCurrentPersonIndex( index );
                                        } }
                                        style={ [
                                            styles.familyMemberContainer,
                                            { borderColor: section === "subparent" && currentPersonIndex === index ? 'orange' : 'grey' }
                                        ] }
                                    >
                                        <Image source={ { uri: subParent.images[ 0 ] } } style={ styles.familyMemberImage } />
                                        {/* <Text style={ styles.familyMemberRole }>Subparent { index + 1 }</Text> */ }
                                    </TouchableOpacity>
                                    <Text style={ styles.familyMemberRole }>Subparent { index + 1 }</Text>
                                </View>
                            ) ) }

                            {/* Child Indicators */ }
                            { childData.map( ( child, index ) => (
                                <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center" } }>
                                    <Text style={ styles.familyMemberRole }>{ trimName( child.name, 7 ) }</Text>
                                    <TouchableOpacity
                                        key={ `child-${ index }` }
                                        onPress={ () => {
                                            setSection( "child" );
                                            setCurrentPersonIndex( index );
                                        } }
                                        style={ [
                                            styles.familyMemberContainer,
                                            { borderColor: section === "child" && currentPersonIndex === index ? 'orange' : 'grey' }
                                        ] }
                                    >
                                        <Image source={ { uri: child.images[ 0 ] } } style={ styles.familyMemberImage } />

                                    </TouchableOpacity>
                                    <Text style={ styles.familyMemberRole }>Child { index + 1 }</Text>
                                </View>
                            ) ) }

                        </ScrollView>

                        {/* Next Button */ }
                        <TouchableOpacity style={ styles.arrowButton } onPress={ toggleChildSubParentView }>
                            <FontAwesome name="arrow-right" size={ 24 } color="black" />
                        </TouchableOpacity>
                        <LinearGradient
                            colors={ [ 'rgba(0, 0, 0, 0.3)', 'transparent' ] }
                            start={ { x: 1, y: 1 } }
                            end={ { x: 0.5, y: 1 } }
                            style={ [ styles.shadowGradient, { bottom: 0, right: 0 } ] }
                        />
                    </View
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
            </ScrollView>
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
} );
