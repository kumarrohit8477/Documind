import { Camera } from 'expo-camera';
import { useState, useRef } from 'react';
import { View, Button } from 'react-native';

export default function ScanScreen() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);

  if (!permission?.granted) {
    return <Button title="Allow Camera" onPress={requestPermission} />;
  }

  const takePicture = async () => {
    const photo = await cameraRef.current?.takePictureAsync({
      base64: true
    });

    // send photo.base64 to backend
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} />
      <Button title="Scan" onPress={takePicture} />
    </View>
  );
}