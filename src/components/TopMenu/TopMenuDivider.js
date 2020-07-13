import React from "react";
import classNames from "classnames";
import TopMenuItem from "./TopMenuItem";

export default function TopMenuDivider({className}) {
    return (
        <TopMenuItem>
            <span className={classNames(
                className,
                'border-l',
                'border-gray-600',
                'h-full'
            )}>

            </span>
        </TopMenuItem>
    )
}