
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from 'expo-router';
// import React, { useState } from 'react';
// import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions, Linking } from 'react-native';
// const { width, height } = Dimensions.get( 'window' );

// const ShieldPage = () => {
//     //    State to track the active tab
//     const [ activeTab, setActiveTab ] = useState( 'Guide' );
//     const openWebsite = ( url ) => {
//         Linking.openURL( url );
//     };
//     const navigation = useNavigation();


//     return (
//         <ScrollView contentContainerStyle={ styles.container } vertical={ true }>
//             {/* Header Section */ }
//             <View style={ styles.header }>
//                 <TouchableOpacity style={ styles.backButton } onPress={ () => navigation.goBack() }>
//                     <Text style={ styles.backText }>X</Text>
//                 </TouchableOpacity>
//                 <Text style={ styles.headerTitle }>Safety centre</Text>
//             </View>
//             {/* Tab Navigation */ }

//             <View style={ styles.tabs }>
//                 <TouchableOpacity onPress={ () => setActiveTab( 'Guide' ) }>
//                     <Text style={ activeTab === 'Guide' ? styles.activeTab : styles.inactiveTab }>Guide</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={ () => setActiveTab( 'Tools' ) }>
//                     <Text style={ activeTab === 'Tools' ? styles.activeTab : styles.inactiveTab }>Tools</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={ () => setActiveTab( 'Resources' ) }>
//                     <Text style={ activeTab === 'Resources' ? styles.activeTab : styles.inactiveTab }>Resources</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Main Content Based on Active Tab */ }
//             { activeTab === 'Guide' && (
//                 <>
//                     <View style={ styles.section }>
//                         <Text style={ styles.sectionTitle }>Hi Boss</Text>
//                         <Text style={ styles.subtitle }>Here’s what you need to know about safety</Text>
//                     </View>

//                     {/* Harassment Section */ }
//                     <View style={ styles.section }>
//                         <Text style={ styles.sectionHeading }>Harassment</Text>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>How To Deal</Text>
//                             <Text style={ styles.cardSubtitle }>If you see something, say something.</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>7 Times It’s Perfectly Acceptable To Ghost Someone</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Safety Section */ }
//                     <View style={ styles.section }>
//                         <Text style={ styles.sectionHeading }>Safety</Text>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>The Basics</Text>
//                             <Text style={ styles.cardSubtitle }>What you need to know to be safer on Tinder and IRL—all in one place.</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={ styles.quizCard }>
//                             <Text style={ styles.quizText }>Quiz</Text>
//                             <Text style={ styles.quizSubtitle }>Online Dating Safety Quiz</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={ styles.quizCard }>
//                             <Text style={ styles.quizText }>Quiz</Text>
//                             <Text style={ styles.quizSubtitle }>Tinder Community Guidelines Quiz</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Reporting Section */ }
//                     <View style={ styles.section }>
//                         <Text style={ styles.sectionHeading }>Reporting</Text>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>What to Report</Text>
//                             <Text style={ styles.cardSubtitle }>When you should report someone and when you shouldn't.</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>How To Report Someone</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>What Happens After I Report?</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={ styles.section }>
//                         <Text style={ styles.sectionHeading }>Consent</Text>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>Consent 101 </Text>
//                             <Text style={ styles.cardSubtitle }>It's a necessary part of any conncetion and we are here to give you a crash course</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={ styles.section }>
//                         <Text style={ styles.sectionHeading }>Travel</Text>
//                         <TouchableOpacity style={ styles.card }>
//                             <Text style={ styles.cardTitle }>The Do's and Don'ts</Text>
//                             <Text style={ styles.cardSubtitle }>In order to have the trip of a lifetime,there are a few things you need to know</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </>
//             ) }

//             { activeTab === 'Tools' && (
//                 <View style={ styles.section }>
//                     <Text style={ styles.sectionHeading }>Tools Section</Text>
//                     <Text style={ styles.subtitle }>This is the content for the Tools section.</Text>
//                     {/* Add the content for the Tools tab here */ }
//                 </View>
//             ) }

