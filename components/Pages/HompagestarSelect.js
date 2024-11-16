import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
import { Entypo, FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const bgColor="#FFA500";
const lightTheme="white";  
const lightColor = "black"; // 
export default function HompagestarSelect() {
    const navigation = useNavigation();  // Initialize navigation

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container0} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    {/* Cross Icon */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={styles.crossText}>Google Play</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Entypo name="cross" size={24} color={lightColor} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#C4C5B3',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        }}
                    />
                    <View style={styles.purchaseDetails}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.tindericonBackground}>
                                <Fontisto size={18} name='tinder' color={lightColor} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.purchaseItem}>15 Super Likes</Text>
                                <Text style={styles.email}>priyankaiitd22@gmail.com</Text>
                            </View>
                        </View>
                        <Text style={styles.purchasePrice}>₹2,700.00</Text>
                    </View>
                    <Text style={styles.description}>Add a payment method to your Google Account to complete your purchase. Your payment information is only visible to Google</Text>
                    {/* Payment Options */}
                    <View style={styles.paymentOptions}>
                        <TouchableOpacity style={[styles.paymentButton, { flexDirection: "row" }]}>
                            <FontAwesome6 name="amazon-pay" size={24} color={lightColor}/>
                            <Text style={{ color: lightColor, marginLeft: 10 }}>Pay with UPI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.paymentButton, { flexDirection: "row" }]} onPress={() => navigation.navigate("addcarddetails")}>
                            <MaterialIcons name="payment" size={24} color={lightColor} />
                            <Text style={{ color: lightColor, marginLeft: 10 }}>Add credit or debit card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.paymentButton, { flexDirection: "row" }]} onPress={() => navigation.navigate("bank")}>
                            <FontAwesome name="bank" size={24} color={lightColor} />
                            <Text style={{ color: lightColor, marginLeft: 10 }}>Add Netbanking</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.paymentButton, { flexDirection: "row" }]}>
                            <MaterialIcons name="redeem" size={24} color={lightColor} />
                            <Text style={{ color: lightColor, marginLeft: 10 }}>Redeem code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.paymentButton, { flexDirection: "row" }]}>
                            <Ionicons name="people-sharp" size={24}color={lightColor} />
                            <Text style={{ color: lightColor, marginLeft: 10 }}>Ask someone else to pay{'\n'}</Text>
                            <Text style={{ color: "red", marginLeft: 35 }}>Unavailable for purchases over ₹1000.00</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white', // Light mode background
    },
    container0: {
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 10
    },
    crossText: {
        fontSize: 17,
        color: 'black', // Change text color to black
    },
    description: {
        color: '#333', // Dark gray for better readability
        marginVertical: 10,
        fontSize: 17
    },
    tindericonBackground: {
        width: 30,
        height: 30,
        backgroundColor: "#ff3a70",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    purchaseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    purchaseItem: {
        color: 'black', // Change to black
        fontSize: 22,
        fontWeight: "500"
    },
    purchasePrice: {
        color: 'black', // Change to black
        fontSize: 18,
    },
    email: {
        color: '#555', // Darker shade for better visibility
    },
    paymentOptions: {
        marginVertical: 5,
    },
    paymentButton: {
        backgroundColor: '#f0f0f0', // Light background for buttons
        padding: 15,
        marginVertical: 2,
        borderRadius: 5,
        borderColor: "#C4C5B3",
        borderWidth: 0.2,
    },
});
