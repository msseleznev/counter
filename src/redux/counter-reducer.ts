import {ACTIONS_TYPE, CounterReducerType, SaveSettingsAC, SetFromLocalStorageAC} from "./actions";
import {Dispatch} from "redux";
import {AppStateType} from "./store";

const initialState = {
    counterValue: "",
    startValue: "",
    maxValue: "",
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: CounterReducerType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
            return {...state, maxValue: action.valueInput, counterValue: ''}
        case ACTIONS_TYPE.CHANGE_START_VALUE:
            return {...state, startValue: action.valueInput, counterValue: ''}
        case ACTIONS_TYPE.INCREMENT_COUNTER:
            return {...state, counterValue: (+state.counterValue + 1).toString()};
        case ACTIONS_TYPE.RESET_COUNTER:
            return {...state, counterValue: state.startValue}
        case ACTIONS_TYPE.SAVE_SETTINGS:
            return {...state, counterValue: state.startValue}
        case ACTIONS_TYPE.SET_VALUE_FROM_LOCAL_STORAGE:
            return {...state, startValue: action.startValue, maxValue: action.maxValue, counterValue: action.startValue }
        default:
            return state
    }
}

// THUNK
export const savaToLocalStorageTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
    let startValue = getState().counter.startValue
    let maxValue = getState().counter.maxValue
    localStorage.setItem('startValue', startValue)
    localStorage.setItem('maxValue', maxValue)
    dispatch(SaveSettingsAC())
}
export const setFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueStart = localStorage.getItem('startValue')
    let valueMax = localStorage.getItem('maxValue')
    if (valueStart && valueMax) {
        dispatch(SetFromLocalStorageAC(valueStart, valueMax))
    }
}