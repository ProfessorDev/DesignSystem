import React, { ReactNode, useRef } from "react";
import { useListBox } from '@react-aria/listbox';
import { SelectState } from '@react-stately/select';

import {
    useOverlay,
    DismissButton
} from '@react-aria/overlays';

import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { Option } from "./Option";
import twx from "tailwindcssx";

interface ListBoxPopupProps {
    state: SelectState<ReactNode>,
}

export const ListBoxPopup: React.FC<ListBoxPopupProps> = ({ state, ...otherProps }) => {
    let ref = useRef(null);

    // Get props for the listbox
    let { listBoxProps } = useListBox(
        {
            autoFocus: state.focusStrategy || true,
            disallowEmptySelection: true,
            ...otherProps
        },
        state,
        ref
    );

    // Handle events that should cause the popup to close,
    // e.g. blur, clicking outside, or pressing the escape key.
    let overlayRef = useRef(null);
    let { overlayProps } = useOverlay(
        {
            onClose: () => state.close(),
            shouldCloseOnBlur: true,
            isOpen: state.isOpen,
            isDismissable: true
        },
        overlayRef
    );
    console.log("collection", state.collection)

    // Wrap in <FocusScope> so that focus is restored back to the
    // trigger when the popup is closed. In addition, add hidden
    // <DismissButton> components at the start and end of the list
    // to allow screen reader users to dismiss the popup easily.
    return (
        <FocusScope restoreFocus>
            <div
                {...overlayProps}
                ref={overlayRef}
                className={twx([
                    'bg-white',
                    'w-full',
                    'mt-2',
                ])}
            >
                <DismissButton onDismiss={() => state.close()} />
                <ul
                    {...mergeProps(listBoxProps, otherProps)}
                    ref={ref}
                    className={twx([
                        'flex',
                        'flex-col',
                        'border border-gray-300',
                        'rounded',
                        'shadow',
                        'overflow-hidden',
                        'py-1',
                        'text-sm',
                        'bg-white',
                    ])}
                >
                    {Array.from(state.collection).map((item) => (
                        <Option
                            key={item.key}
                            item={item}
                            state={state}
                        />
                    ))}
                </ul>
                <DismissButton onDismiss={() => state.close()} />
            </div>
        </FocusScope>
    );
}
