import { StyleSheet, Text, View } from 'react-native'
import { boxRadius, colors } from '../../constans/globalStyles'
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
    ...boxRadius,
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 10
  },
  picker: {
    ...boxRadius,
    backgroundColor: colors.secondary,
    padding: 5,
    width: "90%",
    alignItems: "flex-start"
  },
  calendarIcon: {
    ...boxRadius,
    padding: 5,
    backgroundColor: colors.light
  }
})