import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/counter/Сounter";
import {Settings} from "./components/settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    IncrementCounterAC,
    ResetCounterAC, SaveSettingsAC,

} from "./redux/actions";



export const App = () => {

    const counterValue = useSelector<AppStateType, string>(state => state.counter.counterValue)
    const startValue = useSelector<AppStateType, string>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, string>(state => state.counter.maxValue)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(setFromLocalStorageTC())
    }, [])

    const inc = () => {
        dispatch(IncrementCounterAC())
    };
    //сброс счетчика
    const rec = () => {
        dispatch(ResetCounterAC())
    }

    // изменение значения инпута по тригеру, с проверкой недопустимого ввода
    const changeMaxValue = (valueInput: string) => {
        dispatch(ChangeMaxValueAC(valueInput))
    }
    const changeStartValue = (valueInput: string) => {
        dispatch(ChangeStartValueAC(valueInput))
    }

    //сохранение настроек
    const saveSettings = () => {
        dispatch(SaveSettingsAC())
    }

    return (
        <div className="App">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                counterValue={counterValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                saveSettings={saveSettings}
            />
            <Counter startValue={startValue}
                     maxValue={maxValue}
                     counterValue={counterValue}
                     rec={rec}
                     inc={inc}/>
        </div>
    );
}


