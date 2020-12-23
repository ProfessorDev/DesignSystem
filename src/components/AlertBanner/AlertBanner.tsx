import React from "react";
import twx from "tailwindcssx";

export interface AlertBannerProps {
    text: string,
    variant: "neutral" | "informative" | "negative",
    actionLabel?: string,
    isDismissible?: boolean,
    onActionClick?: (e: React.SyntheticEvent) => void,
    onDismiss?: (e: React.SyntheticEvent) => void,
}
export const AlertBanner: React.FC<AlertBannerProps> = ({ 
    text, variant = "informative", actionLabel, isDismissible = false,
    onActionClick, onDismiss,
}) => {
    return (
        <div className={twx([
            'p-0.5',
            'text-white',
            'font-semibold',
            'px-2',
            'flex',
            'box-border',
            // 'h-16',
            variant === "informative" && "bg-blue-600",
            variant === "negative" && "bg-red-600",
            variant === "neutral" && "bg-gray-600",
        ])}>
            <div className="flex-1 p-3">
                {
                    variant === "neutral" && null
                }
                {
                    variant === "informative" && (
                        <span className="mr-3">
                            <i className="fas fa-info-circle" />
                        </span>
                    )
                }
                {
                    variant === "negative" && (
                        <span className="mr-3">
                            <i className="fas fa-exclamation-triangle" />
                        </span>
                    )
                }
                {text}
            </div>
            {
                actionLabel && (
                    <div className="flex items-center">
                        <button className={twx({
                            '': [
                                "inline-block py-1 px-3 font-semibold rounded",
                                "transition-all duration-25"
                            ],
                            hover: [
                                'bg-gray-900',
                                'bg-opacity-25',
                            ]
                        })} onClick={onActionClick}>
                            {actionLabel}
                        </button>
                    </div>
                )
            }

            {
                isDismissible && (
                    <>
                        <div className="my-2 mx-3 mr-2 border-l-2 border-gray-200 opacity-25" />
                        <div className="flex items-center">
                            <button className={twx({
                                '': [
                                    "inline-block py-1 px-3 font-semibold text-xl rounded",
                                    "transition-all duration-25"
                                ],
                                hover: [
                                    'bg-gray-900',
                                    'bg-opacity-25',
                                ]
                            })} onClick={onDismiss}>
                                &times;
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    )
}