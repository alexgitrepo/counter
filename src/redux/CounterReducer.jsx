const ON_INC_BUTTON = 'ON_INC_BUTTON'
const ON_RESET_BUTTON = 'ON_RESET_BUTTON'
const INC_BUTTON_IS_DISABLED = 'INC_BUTTON_IS_DISABLED'
const RESET_BUTTON_IS_DISABLED = 'RESET_BUTTON_IS_DISABLED'


let initialState = {
    input: {isActiveStyle: false, currentCount: 0, maxCount: 5},
    buttons: [{title: 'INC', isDisabled: false}, {title: 'RESET', isDisabled: true}]
}


const counterReducer = (state = initialState, action) => {

    if (action.type === ON_INC_BUTTON) {
        let newCount = state.input.currentCount
        newCount++
        if (newCount === state.input.maxCount) {
            return {
                ...state, input: {...state.input, currentCount: newCount, isActiveStyle: true},
                buttons: [{title: 'INC', isDisabled: true}, {title: 'RESET', isDisabled: false}]
            }
        } else
            return {
                ...state, input: {...state.input, currentCount: newCount},
                buttons: [{title: 'INC', isDisabled: false}, {title: 'RESET', isDisabled: false}]
            }

    } else if (action.type === ON_RESET_BUTTON) {
        return {
            ...state, input: {...state.input, isActiveStyle: false, currentCount: 0},
            buttons: [{title: 'INC', isDisabled: false}, {title: 'RESET', isDisabled: true}]
        }
    }
    return state
}
export default counterReducer

export const onIncButtonActionCreator = () => ({type: ON_INC_BUTTON})
export const onResetButtonActionCreator = () => ({type: ON_RESET_BUTTON})
export const IncButtonIsDisabledActionCreator = () => ({type: INC_BUTTON_IS_DISABLED})
export const resetButtonIsDisabledActionCreator = () => ({type: RESET_BUTTON_IS_DISABLED})