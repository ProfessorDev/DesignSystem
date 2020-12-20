import React, { useRef, useState, useEffect } from "react";
import twx from "tailwindcssx";
import { useFocus } from "@react-aria/interactions";
import { useTextField, AriaTextFieldOptions } from '@react-aria/textfield';


export const TextFieldBold: React.FC<AriaTextFieldOptions> = (props) => {
    let { label, onChange, value } = props;
    
    const [input, setInput] = useState(value || "");
    useEffect(() => {
        setInput(value || "");
    }, [value]);

    const inputRef = useRef(null);
    let { labelProps, inputProps } = useTextField(props, inputRef);

    const [inputFocus, setInputFocus] = useState(false);
    let { focusProps } = useFocus({
        onFocusChange: (isFocused) =>
            setInputFocus(isFocused),
    });

    console.log(labelProps, inputProps);

    return (
        <label className={twx({
            '': [
                'inline-block',
                'border border-gray-300',
                'relative',
                'group',
                'p-2',
                'pt-6',
                'rounded-lg',
                'cursor-text',
            ],
            hover: [
                'border-gray-600',
            ],
            'focus-within': [
                'border-blue-600',
            ],
        })} {...labelProps}>
            <span
                className={twx([
                    'absolute',
                    'top-4',
                    'left-2',
                    'flex',
                    'select-none',
                    'text-gray-600',
                    'cursor-text',
                    'transition-all duration-200',
                    inputFocus && 'text-blue-600',
                ])}
                style={{
                    transform: inputFocus || input !== "" ? "scale(.85,.85) translateY(-15px)" : "scale(1,1)",
                    transformOrigin: "top left",
                }}
            >
                {label}
            </span>
            <input
                {...inputProps as React.InputHTMLAttributes<HTMLInputElement>}
                {...focusProps}
                className={twx([
                    'outline-none',
                ])}
                ref={inputRef}
                style={{
                    zIndex: 1,
                }}
                value={input}
                onChange={(e) => {
                    onChange && onChange(e.target.value);
                    setInput(e.target.value);
                }}
            />
        </label>
    )
}