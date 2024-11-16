
// import { FontAwesome5, Ionicons } from '@expo/vector-icons';
// import { useNavigation } from 'expo-router';
// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

// // Get screen dimensions for responsiveness
// const { width, height } = Dimensions.get('window');

// const Notifications = () => {
//     const navigation = useNavigation();
//     return (
//         <SafeAreaView style={styles.container}>
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <View style={styles.header}>
//                     <Ionicons name="arrow-back" size={width * 0.06} color="red" />
//                     <Text style={styles.headerText}>Notifications</Text>
//                 </View>
//             </TouchableOpacity>
//             <View style={styles.content}>
//                 <FontAwesome5 name="star-half-alt" size={width * 0.2} color="yellow" />
//                 <Text style={styles.title}>No notifications yet</Text>
//                 <Text style={styles.description}>
//                     Come back here to get information about matches and messages, profile insights and much more!
//                 </Text>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#121212',
//     },
//     header: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: "#111419",
//         paddingVertical: height * 0.015,
//         paddingHorizontal: width * 0.05,
//     },
//     headerText: {
//         color: 'white',
//         fontSize: width * 0.05,  // Responsive font size
//         marginLeft: width * 0.1, // Adjust based on screen width
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: width * 0.05,
//     },
//     title: {
//         fontSize: width * 0.06,  // Responsive font size for title
//         fontWeight: 'bold',
//         color: 'white',
//         marginVertical: height * 0.02,  // Adjust margin based on screen height
//     },
//     description: {
//         fontSize: width * 0.045,  // Responsive font size for description
//         color: '#A0A0A0',
//         textAlign: 'center',
//         marginHorizontal: width * 0.05,  // Adjust margin for proper text layout
//     },
// });

// export default Notifications;
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

// Get screen dimensions for responsiveness
const { width, height } = Dimensions.get('window');

// Light mode colors
const bgColor = "#FFA500"; // Main color for icons or highlights
const lightTheme = "#dee0db"; // Background color for light mode
const lightColor = "black"; // Text color for light mode

const Notifications = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back" size={width * 0.06} color={bgColor} />
                    <Text style={styles.headerText}>Notifications</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.content}>
                <FontAwesome5 name="star-half-alt" size={width * 0.2} color={bgColor} />
                <Text style={styles.title}>No notifications yet</Text>
                <Text style={styles.description}>
                    Come back here to get information about matches and messages, profile insights, and much more!
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightTheme, // Light background color
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: lightTheme,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
    },
    headerText: {
        color: lightColor, // Light text color
        fontSize: width * 0.05,
        marginLeft: width * 0.1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: lightColor,
        marginVertical: height * 0.02,
    },
    description: {
        fontSize: width * 0.045,
        color: lightColor,
        textAlign: 'center',
        marginHorizontal: width * 0.05,
    },
});

export default Notifications;
