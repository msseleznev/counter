import React from 'react';
import container from '../styles/Container.module.css'
import s from './Сounter.module.css'
import SuperButton from "../superButton/SuperButton";


type PropsType = {
    inc: () => void
    rec: () => void
    counterValue: string
    startValue: string
    maxValue: string
}


export const Counter: React.FC<PropsType> = props => {
    const {
        inc,
        rec,
        counterValue,
        startValue,
        maxValue
    } = props;

    const checkDisableRec = counterValue === ""

    const checkDisableInc = checkDisableRec || counterValue === maxValue

    const finalClassName = checkDisableInc ? s.display_red : s.display

    const errorValue = startValue === "" || maxValue === ""
        ? "Enter start and max values"
        : +startValue >= +maxValue
            ? "Incorrect value!"
            : "Press 'set' to save"

    const displayValue = counterValue !== '' ? counterValue
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


