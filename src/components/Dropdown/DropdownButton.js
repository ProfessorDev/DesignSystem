import React from "react";
import classNames from 'classnames';

export default function DropdownButton({children, className, onClick = () => undefined}) {
    className = classNames(
        className
    );

    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    )
}