import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';
import { MyContext } from '../MyContext';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const data = [
    {
        id: 1,
        name: "Harry",
        quote: "No one can make you feel inferior without consent",
        images: [
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg', },
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' },
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg' }
        ]
    },
    {
        id: 2,
        name: "Emma",
        quote: "Be yourself; everyone else is already taken.",
        images: [
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' },
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg' },
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg' },
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg' }
        ]
    },
    {
        id: 3,
        name: "lucky",
        quote: "No one can make you feel inferior without consent",
        images: [
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg', },
            // { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' },
            // { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg' }
        ]
    },
    {
        id: 4,
        name: "jerry",
        quote: "No one can make you feel inferior without consent",
        images: [
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg', },
            { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' },
            // { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg' }
        ]
    },
    // Add more user objects as needed
];

export default function TileView () {
    const [ currentPersonIndex, setCurrentPersonIndex ] = useState( 0 );
    const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 );

    const currentUser = data[ currentPersonIndex ];
    const currentImage = currentUser.images[ currentImageIndex ];

    const onTapHandler = () => {
        // Show the next image of the same person
        const nextImageIndex = ( currentImageIndex + 1 ) % currentUser.images.length;
        setCurrentImageIndex( nextImageIndex );
    };

    const onSwipeHandler = ( event ) => {
        const { translationX, state } = event.nativeEvent;

        if ( state === State.END ) {
            if ( translationX < -100 ) { // Swipe left to show next person
                const nextPersonIndex = ( currentPersonIndex + 1 ) % data.length;
                setCurrentPersonIndex( nextPersonIndex );
                setCurrentImageIndex( 0 ); // Reset to first image of new person
            } else if ( translationX > 100 ) { // Swipe right to show previous person
                const prevPersonIndex = ( currentPersonIndex - 1 + data.length ) % data.length;
                setCurrentPersonIndex( prevPersonIndex );
                setCurrentImageIndex( 0 ); // Reset to first image of previous person
            }
        }
    };

    const onViewMorePress = () => {
        alert( "View More button pressed!" );
    };
    const nextPerson = () => {
        const nextPersonIndex = ( currentPersonIndex + 1 ) % data.length;
        setCurrentPersonIndex( nextPersonIndex );
        setCurrentImageIndex( 0 );
    };

    const prevPerson = () => {
        const prevPersonIndex = ( currentPersonIndex - 1 + data.length ) % data.length;
        setCurrentPersonIndex( prevPersonIndex );
        setCurrentImageIndex( 0 );
    };

    const onLikePress = () => {
        nextPerson();
    };

    const onDislikePress = () => {
        nextPerson();
    };

    const onStarPress = () => {
        // Alert.alert("Share", "Share this profile!", [
        //     { text: "Cancel", style: "cancel" },
        //     { text: "Share", onPress: () => console.log("Profile Shared") }
        // ]);
        console.log("clck")
    };

    const {lightTheme}= useContext(MyContext)
    return (
        <PanGestureHandler
            onGestureEvent={ onSwipeHandler }
            onHandlerStateChange={ onSwipeHandler }
        >
            <View style={ styles.middleSection }>
                {/* Image Progress Indicator */ }
                <View style={ styles.progressContainer }>
                    { currentUser.images.map( ( _, index ) => (
                        <View
                            key={ index }
                            style={ [
                                styles.progressSegment,
                                index === currentImageIndex ? styles.activeSegment : styles.inactiveSegment,
                            ] }
                        />
                    ) ) }
                </View>
                {/* Image and Text */ }
                <TouchableOpacity onPress={ onTapHandler }>
                    <Image source={ currentImage } style={ styles.imageStyle } />
                </TouchableOpacity>
                <Text style={ styles.caption }>{ currentUser.name }</Text>
                <Text style={ styles.quote }>{ currentUser.quote }</Text>

                {/* View More Button */ }
                {/* <TouchableOpacity style={ styles.viewMoreButton } onPress={ onViewMorePress }>
                    <Text style={ styles.viewMoreText }>View More</Text>
                </TouchableOpacity> */}
                <View style={ styles.bottomBar }>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ prevPerson }>
                        <FontAwesome name="undo" size={ width * 0.05 } color="#d4aa37" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ onLikePress }>
                        <AntDesign name="like1" size={ width * 0.08 } color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ onDislikePress }>
                        <AntDesign name="dislike1" size={ width * 0.08 } color="orange" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ [ styles.bigButton, { backgroundColor: lightTheme } ] } onPress={ onStarPress }>
                        <FontAwesome name="star" size={ width * 0.09 } color="#1597fa" />
                    </TouchableOpacity>
                </View>
            </View>
        </PanGestureHandler>
    );
}

const styles = StyleSheet.create( {
    middleSection: {
     
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        marginBottom:20,
        marginTop:20,
    },
    progressSegment: {
        flex: 1,
        height: 4,
        marginHorizontal: 2,
        borderRadius: 2,
    },
    activeSegment: {
        backgroundColor: '#FFD700', // Active segment color
    },
    inactiveSegment: {
        backgroundColor: '#E0E0E0', // Inactive segment color
    },
    imageStyle: {
        width: 200,
        height: 200,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    quote: {
        fontSize: 16,
        color: 'black',
        // textAlign: 'center',
        marginBottom: 10,
    },
    viewMoreButton: {
        backgroundColor: '#FFD700',
        // paddingVertical: 8,
        // paddingHorizontal: 20,
        borderRadius: 20,
        height:30,
        width:100,
        marginTop: 10,
       alignItems:"center",
       justifyContent:"center"
    },
    viewMoreText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomBar: {
        width: '85%',
        position: 'absolute',
        height: height * 0.1,
        bottom: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      bigButton: {
        width: width * 0.15,
        height: width * 0.15,
        // backgroundColor: "#243437",
        backgroundColor:"white",
        elevation: 5,
        borderRadius: width * 0.075,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
      },
} );
