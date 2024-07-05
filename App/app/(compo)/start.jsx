
//import Icon from 'react-native-vector-icons/FontAwesome';
import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Pressable, Text, Alert,Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';




export default function Start() {



        return (
        <View style={{
            backgroundColor: 'rgba(140, 120, 240, 1)',
            height: '100%'
        }}>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 100
            }}>
                <Image source={require('./../../assets/images/login.png')} 
                    style={{
                        width: 220,
                        height: 450,
                        borderRadius: 20,
                        borderWidth: 6,
                        borderColor: '#000'
                    }}
                />
            </View>

            <View style={{backgroundColor: 'rgba(140, 120, 240, 1)',padding: 20, alignItems: 'center',marginTop:-20}} >  
                <Text style={{color: '#fff', fontSize: 25, fontFamily: 'outfit-bold', textAlign: 'center'}}>Youth Ultimate
                    <Text style={{color: '#000000'}}> Community Business Directory</Text> App
                </Text> 
                <Text style={{fontSize: 16, fontFamily: 'outfit', textAlign: 'center', marginVertical: 20, color: '#000000'}}>Find your favourite business near your and post your own business to your community</Text>

            </View>
            <Link href="/login" asChild>
            <Pressable  >
            <Text style={{color:'#fff',fontFamily:'outfit',fontSize:18}}>Get Start  </Text>
            </Pressable>
            </Link>            
            

        </View>
    );
    
}