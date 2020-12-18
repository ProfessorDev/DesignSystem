import React from "react";
import twx from "tailwindcssx";

export interface PercentageCircleProps {
    variant?: "positive" | "negative" | "notice",
    current: number,
    total?: number,
}

export const PercentageCircle: React.FC<PercentageCircleProps> = ({ variant = "positive", current, total = 100 }) => {
    const percent =
        current > total ? (
            1
        ) : current < 0 ? (
            0
        ) : current / total;

    const radius = 20;
    const stroke = 3;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashOffset = circumference - percent * circumference;

    return (
        <svg
            className={twx([
                'inline-block',
                'transition-all duration-500 ease-in-out',
                'stroke-current',
                variant === "positive" && "text-green-600",
                variant === "negative" && "text-red-600",
                variant === "notice" && "text-yellow-600",
            ])}
            style={{
                transform: "rotate(-90deg)"
            }}
            width={radius * 2}
            height={radius * 2}
        >
            <circle
                style={{
                    transition: "stroke-dashoffset 0.35s",
                }}
                strokeWidth={stroke}
                fill="transparent"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={strokeDashOffset}
            />
        </svg>
    )
}

