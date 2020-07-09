import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import {PaddingWrap} from "../utils/PaddingWrap";

export default {
    title: "Design System|Breadcrumb Item",
    parameters: {
        component: BreadcrumbItem,
    }
}

export const Example = () => {
    return (
        <>
            <PaddingWrap>
                <BreadcrumbItem>
                    Primary
                </BreadcrumbItem>
            </PaddingWrap>
            <PaddingWrap>
                <BreadcrumbItem color={"secondary"}>
                    Secondary
                </BreadcrumbItem>
            </PaddingWrap>
            <PaddingWrap>
                <BreadcrumbItem color={"neutral"}>
                    Neutral
                </BreadcrumbItem>
            </PaddingWrap>
            <PaddingWrap>
                <BreadcrumbItem color={"error"}>
                    Error
                </BreadcrumbItem>
            </PaddingWrap>
            <PaddingWrap>
                <BreadcrumbItem color={"warning"}>
                    Warning
                </BreadcrumbItem>
            </PaddingWrap>
        </>
    );
};