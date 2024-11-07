// import React, { useState, useContext } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';
// import { MyContext } from '../MyContext';
// import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

// const { width, height } = Dimensions.get( 'window' );

// const parentUserData = {
//     parentUser: {
//         name: "John Doe",
//         image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
//         marriageStatus: "Married",
//         state: "California",
//         district: "Los Angeles",
//         locationPreference: "Yes",
//         gender: "M",
//         ageRange: "35-45",
//         outsideAgeRange: "No",
//         education: "Bachelor's Degree",
//         occupation: "Engineer",
//         caste: "No",
//         religion: "Same",
//         animals: "Dogs",
//         languages: [ "English", "Spanish" ],
//         zodiac: "Leo",
//         personalityType: "Introvert",
//         alcohol: "No",
//         smoking: "No",
//         diet: "Non-Vegetarian",
//         sports: "Football",
//         travel: "Yes",
//         exercise: "Regularly",
//         subParents: [
//             {
//                 id: "sub1",
//                 name: "Jane Doe",
//                 image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
//                 marriageStatus: "Single",
//                 state: "California",
//                 district: "San Francisco",
//                 locationPreference: "Yes",
//                 gender: "F",
//                 ageRange: "30-40",
//                 outsideAgeRange: "Yes",
//                 education: "Master's Degree",
//                 occupation: "Doctor",
//                 caste: "Same",
//                 religion: "Same",
//                 animals: "Cats",
//                 languages: [ "English", "French" ],
//                 zodiac: "Virgo",
//                 personalityType: "Extrovert",
//                 alcohol: "Occasionally",
//                 smoking: "No",
//                 diet: "Vegetarian",
//                 sports: "Tennis",
//                 travel: "No",
//                 exercise: "Occasionally"
//             },
//             {
//                 id: "sub2",
//                 name: "Michael Smith",
//                 image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
//                 marriageStatus: "Divorced",
//                 state: "Texas",
//                 district: "Houston",
//                 locationPreference: "No",
//                 gender: "M",
//                 ageRange: "40-50",
//                 outsideAgeRange: "No",
//                 education: "Bachelor's Degree",
//                 occupation: "Teacher",
//                 caste: "No",
//                 religion: "No",
//                 animals: "None",
//                 languages: [ "English" ],
//                 zodiac: "Scorpio",
//                 personalityType: "Ambivert",
//                 alcohol: "No",
//                 smoking: "Yes",
//                 diet: "Non-Vegetarian",
//                 sports: "Basketball",
//                 travel: "Yes",
//                 exercise: "Regularly"
//             }
//         ],
//         children: [
//             {
//                 id: "child1",
//                 name: "Emily Doe",
//                 image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
//                 gender: "F",
//                 age: 10,
//                 marriageStatus: "Unmarried",
//                 education: "Elementary School",
//                 animals: "Dogs",
//                 languages: [ "English" ],
//                 sports: "Soccer",
//                 travel: "Yes",
//                 exercise: "Regularly"
//             },
//             {
//                 id: "child2",
//                 name: "David Doe",
//                 image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
//                 gender: "M",
//                 age: 8,
//                 marriageStatus: "Married",
//                 education: "Elementary School",
//                 animals: "None",
//                 languages: [ "English" ],
//                 sports: "Swimming",
//                 travel: "No",
//                 exercise: "Occasionally"
//             }
//         ]
//     }
// };

// // export default function ImageSwipeComponent () {
// //     const [ activeSubTabMatchesTile, setActiveSubTabMatchesTile ] = useState( 'parents' );
// //     const [ parentUserDataState, setParentUserDataState ] = useState( null );
// //     const [ childrenData, setChildrenData ] = useState( null );

// //     const { lightTheme } = useContext( MyContext );

// //     const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 );

// //     const onViewMorePress = () => {
// //         alert( "View More button pressed!" );
// //     };

