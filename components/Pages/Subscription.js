
// import React, { useState, useRef, useContext } from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
// import { useNavigation } from 'expo-router';
// import { MyContext } from '../MyContext';

// const { width } = Dimensions.get( 'window' );

// const Subscription = () => {
//     const navigation = useNavigation();
//     const [ selectedPlanColor, setSelectedPlanColor ] = useState( '#FD297B' ); // Default color
//     const scrollViewRef = useRef( null );

//     const handleScroll = ( event ) => {
//         const offsetX = event.nativeEvent.contentOffset.x;

//         // Determine which box is in view based on the offset
//         if ( offsetX < width * 0.8 ) {
//             setSelectedPlanColor( '#FD297B' ); // Red
//         } else if ( offsetX < width * 1.6 ) {
//             setSelectedPlanColor( '#ecb757' ); // Yellow
//         } else {
//             setSelectedPlanColor( '#252523' ); // Platinum
//         }
//     };
//     const {  bgColor,lightColor} = useContext( MyContext )
//     return (
//         <View style={ styles.pageWrapper }>
//             <ScrollView
//                 contentContainerStyle={ styles.scrollContainer }
//                 style={ styles.upperScrollView }
//             >
//                 {/* Header */ }
//                 <TouchableOpacity style={ styles.closeButton } onPress={ () => navigation.goBack() }>
//                     <Text style={ styles.closeText }>❌</Text>
//                 </TouchableOpacity>
//                 <View style={ styles.topBar }>
//                     <Text style={ [styles.pageTitle ,{color:lightColor}]}>My Subscription</Text>
//                 </View>

//                 {/* Scrollable Card Section */ }
//                 <ScrollView
//                     horizontal
//                     showsHorizontalScrollIndicator={ false }
//                     style={ styles.cardContainer }
//                     onScroll={ handleScroll }
//                     scrollEventThrottle={ 16 }
//                     ref={ scrollViewRef }
//                 >    <TouchableOpacity style={ styles.box2 }>
//                         <Fontisto size={ 25 } name='tinder' color="#ecb757" style={ { marginRight: 8 } } />
//                         <Text style={ styles.optionTitle }>Connect</Text>
//                         <Text style={ styles.planLabelGOLD }>GOLD</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={ styles.box1 }>
//                         <Fontisto name="tinder" size={ 25 } color="#FD297B" />
//                         <Text style={ styles.optionTitle }> Connect</Text>
//                         <AntDesign name="plus" size={ 20 } color="#FD297B" />
//                     </TouchableOpacity>
                   
//                     <TouchableOpacity style={ styles.box3 }>
//                         <Fontisto size={ 25 } name='tinder' color="#252523" style={ { marginRight: 7 } } />
//                         <Text style={ styles.optionTitle }>Connect</Text>
//                         <Text style={ styles.planLabelPlatinum }>Platinum</Text>
//                     </TouchableOpacity>
//                 </ScrollView>

//                 {/* Upgrade Sections */ }
//                 { [ "Upgrade Your Likes", "Enhance your experience", "Premium Discovery" ].map( ( title, index ) => (
//                     <View key={ index } style={ styles.upgradeContainer }>
//                         <Text style={ [styles.upgradeTitle, {color:lightColor}]}>{ title }</Text>
//                         <View style={ styles.upgradeSection }>
//                             { renderBenefits( title ) }
//                         </View>
//                     </View>
//                 ) ) }
//             </ScrollView>