//             { activeTab === 'Resources' && ( <>
//                 <View style={ styles.section }>
//                     <Text style={ styles.heading }>One Future Collective</Text>
//                     <Text style={ styles.subtitle }><Ionicons name="call" size={ 15 } color="white" />   FemJustice Support Helpline</Text>
//                     <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://www.onefuturecollective.org/' ) }>
//                         <Text style={ styles.buttonText }>Visit website</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={ styles.section }>
//                     <Text style={ styles.heading }>Umang LBT Support Group</Text>
//                     <Text style={ styles.subtitle }><Ionicons name="call" size={ 15 } color="white" />  Umang Support Group helpline</Text>
//                     <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://humsafar.org/umang/' ) }>
//                         <Text style={ styles.buttonText }>Visit website</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={ styles.section }>
//                     <Text style={ styles.heading }>Pink Legal</Text>
//                     <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://humsafar.org/' ) }>
//                         <Text style={ styles.buttonText }>Visit website</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={ styles.section }>
//                     <Text style={ styles.heading }>The Humsafar Trust</Text>
//                     <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'http://ncw.nic.in/' ) }>
//                         <Text style={ styles.buttonText }>Visit website</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={ styles.section }>
//                     <Text style={ styles.heading }>National Commission for Women</Text>
//                     <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://example.com' ) }>
//                         <Text style={ styles.buttonText }>Visit website</Text>
//                     </TouchableOpacity>
//                 </View>
//             </>
//             ) }
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create( {
//     container: {
//         padding: 16,
//         backgroundColor: '#111419',
//         flexGrow: 1,
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     backButton: {
//         marginRight: 16,
//     },
//     backText: {
//         fontSize: 18,
//         color: '#fff',
//     },
//     headerTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     tabs: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginBottom: 16,
//     },
//     activeTab: {
//         fontSize: 16,
//         color: '#fff',
//         fontWeight: 'bold',
//     },
//     inactiveTab: {
//         fontSize: 16,
//         color: '#888',
//     },
//     section: {
//         marginBottom: 24,
//     },

//     sectionTitle: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: '#bbb',
//         marginBottom: 16,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     sectionHeading: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 12,
//     },
//     card: {
//         backgroundColor: "#21252e",
//         padding: 16,
//         borderRadius: 8,
//         marginBottom: 12,
//     },
//     cardTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     cardSubtitle: {
//         fontSize: 14,
//         color: '#bbb',
//         marginTop: 8,
//     },
//     quizCard: {
//         backgroundColor: '#21252e',
//         padding: 16,
//         borderRadius: 8,
//         marginBottom: 12,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     quizText: {
//         backgroundColor: '#000',
//         color: '#fff',
//         fontWeight: 'bold',
//         padding: 6,
//         marginRight: 12,
//         borderRadius: 4,
//     },
//     quizSubtitle: {
//         fontSize: 14,
//         color: '#bbb',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 24,
//         textAlign: 'center',
//     },
//     section: {
//         marginBottom: 24,
//         borderBottomWidth: 1,
//         borderBottomColor: '#333',
//         paddingBottom: 16,
//     },
//     heading: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     subtitle: {
//         fontSize: 14,
//         color: '#b3b3b3',
//         marginBottom: 8,
//     },
//     button: {
//         backgroundColor: 'black',
//         height: height * .05,
//         borderRadius: 20,
//         marginTop: 8,
//         width: width * .4, justifyContent: "center", alignItems: "center",
//         borderWidth: 1,
//         borderColor: "#555962"
//     },
//     buttonText: {
//         color: '#fff',
//         textAlign: 'center',
//     },

// } );

// export default ShieldPage;
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions, Linking } from 'react-native';

const { width, height } = Dimensions.get( 'window' );

// Context colors for light mode
const bgColor = "#FFA500";
const lightTheme = "#dee0db";
const lightColor = "black";

const ShieldPage = () => {
    // State to track the active tab
    const [ activeTab, setActiveTab ] = useState( 'Guide' );
    const openWebsite = ( url ) => {
        Linking.openURL( url );
    };
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={ styles.container } vertical={ true }>
            {/* Header Section */ }
            <View style={ styles.header }>
                <TouchableOpacity style={ styles.backButton } onPress={ () => navigation.goBack() }>
                    <Text style={ styles.backText }>X</Text>
                </TouchableOpacity>
                <Text style={ styles.headerTitle }>Safety Centre</Text>
            </View>

            {/* Tab Navigation */ }
            <View style={ styles.tabs }>
                <TouchableOpacity onPress={ () => setActiveTab( 'Guide' ) }>
                    <Text style={ activeTab === 'Guide' ? styles.activeTab : styles.inactiveTab }>Guide</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => setActiveTab( 'Tools' ) }>
                    <Text style={ activeTab === 'Tools' ? styles.activeTab : styles.inactiveTab }>Tools</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => setActiveTab( 'Resources' ) }>
                    <Text style={ activeTab === 'Resources' ? styles.activeTab : styles.inactiveTab }>Resources</Text>
                </TouchableOpacity>
            </View>

            {/* Main Content Based on Active Tab */ }
            { activeTab === 'Guide' && (
                <>
                    <View style={ styles.section }>
                        <Text style={ styles.sectionTitle }>Hi Boss</Text>
                        <Text style={ styles.subtitle }>Here’s what you need to know about safety</Text>
                    </View>

                    {/* Harassment Section */ }
                    <View style={ styles.section }>
                        <Text style={ styles.sectionHeading }>Harassment</Text>
                        <TouchableOpacity style={ styles.card }>
                            <Text style={ styles.cardTitle }>How To Deal</Text>
                            <Text style={ styles.cardSubtitle }>If you see something, say something.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.card }>
                            <Text style={ styles.cardTitle }>7 Times It’s Perfectly Acceptable To Ghost Someone</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Safety Section */ }
                    <View style={ styles.section }>
                        <Text style={ styles.sectionHeading }>Safety</Text>
                        <TouchableOpacity style={ styles.card }>
                            <Text style={ styles.cardTitle }>The Basics</Text>
                            <Text style={ styles.cardSubtitle }>What you need to know to be safer on Tinder and IRL—all in one place.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.quizCard }>
                            <Text style={ styles.quizText }>Quiz</Text>
                            <Text style={ styles.quizSubtitle }>Online Dating Safety Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.quizCard }>
                            <Text style={ styles.quizText }>Quiz</Text>
                            <Text style={ styles.quizSubtitle }>Tinder Community Guidelines Quiz</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Reporting Section */ }
                    <View style={ styles.section }>
                        <Text style={ styles.sectionHeading }>Reporting</Text>
                        <TouchableOpacity style={ styles.card }>
                            <Text style={ styles.cardTitle }>What to Report</Text>
                            <Text style={ styles.cardSubtitle }>When you should report someone and when you shouldn't.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.card }>
                            <Text style={ styles.cardTitle }>How To Report Someone</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.card }>
                            <Text style={ styles.cardTitle }>What Happens After I Report?</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) }

            { activeTab === 'Tools' && (
                <View style={ styles.section }>
                    <Text style={ styles.sectionHeading }>Tools Section</Text>
                    <Text style={ styles.subtitle }>This is the content for the Tools section.</Text>
                </View>
            ) }

            { activeTab === 'Resources' && (
                <>
                    <View style={ styles.section }>
                        <Text style={ styles.heading }>One Future Collective</Text>
                        <Text style={ styles.subtitle }><Ionicons name="call" size={ 15 } color={ lightColor } />FemJustice Support Helpline</Text>
                        <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://www.onefuturecollective.org/' ) }>
                            <Text style={ styles.buttonText }>Visit website</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={ {
                            borderBottomColor: { lightColor },
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        } }
                    />
                    <View style={ styles.section }>
                        <Text style={ styles.heading }>One Future Collective</Text>
                        <Text style={ styles.subtitle }><Ionicons name="call" size={ 15 } color={ lightColor } />FemJustice Support Helpline</Text>
                        <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://humsafar.org/umang/' ) }>
                            <Text style={ styles.buttonText }>Visit website</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={ {
                            borderBottomColor: { lightColor },
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        } }
                    />
                    <View style={ styles.section }>
                        <Text style={ styles.heading }>One Future Collective</Text>
                        <Text style={ styles.subtitle }><Ionicons name="call" size={ 15 } color={ lightColor } />FemJustice Support Helpline</Text>
                        <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://pinklegal.in/legal-services.html' ) }>
                            <Text style={ styles.buttonText }>Visit website</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={ {
                            borderBottomColor: { lightColor },
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        } }
                    />
                    <View style={ styles.section }>
                        <Text style={ styles.heading }>One Future Collective</Text>
                        <Text style={ styles.subtitle }><Ionicons name="call" size={ 15 } color={ lightColor } />FemJustice Support Helpline</Text>
                        <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'https://humsafar.org/' ) }>
                            <Text style={ styles.buttonText }>Visit website</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={ {
                            borderBottomColor: { lightColor },
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        } }
                    />
                    <View style={ styles.section }>
                        <Text style={ styles.heading }>One Future Collective</Text>
                        <Text style={ styles.subtitle }><Ionicons name="call" size={ 15 } color={ lightColor } />FemJustice Support Helpline</Text>
                        <TouchableOpacity style={ styles.button } onPress={ () => openWebsite( 'http://ncw.nic.in/' ) }>
                            <Text style={ styles.buttonText }>Visit website</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) }
        </ScrollView>
    );
};

