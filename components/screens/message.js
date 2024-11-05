
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { MyContext } from '../MyContext';

const { width, height } = Dimensions.get('window');

export default function Message(props) {
    const navigation = useNavigation();
    const { bgColor, lightTheme, lightColor } = useContext(MyContext);
    
    return (
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false} style={styles.users}>
            <TouchableOpacity onPress={() => { navigation.navigate("chatsection") }}>
                {props.filteredData.map(user => (
                    <View style={styles.mess} key={user.id}>
                        <Image source={{ uri: user.image }} style={styles.image} />
                        <View style={styles.messageContent}>
                            <Text style={[styles.name, { color: lightColor }]}>{user.name}</Text>
                            <Text style={styles.bio}>{user.bio}</Text>
                            <View style={styles.underline} />
                        </View>
                    </View>
                ))}
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    users: {
        flexDirection: 'column',
        // paddingLeft: 10,
        // paddingBottom: 110,
        // marginBottom: 15,
    },
    messHeading: {
        flexDirection: "row",
        alignItems: "center",
    },
    underline: {
        borderBottomColor: '#555962',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 10,
        flex: 1, // This allows the underline to expand to fill the width
    },
    messagetext: {
        fontSize: 17,
        fontWeight: "500",
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 0
    },
    mess: {
        width: width - 5,// Full width minus padding
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 10, // Padding for mess items
        borderColor: '#F63A6E',
        borderWidth: 0, // Optional, add border if needed
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 120,
    },
    name: {
        color: "white",
        marginTop: 4,
        fontWeight: "600",
        fontSize: 18,
    },
    bio: {
        color: "black",
        marginTop: 3,
        fontSize: 13,
    },
    messageContent: {
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 12,
        flex: 1, // Allow it to take the remaining space
        marginTop: 8,
    }
});
