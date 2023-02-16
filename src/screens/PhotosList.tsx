import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import { BOX_RADIUS, COLORS, SHADOW } from '../constans/globalStyles'
import { DatePicker } from '../lib/components/DatePicker'
import { IStackParams } from '../lib/models'
import { Icon } from '../lib/components/Icon'
import { ICONS } from '../constans/icons'
import avatar from "../../assets/avatar.png"
import arrow from '../../assets/arrow.png'

const { width } = Dimensions.get("window")

interface IPhotosList extends NativeStackScreenProps<IStackParams, "PhotosList">{}

export const PhotosList = ({ navigation }: IPhotosList) => {
  const navigateToCamera = () => navigation.navigate("Camera")

  return (
    <View style={styles.container}>
      <DatePicker />
      <View style={styles.emptyList}>
        <Image source={avatar} />
        <Text style={styles.strongText}>There is nothing to show</Text>
        <Text style={styles.softText}>Ups it seems you have no images yet</Text>
        <Image
          source={arrow}
          style={styles.arrow}
        />
      </View>
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
  },
  emptyList: {
    alignItems: "center",
    marginBottom: 20
  },
  strongText: {
    color: COLORS.dark,
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center"
  },
  softText: {
    color: COLORS.tertiary,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
    width: width * .4,
    marginBottom: 20
  },
  arrow: {
    marginLeft: 50,
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