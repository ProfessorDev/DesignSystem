import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { PercentageCircle } from "../components/PercentageCircle/PercentageCircle";

export default {
    title: "Design System V2/PercentageCircle",
    component: PercentageCircle,
} as Meta;

export const Example = () => {
    const [value, setValue] = useState(0);

    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <PercentageCircle variant="positive" current={value} />
                <PercentageCircle variant="negative" current={25} />
                <PercentageCircle variant="notice" current={50} />
                <PercentageCircle variant="positive" current={75} />
                <PercentageCircle variant="positive" current={100} />
            </div>
            <div className="space-x-2">
                <button onClick={() => setValue(value + 10)}>
                    Increase 10
                </button>
                <button onClick={() => setValue(value - 10)}>
                    Decrease 10
                </button>
                <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
            </div>
        </div>
    )
}