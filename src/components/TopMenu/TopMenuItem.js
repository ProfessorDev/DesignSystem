import React from "react";
import classNames from 'classnames';

export default function TopMenuItem({children, className}) {
    className = classNames(
        // 'border',
        // 'border-blue-700',
        'p-1',
        'h-full',
        'align-top',
        'inline-flex',
        'items-center',
        'justify-center',
        'border-box',
        className
    );

    return (
        <div className={className}>
            {children}
        </div>
    )
}
