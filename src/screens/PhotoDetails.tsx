
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IStackParams } from "../lib/models"
import { Icon } from "../lib/components"
import { COLORS, ICONS } from "../constans"

interface IPhotoDetails extends NativeStackScreenProps<IStackParams, "PhotoDetails">{}

export const PhotoDetails = ({ navigation, route }: IPhotoDetails)  => {

  const goBack = () => navigation.goBack()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} activeOpacity={.5} onPress={goBack}>
        <Icon name={ICONS.backArrow} color={COLORS.dark} size={30} />
      </TouchableOpacity>
      <Image source={{ uri: route.params }} style={styles.image} />
      <View style={styles.translateContainer}>
        <View style={styles.translateDescription}>
          <Text style={styles.translateTitle}>Original</Text>
          <Text style={styles.description}>image text</Text>
        </View>

        <View style={styles.translateDescription}>
          <Text style={styles.translateTitle}>Translation</Text>
          <Text style={styles.description}>image text</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginVertical: 100
  },
  translateContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  goBack: {
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50
  },
  translateTitle: {
    fontSize: 23,
    backgroundColor: COLORS.primary,
    width: "100%",
    textAlign: "center",
    marginBottom: 20
  },
  translateDescription: {
    flex: 1,
  },
  description: {
    textAlign: "center",
    fontSize: 16
  }
})