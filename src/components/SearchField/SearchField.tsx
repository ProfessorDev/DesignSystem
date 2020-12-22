import React, { useEffect, useRef, useState } from "react";
import twx from "tailwindcssx";
import { useSearchField } from '@react-aria/searchfield';
import { AriaSearchFieldProps } from "@react-types/searchfield";
import { useSearchFieldState } from '@react-stately/searchfield';

export interface SearchFieldProps extends AriaSearchFieldProps {
    labelPosition?: "top" | "side",
    isQuiet?: boolean,
    hasCharacterCount?: boolean,
    showValidIcon?: boolean,
    isError?: boolean,
    description?: string,
    errorMessage?: string,
    necessityIndicator?: "text" | "icon",
    icon?: React.ReactNode,
}

export const SearchField: React.FC<SearchFieldProps> = (props) => {
    const {
        label, labelPosition = "top",
        isQuiet = false, necessityIndicator = 'icon', isRequired = false,
        showValidIcon = false, isError = false, isDisabled = false,
        description, errorMessage = "", icon
    } = props;

    let state = useSearchFieldState(props);
    const inputRef = useRef(null!);
    let { labelProps, inputProps } = useSearchField(props, state, inputRef);

    return (
        <div className={twx([
            'inline-flex',
            !isDisabled && 'text-gray-600',
            isDisabled && 'text-gray-400',
            labelPosition === "top" && "flex-col",
            labelPosition === "side" && "flex-row items-center",
            // 'border border-red-600',
        ])}>
            {
                label && (
                    <label
                        {...labelProps}
                        className={twx({
                            '': [
                                // 'border border-red-600',
                                'text-xs',
                                'mb-1',
                                'inline-flex',
                                labelPosition === "side" && "justify-center items-center flex-1 w-32"
                            ],
                        })}
                    >
                        <div className="flex-1">
                            <span>
                                {label}
                            </span>
                            <span className="ml-1">
                                {necessityIndicator === 'icon' && isRequired && "*"}
                                {necessityIndicator === 'text' && isRequired && "(required)"}
                                {necessityIndicator === 'text' && !isRequired && "(optional)"}
                            </span>
                        </div>
                    </label>
                )
            }
            <div className={twx({
                '': [
                    !isDisabled && isQuiet && ["border-b"],
                    !isDisabled && !isQuiet && ["border", 'bg-white'],
                    !isDisabled && !isError && 'border-gray-500',
                    !isDisabled && isError && 'border-red-500',
                    'rounded',
                    'overflow-hidden',
                    'flex',
                    'items-center',
                    'px-2 py-1',
                    isDisabled && ["bg-gray-300"],
                    labelPosition === "side" && "ml-1"
                ],
                hover: [
                    !isError && 'border-gray-600',
                ],
            })}>
                <div className={twx([
                    "mr-2",
                ])}>
                    {icon ? icon : <i className="fas fa-search"/>}
                </div>
                <input
                    {...inputProps as React.InputHTMLAttributes<HTMLInputElement>}
                    ref={inputRef}
                    className={twx({
                        '': [
                            !isQuiet && 'bg-white',
                            !isDisabled && 'placeholder-gray-900',
                            'text-sm',
                            isDisabled && ["bg-gray-300", 'placeholder-gray-500'],
                        ],
                    })}
                />
                {
                    isError &&
                    <div className={twx([
                        "ml-2",
                        'text-red-500',
                    ])}>
                        <i className="fas fa-exclamation-triangle" />
                    </div>
                }
                {
                    showValidIcon && !isError &&
                    <div className={twx([
                        "ml-2",
                        'text-green-500',
                    ])}>
                        <i className="fas fa-check" />
                    </div>
                }
            </div>
            <div className={twx([
                "mt-1",
                'text-xs',
                isError && "text-red-600",
            ])}>
                {!isError && description}
                {isError && errorMessage}
            </div>
        </div>
    )
};