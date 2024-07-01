import React from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router';

export default function Intro({ List }) {
    const router =useRouter();
    if (!List) {
        // If List is undefined or null (or any falsy value), display a loading indicator or a message
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    // Once List is defined and has data, render the content
    
    return (
        <View>
            <View style={{position:'absolute',zIndex:10, display:'flex',flexDirection:'row', justifyContent:'space-between',width:'100%',padding:15,marginTop:20}}>
               <TouchableOpacity onPress={()=>router.back()}>
                  <Ionicons name="arrow-back-circle" size={35} color="#fff" /> 
               </TouchableOpacity>
               
               
                  <Ionicons name="heart-outline" size={35} color="black" />
            </View>
            <Image
                source={{ uri: List.imageUrl }}
                style={{ width: '100%', height: 340 }}
            />
            <View style={{ padding:20,marginTop:-20,backgroundColor:'#fff',borderTopLeftRadius:25,borderTopRightRadius:25}}>
                <Text style={{fontSize:26,fontFamily:'outfit-bold',paddingLeft:8}}>{List.name}</Text>
                <Text style={{fontSize: 18, fontFamily: 'outfit-medium',color:'#808080', paddingLeft:8}}>{List.price}</Text>
            </View>
        </View>
    );
}
