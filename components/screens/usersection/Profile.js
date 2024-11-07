// import { MyContext } from '@/components/MyContext';
// import InterestsInput2 from '@/components/Pages/Interest2';
// import InterestsInput3 from '@/components/Pages/Interest3';
// import InterestsInput from '@/components/Pages/Interests';
// import React, { useContext } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
// import UserProfileForm from "@/components/screens/Form/UserProfileForm"
// const { width, height } = Dimensions.get( 'window' );
// const Profile = ( { profileData } ) => {
//     const { bgColor, User, setUser } = useContext( MyContext )
//     console.log(profileData)
//     return (
//         <View style={ styles.container }>
//             <View style={ {
//                 alignItems: 'center',
//                 width: '100%',
//                 paddingHorizontal: width * 0.05,
//                 paddingBottom: 20,
//             } }>

//                 <Image source={ { uri: profileData.image } } style={ styles.image } />
//                 <Text style={ styles.name }>{ profileData.name }</Text>
//                 <View style={ styles.actionButtonsBelowProfile }>
//                     <TouchableOpacity style={ [ styles.button, ] } onPress={ () => setUser( false ) }>
//                         <Text style={ styles.buttonText }>Logout</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={ [ styles.button, ] } onPress={ () => navigation.navigate( 'editprofile' ) }>
//                         <Text style={ styles.buttonText }>Preference</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <UserProfileForm profileData={profileData} />
//         </View >
//     );
// };

// const styles = StyleSheet.create( {
//     container: {
//         alignItems: 'center',
//         width: '100%',
//         paddingHorizontal: width * 0.05,
//         paddingBottom: 20,
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 5,
//         marginVertical: 20,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     editProfile: {
//         // width: '100%',
//         // alignItems: 'center', 
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//         marginTop: 2,
//         // alignSelf: 'center',
//     },
//     input: {
//         width: width * .9,
//         borderColor: 'gray',
//         borderWidth: 1,
//         padding: 8,
//         borderRadius: 5,
//         marginBottom: 10,
//         // textAlign: 'center',
//     },
//     actionButtonsBelowProfile: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         // width: '100%',
//         marginTop: 20,
//     },
//     button: {
//         borderRadius: 5,
//         paddingVertical: 8,
//         paddingHorizontal: 20,
//         marginHorizontal: 10,
//         borderColor: "black",
//         borderWidth: 1,
//     },
//     buttonText: {
//         color: 'black',
//         fontWeight: 'bold',
//     },


// } );

// export default Profile;
import { MyContext } from '@/components/MyContext';
import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import UserProfileForm from "@/components/screens/Form/UserProfileForm";
import { Entypo, FontAwesome6, Octicons } from '@expo/vector-icons';

const { width } = Dimensions.get( 'window' );

const Profile = ( { childrenData, profileData } ) => {
    const { bgColor, User, setUser } = useContext( MyContext );
    const [ currentChildIndex, setCurrentChildIndex ] = useState( 0 )
   
    const children = true
    return (
        <View style={ styles.container }>

            {/* Profile Content */ }
            <View style={ styles.profileContent }>


            {/* <View style={styles.progressContainer}>
                {childrenData.images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.progressSegment,
                            index === currentImageIndex ? styles.activeSegment : styles.inactiveSegment,
                        ]}
                    />
                ))}
            </View> */}
                <Image source={ { uri: profileData.image } } style={ styles.image } />
                <View style={ { justifyContent: "center", alignItems: "center", flexDirection: "row" } }>
                    {
                        children ? <Octicons name="dot-fill" size={ 25 } color={ profileData.marriageStatus === 'Unmarried' ? 'green' : 'red' } style={ { marginRight: 5, marginTop: -5 } } /> : null
                    }
                    <Text style={ styles.name }>{ profileData.name }</Text>
                </View>

                {/* Action Buttons */ }
                <View style={ styles.actionButtonsBelowProfile }>
                    <TouchableOpacity style={ styles.button } onPress={ () => setUser( false ) }>
                        <Text style={ styles.buttonText }>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.button } onPress={ () => navigation.navigate( 'editprofile' ) }>
                        <Text style={ styles.buttonText }>Preference</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <UserProfileForm profileData={ profileData } />
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.05,
        paddingBottom: 20,
        marginTop:10,
    },
    progressContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    progressSegment: {
        height: 4,
        flex: 1,
        marginHorizontal: 2,
        borderRadius: 2,
    },
    activeSegment: {
        backgroundColor: 'black',  // Active segment color
    },
    inactiveSegment: {
        backgroundColor: '#ddd',  // Inactive segment color
    },
    profileContent: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.05,
        paddingBottom: 20,
        bgColor: "white"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5,
        marginVertical: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    actionButtonsBelowProfile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderColor: "black",
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
} );

export default Profile;
