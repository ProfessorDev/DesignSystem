import React, { useRef } from "react";
import { useToggleState } from '@react-stately/toggle';
import { useToggleButton } from '@react-aria/button';
import { ToggleProps } from "@react-types/checkbox";
import { VisuallyHidden } from '@react-aria/visually-hidden';
import twx from "tailwindcssx";
import { useSwitch } from '@react-aria/switch';
import { useFocusRing } from '@react-aria/focus';

export interface SwitchProps extends ToggleProps {
    label?: string,
    isSelected?: boolean,
    isEmphasized?: boolean,
    isDisabled?: boolean,
    isReadOnly?: boolean,
}

export const Switch: React.FC<SwitchProps> = (props) => {
    const {
        label,
        isEmphasized,
        isDisabled,
    } = props;

    let ref = useRef(null);
    let state = useToggleState(props);
    // let { buttonProps } = useToggleButton(
    //     props,
    //     state,
    //     ref
    // );
    let { inputProps } = useSwitch(props, state, ref);
    let { isFocusVisible, focusProps } = useFocusRing();

    return (
        <label className={twx([
            'inline-flex',
            'text-sm',
            isDisabled && ["opacity-30", "text-opacity-30", "border-opacity-30"]
        ])}>
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <div className={twx([
                'flex',
                isFocusVisible && 'border border-dotted border-gray-900',
            ])}>
                <div
                    className={twx([
                        state.isSelected && isEmphasized && "bg-blue-600",
                        state.isSelected && !isEmphasized && "bg-gray-600",
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
                            state.isSelected && isEmphasized && "border-blue-600",
                            state.isSelected && !isEmphasized && "border-gray-600",
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
                </div>
            </div>
            <div className={twx([
                'ml-2',
            ])}>
                {label}
            </div>
        </label>
    )
};
