import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, ICONS } from "../../../constans"
import { useImageStore } from "../../../store/states"
import { useCamera } from "../../helpers"
import { Icon } from "../Icon"

export const PictureTaked = () => {
  const { deleteImage, saveImage } = useCamera()
  const { image } = useImageStore()

  return (
    <View style={{ flex: 1}}>
      <StatusBar
        hidden={false}
        backgroundColor={COLORS.dark}
        barStyle={"light-content"}
        translucent={true}
      />

      <Image
        source={{ uri: image || "" }}
        style={styles.picture}
      />

      <View style={styles.menu}>
        <TouchableOpacity activeOpacity={.5} onPress={deleteImage} style={styles.button}>
          <Icon name={ICONS.repeat} color="white" />
          <Text style={styles.textBtn}>Retake</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={saveImage} style={styles.button}>
          <Icon name={ICONS.check} color="white" />
          <Text style={styles.textBtn}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  picture: {
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
  button: {
    flexDirection: "row",
    alignItems: "center"
  },
  textBtn: {
    color: COLORS.light,
    fontSize: 16
  }
})