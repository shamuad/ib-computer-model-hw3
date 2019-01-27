export const ADD_MODEL = 'ADD_MODEL'

export function addModel(models) {
    return {
        type: ADD_MODEL,
        payload: models
    }
}
