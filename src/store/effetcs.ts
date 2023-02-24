import { IUseStore } from "./states"

export const effects = (
	set: (newState: Record<string, unknown>) => void,
	get: () => IUseStore,
) => {
	const setImage = (image: any) => {
		set({ image })
	}

	const setImageList = (imageList: any) => {
		set({ imageList })
	}

	return { setImage, setImageList }
}
