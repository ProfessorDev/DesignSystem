import React from "react";
import classNames from "classnames";
import TopMenuItem from "./TopMenuItem";

export default function TopMenuDivider() {
    return (
        <TopMenuItem>
            <span className={classNames(
                'border-l',
                'border-gray-600',
                'h-full'
            )}>

            </span>
        </TopMenuItem>
    )
}