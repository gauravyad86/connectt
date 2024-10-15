import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GetSuperLikes () {
    const userss = [
        {
            id: '1',
            name: '3 Super Likes',
            rs: '239.0/ea'
        },
        {
            id: '2',
            name: '15 Super Likes',
            rs: '180.00/ea'
        },
        {
            id: '3',
            name: '30 Super Likes',
            rs: '138.00/ea'
        },
    ];
    const navigation = useNavigation()
    return (
        <SafeAreaView style={ styles.safeContainer }>
            <ScrollView style={ styles.container0 } contentContainerStyle={ { flexGrow: 1 } }>
                {/* Close button on top-left */ }
                <TouchableOpacity style={ styles.closeButton } onPress={ () => {
                    navigation.goBack()
                } }>
                    <Text style={ styles.closeText }>❌</Text>
                </TouchableOpacity>

                {/* Tinder+ logo and text */ }
                <View style={ styles.header }>
                    <FontAwesome name="star" size={ 20 } color="#1597fa" />
                    <Text style={ styles.headerText }>Get Super Likes</Text>
                </View>

                {/* Main Heading Text */ }
                <Text style={ styles.mainHeading }>
                    Stand out with Super <br />
                    Like. You're 3x more <br />
                    likely to match!
                </Text>
                <Text style={ styles.planText }>Select a package</Text>

                {/* Packages List */ }
                <View style={ styles.container2 }>
                    <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={ styles.use }>
                        { userss.map( user => (
                            <View style={ styles.user } key={ user.id }>
                                <Text style={ styles.Week }>{ user.name }</Text>
                                <Text style={ styles.rsValue }>{ user.rs }</Text>
                                <TouchableOpacity style={ styles.selectButton } onPress={()=>{
                            navigation.navigate("purchase")
                        }}>
                                    <Text style={ styles.selectButtonText }>Select</Text>
                                </TouchableOpacity>
                            </View>
                        ) ) }
                    </ScrollView>
                </View>

                {/* Or Divider */ }
                <View style={ styles.dividerContainer }>
                    <View style={ styles.line } />
                    <Text style={ styles.orText }>or</Text>
                    <View style={ styles.line } />
                </View>

                {/* Bottom Box */ }
                <View style={ styles.bottombox }>
                    <Text style={ styles.bottomText }>Includes 5 free Super Likes per week</Text>
                    <View style={ styles.header2 }>
                        <View style={ { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } }>
                            <Fontisto name="tinder" size={ 22 } color="yellow" style={ styles.icon } />
                            <Text style={ styles.tinderGoldText }>Get Tinder Gold</Text>
                        </View>
                        <TouchableOpacity style={ styles.goldSelectButton } onPress={()=>{
                            navigation.navigate("purchase")
                        }}>
                            <Text style={ styles.goldSelectButtonText }>Select</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create( {
    safeContainer: {
        flex: 1,
        backgroundColor: '#111419',
    },
    container0: {
        // flex: 1,
        paddingHorizontal: 10,
        width: '100%',
        // justifyContent:"flex-start"
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1, // Ensure it stays on top
    },
    closeText: {
        fontSize: 24,
        color: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 5,
    },
    mainHeading: {
        color: 'white',
        fontSize: 32,
        fontWeight: '500',
        marginVertical: 12,
        // textAlign: 'center',
        // marginLeft:-4,
    },
    planText: {
        color: 'white',
        fontSize: 27,
        fontWeight: '500',
        // textAlign: 'center',

    },
    container2: {
        marginTop: 15,
    },
    use: {
    },
    user: {
        height: "100%",
        width: "40%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#7B8799',
        // marginHorizontal: 10,
        marginRight:9,
        padding: 10,
    },
    Week: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500',
        marginTop: 3,
    },
    rsValue: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginTop: 19,
    },
    selectButton: {
        backgroundColor: 'blue',
        borderRadius: 30,
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 40,
    },
    selectButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        fontWeight: "bold"
    },
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    line: {
        height: 1,
        backgroundColor: '#7B8799',
        width: '40%',
    },
    orText: {
        fontSize: 18,
        color: 'white',
        marginHorizontal: 10,
    },
    bottombox: {
        borderWidth: 1,
        borderColor: '#7B8799',
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
    header2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    tinderGoldText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 5,
    },
    goldSelectButton: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#7B8799',
    },
    goldSelectButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    },
} );
