import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { COLORS } from "./src/constans"
import { StackNavigator } from "./src/routes/StackNavigator"

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          hidden={false}
          backgroundColor={COLORS.light}
          barStyle={"dark-content"}
          translucent={true}
        />
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})
