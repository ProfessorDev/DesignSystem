import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { ExclamationIcon } from "@heroicons/react/solid";

export default {
    title: "Design System V2/Button",
    component: Button,
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <Button variant="callToAction" onPress={() => {
                    console.log("Button Pressed");
                }}>
                    Hello
                </Button>
                <Button variant="primary">
                    Hello
                </Button>
                <Button variant="secondary">
                    Hello
                </Button>
                <Button variant="negative">
                    Hello
                </Button>
            </div>
            <div className="space-x-2">
                <Button
                    variant="callToAction"
                    icon={<ExclamationIcon className="h-5 w-5 inline-block" />}
                >
                    Hello
                </Button>
                <Button
                    variant="primary"
                    icon={<ExclamationIcon className="h-5 w-5 inline-block" />}
                >
                    Hello
                </Button>
                <Button
                    variant="secondary"
                    icon={<ExclamationIcon className="h-5 w-5 inline-block" />}
                >
                    Hello
                </Button>
                <Button
                    variant="negative"
                    icon={<ExclamationIcon className="h-5 w-5 inline-block" />}
                >
                    Hello
                </Button>
            </div>
            <div className="space-x-2">
                <Button variant="callToAction" isQuiet>
                    Hello
                </Button>
                <Button variant="primary" isQuiet>
                    Hello
                </Button>
                <Button variant="secondary" isQuiet>
                    Hello
                </Button>
                <Button variant="negative" isQuiet>
                    Hello
                </Button>
            </div>
            <div className="space-x-2">
                <Button variant="callToAction" isDisabled>
                    Hello
                </Button>
                <Button variant="primary" isDisabled>
                    Hello
                </Button>
                <Button variant="secondary" isDisabled>
                    Hello
                </Button>
                <Button variant="negative" isDisabled>
                    Hello
                </Button>
            </div>
            <div className="space-x-2">
                <Button variant="callToAction" isQuiet isDisabled>
                    Hello
                </Button>
                <Button variant="primary" isQuiet isDisabled>
                    Hello
                </Button>
                <Button variant="secondary" isQuiet isDisabled>
                    Hello
                </Button>
                <Button variant="negative" isQuiet isDisabled>
                    Hello
                </Button>
            </div>
        </div>
    )
};
