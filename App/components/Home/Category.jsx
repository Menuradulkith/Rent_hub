import {View, Text, FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {collection,query,getDocs} from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig';
import { useState,useEffect } from 'react';

export default function Category(){

    const [categoryList, setCategoryList]=useState([]);

    useEffect(()=>{
        GetCategoryList()
    },[])
    const GetCategoryList= async()=>{
        setCategoryList([]);
        const q=query(collection(db,'Category'));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setCategoryList(prev=>[...prev,doc.data()])
        })
    }
    return(
        <View >
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ fontSize:18,fontFamily:'outfit-bold',marginTop:10,marginLeft:10}}>Category</Text>
                <Text style={{marginTop:10,marginRight:10}}>View All</Text>
            </View>
            <FlatList
                data={categoryList}
                horizontal={true}
                style={{padding: 10}}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => handleIconPress(item)}>
                        
                            <View>
                                <Image source={{uri: item.icon}}
                                       style={{width: 60, height: 60, borderRadius: 99, marginLeft: 15}}
                                />
                                <Text style={{fontSize: 12, fontFamily: 'outfit-Medium', textAlign: 'center', padding: 5, paddingLeft: 20}}>{item.name}</Text>
                            </View>
                        
                    </TouchableOpacity>
                 )} />
        </View>
    )
}



const handleIconPress = (item) => {
    // Handle icon press logic here
    console.log('Icon pressed:', item);
}