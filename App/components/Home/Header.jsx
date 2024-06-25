import { View, Text, Image } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

export default function Header() {
    const { user } = useUser();
    
    return (
        <View style={{
            padding: 20,
            paddingTop: 40,
            backgroundColor: '#fff'
         }}>
            <View>
                <Image
                    source={{ uri: user?.imageUrl }}
                    style={{
                        width: 46,
                        height: 46,
                        borderRadius: 99
                    }}
                />
            </View>
        </View>
    );
}