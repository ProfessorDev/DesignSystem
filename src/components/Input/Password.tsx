import React, {useState} from "react";
import Input from "./Input";
import twClassNames from "../../utils/tailwind_extensions/twClassNames";

export default function Password({type, showEye = false, className, eyeClassName, color = "neutral", inputStyle = "outline", ...props}) {
    const [showPassword, setShowPassword] = useState(false);
    let divClassName = twClassNames({
        '': [
            className,
            'inline-flex',
            'relative',
            'w-full',
        ],
    });

    if (inputStyle === "outline") {
        divClassName = twClassNames({
            '': [
                `text-${color}-800`,
                divClassName,
            ],
        });
    } else if (inputStyle === "no-outline") {
        divClassName = twClassNames({
            '': [
                `text-${color}-800`,
                divClassName,
            ],
        });
    } else if (inputStyle === "underline") {
        divClassName = twClassNames({
            '': [
                `text-${color}-800`,
                divClassName,
            ],
        });
    } else if (inputStyle === "fill") {
        divClassName = twClassNames({
            '': [
                `text-${color}-200`,
                divClassName,
            ],

        });
    }

    eyeClassName = twClassNames({
        '': [
            eyeClassName,
            'inline-flex',
            'justify-center',
            'items-center',
            'p-1',
            'absolute',
            'pointer',
        ]
    });

    return (
        <div className={divClassName}>
            <Input
                type={showPassword ? "text" : "password"}
                className={twClassNames({
                    '': [
                        {'pr-8': showEye},
                    ],
                })}
                inputStyle={inputStyle}
                color={color}
                {...props}
            />
            {
                showEye &&
                <div
                    className={eyeClassName}
                    style={{
                        top: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}
                >
                    {
                        (!showPassword) ? (
                            <i className="fas fa-eye"/>
                        ) : (
                            <i className="fas fa-eye-slash"/>
                        )
                    }
                </div>
            }
        </div>
    )
}