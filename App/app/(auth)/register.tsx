import { Button, TextInput, View, StyleSheet,Pressable,Text,KeyboardAvoidingView, ScrollView ,Platform } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import Spinner from 'react-native-loading-spinner-overlay';
import { useState } from 'react';
import { Stack } from 'expo-router';
import LottieView from 'lottie-react-native';

const Register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  // Create the user and send the verification email
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      // Create the user on Clerk
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // Send verification Email
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to verify the email address
      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    }
     finally {
      setLoading(false);
    }
  };

  // Verify the email address
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } 
    finally {
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
        <LottieView style={{flex:1}} source={require('../../assets/animation/Animation - 1719238292553.json')} autoPlay loop/>
        </View>
    <View style={styles.container}>
    <Text style={{fontSize:35, fontFamily:'outfit-bold', paddingBottom:40,textAlign:'center'}}>Welcome!</Text>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />

      {!pendingVerification && (
        <View>
          <Text style={{padding:5}}>FirstName</Text>
            <TextInput
              autoCapitalize="none"
              value={firstName}
              placeholder="First Name..."
              onChangeText={(firstName) => setFirstName(firstName)}
              style={styles.inputField}
            />
          
          <Text style={{padding:5}}>LastName</Text>
            <TextInput
              autoCapitalize="none"
              value={lastName}
              placeholder="Last Name..."
              onChangeText={(lastName) => setLastName(lastName)}
              style={styles.inputField}
            />
          
          <Text style={{padding:5}}>Email</Text>
          <TextInput autoCapitalize="none" placeholder="simon@galaxies.dev" value={emailAddress} onChangeText={setEmailAddress} style={styles.inputField} />
          <Text style={{padding:5}}>Password</Text>
          <TextInput placeholder="password" value={password} onChangeText={setPassword} secureTextEntry style={styles.inputField} />
          

          <Pressable style={styles.button} onPress={onSignUpPress}>
          <Text style={styles.buttonText}>SignUp</Text>
         </Pressable>
        </View>
      )}

      {pendingVerification && (
        <View>
          <View>
            <TextInput value={code} placeholder="Code..." style={styles.inputField} onChangeText={setCode} />
          </View>
          <Button onPress={onPressVerify} title="Verify Email" color={'#6c47ff'}></Button>
        </View>
      )}
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
    paddingBottom:90,
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
  welcome:{
    height:310, 
    
  },
});

export default Register;
