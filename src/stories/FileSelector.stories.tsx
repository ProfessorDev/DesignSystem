import React from "react";
import { Meta } from "@storybook/react";
import { FileSelector } from "../components/FileSelector/FileSelector";

export default {
    title: "Design System V2/FileSelector",
    component: FileSelector,
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <FileSelector
                    hasError
                    errorMessage="File type not supported"
                    label="Attachment"
                    accept="image/*"
                    maxSize={10*1024}
                    onDrop={(acceptedFiles) => {
                        console.log("acceptedFiles", acceptedFiles);
                    }}
                    onDropRejected={(fileRejections) => {
                        console.log("fileRejections", fileRejections[0].errors[0].message);
                    }}
                />
            </div>
            <div className="space-x-2">
                <FileSelector variant="max" />
            </div>
            <div className="space-x-2">
                <FileSelector variant="max" disabled />
            </div>
        </div>
    );
};
