export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const ADD_INPUT = 'ADD_INPUT'

export const addInput = (inputData) => ({
    type: ADD_INPUT,
    payload: inputData
  });