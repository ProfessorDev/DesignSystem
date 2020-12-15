import React from "react";
import TopMenuItem from "./TopMenuItem";

export default {
    title: 'Design System/TopMenu Item',
    parameters: {
        component: TopMenuItem,
    },
}

export const WithOnlyIcon = () => {
    return (
        <TopMenuItem>
            <div className="text-xs">
                <i className="fas fa-home"/>
            </div>
        </TopMenuItem>
    );
};

export const WithOnlyText = () => {
    return (
        <TopMenuItem>
            Hello
        </TopMenuItem>
    );
};

export const WithTextAndIcon = () => {
    return (
        <TopMenuItem>
            <i className="fas fa-home"/> Home
        </TopMenuItem>
    );
};
