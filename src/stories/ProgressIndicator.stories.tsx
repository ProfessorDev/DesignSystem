import React from "react";
import { Meta } from "@storybook/react";
import { ProgressIndicator } from "../components/ProgressIndicator/ProgressIndicator";

export default {
    title: "Design System V2/ProgressIndicator",
} as Meta;

export const Example = () => {
    return (
        <div>
            <ProgressIndicator/>
        </div>
    )
};