const styles = StyleSheet.create( {
    container: {
        padding: 16,
        backgroundColor: "white",
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backButton: {
        marginRight: 16,
    },
    backText: {
        fontSize: 18,
        color: lightColor,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: lightColor,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    activeTab: {
        fontSize: 16,
        color: lightColor,
        fontWeight: 'bold',
    },
    inactiveTab: {
        fontSize: 16,
        color: '#888',
    },
    section: {
        marginBottom: 10,
        marginTop:10,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: lightColor,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    sectionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: lightColor,
        marginBottom: 12,
    },
    card: {
        backgroundColor: lightTheme,
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: lightColor,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#555',
        marginTop: 8,
    },
    quizCard: {
        // backgroundColor: bgColor,
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    quizText: {
        backgroundColor: lightColor,
        color: lightTheme,
        fontWeight: 'bold',
        padding: 6,
        marginRight: 12,
        borderRadius: 4,
    },
    quizSubtitle: {
        fontSize: 14,
        color: '#555',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: lightColor,
    },
    button: {
        backgroundColor: lightTheme,
        height: height * 0.05,
        borderRadius: 20,
        marginTop: 8,
        width: width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#555962",
    },
    buttonText: {
        color: lightColor,
        textAlign: 'center',
    },
} );

export default ShieldPage;
