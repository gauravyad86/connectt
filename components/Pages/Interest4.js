import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get( 'window' );
// List of predefined interests
const allInterests = [
    "Female", "Male",
];
const lightColor="black"
// Main Page Component
const InterestsInput4 = () => {
    // Changed from single interest to an array of interests
    const [ selectedInterests, setSelectedInterests ] = useState( [] );  // State to hold selected interests
    const navigation = useNavigation();

    return (
        <View style={ styles.mainContainer }>
            {/* Interest Input Box */ }
            <TouchableOpacity
                style={ styles.interestInput }
                onPress={ () => navigation.navigate( 'Interests4', { setSelectedInterests, selectedInterests } ) }  // Pass the setter function and current interests
            >
                <TextInput
                    placeholder="Gender"
                    editable={ false } // Disable editing to redirect on click
                    // Display selected interests joined by commas
                    value={ selectedInterests.join( ', ' ) }
                    style={ styles.inputBox }
                />
            </TouchableOpacity>
        </View>
    );
};

// Interests Page Component
const InterestsPage4 = ( { route, navigation } ) => {
    const { setSelectedInterests, selectedInterests } = route.params;  // Get the setter function and current interests from route params
    const [ searchTerm, setSearchTerm ] = useState( '' );  // State to handle search input

    // Filter the list of interests based on the search term
    const filteredInterests = allInterests.filter( interest =>
        interest.toLowerCase().includes( searchTerm.toLowerCase() )
    );

    // Function to handle interest selection
    const handleSelectInterest = ( interest ) => {
        // Check if interest is already selected
        setSelectedInterests( ( prevInterests ) => {
            if ( prevInterests.includes( interest ) ) {
                // Remove the interest if it was already selected
                return prevInterests.filter( ( item ) => item !== interest );
            } else {
                // Add the interest if it was not selected
                return [ ...prevInterests, interest ];
            }
        } );
    };

    return (
        <View style={ styles.interestsContainer }>
            {/* Cross Icon to close the page */ }
            <TouchableOpacity onPress={ () => navigation.goBack() } style={ styles.crossIcon }>
                <Text style={ styles.crossText }>✕</Text>
            </TouchableOpacity>

            {/* Search Input */ }
            <TextInput
                placeholder="Search"
                value={ searchTerm }
                onChangeText={ setSearchTerm }
                style={ styles.searchBox }
            />

            {/* List of Interests */ }
            <FlatList
                data={ filteredInterests }
                keyExtractor={ ( item, index ) => index.toString() }
                renderItem={ ( { item } ) => (
                    <TouchableOpacity
                        style={ styles.interestItem }
                        onPress={ () => handleSelectInterest( item ) } // Use the updated selection logic
                    >
                        <Text style={ styles.interestText }>
                            {/* Indicate if the interest is selected */ }
                            { selectedInterests.includes( item ) ? `✓ ${ item }` : item }
                        </Text>
                    </TouchableOpacity>
                ) }
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create( {
    mainContainer: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        
    },
    interestInput: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
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
        backgroundColor: 'black',
    },
    crossIcon: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    crossText: {
        fontSize: 20,
        // color: '#e02d44',
        color: "white"
    },
    searchBox: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        fontSize: 16,
    },
    interestItem: {
        padding: 15,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    interestText: {
        fontSize: 16,
        color: "white"
    },
} );

export default InterestsInput4;
export { InterestsPage4 };