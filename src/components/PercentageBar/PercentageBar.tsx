import React from "react";
import twx from "tailwindcssx";

export interface PercentageBarProps {
    variant?: "positive" | "negative" | "notice",
    current: number,
    total?: number,
}

export const PercentageBar: React.FC<PercentageBarProps> = ({ variant = "positive", total = 100, current }) => {
    const widthFraction =
        current > total ? (
            1
        ) : current < 0 ? (
            0
        ) : current / total;

    return (
        <div className={twx([
            'w-full',
            'h-1.5',
            'bg-gray-200',
            'rounded-full',
            'overflow-hidden',
        ])}>
            <div className={twx([
                variant === "positive" && "bg-green-600",
                variant === "negative" && "bg-red-600",
                variant === "notice" && "bg-yellow-600",
                'transition-all duration-500 ease-in-out',
                'h-full',
            ])} style={{
                width: `100%`,
                transform: `scaleX(${widthFraction})`,
                transformOrigin: 'top left'
            }}>

            </div>
        </div>
    )
};