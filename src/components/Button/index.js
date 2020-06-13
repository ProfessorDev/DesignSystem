import React from "react";
import classNames from "classnames";
import * as PropTypes from 'prop-types';

/**
 *- Use an avatar for attributing actions or content to specific users.
 *- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/
export default function Button({children, theme, ...props}) {
    const {color = "primary", colorWeight = 700, buttonStyle = "normal", size = "md", border = "flat"} = theme;

    const className = classNames(
        'border',
        {[`border-${color}-${colorWeight}`]: buttonStyle === "normal"},
        {[`bg-${color}-${colorWeight}`]: buttonStyle === "normal"},
        {[`text-on_${color}-${colorWeight}`]: buttonStyle === "normal"},
        {[`border-${color}-${colorWeight}`]: buttonStyle === "outline"},
        {[`text-${color}-${colorWeight}`]: buttonStyle === "outline"},
        {'rounded-md': border === "rounded"},
        'shadow-md',
        'px-5 py-1',
        `text-${size}`
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
        colorWeight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
        buttonStyle: PropTypes.oneOf(["normal", "outline"]),
        size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
        border: PropTypes.oneOf(["flat", "rounded"]),
    })
};

Button.defaultProps = {
    children: "Button",
    theme: {color: "primary", colorWeight: 900, buttonStyle: "normal", size: "md", border: "flat"}
};