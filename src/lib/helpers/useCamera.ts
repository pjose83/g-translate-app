import { useContext, useRef, useState } from "react"
import { Camera, CameraCapturedPicture, CameraPictureOptions, CameraType } from "expo-camera"
import { createAssetAsync } from "expo-media-library"
import { useImageStore } from "../../store/states"
// import { store } from "../context/store"
// import { getData, setData } from "../helpers/storage"

export const useCamera = () => {
	const [type, setType] = useState(CameraType.back)
	// const [image, setImage] = useState(null)
	const [flash, setFlash] = useState(1)

	const cameraRef = useRef<Camera>(null)
	const { setImage, image } = useImageStore()

	const takePicture = async () => {
		if (cameraRef) {
			try {
				const { uri } = await cameraRef.current?.takePictureAsync() as CameraCapturedPicture
				const date  = new Date()
				setImage(uri)
				console.log()
				console.log(date.toDateString())
			} catch (error) {
				console.log("Error on takePicture :", error)
			}
		}
	}

	const saveImage = async () => {
		if (image) {
			try {
				await createAssetAsync(image)
        // const newGalleryImg = [{ desc: inputText, image }, ...newData]
				// setGalleryImg(newGalleryImg)
				// setImage(null)
			} catch (error) {
				console.log("Error on saveImage :", error)
			}
		}
	}

	const deleteImage = () => setImage(null)

	const toggleCameraType = () => {
    const changeType = type === CameraType.back ? CameraType.front : CameraType.back
		setType(changeType)
  }

	const toggleCameraFlash = () => {
    const showFlash = flash === 1 ? 2 : 1
		setFlash(showFlash)
  }

	return {
		takePicture,
		deleteImage,
		// saveImage,
		toggleCameraFlash,
		toggleCameraType,
		image,
		type,
		flash,
		cameraRef,
	}
}
