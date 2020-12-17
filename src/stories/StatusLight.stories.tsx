import React from "react";
import { Meta, Story } from "@storybook/react";
import { StatusLight, StatusLightProps } from "../components/StatusLight/StatusLight";

export default {
    title: "Design System V2/StatusLight",
    component: StatusLight,
} as Meta;

const Template: Story<StatusLightProps> = (args) => (
    <StatusLight {...args} />
)

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <StatusLight variant="info" label="Info" />
            </div>
            <div className="space-x-2">
                <StatusLight variant="negative" label="Negative" />
            </div>
            <div className="space-x-2">
                <StatusLight variant="neutral" label="Neutral" />
            </div>
            <div className="space-x-2">
                <StatusLight variant="notice" label="Notice" />
            </div>
            <div className="space-x-2">
                <StatusLight variant="positive" label="Positive" />
            </div>
        </div>
    )
}