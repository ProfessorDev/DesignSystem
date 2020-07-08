import React, {Children, cloneElement, useState} from "react";
import * as PropTypes from 'prop-types';
import classNames from "classnames";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";

export default function Dropdown({children, direction = "bottom-right"}) {
    const [open, setOpen] = useState(false);

    let className = classNames(
        'relative',
        'inline-block'
    );

    let dropdownClassName = classNames(
        'absolute',
    );

    if (direction === "top-left") {
        dropdownClassName = classNames(
            'dropdown__top-left',
            dropdownClassName,
        )
    } else if (direction === "top-right") {
        dropdownClassName = classNames(
            'dropdown__top-right',
            dropdownClassName,
        )
    } else if (direction === "bottom-left") {
        dropdownClassName = classNames(
            'dropdown__bottom-left',
            dropdownClassName,
        )
    } else if (direction === "bottom-right") {
        dropdownClassName = classNames(
            'dropdown__bottom-right',
            dropdownClassName,
        )
    } else if(direction === "left-top") {
        dropdownClassName = classNames(
            'dropdown__left-top',
            dropdownClassName,
        )
    } else if(direction === "left-bottom") {
        dropdownClassName = classNames(
            'dropdown__left-bottom',
            dropdownClassName,
        )
    } else if(direction === "right-top") {
        dropdownClassName = classNames(
            'dropdown__right-top',
            dropdownClassName,
        )
    } else if(direction === "right-bottom") {
        dropdownClassName = classNames(
            'dropdown__right-bottom',
            dropdownClassName,
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
    )
}

Dropdown.defaultProps = {};

Dropdown.propTypes = {
    direction: PropTypes.oneOf(["top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"]),
};
