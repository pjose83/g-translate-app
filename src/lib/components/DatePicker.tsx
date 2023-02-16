import { StyleSheet, Text, View } from 'react-native'
import { BOX_RADIUS, COLORS } from '../../constans/globalStyles'
import { ICONS } from '../../constans/icons'
import { Icon } from './Icon'

export const DatePicker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <Icon name={ICONS.calendar} style={styles.calendarIcon} />
      </View>
      <Icon name={ICONS.search} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...BOX_RADIUS,
    width: "100%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 10
  },
  picker: {
    ...BOX_RADIUS,
    backgroundColor: COLORS.secondary,
    padding: 5,
    width: "90%",
    alignItems: "flex-start"
  },
  calendarIcon: {
    ...BOX_RADIUS,
    padding: 5,
    backgroundColor: COLORS.light
  }
})