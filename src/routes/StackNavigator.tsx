import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IStackParams } from './interfaces'
import { routes } from './routes'

const stack = createNativeStackNavigator<IStackParams>()

export const StackNavigator = () => {
  const { Navigator, Screen } = stack

  return (
    <Navigator screenOptions={{ headerShown: false }}>
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