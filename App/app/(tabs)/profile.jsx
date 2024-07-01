import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function profile() {

  /*  const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);*/

    return (
        <View>
            <Text>profile</Text>
        </View>
    );
}