import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from "../view/Signup"
import Login from "../view/Login"
import Driver from "../view/Driver"
import RideHistory from "../view/RideHistory";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Route() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Driver Navigator" component={DriverNavigator} />
      <Drawer.Screen name="History Navigator" component={HistoryNavigator} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Route;


function DriverNavigator(){
  
  return(
  
  <Stack.Navigator>
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="driver" component={Driver} />
      </Stack.Navigator> 
)}

function HistoryNavigator (){
  
  return(
  
  <Stack.Navigator>
        <Stack.Screen name="History" component={RideHistory} />
      </Stack.Navigator>
     
)}