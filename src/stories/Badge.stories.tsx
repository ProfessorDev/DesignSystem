import { Meta, Story } from "@storybook/react";
import { Badge, BadgeProps } from "../components/Badge/Badge";
import React from "react";
import twx from "tailwindcssx";

export default {
    title: "Design System V2/Badge",
} as Meta;

const Template: Story<BadgeProps> = (args) => (
    <Badge {...args} />
);

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    content: "Hello World",
    icon: <i className="fas fa-exclamation-triangle" />,
    iconAlignment: "left"
}

export const RightIcon = Template.bind({});
RightIcon.args = {
    content: "Hello World",
    icon: <i className="fas fa-exclamation-triangle" />,
    iconAlignment: "right",
    variant: "error",
}

export const NoIcon = Template.bind({});
NoIcon.args = {
    content: "Hello World",
    iconAlignment: "right"
}

export const Colors: Story = () => {
    return (
        <div className={twx([
            'space-y-2',
        ])}>
            <div className={twx([
                'space-x-2',
            ])}>
                <Badge content="Hello World" variant="error" />
                <Badge content="Hello World" variant="success" />
                <Badge content="Hello World" variant="warning" />
                <Badge content="Hello World" variant="neutral" />
            </div>
            <div className={twx([
                'space-x-2',
            ])}>
                <Badge content="Hello World" variant="outline-error" />
                <Badge content="Hello World" variant="outline-success" />
                <Badge content="Hello World" variant="outline-warning" />
                <Badge content="Hello World" variant="outline-neutral" />
            </div>
        </div>
    )
}