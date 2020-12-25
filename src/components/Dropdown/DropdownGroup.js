import React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";

export default function DropdownGroup({children, className, ...props}) {

    className = classNames(
        className,
        'flex',
        'flex-row',
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

DropdownGroup.propTypes = {
    children: PropTypes.string,
};

DropdownGroup.defaultProps = {

};