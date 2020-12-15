import React from "react";
import twClassNames from "../../utils/tailwind_extensions/twClassNames";

export default function Input({className, color = "neutral", size = "md", inputStyle = "outline", rounded = "none", width = "full", ...props}) {
    className = twClassNames({
        '': [
            className,
            'px-2 py-1',
            `text-${size}`,
            `rounded-${rounded}`,
            'outline-none',
            `w-${width}`,
        ],
        hover: [
            `border-${color}-600`,
        ],
        focus: [
            `border-${color}-700`,
        ],
    });

    if (inputStyle === "outline") {
        className = twClassNames({
            '': [
                className,
                'border',
                `border-${color}-500`,
                `placeholder-${color}-900`,
                `text-${color}-800`,
            ],
        });
    } else if (inputStyle === "no-outline") {
        className = twClassNames({
            '': [
                className,
                `placeholder-${color}-900`,
                `text-${color}-800`,
            ],
            hover: [
                `bg-${color}-100`,
            ],
            focus: [
                `bg-${color}-200`,
            ],
        });
    } else if (inputStyle === "underline") {
        className = twClassNames({
            '': [
                className,
                'border-b',
                `border-${color}-500`,
                `placeholder-${color}-900`,
                `text-${color}-800`,
            ],
        });
    } else if (inputStyle === "fill") {
        className = twClassNames({
            '': [
                className,
                'border',
                `border-${color}-500`,
                `bg-${color}-500`,
                `text-${color}-200`,
                `placeholder-${color}-100`,
            ],
            hover: [
                `border-${color}-600`,
                `bg-${color}-600`,
            ],
            focus: [
                `border-${color}-700`,
                `bg-${color}-700`,
            ],
        });
    }

    return (
        <input className={className} {...props}/>
    );
}