import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const ButtonsScreen = () => {
    const [pressedCount, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setCount(pressedCount + 1)}
                style={{
                    marginTop: 16,
                    height: 60,
                    width: 120,
                    backgroundColor: pressedCount >= 3 ? "gray" : "black",

                }}
                disabled={pressedCount >= 3}>

                <Text style={styles.text}>{pressedCount}</Text>

            </Pressable>
            <Pressable
                onPress={() => setCount(0)}
                style={styles.secondButton}>

                <Text style={styles.text}>Enable button</Text>

            </Pressable>
        </View>
    );
}

const TextInputsScreen = () => {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <View style={styles.container}>
            {
                !isAuthenticated ? (
                    <>
                        <TextInput
                            value={userName}
                            style={{
                                fontSize: 16,
                                padding: 8,
                                marginTop: 16,
                                width: "80%",
                                backgroundColor: 'rgba(203,195,195,0.4)',
                                borderWidth: 2,
                                borderColor: userName.length > 0 ? 'rgba(203,195,195,0.4)' : "red"
                            }}
                            onChange={(prevText) => setUserName(prevText.nativeEvent.text)}
                        />
                        <TextInput
                            value={userPassword}
                            style={{
                                fontSize: 16,
                                padding: 8,
                                marginTop: 8,
                                width: "80%",
                                backgroundColor: 'rgba(203,195,195,0.4)',
                                borderWidth: 2,
                                borderColor: userPassword.length >= 8 ? 'rgba(203,195,195,0.4)' : "red"
                            }}
                            onChange={val => setUserPassword(val.nativeEvent.text)}
                            secureTextEntry={true}
                        />
                        <Pressable
                            onPress={() => {
                                if (userPassword.length >= 8 && userName.length > 0) setIsAuthenticated(true)
                            }}
                            style={{
                                flexDirection: "column",
                                marginTop: 16,
                                height: 60,
                                width: 120,
                                backgroundColor: userPassword.length >= 8 && userName.length > 0 ? "black" : "gray",
                                borderRadius: 16,
                                justifyContent: "center"

                            }}>

                            <Text style={styles.text}>Login</Text>
                        </Pressable>
                    </>
                ) : <Text style={{fontSize: 20}}>{`Hi ${userName}!`} </Text>
            }
        </View>
    )
}

const App = () => {
    return TextInputsScreen()
}
export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    secondButton: {
        flexDirection: "column",
        marginTop: 16,
        height: 60,
        width: 120,
        backgroundColor: "black",
        borderRadius: 16,
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    }
});
