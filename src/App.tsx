import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/counter/Сounter";
import {Settings} from "./Components/settings/Settings";

export type StateType = {
    counterValue: string
    startValue: string
    maxValue: string

}

export const App = () => {
    const [state, setState] = useState<StateType>({
        counterValue: "",
        startValue: "",
        maxValue: "",

    })
    useEffect(() => {
        let valueStart = localStorage.getItem('startValue')
        let valueMax = localStorage.getItem('maxValue')
        if (valueStart && valueMax) {
            setState({...state, startValue: valueStart, maxValue: valueMax, counterValue: valueStart})
        }
    }, [])

    const setToLocalStorage = () => {
        localStorage.setItem('startValue', state.startValue)
        localStorage.setItem('maxValue', state.maxValue)
    }

    const inc = () => {
        setState({...state, counterValue: (Number(state.counterValue) + 1).toString()});
    };
    //сброс счетчика
    const rec = () => {
        setState({...state, counterValue: state.startValue});
    }

    //меняем стартовое значение
    const changeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/^0+(?!$)/, "").trim()
        if (!isFinite(+value)) return;
        setState({...state, startValue: value, counterValue: ''},)
    }
    //меняем максимальное значение
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/^0+(?!$)/, "").trim()
        if (!isFinite(+value)) return;
        setState({...state, maxValue: value, counterValue: ''})
    }

    //сохранение настроек
    const saveSettings = () => {
        setState({...state, counterValue: state.startValue})
        setToLocalStorage()
    }

    return (
        <div className="App">
            <Settings
                startValue={state.startValue}
                maxValue={state.maxValue}
                counterValue={state.counterValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                saveSettings={saveSettings}
            />
            <Counter state={state}
                     rec={rec}
                     inc={inc}/>
        </div>
    );
}


