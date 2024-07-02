import {View, Text} from 'react-native'
import React from 'react'

export default function About({List}){
    return(
        <View style={{padding:20,backgroundColor:'#fff',borderTopRightRadius:25,borderTopLeftRadius:25}}>
            <Text style={{fontFamily:'outfit-bold',fontSize:20}}>More Details</Text>
            <Text style={{fontFamily:'outfit',lineHeight:20}}>{List?.about}</Text>
        </View>
    )
}