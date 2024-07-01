import {View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CategoryItem({category,onCategoryPress}){
    return(
        <TouchableOpacity onPress={()=>onCategoryPress(category)}>
            <View style={{padding:10}}>
                <Image source={{uri:category.icon}}
                style={{width:50,height:50,borderRadius:99}}/>
            </View>
            <Text style={{fontSize:12, fontFamily:'outfit-medium',textAlign:'center',marginBottom:15}}>{category.name}</Text>
        </TouchableOpacity>
    )
}