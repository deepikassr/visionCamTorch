import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function App(){
  let permission_status = getPermisions()
  const [torch,setTorch] = useState('off')
  console.log(`Re-rendering Navigator. Camera: ${permission_status} `);
  const devices = useCameraDevices()
  const device = devices.back
  const torchHandler = () =>{
    if(torch == 'on'){
      setTorch('off')
    }else if(torch == 'off'){
      setTorch('on')
    }
  }

  if (device == null) return <Text>Loading..</Text>
  return (
    <View>
      <Camera torch={torch}
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      />
      <View>
          <TouchableOpacity
            onPress={torchHandler}
          >
            <Text>Torch</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
};

async function getPermisions(){
  const cameraPermission = await Camera.requestCameraPermission()
  return cameraPermission
}

export default App;
