import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Pressable, Text, Alert,KeyboardAvoidingView, ScrollView ,Platform} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LottieView from 'lottie-react-native';

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
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior="padding"
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
  >
    <ScrollView style={styles.content}>
      <View style={styles.welcome}>
        <LottieView style={{flex:1}} source={require('../../assets/animation/2.json')} autoPlay loop/>
      </View>
      <Text style={{fontSize:35,padding:20,marginBottom:10,marginTop:-40,color:'#fff'}}>Welcome to MisterMR!!</Text>
    <View style={styles.container}>
      <Spinner visible={loading} />
      <Text style={{fontSize:33, fontFamily:'outfit-bold', paddingBottom:30,textAlign:'center'}}>Hi!, Please Login</Text>
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
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  content:{
    backgroundColor:'#6c47ff',
    padding:5,

  },
  container: {
    
    justifyContent: 'center',
    padding: 20,
    paddingBottom:140,
    width: '100%',
    height: '65%',
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 40, 
    //borderBottomLeftRadius: 0, 
    //borderBottomRightRadius: 0,
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
  welcome:{
    height:310, 
    
  },

});

export default Login;
