import { useContext, useRef, useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { createAssetAsync } from 'expo-media-library'
// import { store } from '../context/store'
// import { getData, setData } from '../helpers/storage'

export const useCamera = () => {
	// const {
	// 	isModalVisible,
	// 	inputText,
	// 	galleryImg,
	// 	effects: {
	// 		setGalleryImg,
	// 		setIsModalVisible,
	// 		setInputText,
	// 	},
	// } = useContext(store)

	const [type, setType] = useState(CameraType.back)
	const [image, setImage] = useState(null)
	const [flash, setFlash] = useState(1)

	const cameraRef = useRef<Camera>(null)

	const takePicture = async () => {
		if (cameraRef) {
			try {
				const data = await cameraRef.current?.takePictureAsync()
				// setImage(uri)
				console.log(data?.uri)
			} catch (error) {
				console.log('Error on takePicture :', error)
			}
		}
	}

	// const saveImage = async () => {
	// 	if (image) {
	// 		try {
	// 			await createAssetAsync(image)
	// 			const newData = await getData('galleryList') || galleryImg
  //       const newGalleryImg = [{ desc: inputText, image }, ...newData]
	// 			setGalleryImg(newGalleryImg)
	// 			await setData('galleryList', newGalleryImg)
	// 			setImage(null)
	// 		} catch (error) {
	// 			console.log('Error on saveImage :', error)
	// 		}
	// 	}
	// }

	// const addDescription = () => {
	// 	setIsModalVisible(!isModalVisible)
	// 	setInputText('')
	// }

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
		// addDescription,
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
