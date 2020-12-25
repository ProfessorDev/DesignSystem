import Breadcrumb from "./Breadcrumb";
import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

export default {
    title: 'Design System/Breadcrumb',
    parameters: {
        component: Breadcrumb,
    }
}

export const Example = () => {
    return (
        <Breadcrumb as={"link"} color={"primary"} divider={(
            <i className="fas fa-caret-left"/>
        )}>
            <BreadcrumbItem color={"primary"}>
                primary
            </BreadcrumbItem>
            <BreadcrumbItem color={"primary"}>
                secondary
            </BreadcrumbItem>
            <BreadcrumbItem color={"primary"} active>
                neutral
            </BreadcrumbItem>
        </Breadcrumb>
    );
};
