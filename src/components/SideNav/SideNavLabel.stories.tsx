import {withKnobs} from "@storybook/addon-knobs";
import SideNavLabel from "./SideNavLabel";
import React from "react";
import {PaddingWrap} from "../utils/PaddingWrap";

export default {
    title: 'Design System/SideNav Label',
    decorators: [withKnobs],
    parameters: {
        component: SideNavLabel,
        componentSubtitle: 'Displays an Side Nav Label',
    }
}

export const Normal = () => {
    return (
        <>
            <PaddingWrap>
                <SideNavLabel theme={{color: "primary"}}>
                    Primary
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "secondary"}}>
                    Secondary
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "neutral"}}>
                    Neutral
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "error"}}>
                    Error
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "warning"}}>
                    Warning
                </SideNavLabel>
            </PaddingWrap>
        </>
    )
};

export const Active = () => {
    return (
        <>
            <PaddingWrap>
                <SideNavLabel theme={{color: "primary", active: true}}>
                    Primary
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "secondary", active: true}}>
                    Secondary
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "neutral", active: true}}>
                    Neutral
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "error", active: true}}>
                    Error
                </SideNavLabel>
            </PaddingWrap>
            <PaddingWrap>
                <SideNavLabel theme={{color: "warning", active: true}}>
                    Warning
                </SideNavLabel>
            </PaddingWrap>
        </>
    )
};