import React from "react";
import { Meta } from "@storybook/react";
import { TextFieldBold } from "../components/TextField/TextFieldBold";

export default {
    title: "Design System V2/TextFieldBold"
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <TextFieldBold label="placeholder" type="text"/>
            </div>
        </div>
    )
};