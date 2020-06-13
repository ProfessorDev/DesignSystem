import React from "react";
import classNames from "classnames";
import * as PropTypes from 'prop-types';

/**
 *- Use an avatar for attributing actions or content to specific users.
 *- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/
export default function Button({children, theme, ...props}) {
    const {color = "primary", colorVariant = 700, buttonStyle = "normal", size = "md", border = "flat", full = false} = theme;

    const className = classNames(
        'border',
        {[`border-${color}-${colorVariant}`]: buttonStyle === "normal"},
        {[`bg-${color}-${colorVariant}`]: buttonStyle === "normal"},
        {[`text-on_${color}-${colorVariant}`]: buttonStyle === "normal"},
        {[`border-${color}-${colorVariant}`]: buttonStyle === "outline"},
        {[`text-${color}-${colorVariant}`]: buttonStyle === "outline"},
        {'rounded-md': border === "rounded"},
        {'w-full': full},
        'shadow',
        'px-5 py-1',
        `text-${size}`,
        'hover:shadow-md',
        'transition-shadow duration-100'
    );

    return (
        <button
            {...props}
            className={className}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    /**
     * Here the documentation goes of each prop
     */
    children: PropTypes.any,
    /**
     * Set the theme of the Button using this prop
     */
    theme: PropTypes.shape({
        color: PropTypes.oneOf(["primary", "secondary", "neutral", "error", "warning"]),
        colorVariant: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
        buttonStyle: PropTypes.oneOf(["normal", "outline"]),
        size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
        border: PropTypes.oneOf(["flat", "rounded"]),
        full: PropTypes.bool,
    })
};

Button.defaultProps = {
    children: "Button",
    theme: {color: "primary", colorVariant: 900, buttonStyle: "normal", size: "md", border: "flat", full: false}
};