import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLORS } from '../../../constans'
import avatar from "../../../../assets/avatar.png"
import arrow from "../../../../assets/arrow.png"

const { width } = Dimensions.get("window")

export const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Image source={avatar} />
      <Text style={styles.strongText}>There is nothing to show</Text>
      <Text style={styles.softText}>Ups it seems you have no images yet</Text>
      <Image
        source={arrow}
        style={styles.arrow}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
})
