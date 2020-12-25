import React from "react";
import DropdownItem from "./DropdownItem";
import {withKnobs} from '@storybook/addon-knobs';
import {PaddingWrap} from "../utils/PaddingWrap";

export default {
    title: 'Design System/Dropdown Item',
    decorators: [withKnobs],
    parameters: {
        component: DropdownItem,
        componentSubtitle: "Dropdown subtitle"
    }
}

export const Example = () => {
    return (
        <>
            <PaddingWrap>
                <DropdownItem theme={{color: "primary"}}>
                    Primary
                </DropdownItem>
            </PaddingWrap>
            <PaddingWrap>
                <DropdownItem theme={{color: "secondary"}}>
                    Secondary
                </DropdownItem>
            </PaddingWrap>
            <PaddingWrap>
                <DropdownItem theme={{color: "neutral"}}>
                    Neutral
                </DropdownItem>
            </PaddingWrap>
            <PaddingWrap>
                <DropdownItem theme={{color: "error"}}>
                    Error
                </DropdownItem>
            </PaddingWrap>
            <PaddingWrap>
                <DropdownItem theme={{color: "warning"}}>
                    Warning
                </DropdownItem>
            </PaddingWrap>
        </>
    )
};