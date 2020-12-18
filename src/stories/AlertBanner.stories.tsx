import React from "react";
import { Meta, Story } from "@storybook/react";
import { AlertBanner, AlertBannerProps } from "../components/AlertBanner/AlertBanner";

export default {
    title: "Design System V2/AlertBanner",
    component: AlertBanner,
} as Meta;

const Template: Story<AlertBannerProps> = (args) => (
    <AlertBanner {...args}/>
);

export const Example = () => {
    return (
        <div className="space-y-2">
            <AlertBanner text="Button.xd archived" variant="informative"/>
            <AlertBanner text="An Update is available" variant="neutral"/>
            <AlertBanner text="2 Assets missing" variant="negative" isDismissible/>
            <AlertBanner text="Button.xd archived" variant="informative" actionLabel="Update" isDismissible/>
        </div>
    )
}