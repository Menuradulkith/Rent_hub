import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import ItemListCard from '../../components/ItemList/ItemListCard';
import { Ionicons } from '@expo/vector-icons';

export default function ItemCollection() {
    const navigation = useNavigation();
    const { category } = useLocalSearchParams();
    const [itemList, setItemList] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() => {
        getItemList();
    }, [category]);

    const getItemList = async () => {
        try {
            setLoading(true);
            const q = query(collection(db, 'ItemList'), where('category', '==', category));
            const querySnapshot = await getDocs(q);

            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });

            setItemList(items);
        } catch (error) {
            console.error('Error fetching item list:', error);
            // Handle error state or display an error message
        }
        setLoading(false);
    };

    const handleBackPress = () => {
        // Navigate back to previous screen
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Text style={styles.backButtonText}><Ionicons name="chevron-back" size={24}  /></Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>{category}</Text>
            </View>
            {/* Item List */}
            {itemList.length > 0 ? (
               loading === false ? (
                  <FlatList
                    data={itemList}
                    onRefresh={getItemList}
                    refreshing={loading}
                    renderItem={({ item }) => (
                  <ItemListCard
                    List={item}
                    key={item.id}
                />
            )}
        />
    ) : (
        <ActivityIndicator size={'large'} color={'#000'} style={{marginTop:'30%'}} />
    )
) : (
    <Text style={{fontSize: 20, fontFamily: 'outfit-bold', color: '#a8a8a6', textAlign: 'center', marginTop: '60%'}}>No Item Found</Text>
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
        display:'flex',
        flexDirection:'row',
        
        alignItems: 'center',
        backgroundColor: '#800080',
        paddingHorizontal: 10,
        height: 90,
    },
    backButton: {
        paddingHorizontal: 10,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginTop:30
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:120,
        color: '#fff',
        
        marginTop:30
    },
});




