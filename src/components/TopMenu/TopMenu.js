import React from "react";
import classNames from 'classnames';

export default function TopMenu({children, className, leftChildren, rightChildren}) {
    className = classNames(
        className,
        'flex',
        'h-10',
        'border-box',
        'bg-white',
    );

    return (
        <div className={className}>
            <div className={classNames(

            )}>
                {leftChildren}
            </div>
            <div className={classNames(
                'flex-1'
            )}>
                {children}
            </div>
            <div className={classNames(

            )}>
                {rightChildren}
            </div>
            {children}
        </div>
    );
}
