import React from "react";
import classNames from 'classnames';

export default function DropdownButton({children, onClick = () => undefined}) {
    let className = classNames(

    );

    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    )
}