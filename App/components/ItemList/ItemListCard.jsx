import {View, Text,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function ItemListCard({List}){
    const router=useRouter();
    return(
        <TouchableOpacity style={{padding:10,margin:10,borderRadius:15, backgroundColor:'#ffffff', display:'flex',flexDirection:'row'}}
            onPress={()=>router.push('/itemdetail/'+List.id)}
            
        >
           
           <Image source={{uri:List.imageUrl}}
                 style={{width:120, height:120, borderRadius:15}}
          />
          <View style={{marginLeft:30}}>
            <Text style={{fontSize:16}}>{List.name}</Text>
            <Text style={{fontSize: 13, fontFamily: 'outfit-medium',color:'#808080'}}>{List.price}</Text>
            <View style={{display:'flex',flexDirection:'row',marginTop:60,marginLeft:180}} >
               
                <Text style={{fontSize: 12, fontFamily: 'outfit-medium',color:'#808080'}}>{List.rating}</Text>
                <Image source={require('./../../assets/images/star.png')} style={{width:13,height:13}}/>
            </View>
          </View>
            
        </TouchableOpacity>
    )
}