// //     const onSwipeHandler = (event) => {
// //         const { translationX, state } = event.nativeEvent;
    
// //         if (state === State.END) {
// //             if (translationX < -100) {
// //                 // Swipe Left: Go to next subTab or person (parent or child)
// //                 if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
// //                     const nextParentIndex = (currentImageIndex + 1) % parentUserDataState.subParents.length;
// //                     setCurrentImageIndex(nextParentIndex);
// //                 } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
// //                     const nextChildIndex = (currentImageIndex + 1) % childrenData.length;
// //                     setCurrentImageIndex(nextChildIndex);
// //                 }
// //             } else if (translationX > 100) {
// //                 // Swipe Right: Go to previous subTab or person (parent or child)
// //                 if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
// //                     const prevParentIndex = (currentImageIndex - 1 + parentUserDataState.subParents.length) % parentUserDataState.subParents.length;
// //                     setCurrentImageIndex(prevParentIndex);
// //                 } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
// //                     const prevChildIndex = (currentImageIndex - 1 + childrenData.length) % childrenData.length;
// //                     setCurrentImageIndex(prevChildIndex);
// //                 }
// //             }
// //         }
// //     };

// //     const handleSubTabChange3 = ( subTab ) => {
// //         setActiveSubTabMatchesTile( subTab );

// //         if ( subTab === 'parents' ) {
// //             setParentUserDataState( {
// //                 parentUser: parentUserData.parentUser,
// //                 subParents: parentUserData.subParents,
// //             } );
// //             setChildrenData( null ); // Clear children data
// //         } else if ( subTab === 'child' ) {
// //             setChildrenData( parentUserData.children ); // Set children data
// //             setParentUserDataState( null ); // Clear parent data
// //         }
// //     };

// //     const onTapHandler = () => {
// //         if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.parentUser) {
// //             // Rotate through images of parent
// //             setCurrentImageIndex((currentImageIndex + 1) % 1); // Assuming a single image for parent
// //         } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
// //             // Rotate through images of selected child
// //             const nextImageIndex = (currentImageIndex + 1) % childrenData.length;
// //             setCurrentImageIndex(nextImageIndex);
// //         }
// //     };
//     // const nextPerson = () => {
//     //     if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
//     //         // Go to next subparent
//     //         const nextPersonIndex = (currentImageIndex + 1) % parentUserDataState.subParents.length;
//     //         setCurrentImageIndex(nextPersonIndex);
//     //     } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
//     //         // Go to next child
//     //         const nextPersonIndex = (currentImageIndex + 1) % childrenData.length;
//     //         setCurrentImageIndex(nextPersonIndex);
//     //     }
//     // };
    
//     // const prevPerson = () => {
//     //     if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
//     //         // Go to previous subparent
//     //         const prevPersonIndex = (currentImageIndex - 1 + parentUserDataState.subParents.length) % parentUserDataState.subParents.length;
//     //         setCurrentImageIndex(prevPersonIndex);
//     //     } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
//     //         // Go to previous child
//     //         const prevPersonIndex = (currentImageIndex - 1 + childrenData.length) % childrenData.length;
//     //         setCurrentImageIndex(prevPersonIndex);
//     //     }
//     // };
    
// //     return (
// //         <PanGestureHandler onGestureEvent={ onSwipeHandler } onHandlerStateChange={ onSwipeHandler }>
// //             <View style={ styles.middleSection }>
// //                 <View style={ styles.subTabContainer }>
// //                     <TouchableOpacity onPress={ () => handleSubTabChange3( 'parents' ) }>
// //                         <Text style={ [ styles.subTabText, activeSubTabMatchesTile === 'parents' && styles.activeSubTab ] }>Parents</Text>
// //                     </TouchableOpacity>
// //                     <TouchableOpacity onPress={ () => handleSubTabChange3( 'child' ) }>
// //                         <Text style={ [ styles.subTabText, activeSubTabMatchesTile === 'child' && styles.activeSubTab ] }>Child</Text>
// //                     </TouchableOpacity>
// //                 </View>

