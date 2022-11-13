import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {AINewsScreen, BigDataNewsScreen, FinTechNewsScreen, MLNewsScreen} from "./ui/screens/NewsScreens";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {
    AboutAppScreen,
    FavouriteScreen,
    SettingsScreen,
    TermsOfPrivacyScreen,
    TermsOfUseScreen
} from "./ui/screens/HeaderScreens";
import { Entypo } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <HomeStackNavigator></HomeStackNavigator>
        </NavigationContainer>
    );
}

const HomeStackNavigator = () => {
    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreenWithDrawer}
            options={({navigation}) => ({
                headerCenter: () => {{
                    return <Entypo name="news" size={24} color="black" />
                }},
                headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate('AboutApp')}
                        title="About"
                        color={Colors.blue}
                    />
                ),
            })}
        />
        <Stack.Screen name='AboutApp' component={AboutAppScreen}/>
    </Stack.Navigator>
}

export function HomeScreenWithDrawer({navigation}: { navigation: any }) {
    return (
        <DrawerStackNavigator></DrawerStackNavigator>
    );
}

export function HomeScreen({navigation}: { navigation: any }) {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="ML" component={MLNewsScreen}/>
            <Tab.Screen name="BigData" component={BigDataNewsScreen}/>
            <Tab.Screen name="AI" component={AINewsScreen}/>
            <Tab.Screen name="FinTech" component={FinTechNewsScreen}/>
        </Tab.Navigator>
    );
}


const DrawerStackNavigator = () => {
    return <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
    >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Favourite" component={FavouriteScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="About App" component={AboutAppScreen}/>
        <Drawer.Screen name="Terms Of Use" component={TermsOfUseScreen}/>
        <Drawer.Screen name="Terms Of Privacy" component={TermsOfPrivacyScreen}/>
    </Drawer.Navigator>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
