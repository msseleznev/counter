import React, {ChangeEvent} from 'react';
import container from '../styles/Container.module.css'
import s from './Settings.module.css'
import SuperButton from "../superButton/SuperButton";
import SuperInputText from "../superInputText/SuperInputText";

type SettingsPropsType = {
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    saveSettings: () => void
    counterValue: string
    startValue: string
    maxValue: string
}


export const Settings: React.FC<SettingsPropsType> = (
    {
        changeMaxValue,
        changeStartValue,
        saveSettings,
        counterValue,
        startValue,
        maxValue
    }) => {

    const error = +startValue >= +maxValue
    const disabledHandler =
        !(startValue !== '' && maxValue !== ''
            && +startValue < +maxValue
            && counterValue === '')


    return (
        <div className={container.container}>
            <div className={container.upperBox}>
                <div className={s.settingItemBox}>
                    <div className={s.text}>
                        Max value:
                    </div>
                    <div>
                        <SuperInputText value={maxValue}
                                        onChange={changeMaxValue}
                                        error={error}/>
                    </div>
                </div>
                <div className={s.settingItemBox}>
                    <div className={s.text}>
                        Start value:
                    </div>
                    <div>
                        <SuperInputText value={startValue}
                                        onChange={changeStartValue}
                                        error={error}/>
                    </div>

                </div>
            </div>

            <div className={container.lowerBox}>
                <SuperButton onClick={saveSettings} disabled={disabledHandler}>
                    set
                </SuperButton>
            </div>


        </div>
    );
}


