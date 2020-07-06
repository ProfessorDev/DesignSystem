import React from "react";
import * as PropTypes from "prop-types";
import classNames from 'classnames';

export default function BreadcrumbItem({children, color = "primary", active}) {
    let className = classNames(
        'inline-block',
        'px-2 py-1',
        'cursor-pointer',
        `hover:text-${color}-500`,
    );

    if (active) {
        className = classNames(
            className,
            `text-${color}-400`
        );
    } else {
        className = classNames(
            className,
            `text-${color}-600`
        );
    }

    return (
        <button className={className}>
            {children}
        </button>
    );
}

BreadcrumbItem.propTypes = {
    children: PropTypes.any,
    color: PropTypes.oneOf(["primary", "secondary", "neutral", "error", "warning"]),
};