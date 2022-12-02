import {Image, ScrollView, StyleSheet, Text, View} from "react-native";


export const UserListScreen = () => {

    return (
        <ScrollView style={stylesContainer.scrollView}>
            {
                Array.from(Array(25).keys()).map(() =>
                    <UserItem/>
                )
            }
        </ScrollView>
    )
}

const UserItem = () => {
    const imageUrl = "https://img5.goodfon.ru/wallpaper/big/f/24/ochki-kianu-rivz-protez-keanu-reeves-cyberpunk-2077-cd-proje.jpg"


    return <View style={stylesContainer.item}>
        <Image style={stylesContainer.itemImage} source={{uri: imageUrl}}/>
        <Text style={stylesContainer.itemText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar</Text>
    </View>
}

const stylesContainer = StyleSheet.create({
    scrollView: {
        backgroundColor: 'gray',
        paddingTop: 8,
        paddingHorizontal: 8,

    },
    item: {
        flex: 1,
        flexDirection: "row",
        marginTop: 4,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white'
    },
    itemImage: {
        height: 48,
        width: 48,
        resizeMode: "stretch"
    },
    itemText: {
        marginStart: 8,
    }

});