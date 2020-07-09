import React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";

export default function DropdownGroup({children, ...props}) {

    const className = classNames(
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