// import { useEffect } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
// import TextRecognition from 'react-native-text-recognition'
import { COLORS, ICONS } from "../constans"
import { Icon } from "../lib/components"
import { IStackParams } from "../lib/models"
import { useStore } from "../store/states"
import axios from "axios"
import { useEffect } from "react"

interface IPhotoDetails
	extends NativeStackScreenProps<IStackParams, "PhotoDetails"> {}

export const PhotoDetails = ({ navigation, route }: IPhotoDetails | any) => {
	const goBack = () => navigation.goBack()
	console.log(route.params)

	const imageUri = route?.params?.uri

	// useEffect(() => {
	//   (async () => {
	//     if (true) {
	//       try {
	//         const a = await TextRecognition.recognize(imageList[0].uri)
	//         console.log(a)
	//       } catch (error) {
	//         console.log("Error on handleTextRecognition :", error)
	//       }
	//     }
	//   })()
	// }, [])

	const handleFormData = async () => {
		try {
			const formData = new FormData()

			formData.append("image", route.params.uri || "")

			const { data } = await axios.post(
				"https://api.api-ninjas.com/v1/imagetotext",
				{
					data: formData,
					enctype: "multipart/form-data",
					processData: false,
					contentType: false,
				},
			)

			console.log(
				"🚀 ~ file: PhotoDetails.tsx:53 ~ handleFormData ~ data:",
				data,
			)
			return data
		} catch (error) {
			console.log("Error on handleFormData :", error)
		}
	}


	useEffect(() => {
		handleFormData()
	}, [])

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.goBack}
				activeOpacity={0.5}
				onPress={goBack}>
				<Icon name={ICONS.backArrow} color={COLORS.dark} size={30} />
			</TouchableOpacity>
			<Image source={{ uri: imageUri }} style={styles.image} />
			<View style={styles.translateContainer}>
				<View style={styles.translateDescription}>
					<Text style={styles.translateTitle}>Original</Text>
					<Text style={styles.description}>image text</Text>
				</View>

				<View style={styles.translateDescription}>
					<Text style={styles.translateTitle}>Translation</Text>
					<Text style={styles.description}>image text</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: 300,
		height: 300,
		alignSelf: "center",
		marginVertical: 100,
	},
	translateContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
	},
	goBack: {
		backgroundColor: COLORS.primary,
		paddingVertical: 5,
		paddingHorizontal: 15,
		position: "absolute",
		top: 0,
		left: 0,
		borderBottomRightRadius: 50,
		borderTopRightRadius: 50,
	},
	translateTitle: {
		fontSize: 23,
		backgroundColor: COLORS.primary,
		width: "100%",
		textAlign: "center",
		marginBottom: 20,
	},
	translateDescription: {
		flex: 1,
	},
	description: {
		textAlign: "center",
		fontSize: 16,
	},
})
