import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import ItemListCard from '../../components/ItemList/ItemListCard';
import { Ionicons } from '@expo/vector-icons';

export default function ItemCollection() {
    const navigation = useNavigation();
    /*useNavigation() is a hook provided by Expo's expo-router package. It gives you access to the navigation object that allows you to navigate between screens in your React Native app.*/
    const { category } = useLocalSearchParams();
    /*useLocalSearchParams() is used to retrieve parameters (like category in this case) from the current route's query parameters. This is often used when you want to pass data between screens or components via route parameters.*/
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true); // Initially set to true

    useEffect(() => {
        getItemList();
    }, [category]);

    const getItemList = async () => {
        setLoading(true); // Set loading state to true before fetching data
        
        const q = query(collection(db, 'ItemList'), where('category', '==', category));
        const querySnapshot = await getDocs(q);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        setItemList(items);
        setLoading(false); // Set loading state to false after data is fetched
    };

    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to previous screen
    };

    return (
        <View style={styles.container}>
            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{category}</Text>
            </View>

            {/* Item List */}
            {loading ? (
                <ActivityIndicator size="large" color="#000" style={{ marginTop: '30%' }} />
            ) : itemList.length > 0 ? (
                <FlatList
                    data={itemList}
                    renderItem={({ item }) => <ItemListCard List={item} key={item.id} />}
                    keyExtractor={(item) => item.id}
                    onRefresh={getItemList}
                    refreshing={loading}
                />
            ) : (
                <Text style={styles.noItemsText}>No Items Found</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#800080',
        paddingHorizontal: 10,
        height: 90,
    },
    backButton: {
        paddingHorizontal: 10,
        marginTop: 25,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 120,
        marginTop: 30,
    },
    noItemsText: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
        color: '#a8a8a6',
        textAlign: 'center',
        marginTop: '60%',
    },
});
