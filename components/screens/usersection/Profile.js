
// import { MyContext } from '@/components/MyContext';
// import React, { useContext, useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import UserProfileForm from "@/components/screens/Form/UserProfileForm";
// import { Entypo, FontAwesome6, Octicons } from '@expo/vector-icons';

// const { width } = Dimensions.get( 'window' );

// const Profile = ( { childrenData, profileData } ) => {
//     const { bgColor, User, setUser } = useContext( MyContext );
//     const [ currentChildIndex, setCurrentChildIndex ] = useState( 0 )
//     const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 );

//     // Cycle to the next image on tap
//     const handleImageTap = () => {
//         setCurrentImageIndex( ( prevIndex ) => ( prevIndex + 1 ) % profileData.images.length );
//     };
//     const images = profileData?.images || [];
//     console.log(profileData,"hehhre")
//     return (
//         <View style={ styles.container }>

//             {/* Profile Content */ }
//             <View style={ styles.profileContent }>


//                 <View style={ styles.progressContainer }>
//                     { profileData.images.map( ( _, index ) => (
//                         <View
//                             key={ index }
//                             style={ [
//                                 styles.progressSegment,
//                                 index === currentImageIndex ? styles.activeSegment : styles.inactiveSegment,
//                             ] }
//                         />
//                     ) ) }
//                 </View>
//                 <TouchableOpacity onPress={ handleImageTap }>
//                     <Image
//                         source={ { uri: profileData.images[ currentImageIndex ] } }
//                         style={ styles.image }
//                     />
//                 </TouchableOpacity>
//                 <View style={ { justifyContent: "center", alignItems: "center", flexDirection: "row" } }>
//                     <Text style={ styles.name }>{ profileData.name }</Text>
//                 </View>
//                 {/* Action Buttons */ }
//                 <View style={ styles.actionButtonsBelowProfile }>
//                     <TouchableOpacity style={ styles.button } onPress={ () => setUser( false ) }>
//                         <Text style={ styles.buttonText }>Logout</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={ styles.button } onPress={ () => {
//                         // navigation.navigate( 'editprofile' )c
//                         console.log( "clicked" )
//                     }
//                     }>
//                         <Text style={ styles.buttonText }>Preference</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <UserProfileForm profileData={ profileData } />
//         </View>
//     );
// };

