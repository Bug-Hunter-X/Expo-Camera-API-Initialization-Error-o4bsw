The solution involves using the `Camera.isReady` prop to check if the camera is ready before attempting any operations such as using `Camera.useCamera` or `Camera.takePicture`. This ensures the camera is initialized and ready to function properly. 
```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = () => {
    setIsReady(true);
  };

  const takePicture = async () => {
    if (isReady) {
      if (hasPermission) {
        let photo = await cameraRef.current.takePictureAsync();
        console.log(photo);
      } else {
        console.log('No permission');
      }
    } else {
      console.log('Camera not ready');
    }
  };

  if (hasPermission === null) {
    return <View><Text>Requesting permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef} onCameraReady={handleCameraReady}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={takePicture}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: '#fff' }}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default App;
```