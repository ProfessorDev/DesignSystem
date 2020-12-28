import React, { ReactNode, useContext } from "react";
import twx from "tailwindcssx";
import { TabsContext } from "./Tabs";

export interface TabsPanelProps {
    label: ReactNode,
    value?: string,
    children: ReactNode,
    isSelected?: boolean,
}

export const TabsPanel: React.FC<TabsPanelProps> = ({ label, value = "" }) => {
    const [state, setState] = useContext(TabsContext);

    return (
        <button onClick={() => {
            setState({
                key: value,
            });
        }} className={twx({
            '': [
                'py-1 px-3',
                'border-b-2',
                state.key === label && "border-b-4 border-blue-600",
                'transition-colors duration-100',
                'cursor-pointer',
                'relative',
                'top-0.5',
                'text-sm',
                'outline-none',
            ],
            hover: [
                'border-blue-600',
            ],
            focus: [
                'border-blue-600',
            ],
        })}>
            {label}
        </button>
    );
};
