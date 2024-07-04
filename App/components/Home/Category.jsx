import {View, Text, FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {collection,query,getDocs} from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig';
import { useState,useEffect } from 'react';
import {useRouter} from 'expo-router';
import CategoryItem from '../../components/Home/CategoryItem';

export default function Category(){

    const [categoryList, setCategoryList]=useState([]);
    const router = useRouter();

    useEffect(()=>{
        GetCategoryList()
    },[])
    const GetCategoryList= async()=>{
        
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
                <Text style={{ fontSize:18,fontFamily:'outfit',marginTop:10,marginLeft:10}}>Category</Text>
                <Text style={{marginTop:10,marginRight:10}}>View All</Text>
            </View>
            <FlatList
                data={categoryList}
                horizontal={true}
                
                renderItem={({item, index}) => (
                    <CategoryItem 
                    category={item} 
                    key={index}
                    onCategoryPress={(category)=>router.push('/itemlist/'+ item.name)}
                    />

                 )} />
        </View>
    )
}






