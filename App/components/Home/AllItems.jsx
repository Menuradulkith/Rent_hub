import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { useRouter } from 'expo-router';

export default function AllItem() {
    const router = useRouter();
    const [allList, setAllList] = useState([]);

    useEffect(() => {
        getAllList();
    }, []);

    const getAllList = async () => {
        try {
            const q = query(collection(db, 'ItemList'));
            const querySnapshot = await getDocs(q);

            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() });
            });
            setAllList(items);
        } catch (error) {
            console.error('Error fetching items: ', error);
        }
    };

    const renderGridItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => router.push("/itemdetail/" + item?.id)} style={{ flex: 1, padding: 5 }}>
                <View style={{ borderRadius: 10, backgroundColor: '#fff',marginTop:10 }}>
                    <Image source={{ uri: item?.imageUrl }} style={{ width: '100%', height: 150, borderRadius: 10 }} />
                    <Text style={{ fontSize: 16, fontFamily: 'outfit-bold', textAlign: 'center', marginTop: 8 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 8, marginTop: 5 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'outfit-medium', color: '#808080' }}>{item.price}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'outfit-medium', color: '#808080' }}>{item.rating}</Text>
                            <Image source={require('./../../assets/images/star.png')} style={{ width: 13, height: 13, marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={allList}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
            numColumns={2} // Display two items per row
        />
    );
}
