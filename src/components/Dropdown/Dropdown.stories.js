import React from "react";
import Dropdown from "./Dropdown";
import {withKnobs} from '@storybook/addon-knobs/react';
import DropdownItem from "./DropdownItem";
import DropdownList from "./DropdownList";
import DropdownButton from "./DropdownButton";

export default {
    title: "Design System|Dropdown",
    decorators: [withKnobs],
    parameters: {
        component: Dropdown,
        componentSubtitle: "Dropdown subtitle"
    }
}

export const TopLeft = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"top-left"}>
                <DropdownButton>
                    <div className="p-2">
                        <i className="fas fa-caret-up"/> Dropdown click
                    </div>
                </DropdownButton>
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
            </Dropdown>
        </div>
    )
};

export const TopRight = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"top-right"}>
                <DropdownButton onClick={() => console.log("Hello World")}>
                    <div className="p-2">
                        Dropdown click <i className="fas fa-caret-up"/>
                    </div>
                </DropdownButton>
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
            </Dropdown>
        </div>
    )
};

export const BottomLeft = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"bottom-left"}>
                <DropdownButton>
                    <div className="p-2">
                        <i className="fas fa-caret-down"/> Dropdown click
                    </div>
                </DropdownButton>
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
            </Dropdown>
        </div>
    )
};

export const BottomRight = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"bottom-right"}>
                <DropdownButton>
                    <div className="p-2">
                        Dropdown click <i className="fas fa-caret-down"/>
                    </div>
                </DropdownButton>
                <DropdownList direction="top-right" width="auto">
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
            </Dropdown>
        </div>
    )
};

export const LeftTop = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"left-top"}>
                <DropdownButton>
                    <div className="p-2">
                        <i className="fas fa-caret-left"/> Dropdown click
                    </div>
                </DropdownButton>
                <DropdownList direction="right-top" width="auto">
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
            </Dropdown>
        </div>
    )
};

export const LeftBottom = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"left-bottom"}>
                <DropdownButton>
                    <div className="p-2">
                        <i className="fas fa-caret-left"/> Dropdown Click
                    </div>
                </DropdownButton>
                <DropdownList direction="right-bottom" width="auto">
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
            </Dropdown>
        </div>
    )
};

export const RightTop = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"right-top"}>
                <DropdownButton>
                    <div className="p-2">
                        Dropdown click <i className="fas fa-caret-right"/>
                    </div>
                </DropdownButton>
                <DropdownList direction="left-top" width="auto">
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
            </Dropdown>
        </div>
    )
};

export const RightBottom = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Dropdown direction={"right-bottom"}>
                <DropdownButton>
                    <div className="p-2">
                        Dropdown click <i className="fas fa-caret-right"/>
                    </div>
                </DropdownButton>
                <DropdownList direction="left-bottom" width="auto">
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
            </Dropdown>
        </div>
    )
};