import React from "react";
import { Meta } from "@storybook/react";
import { SearchField } from "../components/SearchField/SearchField";

export default {
    title: "Design System V2/SearchField",
    component: SearchField,
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <SearchField onSubmit={(inp) => {
                    console.log(inp);
                }}/>
            </div>
        </div>
    )
}