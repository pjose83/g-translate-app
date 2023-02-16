
import { useState } from 'react'
import { StyleSheet, View, Dimensions, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Camera as ExpoCamera } from 'expo-camera'
import { COLORS,ICONS } from '../constans'
import { Icon } from '../lib/components'
import { useCamera } from '../lib/helpers'

export const Camera = () => {
  const [permission, requestPermission] = ExpoCamera.useCameraPermissions();
  const navigator = useNavigation()
  const { toggleCameraFlash, toggleCameraType, flash, type, cameraRef, takePicture } = useCamera()

  const cancelPicture = () => navigator.goBack()

  const flashIcon = flash === 1 ? ICONS.flash : ICONS.flashOff

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.closeContainer}>
        <TouchableOpacity activeOpacity={.5} onPress={cancelPicture}>
          <Icon name={ICONS.close} color="white" size={34} />
        </TouchableOpacity>
      </View>
      <ExpoCamera style={styles.camera} type={type} zoom={0} flashMode={flash} ref={cameraRef} />
      <View style={styles.menu}>
        <TouchableOpacity activeOpacity={.5} onPress={toggleCameraFlash}>
          <Icon name={flashIcon} color="white" size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={takePicture}>
          <Icon name={ICONS.takePicture} color="white" size={70} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={toggleCameraType}>
          <Icon name={ICONS.toggleCameraType} color="white" size={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  menu: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  closeContainer: {
    backgroundColor: COLORS.dark,
    paddingVertical: 10,
    paddingHorizontal: 20
  }
});