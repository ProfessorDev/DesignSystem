import React from "react";
import { Meta } from "@storybook/react";
import { File } from "../components/Files/File";

export default {
    title: "Design System V2/Files",
    component: File,
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <File label="abc.zzz" />
            <File extension="pdf" label="Proposal.pdf" />
        </div>
    )
};
