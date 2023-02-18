import { create } from "zustand"

type imageType = string | null

interface IImageStore {
  image: imageType
  imageList: imageType[]
  setImage: (image: imageType) => void
}

export const useImageStore = create<IImageStore>((set) => ({
  image: null,
  imageList: [],
  setImage: (image) => set((state) => ({
    image: state.image = image
  }))
}))