import React from "react";
import { Meta } from "@storybook/react";
import { Switch } from "../components/Switch/Switch";

export default {
    title: "Design System V2/Switch",
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <Switch/>
            </div>
        </div>
    )
}

