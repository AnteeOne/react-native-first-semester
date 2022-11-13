import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export function MLNewsScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>ML News</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export function BigDataNewsScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>Big Data News</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export function AINewsScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>AI News</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export function FinTechNewsScreen({navigation}: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text>FinTech News</Text>
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