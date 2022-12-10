import {observer} from "mobx-react-lite";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import ProductStore from "../../store/ProductStore";
import {Product} from "../../models/Product";
import * as React from 'react';
import {Card} from '@rneui/base';


export const ProductListScreen = observer((
    {navigation}: { navigation: any }
) => {
    return <View style={styles.container}>
        <FlatList
            style={styles.products}
            data={ProductStore.products}
            renderItem={({item}) => ProductComponent(
                item,
                (product) => {
                    navigation.navigate('Product', {
                        item: item
                    })
                }
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
})

const ProductComponent = (
    product: Product,
    onClick: (product: Product) => void,
) => {
    return <TouchableOpacity onPress={() => {
        onClick(product)
    }}><Card containerStyle={styles.product} wrapperStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }}>
        <View style={{
            flexDirection: "row"
        }}>
            <Image
                style={{
                    height: 100,
                    width: 100,
                    shadowColor: "#ff00ef",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.9,
                    shadowRadius: 3,
                }}
                source={{uri: product.imageUrl}}
            />
            <View style={{marginStart: 16, justifyContent: "center"}}>
                <Text style={{fontSize: 18, fontWeight: "500"}}>{product.title}</Text>
                <Text style={{marginTop: 8, fontSize: 20, color: "gray"}}>{product.price}$</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => {
            ProductStore.handleFavourite(product)
        }}>
            <AntDesign name={product.isLiked ? "heart" : "hearto"} size={24} color="black"/>
        </TouchableOpacity>
    </Card>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
    },
    products: {
        flexDirection: "column",
    },
    product: {

        margin: 8,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "rgba(246,246,246,0.18)",
        elevation: 4,
    },
});