import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export const PostScreen = () => {
    const imageUrl = "https://img5.goodfon.ru/wallpaper/big/f/24/ochki-kianu-rivz-protez-keanu-reeves-cyberpunk-2077-cd-proje.jpg"
    return (
        <View style={stylesContainer.general}>
            <View style={stylesContainer.topBar}>
                <Text style={stylesContainer.topBarText}>Lorem ipsum dolor</Text>
            </View>

            <View style={stylesContainer.post}>
                <Text style={stylesContainer.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    gravida odio, eget suscipit ipsum.</Text>
                <Text style={stylesContainer.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec gravida odio, eget suscipit ipsum. Proin malesuada purus urna, a commodo nisl varius id.
                    Sed efficitur massa eget metus blandit consequat. Vestibulum interdum fermentum mattis. Mauris ante
                    nibh, placerat in condimentum sit amet, viverra a nisi. Sed tellus velit</Text>
                <Text style={stylesContainer.tags}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={stylesContainer.date}>2022.23.23 01-12-34</Text>
                <View style={stylesContainer.userCard}>
                    <Image
                        style={stylesContainer.image}
                        source={{uri: imageUrl}}
                    />
                    <Text style={stylesContainer.userName}>Johny Silverhand</Text>
                </View>
            </View>
            <Pressable style={stylesContainer.button}>
                <Text style={stylesContainer.buttonText}>Like</Text>
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
    topBar: {
        width: "100%",
        height: 100,
        backgroundColor: 'dodgerblue',
        alignItems: "center",
        justifyContent: "center"
    },
    topBarText: {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 24,
        color: "white"
    },
    post: {
        margin: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        marginTop: 16,
        textAlign: 'center',
    },
    tags: {
        fontSize: 14,
        marginTop: 12,
        color: 'dodgerblue'
    },
    date: {
        marginTop: 8,
        fontSize: 14,
        color: 'gray'
    },
    userCard: {
        flexDirection: "row",
        marginTop: 16,
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderColor: 'dodgerblue',
        borderWidth: 4
    },
    userName: {
        marginStart: 8,
        fontWeight: "bold",
        fontSize: 20,
        color: 'dodgerblue'
    },
    button: {
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 24,
        backgroundColor: 'dodgerblue',
        width: "90%"
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        width: "100%",
        textAlign: "center"
    }
});