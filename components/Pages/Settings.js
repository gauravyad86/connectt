// import { FontAwesome, Fontisto } from '@expo/vector-icons';
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity ,Dimensions} from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import Entypo from '@expo/vector-icons/Entypo';
// import { ScrollView } from 'react-native-gesture-handler';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import DiscoverySettings from './DiscoverySetting';
// import { useNavigation } from 'expo-router';
// const { width, height } = Dimensions.get('window');
// const Settings = () => {
//   const navigation = useNavigation()
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }} vertical={true}>
//       <TouchableOpacity style={ styles.header } onPress={ ()=>navigation.goBack() }>
//           <Ionicons name="arrow-back" size={ 24 } color="red" />
//           <Text style={ { color: "white", marginLeft: "25%", fontSize: 17} }>Settings</Text>

//       </TouchableOpacity>
//       <View style={ styles.subscriptionSection }>
//         {/* Tinder Premium */ }
//         <TouchableOpacity style={ styles.subscriptionOption } onPress={ () => {
//           navigation.navigate( 'platinumsub' )
//         } }  >
//           <Text style={ styles.optionTitle }>tinder Platinum</Text>
//           <Text style={ styles.optionDesc }>Priority Likes, See Who Likes You & More!</Text>
//         </TouchableOpacity>
//         {/* Tinder Gold */ }
//         <TouchableOpacity style={ styles.subscriptionOption } onPress={ () => {
//           navigation.navigate( 'seewholikeyoumore' )
//         } } >
//           <View style={ styles.box }>
//             <Fontisto name="tinder" size={ 15 } color="#d7aa3e" style={ styles.icon } />
//             <Text style={ styles.optionTitle }>tinder Gold</Text>
//           </View>
//           <Text style={ styles.optionDesc }>See Who Likes You & More!</Text>
//         </TouchableOpacity>
//         {/* Tinder Plus */ }
//         <TouchableOpacity style={ styles.subscriptionOption }  onPress={ () => {
//           navigation.navigate( 'redsubscription' )
//         } }>
//           <View style={ styles.box }>
//             <Fontisto name="tinder" size={ 15 } color="#FF4500" style={ styles.icon } />
//             <Text style={ styles.optionTitle }>tinder</Text>
//             <AntDesign name="plus" size={ 15 } color="red" />
//           </View>
//           <Text style={ styles.optionDesc }>Unlimited Likes & More!</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Get Super Likes & Boosts */ }
//       <View style={ styles.actionSection }>
//         <TouchableOpacity style={ styles.actionButton } onPress={ () => {
//           navigation.navigate( 'getsuperlikes' )
//         } }  >
//           <View style={ styles.buttons }><FontAwesome name="star" size={ 13 } color="#1597fa" /></View>

//           <Text style={ styles.actionText }>Get Super Likes</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={ styles.actionButton }  onPress={ () => {
//           navigation.navigate( 'boostscreen' )
//         } }>
//           <View style={ styles.buttons }>
//             <FontAwesome name="flash" size={ 13 } color="#c145ec" />
//           </View>
//           <Text style={ styles.actionText }>Get Boosts</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={ styles.incognito }>
//         <View style={ { flexDirection: "row" } }>
//           <View style={ styles.buttons }>
//             <Entypo name="eye-with-line" size={ 14 } color="grey" />
//           </View>
//         </View>
//         <Text style={ styles.optionTitle }>Go Incognito</Text>
//       </TouchableOpacity>
//       <Text style={ { color: "white", paddingHorizontal:10, fontSize: 17, marginBottom:15, fontWeight:"500"} }> Account Setting</Text> 
//       <DiscoverySettings showHeader={false}></DiscoverySettings>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create( {

//   container: {
//     flex: 1,
//     // padding: 9,
//     backgroundColor: '#000000',
//   },
//   box: {
//     flexDirection: "row",
//     color: "white",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   header: {
//     fontSize: 15,
//     height: 60,
//     width: "100%",
//     // fontWeight: 'bold',
//     // marginBottom: 10,
//     backgroundColor: "#111419",
//     color: "white",
//     flexDirection: "row",
//     // justifyContent:"space-around",
//     // marginLeft: 20,
//     alignItems: "center",
//     marginTop: -6,
//     marginBottom: 10,
//   },
//   subscriptionSection: {
//     marginBottom: 20,
//   },
//   subscriptionOption: {
//     flexDirection: 'column',
//     justifyContent: "center",
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor: "#111419",
//     // padding: 2,
//     borderRadius: 2,
//     height: height*.1,

//   },
//   icon: {
//     marginRight: 5,
//   },
//   optionTitle: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: "white"
//   },
//   optionDesc: {
//     fontSize: 12,
//     color: "white"
//   },
//   actionSection: {
//     flexDirection: "row",
//     justifyContent:"center",
//     alignItems:"center",
//     // marginTop: 35,
//     height: "8%"
//   },
//   actionButton: {
//     padding: 5,
//     backgroundColor: "#111419",
//     borderRadius: 5,
//     // marginBottom: 10,
//     flexDirection: "column",
//     justifyContent: "center",
//     width: "49%",
//     height: height*.15,
//     alignItems: 'center',
//     marginRight: 2,
//     marginLeft: 2
//   },
//   actionText: {
//     color: '#1597fa',
//     fontSize: 12,
//   },
//   sectionHeader: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 30,
//   },
//   accountSettings: {
//     marginTop: 10,
//   },
//   accountText: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 5,
//   },

