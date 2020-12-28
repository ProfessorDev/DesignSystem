import React from "react";
import { Meta } from "@storybook/react";
import { TabsPanel } from "../components/Tabs/TabsPanel";
import { Tabs } from "../components/Tabs/Tabs";

export default {
    title: "Design System V2/Tabs",
    component: TabsPanel,
} as Meta;

export const Example = () => {
    return (
        <div>
            <Tabs defaultValue="Tab2">
                <TabsPanel value="Tab1" label="Tab1">
                    Item 1 Content
                </TabsPanel>
                <TabsPanel value="Tab2" label="Tab2">
                    Item 2 Content
                </TabsPanel>
                <TabsPanel value="Tab3" label="Tab3">
                    Item 3 Content
                </TabsPanel>
            </Tabs>
        </div>
    )
};