import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

// ProfileDetails component now expects currentData as a prop
export default function ProfileDetails ( { currentData } ) {
    const handleShareProfile = () => {
        Alert.alert( "Share Profile", `Share ${ currentData.name }'s profile` );
    };

    const handleReportProfile = () => {
        Alert.alert( "Report Profile", `Report ${ currentData.name }'s profile` );
    };

    const handleBlockProfile = () => {
        Alert.alert( "Block Profile", `Block ${ currentData.name }'s profile` );
    };
    return (
        <ScrollView style={ styles.container }>
            <View style={ styles.section }>
                <Text style={ styles.sectionTitle }>Additional Info</Text>
                <View style={ styles.row }>
                    <Ionicons name="location-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>State</Text>
                    <Text style={ styles.value }>{ currentData.state }</Text>
                </View>
                <View style={ styles.row }>
                    <Ionicons name="business-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>District</Text>
                    <Text style={ styles.value }>{ currentData.district }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="map-marker-radius" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Location Preference</Text>
                    <Text style={ styles.value }>{ currentData.locationPreference }</Text>
                </View>
                <View style={ styles.row }>
                    <Ionicons name="male-female-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Gender</Text>
                    <Text style={ styles.value }>{ currentData.gender }</Text>
                </View>
                <View style={ styles.row }>
                    <Ionicons name="calendar-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Age Range</Text>
                    <Text style={ styles.value }>{ currentData.ageRange }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="account-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Outside Age Range</Text>
                    <Text style={ styles.value }>{ currentData.outsideAgeRange }</Text>
                </View>
                <View style={ styles.row }>
                    <Ionicons name="school-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Occupation</Text>
                    <Text style={ styles.value }>{ currentData.occupation }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="account-multiple-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Caste</Text>
                    <Text style={ styles.value }>{ currentData.caste }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="cross" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Religion</Text>
                    <Text style={ styles.value }>{ currentData.religion }</Text>
                </View>
            </View>
            {/* Basics Section */ }
            <View style={ styles.section }>
                <Text style={ styles.sectionTitle }>Basics</Text>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="chat-processing-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Communication Style</Text>
                    <Text style={ styles.value }>{ currentData.communication }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="heart-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Love Style</Text>
                    <Text style={ styles.value }>{ currentData.loveStyle }</Text>
                </View>
                <View style={ styles.row }>
                    <Ionicons name="school-outline" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Education</Text>
                    <Text style={ styles.value }>{ currentData.education }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="zodiac-leo" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Zodiac</Text>
                    <Text style={ styles.value }>{ currentData.zodiac }</Text>
                </View>
            </View>

            {/* Lifestyle Section */ }
            <View style={ styles.section }>
                <Text style={ styles.sectionTitle }>Lifestyle</Text>
                <View style={ styles.row }>
                    <FontAwesome name="glass" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Drinking</Text>
                    <Text style={ styles.value }>{ currentData.drinking }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="smoking-off" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Smoking</Text>
                    <Text style={ styles.value }>{ currentData.smoking }</Text>
                </View>
                <View style={ styles.row }>
                    <MaterialCommunityIcons name="dumbbell" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Workout</Text>
                    <Text style={ styles.value }>{ currentData.workout }</Text>
                </View>
                <View style={ styles.row }>
                    <Entypo name="emoji-happy" size={ 20 } color="black" style={ styles.icon } />
                    <Text style={ styles.label }>Pets</Text>
                    <Text style={ styles.value }>{ currentData.pets }</Text>
                </View>
            </View>
            <View style={ styles.actionButtons }>
                <TouchableOpacity style={ styles.actionButton } onPress={ handleShareProfile }>
                    <Text style={ styles.actionButtonText }>Share { currentData.name }'s Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.actionButton } onPress={ handleReportProfile }>
                    <Text style={ styles.actionButtonText }>Report { currentData.name }'s Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.actionButton } onPress={ handleBlockProfile }>
                    <Text style={ styles.actionButtonText }>Block { currentData.name }'s Profile</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginTop: 10,
        paddingBottom:20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    actionButtons: {
        marginTop: 20,
    },
    actionButton: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    actionButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    section: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    label: {
        flex: 1,
        fontSize: 14,
        color: 'black',
    },
    value: {
        fontSize: 14,
        color: 'black',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    footerButton: {
        width: 50,
        height: 50,
        backgroundColor: '#ddd',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inviteSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    inviteText: {
        color: '#333',
        flex: 1,
    },
    inviteButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
    },
    inviteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
} );
