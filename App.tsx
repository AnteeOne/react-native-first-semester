import {AntDesign, Feather} from '@expo/vector-icons';
import {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './src/styles';

enum Operation {
    'SUM',
    'SUB',
    'MUL',
    'DIV'
}

export default function App() {
    function clear() {
        setOperation(null);
        setResult(0);
    }

    function sum() {
        setOperation(Operation.SUM);
        setResult(firstValue + secondValue);
    }

    function sub() {
        setOperation(Operation.SUB);
        setResult(firstValue - secondValue);
    }

    function multiply() {
        setOperation(Operation.MUL);
        setResult(firstValue * secondValue);
    }

    function div() {
        setOperation(Operation.DIV);

        if (secondValue != 0) {
            setResult(firstValue / secondValue);
        }
    }

    let [firstValue, setFirstValue] = useState<number>(0);
    let [secondValue, setSecondValue] = useState<number>(0);
    let [result, setResult] = useState<number>(0);
    let [operation, setOperation] = useState<Operation | null>();

    useEffect(() => {
        clear();
    }, [firstValue, secondValue]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculator</Text>

            <TextInput style={styles.text}
                       editable={true}
                       value={String(firstValue)}
                       onChangeText={(text) => setFirstValue(Number(text))}
            />

            <TextInput style={styles.text}
                       editable={true}
                       value={String(secondValue)}
                       onChangeText={(text) => setSecondValue(Number(text))}
            />


            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={sum}>
                    <Feather
                        color='black'
                        name='plus'
                        size={48}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={sub}>
                    <Feather
                        color='black'
                        name='minus'
                        size={48}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={multiply}>
                    <AntDesign
                        color='black'
                        name='close'
                        size={48}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={div}>
                    <Feather
                        color='black'
                        name='divide'
                        size={48}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>{String(result)}</Text>
        </View>
    );
}
