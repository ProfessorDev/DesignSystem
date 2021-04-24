import React from "react";
import { Meta } from "@storybook/react";
import { TextField } from "../components/TextField/TextField";

export default {
    title: "Design System V2/TextField",
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2 w-96">
                <TextField label="Email address" placeholder="wilson@professordev.com" hasCharacterCount />
            </div>
            <div className="space-x-2">
                <TextField label="Email address" placeholder="wilson@professordev.com" hasCharacterCount isError />
            </div>
            <div className="space-x-2">
                <TextField
                    label="Email address"
                    placeholder="wilson@professordev.com"
                    description="Email ID should be with @"
                    hasCharacterCount
                />
            </div>
            <div className="space-x-2">
                <TextField
                    label="Email address"
                    placeholder="wilson@professordev.com"
                    description="Email ID should be with @"
                    hasCharacterCount
                    isError
                    errorMessage="Enter your email address"
                />
            </div>
            <div className="space-x-2">
                <TextField
                    label="Email address"
                    placeholder="wilson@professordev.com"
                    description="Email ID should be with @"
                    hasCharacterCount
                    showValidIcon
                />
            </div>
            <div className="space-x-2">
                <TextField
                    label="Email address"
                    placeholder="wilson@professordev.com"
                    description="Email ID should be with @"
                    hasCharacterCount
                    isDisabled
                />
            </div>
            <div className="space-x-2">
                <TextField
                    label="Email address"
                    placeholder="wilson@professordev.com"
                    description="Email ID should be with @"
                    hasCharacterCount
                    isReadOnly
                />
            </div>
            <div className="space-x-2">
                <TextField
                    label="Email address"
                    labelPosition="side"
                    placeholder="wilson@professordev.com"
                />
            </div>
            <div className="space-x-2">
                <TextField
                    label="Email address"
                    placeholder="wilson@professordev.com"
                    isQuiet
                />
            </div>
        </div>
    )
};