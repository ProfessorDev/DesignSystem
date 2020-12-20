import React from "react";
import { Meta } from "@storybook/react";
import { RadioGroup } from "../components/Radio/RadioGroup";
import { Radio } from "../components/Radio/Radio";

export default {
    title: "Design System V2/Radio"
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <RadioGroup label="Favorite pet">
                    <Radio value="dogs">Dogs</Radio>
                    <Radio value="cats">Cats</Radio>
                </RadioGroup>
            </div>
            <div className="space-x-2">
                <RadioGroup label="Favorite pet" isEmphasized>
                    <Radio value="dogs">Dogs</Radio>
                    <Radio value="cats">Cats</Radio>
                </RadioGroup>
            </div>
        </div>
    )
};
