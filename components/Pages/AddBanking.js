import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Appearance, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const lightTheme = "white"; // Background color for light theme
const lightColor = "black"; // Text color for light theme

export default function AddBanking() {
    const navigation = useNavigation();

    // Use state to store card details
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
                <Ionicons name="arrow-back" size={24} color={lightColor} />
                <Text style={{ color: lightColor, marginLeft: 5, fontSize: 20, fontWeight: "500" }}>
                    Add credit or debit card
                </Text>
            </TouchableOpacity>

            {/* Card Number Input */}
            <Text style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 16 }}>
                Card number
            </Text>
            <TextInput
                style={[styles.input, { backgroundColor: lightTheme, color: lightColor }]}
                placeholder="Card Number"
                placeholderTextColor={lightColor}
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
            />

            {/* State Input */}
            <Text style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 17, marginTop: 10, marginBottom: 15 }}>
                India
            </Text>
            <Text style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 16 }}>State</Text>
            <TextInput
                style={[styles.input, { backgroundColor: lightTheme, color: lightColor }]}
                placeholder="State"
                placeholderTextColor={lightColor}
                value={cardholderName}
                onChangeText={setCardholderName}
            />
            <Text style={{ color: lightColor, zIndex: 100, opacity: 100, fontSize: 16 }}>Phone number</Text>
            <TextInput
                style={[styles.input, { backgroundColor: lightTheme, color: lightColor }]}
                placeholder="Phone Number"
                placeholderTextColor={lightColor}
                value={cardholderName}
                onChangeText={setCardholderName}
            />

            <Text style={{ color: lightColor }}>
                By continuing, you create a Google Payments account and agree to the Google Payments Terms of Service.
            </Text>
            <Text style={{ color: lightColor }}>
                The Privacy Notice describes how your data is handled.
            </Text>

            {/* Divider */}
            <View style={{ borderBottomColor: lightColor, borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 120 }} />

            {/* Purchase Details */}
            <View style={styles.purchaseDetails}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.tindericonBackground}>
                        <Fontisto size={21} name='tinder' color={lightColor} />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.purchaseItem}>
                            15 Super Likes (Tinder{'\n'}Dating App: Chat & Date)
                        </Text>
                    </View>
                </View>
                <Text style={styles.purchasePrice}>₹2,700.00</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Card</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: lightTheme, // Set background color for light mode
    },
    header: {
        fontSize: 15,
        height: height * .07,
        marginBottom: 20,
        backgroundColor: "#f2f2f2", // Light background for header
        color: lightColor,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    purchaseItem: {
        color: lightColor,
        fontSize: 18,
    },
    purchaseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 40,
    },
    purchasePrice: {
        color: lightColor,
        fontSize: 18,
    },
    tindericonBackground: {
        width: 30,
        height: 30,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: lightColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
