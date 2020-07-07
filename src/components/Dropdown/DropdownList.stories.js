import React from "react";
import DropdownList from "./DropdownList";
import {withKnobs} from '@storybook/addon-knobs/react';
import DropdownItem from "./DropdownItem";
import DropdownDivider from "./DropdownDivider";
import DropdownGroup from "./DropdownGroup";

export default {
    title: "Design System|Dropdown List",
    decorators: [withKnobs],
    parameters: {
        component: DropdownList,
        componentSubtitle: "Dropdown List subtitle"
    }
}

export const ArrowTopLeft = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="top-left">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const ArrowTopRight = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="top-right">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const ArrowBottomLeft = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="bottom-left">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const ArrowBottomRight = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="bottom-right">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const ArrowLeftTop = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="left-top">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const ArrowLeftBottom = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="left-bottom">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const ArrowRightTop = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="right-top">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const ArrowRightBottom = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="right-bottom">
                    <DropdownItem theme={{color: "primary"}}>
                        Item1
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item2
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item3
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item4
                    </DropdownItem>
                    <DropdownItem theme={{color: "primary"}}>
                        Item5
                    </DropdownItem>
                </DropdownList>
            </div>
        </>
    )
};

export const CustomDropdownItem = () => {
    return (
        <>
            <div className="p-10">
                <DropdownList direction="top-left">
                    <DropdownItem theme={{color: "primary"}}>
                        <div className="text-sm">
                            Home
                        </div>
                        <div className="text-xs">
                            It will display Home page
                        </div>
                    </DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem theme={{color: "primary"}}>
                        <div className="text-sm">
                            Profile
                        </div>
                        <div className="text-xs">
                            It will display profile
                        </div>
                    </DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem theme={{color: "primary"}}>
                        <div className="text-sm">
                            Chat
                        </div>
                        <div className="text-xs">
                            Click to see the chat
                        </div>
                    </DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem theme={{color: "primary"}}>
                        <div className="text-sm">
                            Power
                        </div>
                        <div className="text-xs">
                            click to see the power settings
                        </div>
                    </DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem theme={{color: "primary"}}>
                        <div className="text-sm">
                            Settings
                        </div>
                        <div className="text-xs">
                            Click to open main settings panel
                        </div>
                    </DropdownItem>
                    <DropdownDivider/>
                    <DropdownGroup>
                        <DropdownItem theme={{color: "primary"}}>
                            <div className="text-sm">
                                Signup
                            </div>
                            <div className="text-xs">
                                Click here to signup
                            </div>
                        </DropdownItem>
                        <DropdownItem theme={{color: "primary"}}>
                            <div className="text-sm">
                                Login
                            </div>
                            <div className="text-xs">
                                Click here to Login
                            </div>
                        </DropdownItem>
                    </DropdownGroup>
                </DropdownList>
            </div>
        </>
    );
};

