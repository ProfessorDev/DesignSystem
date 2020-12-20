import React, { Children, cloneElement, ComponentType, createContext, ReactElement, ReactNode } from "react";
import { useRadioGroup, useRadio } from '@react-aria/radio'
import { useRadioGroupState, RadioGroupState } from '@react-stately/radio';
import { RadioGroupProps as RadioGroupPropsTypes } from "@react-types/radio";
import twx from "tailwindcssx";
import { RadioProps } from "./Radio";


export const RadioContext = createContext<RadioGroupState>(null!);

export interface RadioGroupProps extends RadioGroupPropsTypes {
    isEmphasized?: boolean,
    orientation?: 'vertical' | 'horizontal',
    isError?: boolean,
    labelPosition?: '' | '',
    necessityIndicator?: 'icon' | 'text'
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    let { 
        children, 
        label, 
        isEmphasized, 
        isDisabled, 
        isReadOnly, 
        isError, 
        labelPosition, 
        necessityIndicator = 'icon',
        orientation = 'vertical',
    } = props;

    let state = useRadioGroupState(props);
    let { radioGroupProps, labelProps } = useRadioGroup(
        props,
        state
    );

    return (
        <div
            {...radioGroupProps}
            className={twx([
                'inline-flex',
                isDisabled && 'opacity-30 border-opacity-30 bg-opacity-30 select-none',
            ])}
        >
            <span {...labelProps}>{label}</span>
            <div className={twx([
                'flex',
                orientation === "vertical" && 'flex-col',
                orientation === "horizontal" && 'flow-row',
            ])}>
                <RadioContext.Provider value={state}>
                    {Children.map(children, (child) => {
                        return cloneElement(child as ReactElement, {
                            isEmphasized,
                            isReadOnly,
                            isError
                        })
                    })}
                </RadioContext.Provider>
            </div>
        </div>
    );
}
