import { View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {collection,query,getDocs} from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig';
import { useState,useEffect } from 'react';

export default function Slider(){

    const[sliderList, setSliderList]=useState([]);

    useEffect(()=>{
        getSliderList();
    },[]);

    const getSliderList= async ()=>{
        setSliderList([]);
        const q=query(collection(db , 'Slider'));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);
        })
    }
    return(
        <View>
            <View style={{display:'flex',flexDirection:'row'}}>
            <Text style={{ fontSize:18,fontFamily:'outfit-bold',marginTop:10,marginLeft:10}}>#Special</Text>
            <Text style={{ fontSize:18,fontFamily:'outfit-bold',marginTop:10,marginLeft:3,color:'#ff0f0f'}}>Offers</Text>
            </View>
            <FlatList
                data={sliderList}
                horizontal={true}
                style={{paddingLeft:15,paddingTop:20}}
                renderItem={({item,index})=>(
                    <Image source={{uri:item.imageUrl}}
                    style={{
                        width:320,
                        height:160,
                        borderRadius:15,
                        marginRight:10,
                        padding:20,
                        borderWidth: 2,
                        borderColor: '#000',
                        marginTop:-10
                        
                    }} />
                )}
            />
        </View>
    )
}