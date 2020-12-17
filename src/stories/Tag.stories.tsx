import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tag, TagProps } from "../components/Tag/Tag";
import {BrowserRouter as Router} from "react-router-dom";

export default {
    title: "Design System/Tag",
    component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => (
    <Tag {...args}/>
);

export const Example = () => {
    return (
        <Router>
        <div className="space-y-2">
            <div className="space-x-2">
                <Tag label="Hello"/>
                <Tag label="Hello" isRemovable/>
                <Tag label="Hello" isRemovable hasError/>
                <Tag label="Hello" hasError/>
                <Tag label="Hello" isDisabled/>
                <Tag label="Hello" link="http://www.google.com"/>
            </div>
        </div>
        </Router>
    );
};
