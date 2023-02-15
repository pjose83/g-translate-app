
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, StyleSheet, Text, View } from 'react-native'
import { IStackParams } from '../routes/interfaces'

interface IPhotoDetails extends NativeStackScreenProps<IStackParams, "PhotoDetails">{}

export const PhotoDetails = ({ navigation }: IPhotoDetails) => {
  return (
    <View>
      <Text>PhotoDetails</Text>
      <Button title='go to camera' onPress={() => navigation.navigate("Camera")} />
    </View>
  )
}

const styles = StyleSheet.create({})