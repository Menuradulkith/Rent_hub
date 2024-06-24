import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Pressable, Text, Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.content}>
    <View style={styles.container}>
      <Spinner visible={loading} />
      <Text style={{fontSize:33,fontFamily:, paddingBottom:30}}>Hi</Text>
      <Text style={{padding:5}}>Email</Text>
      <TextInput  autoCapitalize="none" placeholder="example@gmail.com" value={emailAddress} onChangeText={setEmailAddress} style={styles.inputField} />
      <Text  style={{padding:5}}>Password</Text>
      <TextInput placeholder="password" value={password} onChangeText={setPassword} secureTextEntry style={styles.inputField} />
      <Link href="/reset" asChild>
        <Pressable >
        <Text style={styles.linkText}>Forgot password?</Text>
        </Pressable>
      </Link>

      <Pressable style={styles.button} onPress={onSignInPress}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Link href="/register" asChild>
        <Pressable style={styles.signUpButton}>
          <Text style={styles.signUpText}>SignUp</Text>
        </Pressable>
      </Link>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content:{
    backgroundColor:'#6c47ff'

  },
  container: {
    marginTop:'80%',
    justifyContent: 'center',
    padding: 20,
    paddingBottom:120,
    width: '100%',
    height: '65%',
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 40, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0,
    shadowColor: '#000000', // Shadow color
    shadowOffset: { width: 0, height: 0 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 10, // Shadow radius
    elevation: 5,
   
  
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#6c47ff',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  label: {
    marginVertical: 4,
    fontSize: 16,
    color: 'rgba(75, 85, 99, 1)',
  },
  linkText: {
    fontSize: 12,
    color: 'rgba(75, 85, 99, 1)',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#6c47ff',
    padding: 12,
    borderRadius: 99,
    alignItems: 'center',
    marginTop: 16,
    width:'60%',
    marginLeft:'20%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signUpButton: {
    backgroundColor: '#6c47ff',
    padding: 12,
    borderRadius: 99,
    alignItems: 'center',
    marginTop: 12,
    width:'60%',
    marginLeft:'20%',
  },
  signUpText: {
    color: '#fff',
    fontSize: 18,
  },

});

export default Login;
