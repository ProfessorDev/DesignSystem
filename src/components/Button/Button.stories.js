import React from 'react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text} from '@storybook/addon-knobs/react';

import Button from './';

export default {
    title: 'Design System|Button',
    decorators: [withKnobs],
    parameters: {
        component: Button,
        componentSubtitle: 'Displays an button',
    },
};

export const Example = () => {
    return (
        <Button onClick={action('button clicked')}>
            Example
        </Button>
    )
};

export const Example2 = () => {
    return (
        <Button onClick={action('button clicked')}>
            Example2
        </Button>
    )
};

export const ExampleWithKnobs = () => {
    return (
        <Button onClick={action('button clicked')}>
            {text('children', "hello")}
        </Button>
    );
};