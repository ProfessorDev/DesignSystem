import React from "react";
import { Meta } from "@storybook/react";
import { Select } from "../components/Select/Select";
import { Item } from '@react-stately/collections';

export default {
    title: "Design System V2/Select",
    component: Select,
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <Select label="Favorite Color">
                    <Item>Red</Item>
                    <Item>Orange</Item>
                    <Item>Yellow</Item>
                    <Item>Green</Item>
                    <Item>Blue</Item>
                    <Item>Purple</Item>
                </Select>
            </div>
            <div className="space-x-2">
                <Select label="Favorite Color">
                    <Item>Red</Item>
                    <Item>Orange</Item>
                    <Item>Yellow</Item>
                    <Item>Green</Item>
                    <Item>Blue</Item>
                    <Item>Purple</Item>
                </Select>
            </div>
        </div>
    )
};