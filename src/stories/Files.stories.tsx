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
            <File label="abc.zzzffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" />
            <File extension="pdf" label="Proposal.pdf" />
            <File extension="word" label="Proposal.pdf" />
            <File extension="excel" label="Proposal.pdf" />
            <File extension="video" label="Proposal.pdf" />
            <File extension="powerpoint" label="Proposal.pdf" />
            <File extension="image" label="Proposal.pdf" />
            <File extension="code" label="Proposal.pdf" />
            <File extension="archive" label="Proposal.pdf" />
        </div>
    )
};
