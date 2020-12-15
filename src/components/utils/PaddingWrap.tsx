import React from "react";

export const PaddingWrap = ({children}) => {
    return (
        <div style={{display: "inline-block", padding: "5px"}}>
            {children}
        </div>
    )
};