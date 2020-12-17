import React from "react";
import { Meta, Story } from "@storybook/react";
import { Toast, ToastProps } from "../components/Toast/Toast";

export default {
    title: "Design System V2/Toast",
} as Meta;

const Template: Story<ToastProps> = (args) => (
    <Toast {...args}/>
)

export const Example = () => {
    return (
        <div className="space-y-2">
            <Toast text="Button.xd archived" variant="informative"/>
            <Toast text="Analysis complete" variant="positive"/>
            <Toast text="An Update is available" variant="neutral"/>
            <Toast text="2 Assets missing" variant="negative"/>

            <Toast text="Button.xd archived" variant="informative" actionLabel="Update"/>
        </div>
    )
}