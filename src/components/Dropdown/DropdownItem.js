import React, {useContext} from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import {DropdownContext} from "./Dropdown";


export default function DropdownItem({children, className, theme, ...props}) {
    const {color = "primary"} = theme;

    const dropdownOptions = useContext(DropdownContext);

    className = classNames(
        className,
        `hover:bg-${color}-700`,
        `hover:text-on_${color}-700`,
        'px-4 py-1',
        'cursor-pointer',
        'flex-1',
    );

    return (
        <div
            {...props}
            className={className}
        >
            {
                typeof children === "function" ? children(dropdownOptions.dropdownOpen, dropdownOptions.setDropdownOpen)
                    : children
            }
        </div>
    )
}

DropdownItem.propTypes = {
    children: PropTypes.string,
};

DropdownItem.defaultProps = {};