// //                 {/* Render Parent/Subparent data */ }
// //                 { activeSubTabMatchesTile === 'parents' && parentUserDataState?.parentUser && (
// //                     <View>
// //                         <TouchableOpacity onPress={ onTapHandler }>
// //                             <Image source={ parentUserDataState.parentUser.image } style={ styles.imageStyle } resizeMode="cover" />
// //                         </TouchableOpacity>
// //                         <View>
// //                             <View style={ { justifyContent: "space-between", flexDirection: "row", alignItems: "center" } }>

// //                                 <Text style={ styles.caption2 }>Match for tom</Text>
// //                                 <Text style={ styles.caption2 }>Relation</Text>
// //                             </View>
// //                             <View style={ { justifyContent: "space-between", flexDirection: "row", alignItems: "center" } }>
// //                                 <Text style={ styles.caption }>{ parentUserDataState.parentUser.name }</Text>
// //                                 <TouchableOpacity onPress={ onTapHandler }>
// //                                     <MaterialCommunityIcons name="share-all-outline" size={ 24 } color="black" />
// //                                 </TouchableOpacity>
// //                             </View>
// //                             {/* <Text style={ styles.quote }>{ currentUser.quote }</Text> */ }
// //                             <TouchableOpacity style={ styles.viewMoreButton } onPress={ onViewMorePress }>
// //                                 <Text style={ styles.viewMoreText }>View More</Text>
// //                             </TouchableOpacity>
// //                         </View>
// //                     </View>
// //                 ) }

// //                 {/* Render Children data */ }
// //                 { activeSubTabMatchesTile === 'child' && childrenData?.length > 0 && (
// //                     <View>
// //                         { childrenData.map( ( child ) => (
// //                             <View key={ child.id }>
// //                                 <Text>{ child.name }</Text>
// //                                 <Image source={ { uri: child.image } } style={ styles.imageStyle } />
// //                                 <Text>Age: { child.age }</Text>
// //                                 <Text>Sports: { child.sports }</Text>
// //                             </View>
// //                         ) ) }
// //                     </View>
// //                 ) }
// //                 <View style={ styles.bottomBar }>
// //                     <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ prevPerson }>
// //                         <MaterialCommunityIcons name="undo-variant" size={ width * 0.08 } color="#d4aa37" />
// //                     </TouchableOpacity>
// //                     <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ nextPerson }>
// //                         <AntDesign name="like2" size={ width * 0.08 } color="green" />
// //                     </TouchableOpacity>
// //                     <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ prevPerson }>
// //                         <AntDesign name="dislike2" size={ width * 0.08 } color="orange" />
// //                     </TouchableOpacity>
// //                     <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] }>
// //                         <Feather name="share-2" size={ width * 0.08 } color="#1597fa" />
// //                     </TouchableOpacity>
// //                 </View>
// //             </View>
// //         </PanGestureHandler>
// //     );
// // }

