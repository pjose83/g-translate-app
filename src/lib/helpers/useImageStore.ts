import { deleteAssetsAsync, getAlbumAsync, getAssetsAsync } from "expo-media-library"
import { SwipeGestureEndedData } from "react-native-swipe-list-view"
import { useStore } from "../../store/states"

export const useImageStore = () => {
  const { imageList, effects } = useStore()
  const { setImageList } = effects

  const handleLoadImages = async () => {
    try {
      const getAlbum = await getAlbumAsync("Image-to-Text")
      const { assets } = await getAssetsAsync({ album: getAlbum })
			const dataToShow = getAlbum ? assets : []
      setImageList(dataToShow)
    } catch(error) {
      console.log("Error on loadImages :", error)
    }
  }

  const handleDeleteAsset = async (rowKey: string, data: SwipeGestureEndedData) => {
    try {
      if (data.translateX < -200) {
        const assetToDelete = imageList.find((item: any) => item.id === rowKey)
        await deleteAssetsAsync(assetToDelete)
        await handleLoadImages()
      }
    } catch (error) {
      console.log("Error on deleteRow")
    }
  };

  return {
    handleDeleteAsset,
    handleLoadImages
  }
}
