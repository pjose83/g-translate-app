import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { IStackParams } from './interfaces'
import { routes } from './routes'

const stack = createNativeStackNavigator<IStackParams>()

export const StackNavigator = () => {
  const { Navigator, Screen } = stack

  return (
    <Navigator>
      {routes.map(({ name, Component }) => (
        <Screen
          key={name}
          name={name}
          component={Component}
        />
      ))}
    </Navigator>
  )
}

const styles = StyleSheet.create({})