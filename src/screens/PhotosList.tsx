import { useEffect } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { BOX_RADIUS, COLORS, SHADOW, ICONS } from "../constans"
import { DatePicker, Icon, EmptyList, List } from "../lib/components"
import { IStackParams } from "../lib/models"
import { useImageStore } from "../lib/helpers"
import { useStore } from "../store/states"

interface IPhotosList extends NativeStackScreenProps<IStackParams, "PhotosList">{}

export const PhotosList = ({ navigation }: IPhotosList) => {
  const navigateToCamera = () => navigation.navigate("Camera")
  const { imageList, image } = useStore()
  const { handleLoadImages } = useImageStore()

  useEffect(() => {
    (async () => {
      await handleLoadImages()
    })()
  }, [image])

  return (
    <View style={styles.container}>
      <DatePicker />
      {imageList.length ? <List /> : <EmptyList />}
      <TouchableOpacity
        style={styles.cameraBtn}
        activeOpacity={.5}
        onPress={navigateToCamera}
      >
        <Icon name={ICONS.camera} size={40} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.light
  },
  cameraBtn: {
    ...BOX_RADIUS,
    ...SHADOW,
    backgroundColor: COLORS.primary,
    padding: 10,
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 100
  }
})