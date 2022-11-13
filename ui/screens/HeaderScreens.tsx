import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export function FavouriteScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Favourite</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export function SettingsScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export function AboutAppScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>About App</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export function TermsOfUseScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Terms Of Use</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export function TermsOfPrivacyScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Terms Of Privacy</Text>
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