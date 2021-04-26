import React, { useRef, useState } from "react";
import { useOption } from '@react-aria/listbox';
import { useFocus } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import twx from "tailwindcssx";
import { SelectState } from '@react-stately/select';
import {Node} from "@react-types/shared"

export interface OptionProps {
    item: Node<React.ReactNode>,
    state: SelectState<React.ReactNode>,
};
export type OptionType = React.FC<OptionProps>;

export const Option: OptionType = ({ item, state }) => {
    let ref = useRef(null);
    let isDisabled = state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(
        item.key
    );
    let { optionProps } = useOption(
        {
            key: item.key,
            isDisabled,
            isSelected,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true
        },
        state,
        ref
    );

    // Handle focus events so we can apply highlighted
    // style to the focused option
    let [isFocused, setFocused] = useState(false);
    let { focusProps } = useFocus({ onFocusChange: setFocused });

    return (
        <li
            {...mergeProps(optionProps, focusProps)}
            ref={ref}
            className={twx({
                '': [
                    'flex',
                    isFocused && 'bg-gray-300',
                    'px-3 py-1',
                    'items-center',
                    'bg-white',
                ],
                hover: [
                    ''
                ],
            })}
            style={{
                outline: 'none',
                cursor: 'pointer'
            }}>
            <div className="flex-1">
                {item.rendered}
            </div>
            <div className="text-xs text-blue-600">
                {
                    isSelected &&
                    <span>
                        <i className="fas fa-check" />
                    </span>
                }
            </div>
        </li>
    );
}