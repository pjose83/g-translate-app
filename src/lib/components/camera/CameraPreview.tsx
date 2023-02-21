import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Camera as ExpoCamera } from "expo-camera"
import { COLORS, ICONS } from "../../../constans"
import { useCamera } from "../../helpers"
import { Icon } from "../Icon"
import { usePermissions } from "expo-media-library"
import { useEffect } from "react"



export const CameraPreview = () => {
  const [permissionResponse, requestPermission] = usePermissions();
  const { toggleCameraFlash, toggleCameraType, flash, type, cameraRef, takePicture } = useCamera()

  const navigator = useNavigation()

  const cancelPicture = () => navigator.goBack()

  const flashIcon = flash === 1 ? ICONS.flash : ICONS.flashOff

  useEffect(() => {requestPermission()},[])

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={COLORS.dark}
        barStyle={"light-content"}
        translucent={true}
      />
      <View style={styles.closeContainer}>
        <TouchableOpacity activeOpacity={.5} onPress={cancelPicture}>
          <Icon name={ICONS.close} color="white" size={34} />
        </TouchableOpacity>
      </View>

      <ExpoCamera style={styles.camera} type={type} flashMode={flash} ref={cameraRef} />

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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  camera: {
    flex: 1
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
})