// // const styles = StyleSheet.create( {
// //     middleSection: {
// //         marginTop: 50,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         paddingHorizontal: 20,
// //     },
// //     subTabContainer: {
// //         flexDirection: "row",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         marginBottom: 10,
// //     },
// //     subTabText: {
// //         fontSize: 20,
// //         fontWeight: "bold",
// //         marginHorizontal: 50,
// //         color: 'grey',
// //     },
// //     activeSubTab: {
// //         color: '#FF8C00',
// //     },
// //     imageStyle: {
// //         width: width * .9,
// //         height: 280,
// //         marginVertical: 14,
// //     },
// //     caption: {
// //         fontSize: 20,
// //         fontWeight: 'bold',
// //         marginVertical: 10,
// //     },
// //     caption2: {
// //         fontSize: 12,
// //     },
// //     quote: {
// //         fontSize: 16,
// //         color: 'black',
// //         marginBottom: 10,
// //     },
// //     viewMoreButton: {
// //         backgroundColor: '#FFD700',
// //         borderRadius: 5,
// //         height: 30,
// //         width: 100,
// //         // marginTop: 10,
// //         alignItems: "center",
// //         justifyContent: "center",
// //     },
// //     viewMoreText: {
// //         color: '#000',
// //         fontWeight: 'bold',
// //         fontSize: 16,
// //     },
// //     bottomBar: {
// //         width: '85%',
// //         position: 'absolute',
// //         height: height * 0.1,
// //         bottom: -150,
// //         flexDirection: 'row',
// //         justifyContent: 'space-evenly',
// //         alignItems: 'center',
// //     },
// //     bigButton: {
// //         width: width * 0.15,
// //         height: width * 0.15,
// //         backgroundColor: "white",
// //         elevation: 5,
// //         borderRadius: width * 0.075,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         shadowColor: "black",
// //         shadowOffset: { width: 0, height: 2 },
// //         shadowOpacity: 0.8,
// //         shadowRadius: 3.84,
// //     },
// // } );
// export default function Home () {
//     const [activeSubTabMatchesTile, setActiveSubTabMatchesTile] = useState('parents');
//     const [parentUserDataState, setParentUserDataState] = useState(null);
//     const [childrenData, setChildrenData] = useState(null);

