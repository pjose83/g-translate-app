import { Camera, PhotoDetails, PhotosList } from "../screens"
import { IRoutes } from "./interfaces"

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