import React, {useContext} from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import {ThemeContext} from "./SideNav";

export default function SideNavLabel({children, theme, ...props}) {
    let {color = 'primary', type = "link", active = false} = theme;

    let colorFromContext = useContext(ThemeContext);
    color = colorFromContext || color;

    let className = classNames(
        'py-2',
        'cursor-pointer'
    );

    if (!active) {
        className = classNames(
            `bg-${color}-800`,
            `text-on_${color}-800`,
            'px-4',
            className,
        );
    } else {
        className = classNames(
            'border-l-4',
            `border-${color}-400`,
            `bg-${color}-900`,
            `text-on_${color}-900`,
            'px-3',
            className,
        );
    }
    if (type === "header") {
        className = classNames(
            'py-4',
            `bg-${color}-900`,
            `text-on_${color}-900`,
            className,
        );
    }

    return (
        <div
            {...props}
            className={classNames(className, props.className)}
        >
            {children}
        </div>
    )
}

SideNavLabel.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.shape({
        color: PropTypes.oneOf(["primary", "secondary", "neutral", "error", "neutral"]),
        active: PropTypes.bool,
    })
};

SideNavLabel.defaultProps = {
    children: "Link",
    theme: {
        color: "primary",
        active: false,
    }
};