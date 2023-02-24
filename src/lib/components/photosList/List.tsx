import { Pressable, StyleSheet, Text, useWindowDimensions, View, Image } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { useNavigation } from "@react-navigation/native"
import { COLORS, ICONS } from "../../../constans"
import { useStore } from '../../../store/states'
import { useImageStore } from "../../helpers"
import { Icon } from "../Icon"

export const List = () => {
  const { width } = useWindowDimensions()

  const { imageList } = useStore()
  const { handleDeleteAsset } = useImageStore()

  const navigation = useNavigation<any>()

  const renderItem = ({ item }: { item: any }) => {
    const handleAssetView = () => navigation.navigate("PhotoDetails", item)
    return (
      <Pressable style={styles.swipe} onPress={handleAssetView}>
        <Text>{item.name}</Text>
        <Image source={{ uri: item.uri }} style={{ width: 60, height: 60, flex: 1 }} />
      </Pressable>
    )
  }

  const renderHiddenItem = () => (
    <View style={styles.delete}>
      <Icon name={ICONS.delete} />
    </View>
  )

  return (
    <SwipeListView
      style={styles.list}
      data={imageList}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      disableRightSwipe
      rightActivationValue={-199}
      rightActionValue={-width}
      swipeGestureEnded={handleDeleteAsset}
      onRightActionStatusChange={() => {}}
      ItemSeparatorComponent={() => <View style={{ margin: 5 }}/>}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  swipe: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2
  },
  list: {
    width: "100%",
    paddingVertical: 20
  },
  delete: {
    backgroundColor: COLORS.primary,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20
  }
})