//             {/* Fixed Pricing Section */ }
//             <TouchableOpacity
//                 style={ [ styles.priceButton, { backgroundColor: selectedPlanColor } ] }
//                 onPress={ () => {
//                     if ( selectedPlanColor === '#FD297B' ) {
//                         navigation.navigate( "redsubscription" );
//                     } else if ( selectedPlanColor === '#ecb757' ) {
//                         navigation.navigate( "seewholikeyoumore" );
//                     } else if ( selectedPlanColor === '#252523' ) {
//                         navigation.navigate( "platinumsub" );
//                     }
//                 } }
//             >
//                 <Text style={ styles.priceText }>STARTING AT ₹99.00</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const renderBenefits = ( title ) => {
//     const benefits = {
//         "Upgrade Your Likes": [
//             { label: "Unlimited Likes", unlocked: true },
//             { label: "See Who Likes You", unlocked: false },
//             { label: "Priority Likes", unlocked: false, description: "Your Likes will be seen sooner" },
//         ],
//         "Enhance your experience": [
//             { label: "Unlimited Rewinds", unlocked: true },
//             { label: "1 Free Boost per month", unlocked: false },
//             { label: "3 Free Super Likes per week", unlocked: false },
//             { label: "Message Before Matching", unlocked: false, description: "Add a note to your Super Likes" },
//         ],
//         "Premium Discovery": [
//             { label: "Unlimited Passport™ Mode", unlocked: true, description: "Match and chat with people anywhere in the world" },
//             { label: "Top Picks", unlocked: false, description: "Browse through a daily curated selection of profiles" },
//         ],
//         "Take Control": [
//             { label: "Control Your Profile", unlocked: true, description: "Only show what you want them to show" },
//             { label: "Control Who Sees You", unlocked: false, description: "Manage who you're seen by" },
//             { label: "Control Who See You", unlocked: false, description: "Choose the type of people you want to connect with" },
//             { label: "Hide Ads", unlocked: false, }
//         ],
//     };
//     const {  bgColor,lightColor} = useContext( MyContext )
//     return benefits[ title ].map( ( item, index ) => (
//         <View key={ index } style={ styles.benefitItem }>
//             { item.unlocked ? (
//                 <Entypo name="check" size={ 24 } color="red" />
//             ) : (
//                 <Entypo name="lock" size={ 18 } color={lightColor} />
//             ) }
//             <View>
//                 <Text style={ styles.benefitLabel }>{ item.label }</Text>

//                 {item.description&&<Text style={ styles.benefitLabel2 }>{ item.description }</Text> }
//             </View>
//         </View>
//     ) );
// };

// const styles = StyleSheet.create( {
//     pageWrapper: {
//         flex: 1,
//         // backgroundColor: '#111419',
//     },
//     scrollContainer: {
//         paddingBottom: 80, // Space for the button
//     },
//     closeButton: {
//         position: 'absolute',
//         top: 10,
//         left: 10,
//         zIndex: 1,
//     },
//     closeText: {
//         fontSize: 18,
//         color: 'white',
//     },
//     topBar: {
//         // backgroundColor: '#1B1B1B',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 10,
//     },
//     pageTitle: {
//         color: '#FFFFFF',
//         fontSize: 21,
//         fontWeight: '500',
//     },
//     optionTitle: {
//         fontSize: 22,
//         fontWeight: '700',
//         color: "black",
//         marginRight: 5,
//     },
//     box1: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         height: 90,
//         width: width * 0.95,
//         borderWidth: 2,
//         marginRight: 5,
//         borderColor: "#FD297B",
//         backgroundColor: "#E9C0DD",
//         borderRadius: 5,
       