//     const { lightTheme } = useContext(MyContext);

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const onSwipeHandler = (event) => {
//         const { translationX, state } = event.nativeEvent;

//         if (state === State.END) {
//             if (translationX < -100) {
//                 if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
//                     const nextParentIndex = (currentImageIndex + 1) % parentUserDataState.subParents.length;
//                     setCurrentImageIndex(nextParentIndex);
//                 } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
//                     const nextChildIndex = (currentImageIndex + 1) % childrenData.length;
//                     setCurrentImageIndex(nextChildIndex);
//                 }
//             } else if (translationX > 100) {
//                 if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
//                     const prevParentIndex = (currentImageIndex - 1 + parentUserDataState.subParents.length) % parentUserDataState.subParents.length;
//                     setCurrentImageIndex(prevParentIndex);
//                 } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
//                     const prevChildIndex = (currentImageIndex - 1 + childrenData.length) % childrenData.length;
//                     setCurrentImageIndex(prevChildIndex);
//                 }
//             }
//         }
//     };
//     const onViewMorePress = () => {
//                 alert( "View More button pressed!" );
//             };
        
//     const nextPerson = () => {
//         if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
//             // Go to next subparent
//             const nextPersonIndex = (currentImageIndex + 1) % parentUserDataState.subParents.length;
//             setCurrentImageIndex(nextPersonIndex);
//         } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
//             // Go to next child
//             const nextPersonIndex = (currentImageIndex + 1) % childrenData.length;
//             setCurrentImageIndex(nextPersonIndex);
//         }
//     };
    
//     const prevPerson = () => {
//         if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.subParents) {
//             // Go to previous subparent
//             const prevPersonIndex = (currentImageIndex - 1 + parentUserDataState.subParents.length) % parentUserDataState.subParents.length;
//             setCurrentImageIndex(prevPersonIndex);
//         } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
//             // Go to previous child
//             const prevPersonIndex = (currentImageIndex - 1 + childrenData.length) % childrenData.length;
//             setCurrentImageIndex(prevPersonIndex);
//         }
//     };

//     const handleSubTabChange3 = (subTab) => {
//         setActiveSubTabMatchesTile(subTab);

//         if (subTab === 'parents') {
//             setParentUserDataState({
//                 parentUser: parentUserData.parentUser,
//                 subParents: parentUserData.subParents,
//             });
//             setChildrenData(null);
//         } else if (subTab === 'child') {
//             setChildrenData(parentUserData.children);
//             setParentUserDataState(null);
//         }
//     };

//     const onTapHandler = () => {
//         if (activeSubTabMatchesTile === 'parents' && parentUserDataState?.parentUser) {
//             setCurrentImageIndex((currentImageIndex + 1) % 1); 
//         } else if (activeSubTabMatchesTile === 'child' && childrenData?.length) {
//             const nextImageIndex = (currentImageIndex + 1) % childrenData.length;
//             setCurrentImageIndex(nextImageIndex);
//         }
//     };

//     return (
//         <PanGestureHandler onGestureEvent={onSwipeHandler} onHandlerStateChange={onSwipeHandler}>
//             <View style={styles.middleSection}>
//                 <View style={styles.subTabContainer}>
//                     <TouchableOpacity onPress={() => handleSubTabChange3('parents')}>
//                         <Text style={[styles.subTabText, activeSubTabMatchesTile === 'parents' && styles.activeSubTab]}>Parents</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleSubTabChange3('child')}>
//                         <Text style={[styles.subTabText, activeSubTabMatchesTile === 'child' && styles.activeSubTab]}>Child</Text>
//                     </TouchableOpacity>
//                 </View>

//                 {/* Render Parent/Subparent data */}
//                 {activeSubTabMatchesTile === 'parents' && parentUserDataState?.parentUser && (
//                     <View>
//                         <TouchableOpacity onPress={onTapHandler}>
//                             <Image source={{uri: parentUserDataState.parentUser.image}} style={styles.imageStyle} resizeMode="cover" />
//                         </TouchableOpacity>
//                         <Text style={styles.caption}>{parentUserDataState.parentUser.name}</Text>
//                         <TouchableOpacity style={styles.viewMoreButton} onPress={onViewMorePress}>
//                             <Text style={styles.viewMoreText}>View More</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )}

//                 {/* Render Children data */}
//                 {activeSubTabMatchesTile === 'child' && childrenData?.length > 0 && (
//                     <View>
//                         {childrenData.map(child => (
//                             <View key={child.id}>
//                                 <Text>{child.name}</Text>
//                                 <Image source={{uri: child.image}} style={styles.imageStyle} />
//                                 <Text>Age: {child.age}</Text>
//                                 <Text>Sports: {child.sports}</Text>
//                             </View>
//                         ))}
//                     </View>
//                 )}

//                 <View style={styles.bottomBar}>
//                     <TouchableOpacity style={styles.bigButton} onPress={prevPerson}>
//                         <MaterialCommunityIcons name="undo-variant" size={width * 0.08} color="#d4aa37" />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.bigButton} onPress={nextPerson}>
//                         <AntDesign name="arrowright" size={width * 0.08} color="#d4aa37" />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </PanGestureHandler>
//     );
// }
// const styles = StyleSheet.create( {
//     middleSection: {
//         marginTop: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingHorizontal: 20,
//     },
//     subTabContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: 10,
//     },
//     subTabText: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginHorizontal: 50,
//         color: 'grey',
//     },
//     activeSubTab: {
//         color: '#FF8C00',
//     },
//     imageStyle: {
//         width: width * .9,
//         height: 280,
//         marginVertical: 14,
//     },
//     caption: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginVertical: 10,
//     },
//     caption2: {
//         fontSize: 12,
//     },
//     quote: {
//         fontSize: 16,
//         color: 'black',
//         marginBottom: 10,
//     },
//     viewMoreButton: {
//         backgroundColor: '#FFD700',
//         borderRadius: 5,
//         height: 30,
//         width: 100,
//         // marginTop: 10,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     viewMoreText: {
//         color: '#000',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
//     bottomBar: {
//         width: '85%',
//         position: 'absolute',
//         height: height * 0.1,
//         bottom: -150,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//     },
//     bigButton: {
//         width: width * 0.15,
//         height: width * 0.15,
//         backgroundColor: "white",
//         elevation: 5,
//         borderRadius: width * 0.075,
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowColor: "black",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 3.84,
//     },
// } );
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';
import { MyContext } from '../MyContext';
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Data from './usersection/Data';

const { width, height } = Dimensions.get('window');

export default function Home1() {
    const[ parent, setParent]=useState(0)
    
    const childData = Data.parentUser.children;
    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
    const currentUser = childData[currentPersonIndex];
    const [activeSubTabMatchesTile, setActiveSubTabMatchesTile] = useState('parents');

    const { lightTheme } = useContext(MyContext);

    const onTapHandler = () => {
        setCurrentPersonIndex((currentPersonIndex + 1) % childData.length);
    };

    const onSwipeHandler = (event) => {
        const { translationX, state } = event.nativeEvent;
        if (state === State.END) {
            if (translationX < -100) {
                const nextPersonIndex = (currentPersonIndex + 1) % childData.length;
                setCurrentPersonIndex(nextPersonIndex);
            } else if (translationX > 100) {
                const prevPersonIndex = (currentPersonIndex - 1 + childData.length) % childData.length;
                setCurrentPersonIndex(prevPersonIndex);
            }
        }
    };

    const onViewMorePress = () => {
        Alert.alert("View More button pressed!");
    };

    const nextPerson = () => {
        const nextPersonIndex = (currentPersonIndex + 1) % childData.length;
        setCurrentPersonIndex(nextPersonIndex);
    };

    const prevPerson = () => {
        const prevPersonIndex = (currentPersonIndex - 1 + childData.length) % childData.length;
        setCurrentPersonIndex(prevPersonIndex);
    };

    const handleSubTabChange3 = (subTab) => {
        setActiveSubTabMatchesTile(subTab);
        if (subTab === 'parents') {
            console.log("Switching to Parents tab");
        } else {
            console.log("Switching to Child tab");
        }
    };

    return (
        <PanGestureHandler onGestureEvent={onSwipeHandler} onHandlerStateChange={onSwipeHandler}>
            <View style={styles.middleSection}>
                <TouchableOpacity onPress={onTapHandler}>
                    <Image source={currentUser.image} style={styles.imageStyle} resizeMode="cover" />
                </TouchableOpacity>
                <View style={{ width: width * 0.85 }}>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.caption2}>Match for Tom</Text>
                        <Text style={styles.caption2}>Relation</Text>
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.caption}>{currentUser.name}</Text>
                        <TouchableOpacity onPress={onTapHandler}>
                            <MaterialCommunityIcons name="share-all-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.quote}>{currentUser.quote}</Text>
                    <TouchableOpacity style={styles.viewMoreButton} onPress={onViewMorePress}>
                        <Text style={styles.viewMoreText}>View More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomBar}>
                    <TouchableOpacity style={[styles.bigButton, { backgroundColor: lightTheme }]} onPress={prevPerson}>
                        <MaterialCommunityIcons name="undo-variant" size={width * 0.08} color="#d4aa37" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.bigButton, { backgroundColor: lightTheme }]} onPress={nextPerson}>
                        <AntDesign name="like2" size={width * 0.08} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.bigButton, { backgroundColor: lightTheme }]} onPress={prevPerson}>
                        <AntDesign name="dislike2" size={width * 0.08} color="orange" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.bigButton, { backgroundColor: lightTheme }]}>
                        <Feather name="share-2" size={width * 0.08} color="#1597fa" />
                    </TouchableOpacity>
                </View>
            </View>
        </PanGestureHandler>
    );
}

const styles = StyleSheet.create({
    middleSection: {
        // marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    subTabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
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
    imageStyle: {
        width: width * 0.85,
        height: height * 0.5,
        marginVertical: 14,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    caption2: {
        fontSize: 12,
    },
    quote: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    viewMoreButton: {
        backgroundColor: '#FFD700',
        borderRadius: 5,
        height: 30,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    viewMoreText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomBar: {
        width: '85%',
        position: 'absolute',
        height: height * 0.1,
        bottom: -height * 0.12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
});
