import React from "react";
import twx from "tailwindcssx";

export interface StatusLightProps {
    variant: "positive" | "negative" | "notice" | "info" | "neutral",
    label: string,
    isDisabled?: boolean,
}

export const StatusLight: React.FC<StatusLightProps> = ({variant, label, isDisabled = false}) => {
    return (
        <span className={twx([
            'text-sm',
        ])}>
            <span className={twx([
                'align-middle',
                'inline-block',
                'p-1',
                'rounded-full',
                'mr-3',
                variant === "info" && "bg-blue-500",
                variant === "negative" && "bg-red-500",
                variant === "neutral" && "bg-gray-500",
                variant === "notice" && "bg-yellow-500",
                variant === "positive" && "bg-green-500",
            ])}>

            </span>
            {label}
        </span>
    )
};