// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // Use only react-navigation stack
import LoginScreen from '@/components/screens/LoginScreen';
import UserDetails from "@/components/screens/UserDetails";
import ChatScreen from "@/components/screens/ChatScreen";
import ModalScreen from "@/components/screens/ModalScreen";
import ExploreScreen from "@/components/screens/ExploreScreen";
import UserInfo from "@/components/screens/UserInfo";
import ChatSection from "@/components/Pages/chatSection";
import Getsuperlikes from "@/components/Pages/GetsuperLikes";
import PurchaseScreen from "@/components/Pages/PurchaseScreen";
import BottomStarScreen from "@/components/screens/BottonStarSreen.js";
// import Settings from "@/components/Pages/Settings";
import Settings from "@/components/Pages/Settings.js"
import Chat_Picks_click from "@/components/Pages/Chat_Picks_click.js"
import Subsription from "@/components/Pages/Subscription";
import AddCreditDebitcard from "@/components/Pages/AddCreditDebitcard";
import 'react-native-gesture-handler';
import App from "@/app/(tabs)/index.js";
// import User from "@/app/(tabs)/User";


const Stack = createStackNavigator();
const User = true;
const StackNavigator = () => {
  return <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>

    {
      User ? (
        <>
          <Stack.Group>
            {/* <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen> */}
            <Stack.Screen name="User" component={UserDetails}></Stack.Screen>
            <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
            <Stack.Screen name="Explore" component={ExploreScreen}></Stack.Screen>
            {/* <Stack.Screen name="Home" component={App}></Stack.Screen> */}
            <Stack.Screen name="4starscreen" component={BottomStarScreen}></Stack.Screen>
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: "modal"
            }}
          >
            <Stack.Screen name="Modal" component={ModalScreen}></Stack.Screen>
            <Stack.Screen name="user" component={UserInfo}></Stack.Screen>
            <Stack.Screen name="getsuperlikes" component={Getsuperlikes}></Stack.Screen>
            <Stack.Screen name="purchase" component={PurchaseScreen}></Stack.Screen>
            <Stack.Screen name="subsription" component={Subsription}></Stack.Screen>
            <Stack.Screen name="addcarddetails" component={AddCreditDebitcard}></Stack.Screen>
            <Stack.Screen name="picks" component={Chat_Picks_click}></Stack.Screen>
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
              ...TransitionPresets.ModalPresentationIOS,
            }}
          >
            <Stack.Screen name="setting" component={Settings}></Stack.Screen>
            <Stack.Screen name="chatscreen" component={ChatScreen}></Stack.Screen>
            <Stack.Screen name="chatsection" component={ChatSection}></Stack.Screen>
          </Stack.Group>
        </>

      ) :

        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    }
  </Stack.Navigator>
}
export default StackNavigator;