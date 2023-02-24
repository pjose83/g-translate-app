/* eslint-disable */
import { create } from "zustand"
import { createTrackedSelector } from "react-tracked"

const newComputed = (initialStore: any, storeComputed: any) => (set: (newState: object) => void, get: () => any, api: any) => {
  const setWithComputed = (propsToUpdate: any) => {
    set((state: object) => {
      const updatedProps = typeof propsToUpdate === "object" ? propsToUpdate : propsToUpdate(state)

      const { name: nameStore } = get()

      // console.log(`  applying ${nameStore} `, updatedProps)

      const stateBeforeComputation = { ...state, ...updatedProps }

      // console.log(`  new state ${nameStore} `, stateBeforeComputation)

      const computedState = typeof storeComputed === "function" ? storeComputed(stateBeforeComputation, get()) : {}

      const newState = { ...stateBeforeComputation, ...computedState }

      // if (Object.keys(computedState).length > 0) console.log(`  new state ${nameStore} before computedState`, newState)

      return newState
    })
  }

  api.setState = setWithComputed

  const state = initialStore(setWithComputed, get)

  const storeWithFirstComputed = { ...state, ...storeComputed(state, get()) }

  return storeWithFirstComputed
}

export const createStoreContext = (initialStore: any, storeComputed: any = () => ({})) => {
  const store = create(newComputed(initialStore, storeComputed))
  const trackedStorage = createTrackedSelector(store)

  return trackedStorage
}