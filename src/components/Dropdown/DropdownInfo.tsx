import React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";

export default function DropdownInfo({children, className, ...props}) {

    className = classNames(
        className,
        'px-4 py-1',
        'flex-1',
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

DropdownInfo.propTypes = {
    children: PropTypes.string,
};

DropdownInfo.defaultProps = {};