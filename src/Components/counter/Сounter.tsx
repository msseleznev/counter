import React from 'react';
import container from '../styles/Container.module.css'
import s from './Сounter.module.css'
import SuperButton from "../superButton/SuperButton";
import {StateType} from "../../App";

type PropsType = {
    inc: () => void
    rec: () => void
    state: StateType
}


export const Counter: React.FC<PropsType> = (
    {
        inc,
        rec,
        state
    }
) => {
    const checkDisableRec = state.counterValue === ""

    const checkDisableInc = checkDisableRec || state.counterValue === state.maxValue

    const finalClassName = checkDisableInc ? s.display_red : s.display

    const errorValue = state.startValue === "" || state.maxValue === ""
        ? "Enter start and max values"
        : +state.startValue >= +state.maxValue
            ? "Incorrect value!"
            : "Press 'set' to save"

    const displayValue = state.counterValue !== '' ? state.counterValue
        : (<div className={s.error}> {errorValue} </div>)


    return (
        <div className={container.container}>
            <div className={container.upperBox}>
                <div className={finalClassName}>
                    {displayValue}
                </div>

            </div>
            <div className={container.lowerBox}>
                <div className={s.buttons}>
                    <SuperButton disabled={checkDisableInc} onClick={inc}>
                        inc
                    </SuperButton>
                    <SuperButton disabled={checkDisableRec} onClick={rec}>
                        rec
                    </SuperButton>
                </div>
            </div>


        </div>
    );
}


