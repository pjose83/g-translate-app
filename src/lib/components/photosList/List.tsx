import { useState } from "react"
import { StyleSheet, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { COLORS } from "../../../constans"

interface IDataToRender {
  item: JSX.Element | JSX.Element[]
}

interface ITest {
  name: string
}

export const List = () => {
  const [galleryList, setGalleryList] = useState([])

  const test: ITest[] = [
    {
      name: "derwin",
    },
    {
      name: "jose",
    },
    {
      name: "mary",
    },
    {
      name: "chocolate",
    },
    {
      name: "cafe",
    },
  ]

  const dataToRender = ({ item }: { item: ITest }) => (
    <View style={styles.swipe}>
      <Text>{item.name}</Text>
    </View>
  )

  const hiddenDataToRender = () => <Text>Delete</Text>

  return (
    <SwipeListView
      style={styles.list}
      renderItem={dataToRender}
      data={test}
      renderHiddenItem={hiddenDataToRender}
      leftOpenValue={75}
      rightOpenValue={75}
      ItemSeparatorComponent={() => <View style={{ margin: 10 }}/>}
      
    />
  )
}

const styles = StyleSheet.create({
  swipe: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: COLORS.dark
    // alignSelf: "center"

  },
  list: {
    // flex: 1,
    width: "100%",
    // backgroundColor: "#f00",
    padding: 20
    
  }
})