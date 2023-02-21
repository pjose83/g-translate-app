
import { StyleSheet, View, Text, Button } from "react-native"
import { Camera as ExpoCamera } from "expo-camera"
import { useImageStore } from "../store/states"
import { CameraPreview, PictureTaked } from "../lib/components/camera"

export const Camera = () => {
  const [permission, requestPermission] = ExpoCamera.useCameraPermissions()

  const { image } = useImageStore()

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return image ? <PictureTaked /> : <CameraPreview />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
})