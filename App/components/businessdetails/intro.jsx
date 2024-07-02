import React from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity,Linking,FlatList } from 'react-native';
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

    // For ActionButton
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
            name:'Shop',
            icon:require('./../../assets/images/shopping-bag.png'),
            url:'https://maps.app.goo.gl/ATHUgQxRBJjT7vp59?g_st=com.google.maps.preview.copy'+List?.address
        },

        {
            id:4,
            name:'Share',
            icon:require('./../../assets/images/share.png'),
            url:'tel:'+List?.contact
        },
    ]

    const OnPressHandle=(item)=>{
        if(item.name=='Share'){
            return;
        }
        Linking.openURL(item.url)
    }
    
    return (
        <View>

            <Image
                source={{ uri: List.imageUrl }}
                style={{ width: '100%', height: 340 }}
            />
            <View style={{ padding:20,paddingBottom:20,marginTop:-20,marginBottom:5,backgroundColor:'#fff',borderRadius:25}}>
                <Text style={{fontSize:26,fontFamily:'outfit-bold',paddingLeft:8}}>{List.name}</Text>
                <Text style={{fontSize: 16, fontFamily: 'outfit-medium',color:'#808080', paddingLeft:8}}>{List.price}</Text>
                <FlatList
                 data={actionButtonMenu}
                 numColumns={4}
                 columnWrapperStyle={{justifyContent:'space-between'}}
                 renderItem={({item,index})=>(
                    <TouchableOpacity key={index}
                        onPress={()=>OnPressHandle(item)}
                    >
                        
                        <Image source={item?.icon}
                        style={{width:50,height:50}}/>
                        <Text style={{fontFamily:'outfit-medium',textAlign:'center',marginTop:'5'}}>{item.name}</Text>
                    </TouchableOpacity>
                 )}
            />
            </View>
        </View>
    );
}