//     },
//     box2: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         height: 90,
//         width: width * 0.95,
//         borderWidth: 2,
//         marginRight: 5,
//         borderColor: "#ecb757",
//         backgroundColor: "#EEF2B4",
//         borderRadius: 5,
//         marginLeft: 15,
//     },
//     box3: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         height: 90,
//         width: width * 0.95,
//         borderWidth: 2,
//         marginRight: 5,
//         borderColor: "white",
//         backgroundColor: "#BDECFF",
//         borderRadius: 5,
//     },
//     cardContainer: {
//         marginTop: 10,
//         flexDirection: "row",
//     },
//     upgradeContainer: {
//         alignItems: 'center',
//         marginBottom: 15,
//     },
//     upgradeSection: {
//         // backgroundColor: '#111419',
//         borderWidth: 1,
//         borderRadius: 8,
//         borderColor: "#7B8799",
//         justifyContent: "center",
//         width: "90%",
//         padding: 10,
//     },
//     upgradeTitle: {
//         // color: 'white',
//         fontSize: 15,
//         fontWeight: '400',
//         marginVertical: 10,
//     },
//     benefitItem: {
//         marginVertical: 5,
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     benefitLabel: {
//         // color: '#BEB9B9',
//         fontSize: 17,
//         fontWeight: "500",
//         marginLeft: 9,
//     },
//     benefitLabel2: {
//         // color: '#FFFFFF',
//         fontSize: 12,
//         marginTop: 5,
//         marginLeft: 15,
//     },
//     priceButton: {
//         height: 50,
//         width: "100%",
//         borderRadius: 0,
//         alignItems: 'center',
//         justifyContent: "center",
//         position: "absolute",
//         bottom: 0,
//     },
//     priceText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// } );

// export default Subscription;
import React, { useState, useRef, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { MyContext } from '../MyContext';
import connectLogo from "@/assets/images/connectremovebg.png"

const { width } = Dimensions.get( 'window' );

const Subscription = () => {
        const {  bgColor,lightColor} = useContext( MyContext )
    const navigation = useNavigation();
    const [ selectedPlanColor, setSelectedPlanColor ] = useState( '#FD297B' ); // Default color
    const scrollViewRef = useRef( null );

    const handleScroll = ( event ) => {
        const offsetX = event.nativeEvent.contentOffset.x;

        // Determine which box is in view based on the offset
        if ( offsetX < width * 0.8 ) {
            setSelectedPlanColor( '#FD297B' ); // Red
        } else if ( offsetX < width * 1.6 ) {
            setSelectedPlanColor( '#ecb757' ); // Yellow
        } else {
            setSelectedPlanColor( '#252523' ); // Platinum
        }
    };

    return (
        <View style={ styles.pageWrapper }>
            <ScrollView
                contentContainerStyle={ styles.scrollContainer }
                style={ styles.upperScrollView }
            >
                {/* Header */ }
                <TouchableOpacity style={ styles.closeButton } onPress={ () => navigation.goBack() }>
                    <Text style={ styles.closeText }>❌</Text>
                </TouchableOpacity>
                <View style={ styles.topBar }>
                    <Text style={ [styles.pageTitle ,{color:lightColor}]}>My Subscription</Text>
                </View>

                {/* Scrollable Card Section */ }
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                    style={ styles.cardContainer }
                    onScroll={ handleScroll }
                    scrollEventThrottle={ 16 }
                    ref={ scrollViewRef }
                >
                    <TouchableOpacity style={ styles.box1 }>
                        <Fontisto name="tinder" size={ 25 } color="#FD297B" />
                        <Text style={ styles.optionTitle }>Connect</Text>
                        <AntDesign name="plus" size={ 20 } color="#FD297B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.box2 }>
                        <Fontisto size={ 25 } name='tinder' color="#ecb757" style={ { marginRight: 8 } } />
                        <Text style={ styles.optionTitle }>Connect</Text>
                        <Text style={ styles.planLabelGOLD }>GOLD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.box3 }>
                        <Fontisto size={ 18 } name='tinder' color="#252523" style={ { marginRight: 7 } } />
                        <Text style={ styles.optionTitle }>Connect</Text>
                        <Text style={ styles.planLabelPlatinum }>Platinum</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Upgrade Sections */ }
                { [ "Upgrade Your Likes", "Enhance your experience", "Premium Discovery" ].map( ( title, index ) => (
                    <View key={ index } style={ styles.upgradeContainer }>
                        <Text style={ styles.upgradeTitle }>{ title }</Text>
                        <View style={ styles.upgradeSection }>
                            { renderBenefits( title ) }
                        </View>
                    </View>
                ) ) }
            </ScrollView>

            {/* Fixed Pricing Section */ }
            <TouchableOpacity
                style={ [ styles.priceButton, { backgroundColor: selectedPlanColor } ] }
                onPress={ () => {
                    if ( selectedPlanColor === '#FD297B' ) {
                        navigation.navigate( "redsubscription" );
                    } else if ( selectedPlanColor === '#ecb757' ) {
                        navigation.navigate( "seewholikeyoumore" );
                    } else if ( selectedPlanColor === '#252523' ) {
                        navigation.navigate( "platinumsub" );
                    }
                } }
            >
                <Text style={ styles.priceText }>STARTING AT ₹99.00</Text>
            </TouchableOpacity>
        </View>
    );
};

