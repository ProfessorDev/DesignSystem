import {
    CheckCircleIcon,
    ExclamationIcon,
    InformationCircleIcon,
} from "@heroicons/react/solid";
import React from "react";
import twx from "tailwindcssx";

export interface TooltipProps {
    label: string;
    variant: "neutral" | "informative" | "positive" | "negative";
    hasIcon?: boolean;
    placement?: "top" | "left" | "bottom" | "right";
}

export const Tooltip: React.FC<TooltipProps> = ({
    label,
    variant,
    hasIcon = false,
    placement = "top",
}) => {
    const neutral = "rgba(75, 85, 99, var(--tw-bg-opacity))";
    const positive = "rgba(5, 150, 105, var(--tw-bg-opacity))";
    const informative = "rgba(37, 99, 235, var(--tw-bg-opacity))";
    const negative = "rgba(220, 38, 38, var(--tw-bg-opacity))";

    return (
        <div
            className={twx([
                "inline-block",
                "text-sm",
                // 'border border-black',
                "px-2 py-1",
                "text-white",
                "rounded",
                "relative",
                variant === "informative" && "bg-blue-600",
                variant === "negative" && "bg-red-600",
                variant === "neutral" && "bg-gray-600",
                variant === "positive" && "bg-green-600",
            ])}
        >
            <div
                className={twx([
                    "absolute",
                    placement === "bottom" && "-bottom-2 left-1/2",
                    placement === "top" && "-top-2 left-1/2",
                    placement === "left" && "-left-2 top-1/2",
                    placement === "right" && "-right-2 top-1/2",
                    "border-4",
                ])}
                style={{
                    borderColor: "transparent",
                    borderTopColor:
                        placement === "bottom"
                            ? variant === "informative"
                                ? informative
                                : variant === "negative"
                                ? negative
                                : variant === "neutral"
                                ? neutral
                                : variant === "positive"
                                ? positive
                                : "transparent"
                            : "transparent",
                    borderBottomColor:
                        placement === "top"
                            ? variant === "informative"
                                ? informative
                                : variant === "negative"
                                ? negative
                                : variant === "neutral"
                                ? neutral
                                : variant === "positive"
                                ? positive
                                : "transparent"
                            : "transparent",
                    borderLeftColor:
                        placement === "right"
                            ? variant === "informative"
                                ? informative
                                : variant === "negative"
                                ? negative
                                : variant === "neutral"
                                ? neutral
                                : variant === "positive"
                                ? positive
                                : "transparent"
                            : "transparent",
                    borderRightColor:
                        placement === "left"
                            ? variant === "informative"
                                ? informative
                                : variant === "negative"
                                ? negative
                                : variant === "neutral"
                                ? neutral
                                : variant === "positive"
                                ? positive
                                : "transparent"
                            : "transparent",
                    borderStyle: "solid",
                    maxWidth: "0px",
                    maxHeight: "0px",
                }}
            ></div>
            {hasIcon && (
                <>
                    {variant === "neutral" && null}
                    {variant === "informative" && (
                        <span className="mr-1">
                            <InformationCircleIcon className="h-5 w-5 inline" />
                        </span>
                    )}
                    {variant === "positive" && (
                        <span className="mr-1">
                            <CheckCircleIcon className="h-5 w-5 inline" />
                        </span>
                    )}
                    {variant === "negative" && (
                        <span className="mr-1">
                            <ExclamationIcon className="h-5 w-5 inline" />
                        </span>
                    )}
                </>
            )}
            {label}
        </div>
    );
};
