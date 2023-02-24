import { useRef, useState } from "react"
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera"
import { createAssetAsync, createAlbumAsync } from "expo-media-library"
import { useStore } from "../../store/states"

export const useCamera = () => {
	const { image, effects } = useStore()
	const { setImage } = effects
	const [type, setType] = useState(CameraType.back)
	const [flash, setFlash] = useState(1)

	const cameraRef = useRef<Camera>(null)

	const takePicture = async () => {
		if (cameraRef) {
			try {
				const { uri } = await cameraRef.current?.takePictureAsync() as CameraCapturedPicture
				await setImage(uri)
			} catch (error) {
				console.log("Error on takePicture :", error)
			}
		}
	}

	const saveImage = async () => {
		if (image) {
			try {
				const asset = await createAssetAsync(image)
				await createAlbumAsync("Image-to-Text", asset)
				setImage(null)
			} catch (error) {
				console.log("Error on saveImage :", error)
			}
		}
	}

	const deleteImage = () => setImage(null)

	const toggleCameraType = () => {
		const changeType =
			type === CameraType.back ? CameraType.front : CameraType.back
		setType(changeType)
	}

	const toggleCameraFlash = () => {
		const showFlash = flash === 1 ? 2 : 1
		setFlash(showFlash)
	}

	return {
		takePicture,
		deleteImage,
		saveImage,
		toggleCameraFlash,
		toggleCameraType,
		image,
		type,
		flash,
		cameraRef
	}
}
