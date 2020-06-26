import React from "react";
import classNames from "classnames";

export default function DropdownList({children, direction = "top-left"}) {
    const className = classNames(
        'relative',
        'border',
        // 'shadow-md',
        'rounded-md',
    );

    let directionClassName = classNames(
        'absolute',
        'arrow',
        'inline-block'
    );

    if (direction === "top-left" || direction === "top-right") {
        directionClassName = classNames(
            'arrow-up',
            directionClassName
        );

        if (direction === "top-left") {
            directionClassName = classNames(
                'arrow-top-left',
                directionClassName
            );
        } else if (direction === "top-right") {
            directionClassName = classNames(
                'arrow-top-right',
                directionClassName
            );
        }

    } else if (direction === "bottom-left" || direction === "bottom-right") {
        directionClassName = classNames(
            'arrow-down',
            directionClassName
        );

        if (direction === "bottom-left") {
            directionClassName = classNames(
                'arrow-bottom-left',
                directionClassName
            );
        } else if (direction === "bottom-right") {
            directionClassName = classNames(
                'arrow-bottom-right',
                directionClassName
            );
        }
    } else if (direction === "left-top" || direction === "left-bottom") {
        directionClassName = classNames(
            'arrow-left',
            directionClassName
        );

        if (direction === "left-top") {
            directionClassName = classNames(
                'arrow-left-top',
                directionClassName
            );
        } else if (direction === "left-bottom") {
            directionClassName = classNames(
                'arrow-left-bottom',
                directionClassName
            );
        }
    } else if (direction === "right-top" || direction === "right-bottom") {
        directionClassName = classNames(
            'arrow-right',
            directionClassName
        );

        if (direction === "right-top") {
            directionClassName = classNames(
                'arrow-right-top',
                directionClassName
            );
        } else if (direction === "right-bottom") {
            directionClassName = classNames(
                'arrow-right-bottom',
                directionClassName
            );
        }
    }

    return (
        <div
            className={className}
        >
            <div className={directionClassName}>

            </div>
            {children}
        </div>
    )
}

DropdownList.propTypes = {};

DropdownList.defaultProps = {};