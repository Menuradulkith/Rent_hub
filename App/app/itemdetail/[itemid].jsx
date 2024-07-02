import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator,styleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import {  doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import Intro from '../../components/businessdetails/intro';
import { Ionicons } from '@expo/vector-icons';
import About from '../../components/businessdetails/About';
import {useRouter} from 'expo-router';
import Reviews from '../../components/businessdetails/Reviews';

export default function ItemDetail(){

    const router =useRouter();
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
           //change-- ListDetails(docSnap.data());
            ListDetails({id:docSnap.id,...docSnap.data()});
            setLoading(false);

        }else{
            console.log("No such document!");
            setLoading(false);

        }
    }
    return(
        <View style={{backgroundColor: '#f0f0f0'}}>

                <View style={{position:'absolute',zIndex:10, display:'flex',flexDirection:'row', justifyContent:'space-between',width:'100%',padding:15,marginTop:20}}>
                <TouchableOpacity onPress={()=>router.back()}>
                   <Ionicons name="arrow-back-circle" size={35} color="#6c47ff" /> 
                </TouchableOpacity>
                
                
                   <Ionicons name="heart-outline" size={35} color="#6c47ff" />
                </View>
            {loading ? 
                <ActivityIndicator size="large" color="#000" style={{ marginTop: '30%' }} />:


           

                <ScrollView >
                    <Intro List={List}/>

                    <About List={List}/>

                    <Reviews List={List}/>
                </ScrollView>
            }    


        </View>
    )
}

