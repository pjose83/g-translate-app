import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type IStackParams = {
  PhotosList: undefined
  PhotoDetails: undefined
  Camera: undefined
}

export interface IRoutes {
  name: keyof IStackParams
  Component:(props: NativeStackScreenProps<IStackParams, any>) => JSX.Element
}