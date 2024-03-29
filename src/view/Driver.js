 import React, { useEffect, useState } from 'react'
import { query, collection, onSnapshot, db, orderBy,doc,updateDoc } from '../config/firebase'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


function Driver() {
  const [currentRide, SetCurrentRide] = useState()
  /*const [isRequestAccepted, setIsRequestAccepted] = useState(false);
  const [isRequestRejected, setIsRequestRejected] = useState(false);
  const [pickup,setPickup ]=useState()
const [destination,setDestination]=useState()*/


  useEffect(() => {
    listenToRides()
  }, [])

  const listenToRides = () => {
    const q = query(collection(db, 'rides'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const rides = [];
      querySnapshot.forEach((doc) => {
        rides.push(doc.data());
      });
      console.log('current rides', rides);
      SetCurrentRide(rides[rides.length - 1])

      alert('New request')
    })
    return unsubscribe
  }

 const rejectRequest = () =>{
    SetCurrentRide('')
  }

 const acceptRequest=()=>{
 Alert.alert('Accepted')
 }

  return (
    <View >
      {currentRide && 
        <View>
          <Text>
            pickup:{currentRide.pickup.location.address}
            Destination:{currentRide.destination.location.address}
            car Type :{currentRide.carType}
           Fare:{currentRide.fare}
          </Text>

          <Button title="Accept" 
           onPress={acceptRequest} />
          <Button title="Reject" onPress={rejectRequest} />

        </View>
      }
    </View>
  )
}

export default Driver
