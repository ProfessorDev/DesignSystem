import React, {createContext} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";

export const ThemeContext = createContext(null);

export default function SideNav({minimum, full, mode, theme, ...props}) {
    const {color = "primary", width = "auto"} = theme;

    const className = classNames(
        `w-${width}`,
    );

    return (
        <ThemeContext.Provider value={color}>
            <div
                {...props}
                className={classNames(className, props.className)}
            >
                {mode === "minimum" ? minimum : full}
            </div>
        </ThemeContext.Provider>
    );
}

SideNav.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.shape({
        color: PropTypes.oneOf(["primary", "secondary", "neutral", "error", "neutral"]),
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    mode: PropTypes.oneOf(["minimum", "full"])
};

SideNav.defaultProps = {
    children: "Link",
    theme: {
        color: "primary",
    },
    mode: "full",
};