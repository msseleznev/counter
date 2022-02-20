import React, {ChangeEvent} from 'react';
import SuperInputText from "../../superInputText/SuperInputText";
import s from './SettingItem.module.css'


type propsType = {
    settingValue: string
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: string
    maxValue: string
}


export function SettingItem(props: propsType) {
    /*const finalClassName = `
    ${props.data === props.end ? c.display_red : c.display}`*/
    const onchangeHandler = () => {
        if(props.settingValue === "Max value") {
            return props.changeStartValue
        } else {
            return props.changeMaxValue
        }
    }
    const valueHandler = () => {
        if(props.settingValue === "Max value") {
            return props.maxValue
        } else {
            return props.startValue
        }
    }

    return (
        <div className={s.settingItemBox}>
            <div>
                {props.settingValue + ':'}
            </div>
            <div>
                <SuperInputText onChange={onchangeHandler}
                value={valueHandler()}/>
            </div>


        </div>


    );
}


