import { Action, OpEcuation } from "../types/types";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export interface MenuProps {
    title: string;
    logo: IconDefinition;
    path: string;
}
export interface ListProps extends Omit<MenuProps, "path"> {
    click: () => void;
    color: string;
}
export interface TemplateProp extends ListProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    value: string | number | readonly string[] | undefined;
    nameInput: string;
    result: number | null;
    factor: ecuationProp
}
export interface booleanProps {
    card: boolean;
    microsoft: boolean;
    steam: boolean;
    error: boolean
}
export interface StringProps {
    steam: string;
    microsoft: string
}
export interface ecuationProp {
    inputValue: string;
    factor: number;
    precision: number;
}
export interface ContextProps {
    booleanState: booleanProps;
    resultado: number | null
    takeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    ecuation: (state: ecuationProp, op: OpEcuation) => void;
    ButtonBoolean: (op: Action) => void;
    values: StringProps

    setValues: React.Dispatch<React.SetStateAction<StringProps>>
}
