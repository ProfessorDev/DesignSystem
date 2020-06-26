import React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";

export default function DropdownItem({children, theme, ...props}) {
    const {color = "primary"} = theme;

    const className = classNames(
        `hover:bg-${color}-700`,
        `hover:text-on_${color}-700`,
        'px-4 py-1',
        'cursor-pointer'
    );

    return (
        <div
            {...props}
            className={className}
        >
            {children}
        </div>
    )
}

DropdownItem.propTypes = {
    children: PropTypes.string,
};

DropdownItem.defaultProps = {

};