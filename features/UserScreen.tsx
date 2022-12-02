import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


const UserScreen = () => {
    const imageUrl = "https://img5.goodfon.ru/wallpaper/big/f/24/ochki-kianu-rivz-protez-keanu-reeves-cyberpunk-2077-cd-proje.jpg"
    return (
        <View style={stylesContainer.container}>
            <View style={stylesContainer.items}>
                <Image style={stylesContainer.avatar} source={{uri: imageUrl}}/>
                <Text style={stylesContainer.title}> Johny Silverhand </Text>
            </View>
        </View>
    )
}

const stylesContainer = StyleSheet.create({
    container: {
        flex: 1,
    },
    items: {
        display: 'flex',
        height: 300,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 16,
        fontSize: 24,
        color: 'white',
    },
    avatar: {
        marginTop: 16,
        height: 100,
        width: 100,
        borderRadius: 100,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
    },
});


export default UserScreen;