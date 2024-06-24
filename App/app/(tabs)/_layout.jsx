import React from 'react'
import {Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';


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
            <Tabs.Screen name='explore'
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon:({color})=><Ionicons name="search" size={24} color={color} />
             }}
            />
            <Tabs.Screen name='profile'
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color} />,
                headerRight: () => <LogoutButton />,
            }}  
                      
            />
            
        </Tabs>

    )
}