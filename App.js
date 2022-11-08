import React, { useState } from 'react';
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function App(){
  let permission_status = getPermisions()
  const [torch,setTorch] = useState('off')
  console.log(`Re-rendering Navigator. Camera: ${permission_status} `);
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) return <Text>Loading..</Text>
  return (
    <SafeAreaView styles = {{flex : 1}}>
      <Camera torch={torch}
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      />
      <View>
          <TouchableOpacity
            onPress={() => setTorch('off')}
          >
            <Text>Torch Off</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTorch('on')}>
            <Text>Torch On</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
};

async function getPermisions(){
  const cameraPermission = await Camera.requestCameraPermission()
  return cameraPermission
}

export default App;
