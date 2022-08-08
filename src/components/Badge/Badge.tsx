import * as React from "react";
import twx from "tailwindcssx";

export interface BadgeProps {
    content: string,
    variant?: string,
    icon?: React.ReactNode,
    iconAlignment?: "left" | "right",
};

export const Badge: React.FC<BadgeProps> = ({ content, variant = "neutral", icon, iconAlignment = "left" }) => {
    const iconWrapper = icon && (
        <span className={twx([
            iconAlignment === "left" && "mr-1",
            iconAlignment === "right" && "ml-1",
        ])}>
            {icon}
        </span>
    );

    return (
        <span className={twx([
            'text-sm',
            'font-semibold',
            'p-0.5',
            'px-2',
            // 'border border-red-600',
            'rounded-full',
            'border',
            (variant === "error" || variant === "outline-error") && "border-red-600",
            (variant === "warning" || variant === "outline-warning") && "border-yellow-600",
            (variant === "success" || variant === "outline-success") && "border-green-600",
            (variant === "neutral" || variant === "outline-neutral") && "border-gray-600",
            variant === "error" && "bg-red-600 text-white",
            variant === "warning" && "bg-yellow-600 text-white",
            variant === "success" && "bg-green-600 text-white",
            variant === "neutral" && "bg-gray-600 text-white",
            variant === "outline-error" && "text-red-600",
            variant === "outline-warning" && "text-yellow-600",
            variant === "outline-success" && "text-green-600",
            variant === "outline-neutral" && "text-gray-600",
        ])}>
            {iconAlignment === "left" && (
                <>
                    {iconWrapper}
                    {content}
                </>
            )}
            {iconAlignment === "right" && (
                <>
                    {content}
                    {iconWrapper}
                </>
            )}
        </span>
    );
};