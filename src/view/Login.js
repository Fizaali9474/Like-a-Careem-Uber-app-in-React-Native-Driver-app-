import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Image,Text, ImageBackground } from 'react-native';
import { login } from '../config/firebase';

function Login({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async() => {
   
    try{
      await login({email, password})
      navigation.navigate('driver')
 }catch (e) {
   alert(e.message)
 }
  };

  return (
    <View style={styles.container}>
    <ImageBackground
        source={{
   uri:"https://atlanticoilstore.com/wp-content/uploads/Screenshot_3.png "
        }}
        style={styles.background}
        resizeMode="contain"
        
      >
      <TextInput
        style={styles.input}
        placeholder="Email"
        type="text"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        type="password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button style={styles.loginButton}
      title="Login" onPress={handleLogin}
       />
        <Text style={styles.text} onPress={()=> navigation.navigate('signup') }>
          <Text style={styles.work}>Dont Have An Account ?</Text>
          Signup
          </Text>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height:"100%",
    
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor :'green'
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    opacity: 0.8,
    fontStyle:"normal",
    
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  work:{
    fontWeight:"normal",
    
  }
});

export default Login;