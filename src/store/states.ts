import { createStoreContext } from "./zustand"
import { effects } from "./effetcs"

export interface IUseStore {
	image?: string
	imageList?: any[]
	effects: {
		setImage: (image: any) => void
		setImageList: (imageList: any) => void
		setIsLoading: (state: boolean) => void
	}
}

const INITIAL_STATE = (
	set: (newState: Record<string, unknown>) => void,
	get: () => IUseStore,
) => {
	return {
		name: "useStore",
		image: "",
		imageList: [],
	}
}

const storage = (
	set: (newState: Record<string, unknown>) => void,
	get: () => IUseStore,
) => ({
	...INITIAL_STATE(set, get),
	effects: effects(set, get),
})

export const useStore = createStoreContext(storage)
