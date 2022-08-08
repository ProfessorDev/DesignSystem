import Breadcrumb from "./Breadcrumb";
import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import { ChevronLeftIcon } from "@heroicons/react/solid";

export default {
    title: 'Design System/Breadcrumb',
    parameters: {
        component: Breadcrumb,
    }
}

export const Example = () => {
    return (
        <Breadcrumb as={"link"} color={"primary"} divider={(
            <ChevronLeftIcon className="h-5 w-5"/>
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
