import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// List of predefined interests
const allInterests = [
    "Coffee", "Workout", "Study", "Cooking", "Reading", "Gaming", "Traveling", "Music", "Photography", "Laddu", "Dancing",
    "Art", "Movies", "Sports", "Technology", "Meditation", "Yoga", "Gardening", "Food", "Writing"
];

const { width } = Dimensions.get('window');
const lightTheme = "white"; // Background color for light theme
const lightColor = "black"; // Text color for light theme

// Main Page Component
const InterestsInput = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.interestInput}
                onPress={() => navigation.navigate('Interests', { setSelectedInterests, selectedInterests })}
            >
                <TextInput
                    placeholder="Interests"
                    editable={false}
                    value={selectedInterests.join(', ')}
                    style={styles.inputBox}
                />
            </TouchableOpacity>
        </View>
    );
};

// Interests Page Component
const InterestsPage = ({ route, navigation }) => {
    const { setSelectedInterests, selectedInterests } = route.params;
    const [searchTerm, setSearchTerm] = useState('');

    const filteredInterests = allInterests.filter(interest =>
        interest.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectInterest = (interest) => {
        setSelectedInterests((prevInterests) => {
            if (prevInterests.includes(interest)) {
                return prevInterests.filter((item) => item !== interest);
            } else {
                return [...prevInterests, interest];
            }
        });
    };

    return (
        <View style={styles.interestsContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.crossIcon}>
                <Text style={styles.crossText}>✕</Text>
            </TouchableOpacity>

            <TextInput
                placeholder="Search interests"
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={styles.searchBox}
            />

            <FlatList
                data={filteredInterests}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.interestItem}
                        onPress={() => handleSelectInterest(item)}
                    >
                        <Text style={styles.interestText}>
                            {selectedInterests.includes(item) ? `✓ ${item}` : item}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        alignItems:"center",
        marginTop: 10,
        backgroundColor: lightTheme, // White background for main page
    },
  interestInput: {
        width: '100%',
        padding: 10,
        backgroundColor: lightTheme, 
        // borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    inputBox: {
        fontSize: 16,
        color: lightColor, 
        width:width*.85
    },
    interestsContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: lightTheme,
    },
    crossIcon: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    crossText: {
        fontSize: 20,
        color: lightColor,// Change close icon color to black
    },
    searchBox: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        fontSize: 16,
        color: lightColor,
    },
    interestItem: {
        paddingVertical: 10,
        borderBottomColor: lightColor, // Use orange for bottom border
        borderBottomWidth: 1,
    },
    interestText: {
        fontSize: 16,
        color: lightColor,
    },
});

export default InterestsInput;
export { InterestsPage };
