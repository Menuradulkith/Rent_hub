import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function profile() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerStyle:{
                backgroundColor: '#800080',
            },
            headerTitleStyle: {
                fontSize: 20, // Custom font size for the header title
                fontWeight: 'outfit-bold', // Custom font weight for the header title
                color: '#fff', // Custom color for the header title
                textAlign: 'center', // Center align the header title
            },
        });
    }, []);

    return (
        <View>
           
        </View>
    );
}