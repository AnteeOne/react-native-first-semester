import {Button, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from "expo-status-bar";
import {Colors} from "react-native/Libraries/NewAppScreen";


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation}) => ({
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('About')}
                                title="About"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="UserList"
                    component={UserListScreen}
                    options={({ navigation}) => ({
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.popToTop()}
                                title="Home"
                                color={Colors.blue}
                            />
                        ),
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('About')}
                                title="About"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="UserDetails"
                    component={UserDetailsScreen}
                    options={({ navigation}) => ({
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.popToTop()}
                                title="Home"
                                color={Colors.blue}
                            />
                        ),
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('About')}
                                title="About"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
                <Stack.Screen name="About" component={AboutAppScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <StatusBar style="auto"/>
            <Button
                title="User list"
                onPress={() => {navigation.navigate('UserList');}}
            />
        </View>
    );
}

function UserListScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>UserList</Text>
            <StatusBar style="auto"/>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('UserDetails', {
                        itemId: 86
                    });
                }}
            />
            <Button
                title="Back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    );
}

function UserDetailsScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>UserDetails</Text>
            <StatusBar style="auto"/>
            <Button
                title="Back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    );
}

function AboutAppScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>AboutApp</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
