import React, {useState} from "react";
import SideNav from "./SideNav";
import SideNavLabel from "./SideNavLabel";
import {PaddingWrap} from "../utils/PaddingWrap";
import {withKnobs, select   } from '@storybook/addon-knobs/react';

export default {
    title: "Design System|SideNav",
    decorators: [withKnobs],
    parameter: {
        component: SideNav,
        componentSubtitle: 'Displays an Side Nav',
    }
}

export const Full = () => {
    return (
        <PaddingWrap>
            <SideNav
                minimum={(
                    <>
                        <SideNavLabel theme={{type: "header"}}>
                            <b>Electropro</b>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-comment"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: true}}>
                            <i className="fas fa-home"/>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-eye-slash"/>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-file-pdf"/>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-trash"/>
                        </SideNavLabel>
                    </>
                )}
                full={(
                    <>
                        <SideNavLabel theme={{type: "header"}}>
                            <b>Electropro</b>
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6">
                                <i className="fas fa-comment"/>
                            </span>
                            Home
                        </SideNavLabel>
                        <SideNavLabel theme={{active: true}}>
                            <span className="inline-block w-6"><i className="fas fa-home"/></span>
                            Profile
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6"><i className="fas fa-eye-slash"/></span>
                            Chat
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6"><i className="fas fa-file-pdf"/></span>
                            Global
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6"><i className="fas fa-trash"/></span>
                            Technology
                        </SideNavLabel>
                    </>
                )}
                theme={{color: "neutral", width: "64"}}
                mode={"full"}
            />
        </PaddingWrap>
    )
};

export const Minimum = () => {
    return (
        <PaddingWrap>
            <SideNav
                minimum={(
                    <>
                        <SideNavLabel theme={{type: "header"}}>
                            <i className="fas fa-bars"/>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-comment"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: true}}>
                            <i className="fas fa-home"/>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-eye-slash"/>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-file-pdf"/>
                        </SideNavLabel>
                        <SideNavLabel>
                            <i className="fas fa-trash"/>
                        </SideNavLabel>
                    </>
                )}
                full={(
                    <>
                        <SideNavLabel theme={{type: "header"}}>
                            <b>Electropro</b>
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6">
                                <i className="fas fa-comment"/>
                            </span>
                            Home
                        </SideNavLabel>
                        <SideNavLabel theme={{active: true}}>
                            <span className="inline-block w-6"><i className="fas fa-home"/></span>
                            Profile
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6"><i className="fas fa-eye-slash"/></span>
                            Chat
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6"><i className="fas fa-file-pdf"/></span>
                            Global
                        </SideNavLabel>
                        <SideNavLabel>
                            <span className="inline-block w-6"><i className="fas fa-trash"/></span>
                            Technology
                        </SideNavLabel>
                    </>
                )}
                theme={{color: "neutral"}}
                mode={"minimum"}
            />
        </PaddingWrap>
    )
};

export const Toggle = () => {
    const [mode, setMode] = useState(true);

    const [index, setIndex] = useState(0);

    return (
        <PaddingWrap>
            <SideNav
                minimum={(
                    <>
                        <SideNavLabel theme={{type: "header"}} onClick={() => setMode(!mode)}>
                            <i className="fas fa-bars"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 0}} onClick={() => setIndex(0)}>
                            <i className="fas fa-comment"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 1}} onClick={() => setIndex(1)}>
                            <i className="fas fa-home"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 2}} onClick={() => setIndex(2)}>
                            <i className="fas fa-eye-slash"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 3}} onClick={() => setIndex(3)}>
                            <i className="fas fa-file-pdf"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 4}} onClick={() => setIndex(4)}>
                            <i className="fas fa-trash"/>
                        </SideNavLabel>
                    </>
                )}
                full={(
                    <>
                        <SideNavLabel theme={{type: "header"}} onClick={() => setMode(!mode)}>
                            <b>Electropro</b>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 0}} onClick={() => setIndex(0)}>
                            <span className="inline-block w-6">
                                <i className="fas fa-comment"/>
                            </span>
                            Home
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 1}} onClick={() => setIndex(1)}>
                            <span className="inline-block w-6"><i className="fas fa-home"/></span>
                            Profile
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 2}} onClick={() => setIndex(2)}>
                            <span className="inline-block w-6"><i className="fas fa-eye-slash"/></span>
                            Chat
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 3}} onClick={() => setIndex(3)}>
                            <span className="inline-block w-6"><i className="fas fa-file-pdf"/></span>
                            Global
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 4}} onClick={() => setIndex(4)}>
                            <span className="inline-block w-6"><i className="fas fa-trash"/></span>
                            Technology
                        </SideNavLabel>
                    </>
                )}
                theme={{color: "neutral", width: mode ? "12" : "64"}}
                mode={mode ? "minimum" : "full"}
            />
        </PaddingWrap>
    )
};

export const WithKnob = () => {
    const [mode, setMode] = useState(true);

    const [index, setIndex] = useState(0);

    return (
        <PaddingWrap>
            <SideNav
                minimum={(
                    <>
                        <SideNavLabel theme={{type: "header"}} onClick={() => setMode(!mode)}>
                            <i className="fas fa-bars"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 0}} onClick={() => setIndex(0)}>
                            <i className="fas fa-comment"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 1}} onClick={() => setIndex(1)}>
                            <i className="fas fa-home"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 2}} onClick={() => setIndex(2)}>
                            <i className="fas fa-eye-slash"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 3}} onClick={() => setIndex(3)}>
                            <i className="fas fa-file-pdf"/>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 4}} onClick={() => setIndex(4)}>
                            <i className="fas fa-trash"/>
                        </SideNavLabel>
                    </>
                )}
                full={(
                    <>
                        <SideNavLabel theme={{type: "header"}} onClick={() => setMode(!mode)}>
                            <b>Electropro</b>
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 0}} onClick={() => setIndex(0)}>
                            <span className="inline-block w-6">
                                <i className="fas fa-comment"/>
                            </span>
                            Home
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 1}} onClick={() => setIndex(1)}>
                            <span className="inline-block w-6"><i className="fas fa-home"/></span>
                            Profile
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 2}} onClick={() => setIndex(2)}>
                            <span className="inline-block w-6"><i className="fas fa-eye-slash"/></span>
                            Chat
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 3}} onClick={() => setIndex(3)}>
                            <span className="inline-block w-6"><i className="fas fa-file-pdf"/></span>
                            Global
                        </SideNavLabel>
                        <SideNavLabel theme={{active: index === 4}} onClick={() => setIndex(4)}>
                            <span className="inline-block w-6"><i className="fas fa-trash"/></span>
                            Technology
                        </SideNavLabel>
                    </>
                )}
                theme={{
                    color: select("color", ["primary", "secondary", "neutral", "error", "warning"]),
                    width: mode ? "12" : "64"
                }}
                mode={mode ? "minimum" : "full"}
            />
        </PaddingWrap>
    )
};