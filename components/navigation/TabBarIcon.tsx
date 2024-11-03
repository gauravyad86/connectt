import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '@/components/screens/LoginScreen';
import HomePage from "@/components/screens/HomePage";
import ChatScreen from "@/components/screens/ChatScreen";
import BoostScreen from "@/components/screens/BoostScreen";
import UserInfo from "@/components/screens/UserInfo";
import ChatSection from "@/components/Pages/chatSection";
import Getsuperlikes from "@/components/Pages/GetsuperLikes";
import PurchaseScreen from "@/components/Pages/PurchaseScreen";
import BottomStarScreen from "@/components/screens/BottonStarSreen"; // Fixed typo
import Chat_Picks_click from "@/components/Pages/Chat_Picks_click.js"
import MysubStarting from "@/components/Pages/MysubStarting.js"
import SeeWhoLikeYou from "@/components/Pages/Seewholikeyoumore"
import Subsription from "@/components/Pages/Subscription";
import RedSubscriptionPlanpage from "@/components/Pages/RedSubscriptionPlanpage";
import AddCreditDebitcard from "@/components/Pages/AddCreditDebitcard";
import GridScreen from "@/components/screens/GridScreen";
import Notifications from "@/components/Pages/Notifications";
import AddBanking from "@/components/Pages/AddBanking";
import GridBox from "@/components/Pages/GridBox";
import BoostSelect from "@/components/Pages/Boostselectbottom";
import Women from "@/components/Pages/Women";
import Settings from '@/components/Pages/Settings';
import 'react-native-gesture-handler';
import HompagestarSelect from "@/components/Pages/HompagestarSelect";
import CoffyDate from "@/components/Pages/Coffydate";
import CoffeeDateJoin from "@/components/Pages/CoffeeDateJoin"
import ShieldPgae from "@/components/Pages/ShieldPgae.js";
import ProfileEditPage from "@/components/Pages/ProfileEditPage";
import { InterestsPage } from "@/components/Pages/Interests.js";
import { InterestsPage2 } from "@/components/Pages/Interest2";
import { InterestsPage3 } from "@/components/Pages/Interest3";
import { InterestsPage4 } from "@/components/Pages/Interest4";
import DiscoverySettings from '../Pages/DiscoverySetting';
import TinderSwipeDemo from '@/components/TinderCard/TinderSwipeDemo.js';
import PlatinumSubscription from '@/components/Pages/PlatinumSubscription';
import { useContext } from 'react';
import { MyContext, MyProvider } from '../MyContext';
const Stack = createStackNavigator();

const StackNavigator = () => {
  const a = useContext(MyContext)
  console.log(a.User, "hello")
  return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header
        }}
      >
        {
    a.User ? (
            <>
              <Stack.Group>
                <Stack.Screen
                  name="Home"
                  component={HomePage}
                  options={{ ...TransitionPresets.SlideFromRightIOS }} // Smooth transition
                />
                <Stack.Screen
                  name="gridscreen"
                  component={GridScreen}
                  options={{ ...TransitionPresets.SlideFromRightIOS }}
                />
                <Stack.Screen
                  name="chatscreen"
                  component={ChatScreen}
                  options={{ ...TransitionPresets.SlideFromRightIOS }}
                />
                <Stack.Screen
                  name="user"
                  component={UserInfo}
                  options={{ ...TransitionPresets.SlideFromRightIOS }}
                />
                <Stack.Screen
                  name="4starscreen"
                  component={BottomStarScreen}
                  options={{ ...TransitionPresets.SlideFromRightIOS }}
                />
                {/* Other screens can be added here without transitions if needed */}


                <Stack.Screen name="getsuperlikes" component={Getsuperlikes} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="purchase" component={PurchaseScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="subsription" component={Subsription} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="redsubscription" component={RedSubscriptionPlanpage} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="addcarddetails" component={AddCreditDebitcard} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="picks" component={Chat_Picks_click} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="substartclick" component={MysubStarting} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="seewholikeyoumore" component={SeeWhoLikeYou} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="notifications" component={Notifications} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="discoverysetting" component={DiscoverySettings} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="lookingforwomen" component={Women} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="bank" component={AddBanking} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="gridbox" component={GridBox} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="chatsection" component={ChatSection} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="homepagestarselect" component={HompagestarSelect} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="boostscreen" component={BoostScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="boostselect" component={BoostSelect} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="setting" component={Settings} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="tindercard" component={TinderSwipeDemo} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="coffyDate" component={CoffyDate} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                {/* <Stack.Screen name="joincoffedate" component={CoffeeDateJoin}  options={{ ...TransitionPresets.SlideFromRightIOS }} /> */}
                <Stack.Screen name="shield" component={ShieldPgae} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="editprofile" component={ProfileEditPage} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="Interests" component={InterestsPage} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="Interests2" component={InterestsPage2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="Interests3" component={InterestsPage3} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="Interests4" component={InterestsPage4} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="platinumsub" component={PlatinumSubscription} options={{ ...TransitionPresets.SlideFromRightIOS }} />
              </Stack.Group>
            </>
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )
        }
      </Stack.Navigator>
  );
}

export default StackNavigator;

