import React from 'react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text, select, number, boolean} from '@storybook/addon-knobs/react';
import {PaddingWrap} from "../utils/PaddingWrap";

import Button from './Button';

export default {
    title: 'Design System|Button',
    decorators: [withKnobs],
    parameters: {
        component: Button,
        componentSubtitle: 'Displays an button',
    },
};

export const Colors = () => {
    return (
        <>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "primary",
                }}>
                    Primary
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "secondary",
                }}>
                    Secondary
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "neutral",
                }}>
                    Neutral
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "error",
                }}>
                    Error
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "warning",
                }}>
                    Warning
                </Button>
            </PaddingWrap>
            <br/>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "primary",
                    buttonStyle: "outline"
                }}>
                    Primary
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "secondary",
                    buttonStyle: "outline"
                }}>
                    Secondary
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "neutral",
                    buttonStyle: "outline"
                }}>
                    Neutral
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "error",
                    buttonStyle: "outline"
                }}>
                    Error
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "warning",
                    buttonStyle: "outline"
                }}>
                    Warning
                </Button>
            </PaddingWrap>
            <br/>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "primary",
                    buttonStyle: "text"
                }}>
                    Primary
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "secondary",
                    buttonStyle: "text"
                }}>
                    Secondary
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "neutral",
                    buttonStyle: "text"
                }}>
                    Neutral
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "error",
                    buttonStyle: "text"
                }}>
                    Error
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    color: "warning",
                    buttonStyle: "text"
                }}>
                    Warning
                </Button>
            </PaddingWrap>
        </>
    )
};

export const Sizes = () => {
    return (
        <>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "xs"
                }}>
                    Extra Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "sm"
                }}>
                    Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "md"
                }}>
                    Medium
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "lg"
                }}>
                    Large
                </Button>
            </PaddingWrap>
            <br/>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "xs",
                    buttonStyle: "outline"
                }}>
                    Extra Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "sm",
                    buttonStyle: "outline"
                }}>
                    Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "md",
                    buttonStyle: "outline"
                }}>
                    Medium
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "lg",
                    buttonStyle: "outline"
                }}>
                    Large
                </Button>
            </PaddingWrap>
        </>
    )
};

export const ColorWeights = () => {
    return (
        <>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 100
                }}>
                    100
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 200
                }}>
                    200
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 300
                }}>
                    300
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 400
                }}>
                    400
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 500
                }}>
                    500
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 600
                }}>
                    600
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 700
                }}>
                    700
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 800
                }}>
                    800
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 900
                }}>
                    900
                </Button>
            </PaddingWrap>
            <br/>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 500,
                    buttonStyle: "outline"
                }}>
                    500
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 600,
                    buttonStyle: "outline"
                }}>
                    600
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 700,
                    buttonStyle: "outline"
                }}>
                    700
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 800,
                    buttonStyle: "outline"
                }}>
                    800
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    colorVariant: 900,
                    buttonStyle: "outline"
                }}>
                    900
                </Button>
            </PaddingWrap>
        </>
    )
};

export const Border = () => {
    return (
        <>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    border: "flat"
                }}>
                    Flat
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    border: "rounded"
                }}>
                    Rounded
                </Button>
            </PaddingWrap>
        </>
    )
};

export const FullWidth = () => {
    return (
        <Button theme={{
            full: true
        }}>
            Full Width Button
        </Button>
    )
};

export const withIcons = () => {
    return (
        <>
            <PaddingWrap>
                <Button>
                    <i className="fas fa-file-alt"/> file
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button theme={{
                    buttonStyle: "outline",
                }}>
                    <i className="fas fa-file-alt"/> file
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button theme={{
                    buttonStyle: "outline",
                    size: "xs",
                    onlyIcon: true,
                }}>
                    <i className="fas fa-times"/>
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "xs",
                    buttonStyle: "text",
                    onlyIcon: true,
                    shadow: false,
                }}>
                    <i className="fas fa-times"/>
                </Button>
            </PaddingWrap>
        </>
    )
};

const generateThemeWithKnobs = () => ({
    color: select("color", ["primary", "secondary", "neutral", "error", "warning"]),
    colorVariant: number("colorWeight", 700, {
        range: true,
        min: 100,
        max: 900,
        step: 100,
    }),
    buttonStyle: select("buttonStyle", ["normal", "outline", "text"]),
    size: select("size", {
        "Extra Small": "xs",
        "Small": "sm",
        "Medium": "md",
        "Large": "lg",
    }, "md"),
    border: select("border", ["flat", "rounded"]),
    full: boolean("full", false),
    onlyIcon: boolean("onlyIcon", false),
    shadow: boolean("shadow", true),
});

export const ButtonWithIconKnobs = () => {
    return (
        <Button onClick={action('button clicked')} theme={generateThemeWithKnobs()}>
            <i className="fas fa-times"/>
        </Button>
    );
};

export const ButtonWithIconAndTextKnobs = () => {
    return (
        <Button onClick={action('button clicked')} theme={generateThemeWithKnobs()}>
            <i className="fas fa-times"/> EXAMPLE
        </Button>
    );
};

export const ButtonWithTextIconKnobs = () => {
    return (
        <Button onClick={action('button clicked')} theme={generateThemeWithKnobs()}>
            {text('text', 'EXAMPLE')}
        </Button>
    );
};