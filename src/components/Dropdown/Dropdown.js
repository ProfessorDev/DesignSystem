import React, {Children, cloneElement, createContext, useState} from "react";
import * as PropTypes from 'prop-types';
import classNames from "classnames";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";

export const DropdownContext = createContext(null);

export default function Dropdown({children, className, dropdownClassName,direction = "bottom-right"}) {
    const [open, setOpen] = useState(false);

    className = classNames(
        className,
        'relative',
        'inline-block'
    );

    dropdownClassName = classNames(
        dropdownClassName,
        'absolute',
    );

    if (direction === "top-left") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__top-left',
        )
    } else if (direction === "top-right") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__top-right',
        )
    } else if (direction === "bottom-left") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__bottom-left',
        )
    } else if (direction === "bottom-right") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__bottom-right',
        )
    } else if (direction === "left-top") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__left-top',
        )
    } else if (direction === "left-bottom") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__left-bottom',
        )
    } else if (direction === "right-top") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__right-top',
        )
    } else if (direction === "right-bottom") {
        dropdownClassName = classNames(
            dropdownClassName,
            'dropdown__right-bottom',
        )
    }

    let dropdownButton = null;
    let dropdownList = null;

    Children.forEach(children, (child) => {
        if (child.type === DropdownButton) {
            dropdownButton = child;
        } else if (child.type === DropdownList) {
            dropdownList = child;
        }
    });


    return (
        <DropdownContext.Provider value={{
            dropdownOpen: open,
            setDropdownOpen: setOpen,
        }}>
            <div
                className={className}
            >
                {cloneElement(dropdownButton, {
                    onClick: (event) => {
                        setOpen((prevOpen) => !prevOpen);
                        typeof dropdownButton.props.onClick === "function" && dropdownButton.props.onClick(event);
                    },
                })}
                {
                    open &&
                    <div className={dropdownClassName}>
                        {cloneElement(dropdownList, {
                            setDropdownOpen: setOpen,
                            ...dropdownList.props,
                        })}
                    </div>
                }
            </div>
        </DropdownContext.Provider>
    )
}

Dropdown.defaultProps = {};

Dropdown.propTypes = {
    direction: PropTypes.oneOf(["top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"]),
};
