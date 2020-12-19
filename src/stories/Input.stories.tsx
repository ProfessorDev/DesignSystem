import React from "react";
import { Meta } from "@storybook/react";
import { Input } from "../components/Input/Input";

export default {
    title: "Design System V2/Input"
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <Input label="placeholder"/>
            </div>
        </div>
    )
};