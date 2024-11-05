import { View, Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import image from "@/assets/images/splash.png"
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "expo-router";
// import { fetchData } from "@/api.js";
import axios from "axios";
import { MyContext } from "../MyContext";
const API_URL = 'http://localhost:4001/auth';
const LoginScreen = () => {
    const [ type, setType ] = useState( 0 ); // 1: signin 2: signup
    const [ name, setName ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPasssword ] = useState( "" );
    const navigation = useNavigation();

    const { User, setUser , bgColor} = useContext( MyContext )


    const SignIn = async () => {
        console.log( email )
        console.log( password )
        setUser( true );
        console.log(User)
        try {
            const response = await axios.post( `${ API_URL }/login`, {
                email: email,
                password: password
            } );
            return response.data;
        } catch ( error ) {
            console.error( 'Error fetching data:', error );
            throw error;
        }
    }
    return (
        <ImageBackground
            style={ [styles.imageBackground , {backgroundColor: bgColor}]}
            resizeMode="cover"
            
        >
            {
                type === 1 ? (
                    <View style={ tw.style( "flex-1 justify-center items-center w-full" ) }>
                        <Text style={ tw.style( "font-bold text-2xl" ) }>Sign In</Text>
                        <Text style={ tw.style( "text-black text-2xl" ) }> Access your account</Text>
                        <View style={ tw.style( "w-full p-5" ) }>
                            <Text style={ tw.style( "font-semibold pb-1 text-black " ) }>Email</Text>
                            <TextInput
                                keyboardType="email-address"
                                style={ tw.style(
                                    "w-full  h-12 bg-gray-50 border border-gray-300 text-xl text-gray-900 rounded-lg"
                                ) }
                                onChange={ ( text ) => setEmail( text.target.value ) }
                                value={ email }
                            />
                            <Text style={ tw.style( "font-semibold pb-1 text-black mt-3" ) }>Password</Text>
                            <TextInput
                                secureTextEntry={ true }
                                style={ tw.style(
                                    "h-12 w-full bg-gray-50 border border-gray-300 text-xl text-gray-900 rounded-lg"
                                ) }
                                onChange={ ( text ) => setPasssword( text.target.value ) }
                                value={ password }
                            />
                            <TouchableOpacity onPress={
                                SignIn
                            } style={ tw.style( "w-full rounded-lg mt-8 bg-black py-3" ) }>
                                <Text style={ tw.style( "text-center text-gray-100 text-xl font-bold" ) }>
                                    Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => setType( 2 ) } >
                                <Text style={ tw.style( "text-center text-gray-100 pt-3 text-xl font-bold" ) }>
                                    Doesn't  have an account?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                ) : (
                    <View style={ tw.style( "flex-1 justify-center items-center w-full" ) }>
                        <Text style={ tw.style( "font-bold text-2xl" ) }>Sign Up</Text>
                        <Text style={ tw.style( "text-black text-2xl" ) }>Create a new account</Text>
                        <View style={ tw.style( "w-full p-5" ) }>
                            <Text style={ tw.style( "font-semibold pb-2 text-black" ) }>Name</Text>
                            <TextInput
                                style={ tw.style(
                                    " h-10 w-full bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg"
                                ) }
                                onChange={ ( text ) => setName( text.target.value ) }
                                value={ name }
                            />
                            <Text style={ tw.style( "font-semibold pb-2 text-black" ) }>Email</Text>
                            <TextInput
                                keyboardType="email-address"
                                style={ tw.style(
                                    "w-full  h-10 bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg"
                                ) }
                                onChange={ ( text ) => setEmail( text.target.value ) }
                                value={ email }
                            />
                            <Text style={ tw.style( "font-semibold pb-2 text-black" ) }>Password</Text>
                            <TextInput
                                secureTextEntry={ true }
                                style={ tw.style(
                                    "h-10 w-full bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg"
                                ) }
                                onChange={ ( text ) => setPasssword( text.target.value ) }
                                value={ password }
                            />
                            <TouchableOpacity style={ tw.style( "w-full rounded-lg mt-8 bg-black py-3" ) }>
                                <Text style={ tw.style( "text-center text-gray-100 text-xl font-bold" ) }>
                                    Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => setType( 1 ) } >
                                <Text style={ tw.style( "text-center text-gray-100 pt-3 text-xl font-bold" ) }>
                                    Already have an account?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) }
        </ImageBackground>
    );
};

export default LoginScreen;


const styles = StyleSheet.create( {
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: "100%",
        
    }
} );
