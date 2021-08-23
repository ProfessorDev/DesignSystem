import React, { useRef, useState } from "react";
import { ToggleProps } from "@react-types/checkbox";
import { useToggleState } from "@react-stately/toggle";
import { useCheckbox } from "@react-aria/checkbox";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useFocusRing } from "@react-aria/focus";
import twx from "tailwindcssx";
import { HTMLAttributes } from "react";
import { AriaAttributes } from "react";

export interface CheckboxProps extends ToggleProps {
    isIndeterminate?: boolean;
    isEmphasized?: boolean;
    isError?: boolean;
}

export interface CheckboxProps extends AriaAttributes {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    let {
        children,
        isIndeterminate,
        isEmphasized,
        isDisabled,
        isError,
    } = props;

    let state = useToggleState(props);
    let ref = useRef(null);
    let { inputProps } = useCheckbox(props, state, ref);
    let { isFocusVisible, focusProps } = useFocusRing();

    return (
        <label
            className={twx([
                "inline-flex",
                // 'border border-red-600',
                "text-sm",
                "items-center",
                isDisabled &&
                    "opacity-30 border-opacity-30 bg-opacity-30 select-none",
            ])}
        >
            <VisuallyHidden>
                <input
                    {...inputProps}
                    {...focusProps}
                    aria-label=""
                    ref={ref}
                />
            </VisuallyHidden>
            <div
                className={twx([
                    "h-4",
                    "w-4",
                    "rounded-sm",
                    "inline-flex",
                    "border-2",
                    isError && "border-red-600",
                    state.isSelected && [
                        isError && "bg-red-600",
                        isEmphasized && "border-blue-600 bg-blue-600",
                        !isEmphasized && "border-gray-600 bg-gray-600",
                    ],
                    !state.isSelected && ["border-gray-600", "bg-white"],
                    "text-xs",
                    "items-center",
                    "justify-center",
                    "transition duration-150",
                    "relative",
                    // 'border border-green-900'
                ])}
            >
                <div
                    className={twx([
                        "rounded-sm",
                        "absolute",
                        "-inset-1.5",
                        "border-2",
                        !isFocusVisible && "border-transparent",
                        isFocusVisible && [
                            isEmphasized && "border-blue-600",
                            !isEmphasized && "border-gray-600",
                            isError && "border-red-600",
                        ],
                    ])}
                ></div>
                <div
                    className={twx([
                        "absolute",
                        "inset-0",
                        "bg-white",
                        "transition-all duration-150",
                    ])}
                    style={{
                        transform: state.isSelected
                            ? "scale(0, 0)"
                            : "scale(1, 1)",
                    }}
                ></div>
                <div
                    className={twx([
                        "flex justify-center items-center",
                        // 'p-10',
                        // 'border border-red-600',
                        "text-white",
                    ])}
                >
                    <i className="fas fa-check" />
                </div>
            </div>
            <span className={twx(["ml-2", isError && "text-red-600"])}>
                {children}
            </span>
        </label>
    );
};
