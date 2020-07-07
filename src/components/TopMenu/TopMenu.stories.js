import React from "react";
import TopMenu from "./TopMenu";
import TopMenuItem from "./TopMenuItem";
import TopMenuDivider from "./TopMenuDivider";
import Dropdown from "../Dropdown/Dropdown";
import DropdownButton from "../Dropdown/DropdownButton";
import DropdownList from "../Dropdown/DropdownList";
import DropdownItem from "../Dropdown/DropdownItem";
import DropdownGroup from "../Dropdown/DropdownGroup";

export default {
    title: "Design System|TopMenu",
    parameters: {
        component: TopMenu,
    }
}

export const Example = () => {
    return (
        <TopMenu
            leftChildren={(
                <>
                    <TopMenuItem className="px-10">
                        <div className="text-xs">
                            Hello
                        </div>
                    </TopMenuItem>
                    <TopMenuDivider/>
                    <TopMenuItem>
                        Hi
                    </TopMenuItem>
                </>
            )}
            rightChildren={(
                <>
                    <TopMenuItem>
                        <Dropdown>
                            <DropdownButton>
                                <div className="p-2">
                                    Profile <i className="fa fa-caret-down"/>
                                </div>
                            </DropdownButton>
                            <DropdownList direction="top-right" width={"64"}>
                                <DropdownItem theme={{color: "primary"}}>
                                    <div>
                                        Item1
                                    </div>
                                </DropdownItem>
                                <DropdownItem theme={{color: "primary"}}>
                                    Item2
                                </DropdownItem>
                                <DropdownItem theme={{color: "primary"}}>
                                    Item3
                                </DropdownItem>
                                <DropdownItem theme={{color: "primary"}}>
                                    Item4
                                </DropdownItem>
                                <DropdownGroup>
                                    <DropdownItem theme={{color: "primary"}}>
                                        <div className="text-sm">
                                            Signup
                                        </div>
                                        <div className="text-xs whitespace-pre">
                                            Click here to signup
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem theme={{color: "primary"}}>
                                        <div className="text-sm">
                                            Login
                                        </div>
                                        <div className="text-xs whitespace-pre">
                                            Click here to Login
                                        </div>
                                    </DropdownItem>
                                </DropdownGroup>
                            </DropdownList>
                        </Dropdown>
                    </TopMenuItem>
                </>
            )}
        >

        </TopMenu>
    );
};