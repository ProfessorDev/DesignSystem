import React, { HTMLAttributes, ReactNode, useRef } from "react";
import { useSelectState } from '@react-stately/select';
import { useSelect, AriaHiddenSelectProps, HiddenSelectProps } from '@react-aria/select';
import { useButton } from '@react-aria/button';
import { HiddenSelect, AriaSelectOptions } from '@react-aria/select';
import { ListBoxPopup } from "./ListBoxPopup";
import twx from "tailwindcssx";
import { Transition } from 'react-transition-group';
import { ChevronDownIcon } from "@heroicons/react/solid";

export interface SelectProps extends AriaSelectOptions<Array<ReactNode>> {
    name?: string,
}

export const Select: React.FC<SelectProps> = (props) => {
    // Create state based on the incoming props

    let state = useSelectState(props);

    // Get props for child elements from useSelect
    let ref = useRef(null);
    let {
        labelProps,
        triggerProps,
        valueProps,
        menuProps
    } = useSelect(props, state, ref);

    // Get props for the button based on the trigger props from useSelect
    let { buttonProps } = useButton(triggerProps, ref);

    return (
        <div
            className={twx([
                // 'border border-red-600',
                'relative',
            ])}
        >
            <div
                {...labelProps}
                className={twx([
                    'text-xs',
                    'mb-1',
                ])}
            >
                {props.label}
            </div>
            <HiddenSelect
                state={state}
                triggerRef={ref}
                label={props.label}
                name={props.name}
            />
            <button
                {...buttonProps}
                ref={ref}
                style={{ height: 30 }}
                className={twx([
                    'text-sm',
                    'border border-gray-400',
                    'px-2 py-1',
                    'rounded',
                    'flex',
                    'items-center',
                    'w-full',
                ])}
            >
                <span
                    {...valueProps}
                    className={twx([
                        'flex',
                        'flex-start',
                        'flex-1',
                        'mr-1',
                    ])}
                >
                    {state.selectedItem
                        ? state.selectedItem.rendered
                        : 'Select an option'}
                </span>
                <span className={twx([
                    'text-xs',
                ])}>
                    <ChevronDownIcon className="h-5 w-5"/>
                </span>
            </button>
            <Transition in={state.isOpen} timeout={200}>
                {
                    transitionState => (
                        <div className={twx([
                            'absolute',
                            'top-full',
                            'left-0',
                            'right-0',
                        ])} style={{
                            transition: `all 200ms ease-in-out`,
                            opacity: 0,
                            ...({
                                entering: {
                                    opacity: 1,
                                    transform: "translateY(0px)"
                                },
                                entered: {
                                    opacity: 1,
                                    transform: "translateY(0px)"
                                },
                                exiting: {
                                    opacity: 0,
                                    transform: "translateY(-10px)"
                                },
                                exited: {
                                    opacity: 0,
                                    transform: "translateY(-10px)"
                                },
                            } as any)[transitionState],
                            zIndex: 10,
                        }}>
                            {
                                transitionState !== "exited" && (
                                    <ListBoxPopup {...menuProps} state={state} />
                                )
                            }
                        </div>
                    )
                }

            </Transition>
        </div>
    );
};