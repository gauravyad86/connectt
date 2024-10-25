
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

// Get screen dimensions for responsiveness
const { width, height } = Dimensions.get('window');

const Notifications = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back" size={width * 0.06} color="red" />
                    <Text style={styles.headerText}>Notifications</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.content}>
                <FontAwesome5 name="star-half-alt" size={width * 0.2} color="yellow" />
                <Text style={styles.title}>No notifications yet</Text>
                <Text style={styles.description}>
                    Come back here to get information about matches and messages, profile insights and much more!
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111419",
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
    },
    headerText: {
        color: 'white',
        fontSize: width * 0.05,  // Responsive font size
        marginLeft: width * 0.1, // Adjust based on screen width
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
    },
    title: {
        fontSize: width * 0.06,  // Responsive font size for title
        fontWeight: 'bold',
        color: 'white',
        marginVertical: height * 0.02,  // Adjust margin based on screen height
    },
    description: {
        fontSize: width * 0.045,  // Responsive font size for description
        color: '#A0A0A0',
        textAlign: 'center',
        marginHorizontal: width * 0.05,  // Adjust margin for proper text layout
    },
});

export default Notifications;
