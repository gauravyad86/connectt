import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Appearance, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function AddBanking () {
    const colorScheme = Appearance.getColorScheme();  // Detect light or dark mode
    const isDarkMode = colorScheme === 'dark';  // Boolean to check if dark mode is active

    // Use state to store card details
    const [ cardNumber, setCardNumber ] = useState( '' );
    const [ expiryDate, setExpiryDate ] = useState( '' );
    const [ cvv, setCvv ] = useState( '' );
    const [ cardholderName, setCardholderName ] = useState( '' );
    const navigation = useNavigation()
    return (
        <ScrollView style={ styles.container } vertical={true}>
            <TouchableOpacity onPress={ () => {
                navigation.goBack()
            } }>
                <View style={ styles.header }> <Ionicons name="arrow-back" size={ 24 } color="white" /><Text style={ { color: "white", marginLeft: 5, fontSize: 20, fontWeight: "500" } }>Add credit or debit card</Text></View>
            </TouchableOpacity>

            {/* Card Number Input */ }
            <Text style={ { color: "white", zIndex: 100, opacity: 100, fontSize:16 } }>Card number</Text>
            <TextInput
                style={ [ styles.input, isDarkMode ? styles.darkInput : styles.lightInput ] }
                placeholder="Card Number"
                placeholderTextColor={ isDarkMode ? '#aaa' : '#555' }
                keyboardType="numeric"
                value={ cardNumber }
                onChangeText={ setCardNumber }
            />

            

            {/* Cardholder Name Input */ }
            <Text style={ { color: "white", zIndex: 100, opacity: 100,fontSize:17,marginTop:10,marginBottom:15 } }>India</Text>
            <Text style={ { color: "white", zIndex: 100, opacity: 100,fontSize:16 } }>State</Text>

            <TextInput
                style={ [ styles.input, isDarkMode ? styles.darkInput : styles.lightInput ] }
                placeholder="State"
                placeholderTextColor={ isDarkMode ? '#aaa' : '#555' }
                value={ cardholderName }
                onChangeText={ setCardholderName }
            />
            <Text style={ { color: "white", zIndex: 100, opacity: 100,fontSize:16 } }> Phone number</Text>
           <TextInput
                style={ [ styles.input, isDarkMode ? styles.darkInput : styles.lightInput ] }
                placeholder="country"
                placeholderTextColor={ isDarkMode ? '#aaa' : '#555' }
                value={ cardholderName }
                onChangeText={ setCardholderName }
            />
            <Text style={ styles.darkInput }> By Continuing, you creat a Google Payments account and agree to the Google Payments Terms of Service.</Text>
            <Text style={ styles.darkInput }> The Privacy Notice describes how your data is handled                       </Text>
            {/* Submit Button */ }
            <View
                style={ {
                    borderBottomColor: 'white',
                    borderBottomWidth: StyleSheet.hairlineWidth, marginTop:120,
                } }
            />
            <View style={ styles.purchaseDetails }>
                <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
                    <View style={ styles.tindericonBackground }>
                        <Fontisto size={ 21 } name='tinder' color="white"  ></Fontisto></View>
                    <View style={ { marginLeft: 15 } }>
                        <Text style={ styles.purchaseItem }>15 Super Likes (Tinder
                            <br />
                            Dating App: Chat & Date)
                        </Text>

                    </View>
                </View>
                <Text style={ styles.purchasePrice }>₹2,700.00</Text>
            </View>

            <TouchableOpacity style={ styles.button }>
         
                <Text style={ styles.buttonText }>Save Card</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'black',
    },
    darkBackground: {
        backgroundColor: '#000',
    },
    lightBackground: {
        backgroundColor: '#fff',
    },
    purchaseItem: {
        color: 'white',
        fontSize: 18,
    },
    purchaseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    purchasePrice: {
        color: 'white',
        fontSize: 18,
    },
    email: {
        color: '#999',
    },
    tindericonBackground: {
        width: 30,
        height: 30,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
    header: {
        fontSize: 15,
        height: "3%",
        // fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: "#111419",
        color: "white",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    darkText: {
        color: '#fff',
    },
    lightText: {
        color: '#000',
    },
    input: {
        height: 50,
        borderColor: '#7B8799',
        borderWidth: .01,
        borderRadius: 3,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
      
    },
    darkInput: {
        backgroundColor: 'black',
        color: '#fff',
    },
    lightInput: {
        backgroundColor: '#f9f9f9',
        color: '#000',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        // marginTop:
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
} );
