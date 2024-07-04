import {View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CategoryItem({category,onCategoryPress}){
    return(
        <TouchableOpacity onPress={()=>onCategoryPress(category)} style={{paddingLeft:5}}>
            <View style={{padding:10,marginBottom:-8}}>
                <Image source={{uri:category.icon}}
                style={{width:55,height:55,borderRadius:99}}/>
            </View>
            <Text style={{fontSize:13, fontFamily:'outfit-medium',textAlign:'center',marginBottom:15}}>{category.name}</Text>
        </TouchableOpacity>
    )
}