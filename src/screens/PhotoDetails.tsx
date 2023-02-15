
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import { IStackParams } from '../routes/interfaces'

interface IPhotoDetails extends NativeStackScreenProps<IStackParams, "PhotoDetails">{}

export const PhotoDetails = () => {
  return (
    <View>
      <Text>PhotoDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({})