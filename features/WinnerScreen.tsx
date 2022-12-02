import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export const WinnerScreen = () => {
    const imageUrl = "https://img5.goodfon.ru/wallpaper/big/f/24/ochki-kianu-rivz-protez-keanu-reeves-cyberpunk-2077-cd-proje.jpg"
    return (
        <View style={stylesContainer.general}>
            <Image
                style={stylesContainer.image}
                source={{
                    uri: imageUrl
                }}
            />
            <Text style={stylesContainer.tittle}>Поздравления!</Text>
            <Text style={stylesContainer.description}>Пам парам Пам парам Пам парам Пам парам Пам парам Пам парам Пам парам Пам парам Пам парам Пам парам </Text>
            <Pressable style={stylesContainer.button}>
                <Text style={stylesContainer.buttonText}>Получить</Text>
            </Pressable>
        </View>
    )
}

const stylesContainer = StyleSheet.create({
    general: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    image: {
        marginTop: 60,
        width: 100,
        height: 100
    },
    tittle: {
        fontSize: 32,
        marginBottom: 16,
        color: 'gray',
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        color: 'gray',
        marginHorizontal: 32,
        textAlign: 'center',
        marginBottom: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 24,
        backgroundColor: 'dodgerblue',
        width: 160
    },
    buttonText: {
        color: 'white',
        fontSize: 18,

    }
});