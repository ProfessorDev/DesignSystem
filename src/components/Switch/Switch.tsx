import React, { useRef } from "react";
import { useToggleState } from '@react-stately/toggle';
import { useToggleButton } from '@react-aria/button'
import twx from "tailwindcssx";

export interface SwitchProps {

}

export const Switch: React.FC<SwitchProps> = (props) => {
    let ref = useRef(null);
    let state = useToggleState(props);
    let { buttonProps, isPressed } = useToggleButton(
        props,
        state,
        ref
    );

    return (
        <button
            {...buttonProps}
            ref={ref}
            className={twx([
                state.isSelected && "bg-blue-600",
                // 'border border-red-600',
                'w-9',
                'inline-flex',
                'bg-gray-300',
                'rounded-full',
                'transition-all duration-300',
            ])}
        >
            <span
                className={twx([
                    'border-2',
                    !state.isSelected && 'border-gray-600',
                    state.isSelected && "border-blue-600",
                    'rounded-full',
                    'h-5 w-5',
                    'bg-white',
                    'transition-all duration-300',
                ])}
                style={{
                    transform: state.isSelected ? "translateX(calc(100% - 0.25rem))" : "translateX(0)",
                }}
            >

            </span>
        </button>
    )
};