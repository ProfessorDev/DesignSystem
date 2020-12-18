import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tooltip, TooltipProps } from "../components/Tooltip/Tooltip";

export default {
    title: "Design System V2/Tooltip",
    component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
    <Tooltip {...args} />
)

export const Example = () => {
    return (
        <div className="space-y-4">
            <div className="space-x-2">
                <Tooltip label="Text is auto-resized" variant="informative" />
            </div>
            <div>
                <Tooltip label="Feature unavailable" variant="negative" />
            </div>
            <div>
                <Tooltip label="Copy Link" variant="neutral" />
            </div>
            <div>
                <Tooltip label="Copied to clipboard" variant="positive" />
            </div>
            <div className="space-x-2">
                <Tooltip label="Text is auto-resized" variant="informative" hasIcon/>
            </div>
            <div>
                <Tooltip label="Feature unavailable" variant="negative" hasIcon/>
            </div>
            <div>
                <Tooltip label="Copy Link" variant="neutral" hasIcon/>
            </div>
            <div>
                <Tooltip label="Copied to clipboard" variant="positive" hasIcon/>
            </div>
            <div>
                <Tooltip label="Copied to clipboard" variant="positive" hasIcon placement="bottom"/>
            </div>
            <div>
                <Tooltip label="Copied to clipboard" variant="positive" hasIcon placement="left"/>
            </div>
            <div>
                <Tooltip label="Copied to clipboard" variant="positive" hasIcon placement="right"/>
            </div>
            <div>
                <Tooltip label="Copied to clipboard" variant="positive" hasIcon placement="top"/>
            </div>
        </div>
    )
};