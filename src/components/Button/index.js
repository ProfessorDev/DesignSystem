import React from "react";
import classNames from "classnames";
import * as PropTypes from 'prop-types';

/**
 *- Use an avatar for attributing actions or content to specific users.
 *- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/
export default function Button({children, ...props}) {
    return (
        <button
            {...props}
            className={classNames(
                'border border-gray-500',
                'p-1 px-3',
                'text-gray-500',
                'hover:shadow-md',
                'focus:outline-none'
            )}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    /**
     * Here the documentation goes of each prop
     */
    children: PropTypes.any,
};

Button.defaultProps = {
    children: "Button",
};