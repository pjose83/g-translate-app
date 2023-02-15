import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, StyleSheet, Text, View } from 'react-native'
import { IStackParams } from '../routes/interfaces'

interface IPhotosList extends NativeStackScreenProps<IStackParams, "PhotosList">{}

export const PhotosList = ({ navigation }: IPhotosList) => {
  return (
    <View>
      <Text>PhotosList</Text>
      <Button title='go to details' onPress={() => navigation.navigate("PhotoDetails")} />
    </View>
  )
}

const styles = StyleSheet.create({})