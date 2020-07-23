import React from "react";
import classNames from 'classnames';

export default function DropdownDivider({className}) {
    className = classNames(
        className,
        'border-t',
        'border-l'
    );

    return (
        <div className={className}>

        </div>
    )
}