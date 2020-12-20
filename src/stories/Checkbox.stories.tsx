import React from "react";
import { Meta } from "@storybook/react";
import { Checkbox } from "../components/Checkbox/Checkbox";

export default {
    title: "Design System V2/Checkbox",
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <Checkbox>
                    Check this
                </Checkbox>
            </div>
            <div className="space-x-2">
                <Checkbox isSelected>
                    Check this
                </Checkbox>
            </div>
            <div className="space-x-2">
                <Checkbox isEmphasized>
                    Check this
                </Checkbox>
            </div>
            <div className="space-x-2">
                <Checkbox isDisabled>
                    Check this
                </Checkbox>
            </div>
            <div className="space-x-2">
                <Checkbox isIndeterminate>
                    Check this
                </Checkbox>
            </div>
            <div className="space-x-2">
                <Checkbox isError>
                    Check this
                </Checkbox>
            </div>
            <div className="space-x-2">
                <Checkbox isReadOnly>
                    Check this
                </Checkbox>
            </div>
        </div>
    )
};
