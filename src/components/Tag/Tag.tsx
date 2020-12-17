import React from "react";
import twx from "tailwindcssx";
import { Link, LinkProps } from "react-router-dom";

export interface TagProps {
    label: string,
    isRemovable?: boolean,
    hasError?: boolean,
    isDisabled?: boolean,
    avatar?: string,
    onRemoveClick?: () => void,
    link?: string,
}

export const Tag: React.FC<TagProps> = ({ label, link, isRemovable = false, hasError = false, isDisabled = false, onRemoveClick }) => {
    return (
        <span className={twx([
            hasError && "border border-red-600 text-gray-800",
            isDisabled && "bg-gray-200 border border-gray-200 text-gray-400 cursor-not-allowed",
            !hasError && !isDisabled && 'border border-gray-800 text-gray-800',
            'rounded-md',
            'p-0.5 px-2',
            'text-sm',
        ])}>
            {
                !isDisabled && link && (
                    <Link to={link} className={twx({
                        hover: [
                            link && "underline cursor-pointer"
                        ]
                    })}>
                        {label}
                    </Link>
                )
            }
            {
                !link && (
                    <span>
                        {label}
                    </span>
                )
            }
            {
                !isDisabled && isRemovable && (
                    <button onClick={onRemoveClick}>
                        <span className={twx([
                            "ml-1 relative -top-0.5 align-middle text-lg cursor-pointer",
                            hasError && "text-red-600"
                        ])}>
                            &times;
                        </span>
                    </button>
                )
            }
        </span>
    )
}