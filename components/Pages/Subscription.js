import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get( 'window' ); // Get screen width for card sizing

const Subsription = () => {
    const navigation = useNavigation()
    return (

        <ScrollView style={ styles.pageWrapper }>
            <View style={ styles.pageWrapper3 }>
                {/* Header */ }
                <TouchableOpacity style={ styles.closeButton } onPress={ () => {
                    navigation.goBack()
                } }>
                    <Text style={ styles.closeText }>❌</Text>
                </TouchableOpacity>
                <View style={ styles.topBar }>
                    <Text style={ styles.pageTitle }>My subscription</Text>
                </View>

                {/* Scrollable Card Section */ }
                <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={ styles.cardContainer }>
                    <View style={ styles.box1 }>
                        <Fontisto name="tinder" size={ 25 } color="#FD297B" />
                        <Text style={ styles.optionTitle }> tinder</Text>
                        <AntDesign name="plus" size={ 20 } color="#FD297B" />
                    </View>
                    <View style={ styles.box2 }>
                        <Fontisto size={ 25 } name='tinder' color="#ecb757"  style={{marginRight:8}} />
                        <Text style={ styles.optionTitle }>tinder</Text>
                        <Text style={ { color: 'black', backgroundColor: "#ecb757", fontSize: 9 , marginTop:8, fontWeight:"bold"} }>GOLD</Text>
                    </View>
                    <View style={ styles.box3 }>
                        <Fontisto size={ 18 } name='tinder' color="#252523"  style={{marginRight:7}}/>
                        <Text style={ styles.optionTitle }>tinder</Text>
                        <Text style={ { color: 'white', backgroundColor: "#252523", fontSize: 9 , marginTop:8} }>Platinum</Text>
                    </View>



                </ScrollView>

                {/* Upgrade Your Likes Section */ }
                <Text style={ styles.upgradeTitle }>Upgrade Your Likes</Text>
                <View style={ styles.upgradeSection }>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }><Entypo name="check" size={ 24 } color="red" />
                            Unlimited Likes</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }> <Entypo name="lock" size={ 24 } color="white" /> See Who Likes You</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Entypo name="lock" size={ 24 } color="white" />
                        <View> <Text style={ styles.benefitLabel }> Priority Likes</Text>
                            <Text style={ styles.benefitLabel2 }> Your Likes will be seen sooner with Priority Likes</Text></View>
                    </View>
                </View>
                <Text style={ styles.upgradeTitle }>Enhance Your Experience</Text>
                <View style={ styles.upgradeSection }>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }><Entypo name="check" size={ 24 } color="red" />
                            Unlimited Likes</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }> <Entypo name="lock" size={ 24 } color="white" /> See Who Likes You</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Entypo name="lock" size={ 24 } color="white" />
                        <View> <Text style={ styles.benefitLabel }> Priority Likes</Text>
                            <Text style={ styles.benefitLabel2 }> Your Likes will be seen sooner with Priority Likes</Text></View>
                    </View>
                </View>
                <Text style={ styles.upgradeTitle }>Premium Discovery</Text>
                <View style={ styles.upgradeSection }>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }><Entypo name="check" size={ 24 } color="red" />
                            Unlimited Likes</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }> <Entypo name="lock" size={ 24 } color="white" /> See Who Likes You</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Entypo name="lock" size={ 24 } color="white" />
                        <View> <Text style={ styles.benefitLabel }> Priority Likes</Text>
                            <Text style={ styles.benefitLabel2 }> Your Likes will be seen sooner with Priority Likes</Text></View>
                    </View>
                </View>
                <Text style={ styles.upgradeTitle }>Take Control</Text>
                <View style={ styles.upgradeSection }>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }><Entypo name="check" size={ 24 } color="red" />
                            Unlimited Likes</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Text style={ styles.benefitLabel }> <Entypo name="lock" size={ 24 } color="white" /> See Who Likes You</Text>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Entypo name="lock" size={ 24 } color="white" />
                        <View> <Text style={ styles.benefitLabel }> Priority Likes</Text>
                            <Text style={ styles.benefitLabel2 }> Your Likes will be seen sooner with Priority Likes</Text></View>
                    </View>
                </View>
                {/* Pricing Section */ }
                <TouchableOpacity style={ styles.priceButton }>
                    <Text style={ styles.priceText }>STARTING AT ₹99.00</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create( {
    pageWrapper: {
        flex: 1,
        backgroundColor: '#111419',
        // justifyContent: "center",
        // alignItems: "center"

    },
    pageWrapper3: {
        flex: 1,
        backgroundColor: '#111419',
        justifyContent: "center",
        alignItems: "center"

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
    topBar: {
        backgroundColor: '#1B1B1B',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    pageTitle: {
        color: '#FFFFFF',
        fontSize: 21,
        fontWeight: '500',
    },
    optionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: "black",
        marginRight:5
    },
    box1: {
        flexDirection: "row",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "80%",
        borderWidth: 2,
        marginRight:5,
        borderColor: "#FD297B",
        backgroundColor: "#E9C0DD",
        borderRadius:5,
        marginLeft:15,

    },
    box3: {
        flexDirection: "row",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "80%",
        borderWidth: 2,
        marginRight:5,
        borderColor: "white",
        backgroundColor: "#BDECFF",
        borderRadius:5

    },
    box2: {
        flexDirection: "row",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "80%",
        borderWidth: 2,
        marginRight:5,
        borderColor:"#ecb757",
        backgroundColor: "#EEF2B4",
        borderRadius:5

    },
    cardContainer: {
   marginTop:10
    },
    planCard: {
        backgroundColor: '#2C2C2E',
        borderRadius: 15,
        marginRight: 15,
        width: width * 0.8, // 80% of screen width
        alignItems: 'center',
        justifyContent: 'center',
        height: "20%",
        // width:"100%",
    },
    planImage: {
        width: '100%',
        height: 150,
        borderRadius: 15,
    },
    planLabel: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    upgradeSection: {
        backgroundColor: '#111419',
        borderWidth: 1
        , borderRadius: 8,
        borderColor: "#7B8799",
        // marginBottom: 30,
        justifyContent: "center",
        // alignItems:"center",
        width: "90%",
        height:170,
    },
    upgradeTitle: {
        color: '#FF5A60',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: -10,
        marginTop:10,
        zIndex:100,
    },
    benefitItem: {
        marginVertical: 5,
        flexDirection: "row"
    },
    benefitLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: "500",
        flexDirection: "column"
    },
    benefitLabel2: {
        color: '#FFFFFF',
        fontSize: 12,
        marginTop: 5,
        flexDirection: "column"
    },
    benefitsSection: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    benefitTitle: {
        color: '#FF5A60',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    priceButton: {
        backgroundColor: '#FF5A60',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        // marginHorizontal: 40,
        // marginBottom: 50,
        alignItems: 'center',
        position: "relative",

    },
    priceText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
} );

export default Subsription;
