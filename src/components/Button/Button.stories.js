import React from 'react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text, select, number, boolean} from '@storybook/addon-knobs/react';

import Button from './';

export default {
    title: 'Design System|Button',
    decorators: [withKnobs],
    parameters: {
        component: Button,
        componentSubtitle: 'Displays an button',
    },
};

const PaddingWrap = ({children}) => {
    return (
        <div style={{display: "inline-block", padding: "5px"}}>
            {children}
        </div>
    )
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

export const Rounded = () => {
    return (
        <>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "xs",
                    border: "rounded"
                }}>
                    Extra Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "sm",
                    border: "rounded"
                }}>
                    Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "md",
                    border: "rounded"
                }}>
                    Medium
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "lg",
                    border: "rounded"
                }}>
                    Large
                </Button>
            </PaddingWrap>
            <br/>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "xs",
                    buttonStyle: "outline",
                    border: "rounded"
                }}>
                    Extra Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "sm",
                    buttonStyle: "outline",
                    border: "rounded"
                }}>
                    Small
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "md",
                    buttonStyle: "outline",
                    border: "rounded"
                }}>
                    Medium
                </Button>
            </PaddingWrap>
            <PaddingWrap>
                <Button onClick={action('button clicked')} theme={{
                    size: "lg",
                    buttonStyle: "outline",
                    border: "rounded"
                }}>
                    Large
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
        </>
    )
};

export const Knobs = () => {
    return (
        <Button onClick={action('button clicked')} theme={{
            color: select("color", ["primary", "secondary", "neutral", "error", "warning"]),
            colorVariant: number("colorWeight", 700, {
                range: true,
                min: 100,
                max: 900,
                step: 100,
            }),
            buttonStyle: select("buttonStyle", ["normal", "outline"]),
            size: select("size", {
                "Extra Small": "xs",
                "Small": "sm",
                "Medium": "md",
                "Large": "lg",
            }, "md"),
            border: select("border", ["flat", "rounded"]),
            full: boolean("full", false)
        }}>
            {text('children', "hello")}
        </Button>
    );
};