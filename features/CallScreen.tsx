import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Feather} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Dirty Call Screen Layout
export function CallScreen() {
    const imageUrl = "https://img5.goodfon.ru/wallpaper/big/f/24/ochki-kianu-rivz-protez-keanu-reeves-cyberpunk-2077-cd-proje.jpg"
    return (
        <View style={featureStyles.container}>
            {CallTitle("Johny Silverhand", CallStatus.Calling)}
            <Image
                source={{uri: imageUrl}}
                style={{
                    width: '100%',
                    height: Dimensions.get('window').width,
                    marginTop: 16
                }}/>
            {CallScreenButtons()}

        </View>
    )
}

function CallTitle(
    name: String,
    status: CallStatus
) {
    return (
        <View style={{
            flexDirection: "column",
            marginHorizontal: 16,
        }}>
            <Text style={{
                color: Colors.white,
                fontSize: 28
            }}>{name}</Text>
            <Text style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: 14
            }}>{CallStatus[status].toUpperCase()}</Text>
        </View>
    )
}

function CallScreenButtons() {

    return (
        <View style={{
            paddingHorizontal: 24,
            flex: 1,
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>

            <TouchableOpacity style={featureStyles.iconButton}>
                <Feather name="volume-2" size={24} color="black"/>
            </TouchableOpacity>

            <TouchableOpacity style={featureStyles.redIconButton}>
                <Ionicons name="call" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={featureStyles.iconButton}>
                <FontAwesome name="microphone-slash" size={24} color="black" />
            </TouchableOpacity>

        </View>
    )
}


enum CallStatus {
    Calling,
    Talking,
    Error
}

const featureStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#075e54',
        paddingTop: 48
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
    },
    redIconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: "#a21919",
        borderRadius: 50,
    }
});