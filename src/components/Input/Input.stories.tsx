import React from "react";
import Input from "./Input";
import {PaddingWrap} from "../utils/PaddingWrap";

export default {
    title: 'Design System/Input',
    parameters: {
        component: Input,
    }
}

export const Styles = () => {
    return (
        <>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} inputStyle="outline"/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} inputStyle="no-outline"/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} inputStyle="underline"/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} inputStyle="fill"/>
            </PaddingWrap>
        </>
    );
};

export const Rounded = () => {
    return (
        <>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} rounded={"sm"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} rounded={"md"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} rounded={"lg"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} rounded={"full"}/>
            </PaddingWrap>
        </>
    );
};

export const colors = () => {
    return (
        <>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} color={"warning"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} color={"error"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} color={"neutral"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} color={"secondary"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} color={"primary"}/>
            </PaddingWrap>
        </>
    );
};

export const Sizes = () => {
    return (
        <>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} size={"xs"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} size={"sm"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} size={"base"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} size={"lg"}/>
            </PaddingWrap>
            <PaddingWrap>
                <Input type="text" placeholder={"hello"} size={"xl"}/>
            </PaddingWrap>
        </>
    );
};

export const Width = () => {
    return (
        <>
            <Input type="" placeholder={"hello"} width={"5"}/>
            <Input type="text" placeholder={"hello"} width={"10"}/>
            <Input type="text" placeholder={"hello"} width={"auto"}/>
            <Input type="text" placeholder={"hello"} width={"full"}/>
        </>
    );
};