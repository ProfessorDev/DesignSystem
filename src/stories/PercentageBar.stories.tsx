import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import { PercentageBar, PercentageBarProps } from "../components/PercentageBar/PercentageBar";

export default {
    title: "Design System V2/PercentageBar",
} as Meta;

const Template: Story<PercentageBarProps> = (args) => (
    <PercentageBar {...args} />
)


export const Example = () => {
    const [by, setBy] = useState(10);
    const [number, setNumber] = useState(0);

    // useEffect(() => {
    //     setInterval(() => {
    //         setNumber(number => number + by);
    //     }, 50);
    // }, []);

    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <PercentageBar variant="negative" current={number} total={500} />
            </div>
            <div>
                <PercentageBar variant="positive" current={50} />
            </div>
            <div>
                <PercentageBar variant="notice" current={100} />
            </div>
            <div className="space-x-2">
                <button onClick={() => setNumber(number + by)}>
                    Increase by {by}
                    </button>
                <button onClick={() => setNumber(number - by)}>
                    Decrease by {by}
                </button>
            </div>
            <div>
                <input type="number" value={by} onChange={(e) => {setBy(parseInt(e.target.value))}}/>
            </div>
        </div>
    )
}
