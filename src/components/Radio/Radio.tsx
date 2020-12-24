import React, { useRef } from "react";
import { useRadio, RadioAriaProps } from '@react-aria/radio';
import { RadioContext } from "./RadioGroup";
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import twx from "tailwindcssx";

export interface RadioProps extends RadioAriaProps {
    isError?: boolean,
    isEmphasized?: boolean,
}

export const Radio: React.FC<RadioProps> = (props) => {
    let { children, isDisabled, isError, isEmphasized, value } = props;
    let state = React.useContext(RadioContext);
    let ref = useRef(null);
    let { inputProps } = useRadio(props, state, ref);
    let { isFocusVisible, focusProps } = useFocusRing();

    return (
        <label className={twx([
            'inline-flex',
            // 'border border-red-600',
            'text-sm',
            'items-center',
            isDisabled && 'opacity-30 border-opacity-30 bg-opacity-30 select-none',
        ])}>
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <div className={twx([
                'h-4',
                'w-4',
                'rounded-sm',
                'inline-flex',
                'border-2',
                isError && "border-red-600",
                state.selectedValue === value && [
                    isError && 'bg-red-600',
                    isEmphasized && 'border-blue-600 bg-blue-600',
                    !isEmphasized && 'border-gray-600 bg-gray-600',
                ],
                state.selectedValue !== value && ['border-gray-600', 'bg-white'],
                'text-xs',
                'items-center',
                'justify-center',
                'transition duration-150',
                'relative',
                'rounded-full',
                // 'border border-green-900'
            ])}>
                <div className={twx([
                    'rounded-sm',
                    'absolute',
                    '-inset-1.5',
                    'border-2',
                    'rounded-full',
                    !isFocusVisible && 'border-transparent',
                    isFocusVisible && [
                        isEmphasized && "border-blue-600",
                        !isEmphasized && "border-gray-600",
                        isError && "border-red-600",
                    ],
                ])}>

                </div>
                <div className={twx([
                    'absolute',
                    'inset-0',
                    'bg-white',
                    'rounded-full',
                    'transition-all duration-150',
                ])} style={{
                    transform: state.selectedValue === value ? "scale(0.3, 0.3)" : "scale(1, 1)"
                }}>

                </div>
            </div>
            <span className={twx([
                "ml-2",
                isError && "text-red-600",
            ])}>
                {children}
            </span>
        </label>
    );
}