import React, {ChangeEvent} from 'react';
import container from '../styles/Container.module.css'
import s from './Settings.module.css'
import SuperButton from "../superButton/SuperButton";
import SuperInputText from "../superInputText/SuperInputText";

type SettingsPropsType = {
    changeMaxValue: (valueInput: string) => void
    changeStartValue: (valueInput: string) => void
    saveSettings: () => void
    counterValue: string
    startValue: string
    maxValue: string
}


export const Settings: React.FC<SettingsPropsType> = props => {
    const {
        changeMaxValue,
        changeStartValue,
        saveSettings,
        counterValue,
        startValue,
        maxValue,
    } = props;

    const error = +startValue >= +maxValue
    const disabledHandler =
        !(startValue !== '' && maxValue !== ''
            && +startValue < +maxValue
            && counterValue === '')

    const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueInput = e.currentTarget.value
            .replace(/^0+(?!$)/, "")
            .replace(/\./g, "")
            .trim()
        if (!isFinite(+valueInput)) return;
        if (e.currentTarget.dataset.value) {
            const trigger: string = e.currentTarget.dataset.value
            if (trigger === 'max' && valueInput.length <= 7)
                changeMaxValue(valueInput)
            else if (trigger === 'start' && valueInput.length <= 7)
                changeStartValue(valueInput)
        }
    }

    return (
        <div className={container.container}>
            <div className={container.upperBox}>
                <div className={s.settingItemBox}>
                    <div className={s.text}>
                        Max value:
                    </div>
                    <div>
                        <SuperInputText data-value='max'
                                        value={maxValue}
                                        onChange={valueHandler}
                                        error={error}/>
                    </div>
                </div>
                <div className={s.settingItemBox}>
                    <div className={s.text}>
                        Start value:
                    </div>
                    <div>
                        <SuperInputText data-value='start'
                                        value={startValue}
                                        onChange={valueHandler}
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


