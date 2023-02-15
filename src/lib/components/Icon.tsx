import { Ionicons } from "@expo/vector-icons"

interface IIcon {
  name: keyof typeof Ionicons.glyphMap
  size?: number
  color?: string
  style?: {}
}

export const Icon = ({ name, size=24, color="black", style }: IIcon) => {
  return (
    <Ionicons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  )
}