const renderBenefits = ( title ) => {
    const benefits = {
        "Upgrade Your Likes": [
            { label: "Unlimited Likes", unlocked: true },
            { label: "See Who Likes You", unlocked: false },
            { label: "Priority Likes", unlocked: false, description: "Your Likes will be seen sooner" },
        ],
        "Enhance your experience": [
            { label: "Unlimited Rewinds", unlocked: true },
            { label: "1 Free Boost per month", unlocked: false },
            { label: "3 Free Super Likes per week", unlocked: false },
            { label: "Message Before Matching", unlocked: false, description: "Add a note to your Super Likes" },
        ],
        "Premium Discovery": [
            { label: "Unlimited Passport™ Mode", unlocked: true, description: "Match and chat with people anywhere in the world" },
            { label: "Top Picks", unlocked: false, description: "Browse through a daily curated selection of profiles" },
        ],
        "Take Control": [
            { label: "Control Your Profile", unlocked: true, description: "Only show what you want them to show" },
            { label: "Control Who Sees You", unlocked: false, description: "Manage who you're seen by" },
            { label: "Control Who See You", unlocked: false, description: "Choose the type of people you want to connect with" },
            { label: "Hide Ads", unlocked: false, }
        ],
    };

    return benefits[ title ].map( ( item, index ) => (
        <View key={ index } style={ styles.benefitItem }>
            { item.unlocked ? (
                <Entypo name="check" size={ 24 } color="red" />
            ) : (
                <Entypo name="lock" size={ 18 } color="white" />
            ) }
            <View>
                <Text style={ styles.benefitLabel }>{ item.label }</Text>
                { item.description && <Text style={ styles.benefitLabel2 }>{ item.description }</Text> }
            </View>
        </View>
    ) );
};

const styles = StyleSheet.create( {
    pageWrapper: {
        flex: 1,
        // backgroundColor: '#111419',
    },
    scrollContainer: {
        paddingBottom: 80, // Space for the button
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    closeText: {
        fontSize: 18,
        color: 'white',
    },
    topBar: {
        // backgroundColor: '#1B1B1B',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    pageTitle: {
        color: '#FFFFFF',
        fontSize: 21,
        fontWeight: '500',
    },
    optionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: "black",
        marginRight: 5,
    },
    box1: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        width: width * 0.95,
        borderWidth: 2,
        marginRight: 5,
        borderColor: "#FD297B",
        backgroundColor: "#E9C0DD",
        borderRadius: 5,
        marginLeft: 15,
    },
    box2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        width: width * 0.95,
        borderWidth: 2,
        marginRight: 5,
        borderColor: "#ecb757",
        backgroundColor: "#EEF2B4",
        borderRadius: 5,
        // marginLeft: 15,
    },
    box3: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        width: width * 0.95,
        borderWidth: 2,
        marginRight: 5,
        borderColor: "white",
        backgroundColor: "#BDECFF",
        borderRadius: 5,
    },
    cardContainer: {
        marginTop: 10,
        flexDirection: "row",
    },
    upgradeContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    upgradeSection: {
        // backgroundColor: '#111419',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#7B8799",
        justifyContent: "center",
        width: "90%",
        padding: 10,
    },
    upgradeTitle: {
        // color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginVertical: 10,
    },
    benefitItem: {
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    benefitLabel: {
        // color: '#BEB9B9',
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 9,
    },
    benefitLabel2: {
        // color: '#FFFFFF',
        fontSize: 12,
        marginTop: 5,
        marginLeft: 15,
    },
    priceButton: {
        height: 50,
        width: "100%",
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
    },
    priceText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
} );

export default Subscription;