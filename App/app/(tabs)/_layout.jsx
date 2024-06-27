import React from 'react'
import {Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export const LogoutButton = () => {
    const { signOut } = useAuth();
  
    const doLogout = () => {
      signOut();
    };
  
    return (
      <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
        <Ionicons name="log-out-outline" size={24} color={'#000'} />
      </Pressable>
    );
  };


export default function TabLayout(){
    return(
        <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.PRIMARY}}>
            <Tabs.Screen name='home'
            options={{
                tabBarLabel: 'Home',
                tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
            }}
            />
            <Tabs.Screen name='shop'
            options={{
                tabBarLabel: 'Shop',
                tabBarIcon:({color})=><MaterialCommunityIcons name="shopping-outline" size={24} color={color} /> 
             }}
            />

            <Tabs.Screen name='cart'
            options={{
                tabBarLabel: 'cart',
                tabBarIcon:({color})=><Ionicons name="cart-outline" size={24} color={color} />
                
            }}  
                      
            />
            <Tabs.Screen name='profile'
            options={{
                tabBarLabel: 'Account',
                tabBarIcon:({color})=><MaterialCommunityIcons name="account-outline" size={24} color={color} />,
                headerRight: () => <LogoutButton />,
            }}  
                      
            />
            
        </Tabs>

    )
}