import React, { useRef } from "react";
import { useButton } from '@react-aria/button';
import { AriaButtonProps } from "@react-types/button";
import twx from "tailwindcssx";


export interface ButtonProps extends AriaButtonProps {
    variant?: "callToAction" | "primary" | "secondary" | "negative",
    icon?: React.ReactNode,
    isQuiet?: boolean,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        variant = "callToAction",
        icon,
        isQuiet,
        isDisabled,
    } = props;

    let ref = useRef(null!);
    let { buttonProps } = useButton(props, ref);
    let { children } = props;

    return (
        <button
            {...buttonProps}
            ref={ref}
            className={twx({
                '': [
                    "rounded-full",
                    'text-sm',
                    'py-1 px-3',
                    'font-semibold',
                    'transition-all duration-300',
                    isDisabled && ["bg-opacity-70", "opacity-70", 'border-opacity-70'],
                    variant === "callToAction" && ["border-blue-600", "bg-blue-600", 'text-white'],
                    !isQuiet && [
                        'border-2',
                        variant === "primary" && ["border-gray-600", 'text-gray-600'],
                        variant === "secondary" && ["border-gray-500", 'text-gray-500'],
                        variant === "negative" && ["border-red-600", 'text-red-600', 'text-white'],
                    ],
                    isQuiet && [
                        'border-2',
                        'border-transparent',
                        variant === "primary" && ['text-gray-600'],
                        variant === "secondary" && ['text-gray-500'],
                        variant === "negative" && ['text-red-600', 'text-white'],
                    ]
                ],
                hover: [
                    variant === "callToAction" && ["bg-blue-700"],
                    !isQuiet && [
                        "text-white",
                        variant === "primary" && ["bg-gray-600"],
                        variant === "secondary" && ["bg-gray-500"],
                        variant === "negative" && ["bg-red-600"],
                    ],
                    isQuiet && [
                        (variant === "primary" || variant === "secondary" || variant === "negative" ) && ["bg-gray-200"],
                    ]
                ],
                focus: [
                    variant === "callToAction" && ["bg-blue-700"],
                    !isQuiet && [
                        "text-white",
                        variant === "primary" && ["bg-gray-600"],
                        variant === "secondary" && ["bg-gray-500"],
                        variant === "negative" && ["bg-red-600"],
                    ],
                    isQuiet && [
                        (variant === "primary" || variant === "secondary" || variant === "negative" ) && ["bg-gray-200"],
                    ]
                ]
            })}
        >
            {
                icon &&
                <span className={twx([
                    'mr-1',
                ])}>
                    {icon}
                </span>
            }
            {children}
        </button>
    );
};
