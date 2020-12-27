import React, { Children, createContext, Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";
import twx from "tailwindcssx";
import {TabsPanelProps} from "./TabsPanel";


export interface TabsProps {
    children: Array<ReactElement<TabsPanelProps>>,
    defaultKey?: string,
};

interface SelectionState {
    key?: string,
};

export const TabsContext = createContext<[SelectionState, Dispatch<SetStateAction<SelectionState>>]>(null!);

export const Tabs: React.FC<TabsProps> = ({ children, defaultKey = "" }) => {
    const [state, setState] = useState<SelectionState>({
        key: "",
    });

    useEffect(() => {
        setState({
            key: defaultKey,
        });
    }, [defaultKey]);

    return (
        <div>
            <div className={twx([
                'flex',
                'border-b-2 border-gray-200',
            ])}>
                <TabsContext.Provider value={[state, setState]}>
                    {children}
                </TabsContext.Provider>
            </div>
            <div className={twx([

            ])}>
                {Children.map(children, (child) => {
                    if (child.props.label === state.key) {
                        return child.props.children;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};
