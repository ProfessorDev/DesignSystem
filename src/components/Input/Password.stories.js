import React from "react";
import Password from "./Password";

export default {
    title: "Design System|Password",
    parameters: {
        component: Password,
    }
}

export const Example = () => {
    return (
        <>
            <div className="">
                <Password />
            </div>
            <div className="">
                <Password showEye/>
            </div>
        </>
    )
};