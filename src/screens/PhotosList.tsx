import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { BOX_RADIUS, COLORS, SHADOW } from "../constans/globalStyles"
import { DatePicker } from "../lib/components/DatePicker"
import { IStackParams } from "../lib/models"
import { Icon } from "../lib/components/Icon"
import { ICONS } from "../constans/icons"
import { EmptyList } from "../lib/components"
import { useImageStore } from "../store/states"
import { List } from "../lib/components/photosList/List"

interface IPhotosList extends NativeStackScreenProps<IStackParams, "PhotosList">{}

export const PhotosList = ({ navigation }: IPhotosList) => {
  const navigateToCamera = () => navigation.navigate("Camera")

  const { imageList } = useImageStore()

  return (
    <View style={styles.container}>
      <DatePicker />
      {/* {imageList.length ? <></> : <EmptyList />} */}
      <List />
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