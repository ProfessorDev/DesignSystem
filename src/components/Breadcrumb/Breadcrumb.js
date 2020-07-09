import React, {Children} from "react";
import * as PropTypes from "prop-types";
import classNames from 'classnames';

export default function Breadcrumb({children, as, color = "primary", divider = "/"}) {
    return (
        <div>
            {Children.map(children, (child, index) => {
                if (index === children.length - 1) {
                    return child;
                }
                return (
                    <>
                        {child}
                        <div className={classNames(
                            'inline-block',
                            'py-1',
                            'align-middle',
                            `text-${color}-900`,
                        )}>
                            {divider}
                        </div>
                    </>
                )
            })}
        </div>
    );
}

Breadcrumb.propTypes = {
    children: PropTypes.any,
    divider: PropTypes.any,
};
