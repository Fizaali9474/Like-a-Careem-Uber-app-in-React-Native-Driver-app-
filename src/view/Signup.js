import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import { register } from "../config/firebase";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 /* const [age, setAge] = useState("");*/

  const handleSignup = async () => {
    try {
      await register({ email, password, username });
      navigation.navigate("driver");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
         uri:"data:image/jpeg;base64,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  "
        }}
        style={styles.background}
        resizeMode="contain"
        
      >
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
       {/* <TextInput
          style={styles.input}
          placeholder="age"
          type="text"
          secureTextEntry
          value={age}
          onChangeText={(e) => setAge(value)}
      />*/}
        <Button title="Signup" onPress={handleSignup} />
        <Text style={styles.text} onPress={() => navigation.navigate("login")}>
          <Text style={styles.work}>Already Have An Account ?
          </Text>
          Login
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
    
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
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

export default Signup; 

