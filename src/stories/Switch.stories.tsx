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
                <Switch label="Label" />
            </div>
            <div className="space-x-2">
                <Switch isSelected label="Label" />
            </div>
            <div className="space-x-2">
                <Switch isDisabled label="Label" />
            </div>
            <div className="space-x-2">
                <Switch isEmphasized label="Label" />
            </div>
            <div className="space-x-2">
                <Switch isReadOnly label="Label" />
            </div>
        </div>
    )
}

