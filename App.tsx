import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [count, setCount] = useState(0);
    const onPress: (isAddition: Boolean) => void = (isAddition: Boolean) => {
        let beAdded = isAddition ? 1 : -1
        setCount(prevCount => prevCount + beAdded)
    };

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Count: {count}</Text>
            </View>
            <View style={styles.countersContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        onPress(true)
                    }}
                >
                    <Text>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        onPress(false)
                    }}
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 16
    },
    countContainer: {
        alignItems: "center",
        padding: 16
    },
    countersContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 16
    }
});
