import React from "react";
import { Meta, Story } from "@storybook/react";
import { AlertBanner, AlertBannerProps } from "../components/AlertBanner/AlertBanner";

export default {
    title: "Design System V2/AlertBanner",
    component: AlertBanner,
} as Meta;

const Template: Story<AlertBannerProps> = (args) => (
    <AlertBanner {...args} />
);

export const Informative = Template.bind({});
Informative.args = {
    text: "Button.xd archived",
    variant: "informative",
};

export const Neutral = Template.bind({});
Neutral.args = {
    text: "An Update is available",
    variant: "neutral"
}
export const Dismissable = Template.bind({});
Dismissable.args = {
    text: "An Update is available",
    variant: "negative",
    isDismissible: true,
}
export const Action = Template.bind({});
Action.args = {
    text: "An Update is available",
    variant: "informative",
    actionLabel: "Update",
    isDismissible: true,
}