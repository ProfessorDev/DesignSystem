import React from "react";
import TopMenu from "./TopMenu";
import TopMenuItem from "./TopMenuItem";
import TopMenuDivider from "./TopMenuDivider";
import Dropdown from "../Dropdown/Dropdown";
import DropdownButton from "../Dropdown/DropdownButton";
import DropdownList from "../Dropdown/DropdownList";
import DropdownItem from "../Dropdown/DropdownItem";
import DropdownGroup from "../Dropdown/DropdownGroup";
import DropdownDivider from "../Dropdown/DropdownDivider";
import DropdownInfo from "../Dropdown/DropdownInfo";

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
                            <DropdownList direction="top-right">
                                <DropdownItem theme={{color: "primary"}}>
                                    <div>
                                        Item1
                                    </div>
                                </DropdownItem>
                                <DropdownDivider/>
                                <DropdownItem theme={{color: "primary"}}>
                                    Item2
                                </DropdownItem>
                                <DropdownDivider/>
                                <DropdownItem theme={{color: "primary"}}>
                                    Item3
                                </DropdownItem>
                                <DropdownDivider/>
                                <DropdownItem theme={{color: "primary"}}>
                                    Item4
                                </DropdownItem>
                                <DropdownDivider/>
                                <DropdownGroup>
                                    <DropdownItem theme={{color: "primary"}}>
                                        <div className="text-sm">
                                            Signup
                                        </div>
                                        <div className="text-xs whitespace-pre">
                                            Click here to signup
                                        </div>
                                    </DropdownItem>
                                    <DropdownDivider/>
                                    <DropdownItem theme={{color: "primary"}}>
                                        <div className="text-sm">
                                            Login
                                        </div>
                                        <div className="text-xs whitespace-pre">
                                            Click here to Login
                                        </div>
                                    </DropdownItem>
                                </DropdownGroup>
                                <DropdownDivider/>
                                <DropdownInfo>
                                    <div className="text-center text-sm whitespace-pre">
                                        please select one of the option dfsdf df sfsdfdfs
                                    </div>
                                </DropdownInfo>
                                <DropdownDivider/>
                                <DropdownItem theme={{color: "primary"}}>
                                    {(open, setOpen) => (
                                        <div onClick={() => setOpen(false)}>
                                            <div className="text-sm">
                                                Close
                                            </div>
                                            <div className="text-xs whitespace-pre">
                                                Click here to close
                                            </div>
                                        </div>
                                    )}
                                </DropdownItem>
                            </DropdownList>
                        </Dropdown>
                    </TopMenuItem>
                </>
            )}
        >

        </TopMenu>
    );
};