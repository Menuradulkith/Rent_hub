import {View, Text, FlatList,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionButton(List){

    const actionButtonMenu=[
        {
            id:1,
            name:'Call',
            icon:require('./../../assets/images/mobile.png'),
            url:'tel:'+List?.contact
        },
        {
            id:2,
            name:'Location',
            icon:require('./../../assets/images/location.png'),
            url:'https://maps.app.goo.gl/ATHUgQxRBJjT7vp59?g_st=com.google.maps.preview.copy'+List?.address
        },
        {
            id:3,
            name:'Share',
            icon:require('./../../assets/images/share.png'),
            url:'tel:'+List?.contact
        },
    ]

    const OnPressHandle=(item)=>{
        Linking.openURL(item.url)
    }
    return(
        <View style={{backgroundColor:'#fff', padding:20}}>
            <FlatList
                 data={actionButtonMenu}
                 numColumns={4}
                 columnWrapperStyle={{justifyContent:'space-between'}}
                 renderItem={({item,index})=>(
                    <TouchableOpacity>
                        onPress={()=>OnPressHandle(item)}
                        <Image source={item?.icon}
                        style={{width:50,height:50}}/>
                        <Text style={{fontFamily:'outfit-medium',textAlign:'center',marginTop:'5'}}>{item.name}</Text>
                    </TouchableOpacity>
                 )}
            />
        </View>
    )
}