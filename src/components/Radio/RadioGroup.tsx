import React, { Children, cloneElement, createContext, ReactElement } from "react";
import { useRadioGroup } from '@react-aria/radio'
import { useRadioGroupState, RadioGroupState } from '@react-stately/radio';
import { RadioGroupProps as RadioGroupPropsTypes } from "@react-types/radio";
import twx from "tailwindcssx";


export const RadioContext = createContext<RadioGroupState>(null!);

export interface RadioGroupProps extends RadioGroupPropsTypes {
    isEmphasized?: boolean,
    orientation?: 'vertical' | 'horizontal',
    isError?: boolean,
    labelPosition?: 'left' | 'top',
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
        isRequired,
        labelPosition = "top",
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
                labelPosition === "left" && "flex-row",
                labelPosition === "top" && "flex-col",
            ])}
        >
            <span {...labelProps} className={twx([
                "text-xs",
                labelPosition === "left" && "mr-2",
                labelPosition === "top" && "mb-2",
            ])}>
                {label}
                <span className="ml-1">
                    {necessityIndicator === 'icon' && isRequired && "*"}
                    {necessityIndicator === 'text' && isRequired && "(required)"}
                    {necessityIndicator === 'text' && !isRequired && "(optional)"}
                </span>
            </span>
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
