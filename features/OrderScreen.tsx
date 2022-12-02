import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {AntDesign, FontAwesome} from '@expo/vector-icons';


export const OrderScreen = () => {
    const imageUrl = "https://cdn.urbanvibes.com/upload/mdm/media_content/resize/646/1000_1000_462f/62560780299.jpg"
    return (
        <View style={stylesContainer.general}>
            <Image
                style={stylesContainer.image}
                source={{uri: imageUrl}}
            />
            <Text style={stylesContainer.title}>Adidas Sneakers</Text>
            <Text style={stylesContainer.price}>$ 12.22</Text>
            <Text style={stylesContainer.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec gravida odio, eget suscipit ipsum. Proin malesuada purus urna, a commodo nisl varius id. Sed
                efficitur massa eget metus blandit consequat. Vestibulum interdum fermentum mattis. Mauris ante nibh,
                placerat in condimentum sit amet, viverra a nisi. </Text>

            <View style={stylesContainer.stars}>
                <AntDesign name="staro" size={32} color="gold"/>
                <AntDesign name="staro" size={32} color="gold"/>
                <AntDesign name="staro" size={32} color="gold"/>
                <AntDesign name="staro" size={32} color="gold"/>
                <AntDesign name="staro" size={32} color="gold"/>
            </View>
            <View style={stylesContainer.colors}>
                <FontAwesome name="circle" size={32} color="blue" style={stylesContainer.color}/>
                <FontAwesome name="circle" size={32} color="pink" style={stylesContainer.color}/>
                <FontAwesome name="circle" size={32} color="dodgerblue" style={stylesContainer.color}/>
                <FontAwesome name="circle" size={32} color="green" style={stylesContainer.color}/>
                <FontAwesome name="circle" size={32} color="orange" style={stylesContainer.color}/>
                <FontAwesome name="circle" size={32} color="red" style={stylesContainer.color}/>
            </View>
            <View style={stylesContainer.sizes}>
                <View style={stylesContainer.size}>
                    <Text style={stylesContainer.sizeText}>S</Text>
                </View>
                <View style={stylesContainer.size}>
                    <Text style={stylesContainer.sizeText}>M</Text>
                </View>
                <View style={stylesContainer.size}>
                    <Text style={stylesContainer.sizeText}>L</Text>
                </View>
                <View style={stylesContainer.size}>
                    <Text style={stylesContainer.sizeText}>XL</Text>
                </View>
            </View>
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
        alignItems: "center",
    },
    image: {
        marginTop: 60,
        width: 200,
        height: 200
    },
    title: {
        fontSize: 32,
        marginTop: 16,
        textAlign: 'center'
    },
    price: {
        fontSize: 18,
        color: 'green',
        marginTop: 8,
        marginHorizontal: 32,
        textAlign: 'center',
    },
    stars: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 24
    },
    colors: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16
    },
    color: {
        marginHorizontal: 1,
    },
    sizes: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16
    },
    size: {
        flexDirection: "column",
        marginHorizontal: 1,
        borderRadius: 100,
        height: 36,
        width: 36,
        borderWidth: 1,
        justifyContent: "center"
    },
    sizeText: {
        textAlign: "center",
        fontSize: 18
    },
    description: {
        fontSize: 16,
        color: 'gray',
        marginTop: 16,
        marginHorizontal: 32,
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 24,
        backgroundColor: 'dodgerblue',
        width: "90%"
    },
    buttonText: {
        color: 'white',
        fontSize: 18,

    }
});