import {View, Text, TextInput, TouchableOpacity,Image} from 'react-native'
import { useUser } from '@clerk/clerk-expo';
import {Rating} from 'react-native-ratings'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'; 
import { db } from '../../configs/FirebaseConfig';
import React, { useState} from 'react';

export default function Reviews({List}){
    const [rating,setRating]=useState(4);
    const [userInput,setUserInput]=useState();
    const user=useUser();

    const onSubmit=async()=>{
         const docRef=doc(db,'ItemList',List?.id)  
         await updateDoc(docRef,{
            reviews:arrayUnion({
                rating:rating,
                comment:userInput,
              
               
                
            })
         })
        }
    return(
        
        <View style={{padding:20,backgroundColor:'#fff'}}>
            <Text style={{fontFamily:'outfit-bold',fontSize:20}}>Reviews</Text>
            <View>
                <Rating
                     showRating={false}
                     imageSize={20}
                     onFinishRating={(rating) =>setRating(rating)}
                     style={{paddingVertical: 10}}
                     
                />
                <TextInput placeholder='Write your comment . . . ' placeholderTextColor="#B2BEB5"
                     numberOfLines={4}
                     onChangeText={(value) =>setUserInput(value)}
                     style={{borderWidth: 1,borderColor: '#a8a8a6', padding:10, borderRadius:10, textAlignverrtical:'top'}}
                />
                <TouchableOpacity disabled={!userInput} onPress={()=>onSubmit()} style={{    backgroundColor: '#6c47ff',padding: 8,borderRadius: 10,alignItems: 'center', marginTop: 5, width:'17%' }}>
                    <Text style={{fontFamily:'outfit',color:'#fff'}}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}