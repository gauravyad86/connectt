import { View, Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import image from "@/assets/images/splash.png";
import logo from "@/assets/images/connect2.jpg"; // Add the logo image here
import { useNavigation } from "expo-router";
import axios from "axios";
import { MyContext } from "../MyContext";

const API_URL = 'http://localhost:4001/auth';
const { width, height } = Dimensions.get('window'); // Get device dimensions

const LoginScreen = () => {
    const [type, setType] = useState(1); // 1: signin, 2: signup
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const { User, setUser, bgColor } = useContext(MyContext);

    const SignIn = async () => {
        console.log(email, password);
        setUser(true);
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    return (
        <ImageBackground
            // source={image}
            style={[styles.imageBackground]}
            resizeMode="cover"
        >
            <View style={styles.headerContainer}>
                {/* <View style={styles.logoContainer}> */}
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>family</Text>
                {/* </View> */}
            </View>

            {type === 1 ? (
                <View style={styles.container}>
                    {/* <Text style={styles.title}>Sign In</Text> */}
                    <Text style={styles.subtitle}>Access your account</Text>
                    <View style={styles.form}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            placeholder="Enter Mail ID"
                            keyboardType="email-address"
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />

                        <TouchableOpacity onPress={SignIn} style={styles.button}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setType(2)}>
                            <Text style={styles.switchText}>Don't have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                    {/* <Text style={styles.title}>Sign Up</Text> */}
                    <Text style={styles.subtitle}>Create a new account</Text>
                    <View style={styles.form}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            placeholder="Enter Name"
                            style={styles.input}
                            onChangeText={text => setName(text)}
                            value={name}
                        />

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            placeholder="Enter Mail ID"
                            keyboardType="email-address"
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setType(1)}>
                            <Text style={styles.switchText}>Already have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%', 
        backgroundColor:"white"// Ensure the background covers the whole screen
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom:6,
        // marginBottom: height * 0.1, // Adds more space on larger screens
    },
  
    logo: {
        width: width * 0.2, // Relative size to screen width
        height: width * 0.2, // Maintain aspect ratio
        marginRight: 10,
    },
    logoText: {
        fontSize: width * 0.07, // Responsive font size
        fontWeight: "bold",
        color: "#FFA500",
    },
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: width * 0.05, // Responsive horizontal padding
    },
    title: {
        fontSize: width * 0.08, // Responsive title size
        fontWeight: "bold",
        color: "#FFA500",
        marginBottom: height * 0.02, // Margin to provide space between title and subtitle
    },
    subtitle: {
        fontSize: width * 0.05, // Responsive subtitle size
        color: "#FFA500",
        marginBottom: height * 0.05, // Adjust bottom margin for larger screens
    },
    form: {
        width: "100%",
        alignItems: "center",
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: height * 0.01, // Margin relative to screen height
        fontSize: width * 0.035, // Responsive font size for the label
        color: "#333",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#fff",
        paddingVertical: height * 0.012, // Vertical padding relative to screen height
        paddingHorizontal: width * 0.04, // Horizontal padding relative to screen width
        borderRadius: 8,
        borderColor: "#ccc",
        borderWidth: 1,
        fontSize: width * 0.035, // Responsive font size for input fields
        color: "#000",
        width: "100%",
        marginBottom: height * 0.02, // Adjust margin for spacing between inputs
    },
    button: {
        backgroundColor: "#FFA500",
        paddingVertical: height * 0.017, // Vertical padding relative to screen height
        borderRadius: 8,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "black",
        fontSize: width * 0.045, // Responsive font size for button text
        fontWeight: "bold",
    },
    switchText: {
        color: "#FFA500",
        fontSize: width * 0.04, // Responsive font size for switch text
        fontWeight: "bold",
        marginTop: height * 0.03, // Margin for spacing
        textAlign: "center",
    },
});