// const styles = StyleSheet.create( {
//     container: {
//         alignItems: 'center',
//         width: '100%',
//         paddingHorizontal: width * 0.05,
//         paddingBottom: 20,
//         marginTop: 10,
//     },
//     progressContainer: {
//         flexDirection: 'row',
//         alignSelf: 'center',
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     progressSegment: {
//         height: 4,
//         flex: 1,
//         marginHorizontal: 2,
//         borderRadius: 2,
//     },
//     activeSegment: {
//         backgroundColor: 'black',  // Active segment color
//     },
//     inactiveSegment: {
//         backgroundColor: '#ddd',  // Inactive segment color
//     },
//     profileContent: {
//         alignItems: 'center',
//         width: '100%',
//         paddingHorizontal: width * 0.05,
//         paddingBottom: 20,
//         // backgroundColor:"#ccc"
//     },
//     image: {
//         width: 150,
//         height: 150,
//         borderRadius: 5,
//         marginVertical: 10,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     actionButtonsBelowProfile: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: 20,
//     },
//     button: {
//         borderRadius: 5,
//         paddingVertical: 8,
//         paddingHorizontal: 20,
//         marginHorizontal: 10,
//         borderColor: "black",
//         borderWidth: 1,
//     },
//     logoutbutton: {
//         borderRadius: 5,
//         paddingVertical: 8,
//         paddingHorizontal: 20,
//         marginHorizontal: 10,
//         borderColor: "black",

//         borderWidth: 1,
//         backgroundColor: "red"
//     },
//     buttonText: {
//         color: 'black',
//         fontWeight: 'bold',
//     },
//     buttonText2: {
//         color: "white",
//         fontWeight: 'bold',
//     },

// } );

// export default Profile;
import React, { useContext, useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, PanResponder, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { MyContext } from '@/components/MyContext';
import UserProfileForm from "@/components/screens/Form/UserProfileForm";

const { width } = Dimensions.get( 'window' );

const Profile = ( { totaluser, profileData } ) => {
    const { bgColor, User, setUser } = useContext( MyContext );
    const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 );
    const images = profileData?.images || [];
    // Animated values for position and opacity
    const translateXAnim = useRef( new Animated.Value( 0 ) ).current;
    const opacityAnim = useRef( new Animated.Value( 1 ) ).current;
    const handleImageTap = () => {
        // Animate out the current image and immediately animate the new image in
        Animated.parallel( [
            // Slide out the current image and fade out
            Animated.timing( translateXAnim, {
                toValue: -width * 0.2, // Move the image a little to the left
                duration: 150,
                useNativeDriver: true,
            } ),
            Animated.timing( opacityAnim, {
                toValue: 0, // Fade out the current image
                duration: 150,
                useNativeDriver: true,
            } )
        ] ).start( () => {
            // Update the image index and reset the animations for the new image
            setCurrentImageIndex( ( prevIndex ) => ( prevIndex + 1 ) % images.length );
            translateXAnim.setValue( width * 0.2 ); // Start the new image slightly off-screen to the right
            opacityAnim.setValue( 0 );              // Start new image invisible

            // Animate the new image to its final position (fading in and sliding to center)
            Animated.parallel( [
                Animated.timing( translateXAnim, {
                    toValue: 0,       // Slide into center
                    duration: 200,     // Faster transition
                    useNativeDriver: true,
                } ),
                Animated.timing( opacityAnim, {
                    toValue: 1,       // Fade in the new image
                    duration: 200,     // Same duration as the slide
                    useNativeDriver: true,
                } )
            ] ).start();
        } );
    };
    console.log( totaluser.subParents, "toataluser" )
    // Initialize animated value for swiping effect
    // const pan = useRef(new Animated.ValueXY()).current;

    // const handleNextImage = () => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // const handlePreviousImage = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         (prevIndex - 1 + images.length) % images.length
    //     );
    // };

    // const panResponder = useRef(
    //     PanResponder.create({
    //         onMoveShouldSetPanResponder: (evt, gestureState) => {
    //             // Start tracking if the horizontal swipe is significant
    //             return Math.abs(gestureState.dx) > 20;
    //         },
    //         onPanResponderMove: Animated.event(
    //             [
    //                 null,
    //                 { dx: pan.x }
    //             ],
    //             { useNativeDriver: false }
    //         ),
    //         onPanResponderRelease: (evt, gestureState) => {
    //             if (gestureState.dx > 50) {
    //                 handlePreviousImage();  // Swipe Right - Show Previous Image
    //             } else if (gestureState.dx < -50) {
    //                 handleNextImage();  // Swipe Left - Show Next Image
    //             }
    //             Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    //         }
    //     })
    // ).current;

    return (
        <View style={ styles.container }>
            {/* Profile Content */ }
            <View style={ styles.profileContent }>
                { images.map( ( _, index ) => (
                    <View style={ styles.progressContainer }>

                        <View
                            key={ index }
                            style={ [
                                styles.progressSegment,
                                index === currentImageIndex ? styles.activeSegment : styles.inactiveSegment,
                            ] }
                        />

                    </View> ) ) }
                <TouchableOpacity onPress={ handleImageTap }>
                    <Animated.Image
                        source={ { uri: images[ currentImageIndex ] } }
                        style={ [
                            styles.image,
                            {
                                transform: [ { translateX: translateXAnim } ],
                                opacity: opacityAnim,
                            }
                        ] }
                    />
                </TouchableOpacity>

                {/* User's Name */ }
                <View style={ { justifyContent: "center", alignItems: "center", flexDirection: "row" } }>
                    <Text style={ styles.name }>{ profileData.name }</Text>
                </View>
                <View style={ styles.actionButtonsBelowProfile }>
                    <TouchableOpacity style={ styles.button } onPress={ () => { console.log( "click on add" ) } }>
                        <Text style={ styles.buttonText }>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.button } onPress={ () => console.log( "Preference clicked" ) }>
                        <Text style={ styles.buttonText }>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.button } onPress={ () => console.log( "Preference clicked" ) }>
                        <Text style={ styles.buttonText }>Discovery</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Profile Details Form */ }
            <UserProfileForm profileData={ profileData } />
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.05,
        paddingBottom: 20,
        marginTop: 10,
    },
    progressContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        width: '80%',  // Set width for better alignment
    },
    progressSegment: {
        height: 6, // Increased height for visibility
        flex: 1,
        marginHorizontal: 2,
        borderRadius: 3,
    },
    activeSegment: {
        backgroundColor: 'black',  // Active segment color
    },
    inactiveSegment: {
        backgroundColor: '#ddd',  // Inactive segment color
    },
    profileContent: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.05,
        // paddingBottom: 20,
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 5,
        marginVertical: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    actionButtonsBelowProfile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
    },
    button: {
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderColor: "black",
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
} );

export default Profile;
