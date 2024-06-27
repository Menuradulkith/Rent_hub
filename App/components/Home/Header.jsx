import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Header() {
    const { user } = useUser();
    
    return (
        <View style={{
            padding: 20,
            paddingTop: 43,
            backgroundColor: '#800080',
            display:'flex',
            flexDirection:'row',
         }}>
            <View>
                <Image
                    source={{ uri: user?.imageUrl }}
                    style={{
                        width: 46,
                        height: 46,
                        borderRadius: 99,
                        
                    }}
                />
            </View>
            <View style={styles.search}>
               <Ionicons name="search" size={24} color="black" />
               <TextInput placeholder="search" placeholderTextColor="#B2BEB5"/>

            </View>
            <View style={{marginLeft:50, marginTop:15}}><FontAwesome6 name="bars" size={22} color="#fff" /></View>
        </View>
    );
}

const styles= StyleSheet.create({
    search:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 5,
        height: 40,
        width:'60%',
        borderWidth: 1,
        borderColor: '#301934',
        borderRadius: 18,
        padding: 10,
        backgroundColor: '#fff',
        marginLeft:30,
        

    }
})
