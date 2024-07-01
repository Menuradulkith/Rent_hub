import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator,styleSheet } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import {  doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import Intro from '../../components/businessdetails/intro';
import ActionButton from '../../components/businessdetails/ActionButton';

export default function ItemDetail(){
    const {itemid}=useLocalSearchParams();
    const [List, ListDetails]=useState();
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        GetItemDetailsById();
    },[]);

    const GetItemDetailsById=async()=>{
        setLoading(true);
        const docRef=doc(db,'ItemList',itemid);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document data:", docSnap.data());
            ListDetails(docSnap.data());
            setLoading(false);

        }else{
            console.log("No such document!");
            setLoading(false);

        }
    }
    return(
        <View>
            {loading ? 
                <ActivityIndicator size="large" color="#000" style={{ marginTop: '30%' }} />:
           

                <View>
                    <Intro List={List}/>
                    
                    <ActionButton/>
                </View>
            }    


        </View>
    )
}

