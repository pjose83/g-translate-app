import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IRoutes, IStackParams } from '../lib/models'
import { Camera, PhotoDetails, PhotosList } from "../screens"

const stack = createNativeStackNavigator<IStackParams>()

export const routes: IRoutes[] = [
  {
    name: "PhotosList",
    Component: PhotosList
  },
  {
    name: "PhotoDetails",
    Component: PhotoDetails
  },
  {
    name: "Camera",
    Component: Camera
  }
]

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