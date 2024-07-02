import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {collection, query, getDocs, limit} from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig';
import {useState, useEffect} from 'react';
import {useRouter} from 'expo-router';

export default function PopularItems() {
    const router = useRouter();
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        GetItemList();
    }, []);

    const GetItemList = async () => {
        setItemList([]);
        const q = query(collection(db, 'ItemList'), limit(10));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data);
            setItemList(prev => [...prev, {id:doc.id,...doc.data()}]);
        });
    }

    return (
        <View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18, fontFamily: 'outfit-bold', marginLeft: 10}}>Popular Items</Text>
                <Text style={{marginRight: 10}}>View All</Text>
            </View>

            <FlatList
                data={itemList}
                horizontal={true}
                style={{padding: 10}}
                renderItem={({item, index}) => (
                    
                       
                            <TouchableOpacity onPress={()=>router.push("/itemdetail/"+item?.id)} style={{borderWidth: 6, borderColor: '#fff', borderRadius: 12,backgroundColor:'#fff',marginLeft:10}} >
                                <Image source={{uri: item?.imageUrl}}
                                        style={{width: 200, height: 130,  borderRadius: 12}}
                                />
                                <Text style={{fontSize: 12, fontFamily: 'outfit-bold', textAlign: 'center'}}>{item.name}</Text>
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12, fontFamily: 'outfit-medium',marginTop:8,color:'#808080'}}>{item.price}</Text>
                                <Text style={{fontSize: 12, fontFamily: 'outfit-medium',marginTop:8,color:'#808080',paddingLeft:90}}>{item.rating}</Text>
                                <Image source={require('./../../assets/images/star.png')} style={{width:13,height:13,marginTop:8}}/>
                                </View>
                            </TouchableOpacity>
                        
                    
                )}
            />
        </View>
    );
}

const handleItemPress = (item) => {
    // Handle item press logic here
    console.log('Item pressed:', item);
}