//   buttons: {
//     backgroundColor: "black",
//     borderRadius: 50,
//     width: 20,
//     height: 20,
//     padding: 7,
//     justifyContent: 'center',
//     alignItems: "center",

//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   incognito: {
//     backgroundColor: "#111419",
//     borderRadius: 5,
//     flexDirection: "column",
//     justifyContent: "center",
//     width: "100%",
//     height: "5%",
//     alignItems: 'center',
//     marginTop: -10,
//     marginBottom:10
//   }
// } );

// export default Settings;
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import DiscoverySettings from './DiscoverySetting';
import { useNavigation } from 'expo-router';
import Discovery from './Discovery';

const { height } = Dimensions.get( 'window' );




const Settings = () => {
  const subscriptionOptions = [
    {
      title: 'Tinder Platinum',
      description: 'Priority Likes, See Who Likes You & More!',
      icon: <Fontisto name="tinder" size={ 20 } color="white" />,
      navigateTo: 'platinumsub',
    },
    {
      title: 'Tinder Gold',
      description: 'See Who Likes You & More!',
      icon: <Fontisto name="tinder" size={ 20 } color="#d7aa3e" />,
      navigateTo: 'seewholikeyoumore',
    },
    {
      title: 'Tinder Plus',
      description: 'Unlimited Likes & More!',
      icon: <Fontisto name="tinder" size={ 20 } color="#FF4500" />,
      extraIcon: <AntDesign name="plus" size={ 20 } color="red" />,
      navigateTo: 'redsubscription',
    },
  ];

  const actionButtons = [
    {
      title: 'Get Super Likes',
      icon: <FontAwesome name="star" size={ 20 } color="#1597fa" />,
      navigateTo: 'getsuperlikes',
    },
    {
      title: 'Get Boosts',
      icon: <FontAwesome name="flash" size={ 20 } color="#c145ec" />,
      navigateTo: 'boostscreen',
    },
  ];
  const navigation = useNavigation();

  return (
    <ScrollView style={ styles.container } contentContainerStyle={ { flexGrow: 1 } } vertical={ true }>
      <TouchableOpacity style={ styles.header } onPress={ () => navigation.goBack() }>
        <Ionicons name="arrow-back" size={ 24 } color="red" />
        <Text style={ { color: "white", marginLeft: "25%", fontSize: 17 } }>Settings</Text>
      </TouchableOpacity>

      <View style={ styles.subscriptionSection }>
        { subscriptionOptions.map( ( option, index ) => (
          <TouchableOpacity
            key={ index }
            style={ styles.subscriptionOption }
            onPress={ () => navigation.navigate( option.navigateTo ) }
          >
            <View style={ styles.box }>
              { option.icon }
              <Text style={ styles.optionTitle }>{ option.title }</Text>
              { option.extraIcon }
            </View>
            <Text style={ styles.optionDesc }>{ option.description }</Text>
          </TouchableOpacity>
        ) ) }
      </View>

      <View style={ styles.actionSection }>
        { actionButtons.map( ( button, index ) => (
          <TouchableOpacity
            key={ index }
            style={ styles.actionButton }
            onPress={ () => navigation.navigate( button.navigateTo ) }
          >
            <View style={ styles.buttons2 }>{ button.icon }</View>
            <Text style={ styles.actionText }>{ button.title }</Text>
          </TouchableOpacity>
        ) ) }
      </View>

      <TouchableOpacity style={ styles.incognito }>
        <View style={ styles.buttons2 }>
          <Entypo name="eye-with-line" size={ 22 } color="grey" />
        </View>
        <Text style={ styles.optionTitle }>Go Incognito</Text>
      </TouchableOpacity>

      <Text style={ { color: "white", paddingHorizontal: 10, fontSize: 17, marginBottom: 15, fontWeight: "500" } }>
        Account Settings
      </Text>

      <Discovery showHeader={ false } />
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    height: 60,
    backgroundColor: "#111419",
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -6,
    marginBottom: 10,
  },
  subscriptionSection: {
    marginBottom: 20,
  },
  subscriptionOption: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: "#111419",
    borderRadius: 2,
    height: height * 0.1,
  },
  icon: {
    marginRight: 5,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: "white",
    marginLeft: 5
  },
  optionDesc: {
    fontSize: 12,
    color: "white"
  },
  actionSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "8%",
  },
  actionButton: {

    backgroundColor: "#111419",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "49%",
    height: height * 0.12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  actionText: {
    color: '#1597fa',
    fontSize: 12,
  },
  buttons: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 20,
    height: 20,
    padding: 7,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttons2: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ccc',
  },
  incognito: {
    backgroundColor: "#111419",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "5%",
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 10,
  }
} );

export default Settings;
