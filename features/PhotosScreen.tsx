import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const imageUrl = "https://img5.goodfon.ru/wallpaper/big/f/24/ochki-kianu-rivz-protez-keanu-reeves-cyberpunk-2077-cd-proje.jpg"

const PhotosScreen = () => {
    return (
        <View style={styleContainer.container}>
            {
                Array.from(Array(17).keys()).map(_ =>
                    <Image style={styleContainer.photo} source={{uri: imageUrl}}/>
                )
            }
        </View>
    )
}

const styleContainer = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    photo: {
        height: 100,
        width: '33%',
        borderWidth: 3,
        borderColor: 'white',
        resizeMode: 'stretch'
    }
});


export default PhotosScreen;