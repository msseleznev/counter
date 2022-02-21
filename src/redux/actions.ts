export enum ACTIONS_TYPE {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER',
    SAVE_SETTINGS = 'SAVE_SETTINGS',
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
    CHANGE_START_VALUE = 'CHANGE_START_VALUE',
    SET_VALUE_FROM_LOCAL_STORAGE = 'SET_VALUE_FROM_LOCAL_STORAGE',
}

type IncrementCounterType = {
    type: ACTIONS_TYPE.INCREMENT_COUNTER
}
type ResetCounterType = {
    type: ACTIONS_TYPE.RESET_COUNTER
}
type SaveSettingsType = {
    type: ACTIONS_TYPE.SAVE_SETTINGS
}
type ChangeMaxValueType = {
    type: ACTIONS_TYPE.CHANGE_MAX_VALUE
    valueInput: string
}
type ChangeStarValueType = {
    type: ACTIONS_TYPE.CHANGE_START_VALUE
    valueInput: string
}
type SetFromLocalStorageType = {
    type: ACTIONS_TYPE.SET_VALUE_FROM_LOCAL_STORAGE
    startValue: string
    maxValue: string
}
export type CounterReducerType = IncrementCounterType
    | ChangeMaxValueType
    | ChangeStarValueType
    | ResetCounterType
    | SaveSettingsType
    | SetFromLocalStorageType


export const IncrementCounterAC = () => {
    return {
        type: ACTIONS_TYPE.INCREMENT_COUNTER,
    }
}

export const ResetCounterAC = () => {
    return {
        type: ACTIONS_TYPE.RESET_COUNTER
    }
}

export const SaveSettingsAC = () => {
    return {
        type: ACTIONS_TYPE.SAVE_SETTINGS
    }
}

export const ChangeStartValueAC = (valueInput: string): ChangeStarValueType => {
    return {
        type: ACTIONS_TYPE.CHANGE_START_VALUE,
        valueInput: valueInput
    }
}

export const ChangeMaxValueAC = (valueInput: string): ChangeMaxValueType => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
        valueInput: valueInput

    }
}

export const SetFromLocalStorageAC = (startValue: string, maxValue: string): SetFromLocalStorageType => {
    return {
        type: ACTIONS_TYPE.SET_VALUE_FROM_LOCAL_STORAGE,
        startValue: startValue,
        maxValue: maxValue,
    }
}


