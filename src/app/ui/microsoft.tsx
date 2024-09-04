"use client";

import React from "react";
import UiCompsPage from "./ui.comps";
import { faMicrosoft } from "@/assets"
import { useLocalContext } from "../context/LocalContext";
import { ecuationProp } from "@/ts";

export const Microsft: React.FC = () => {
    const ui = new UiCompsPage()
    const { ...pre } = useLocalContext()
    const State: ecuationProp = {
        inputValue: pre.values.microsoft,
        factor: 1724.07,
        precision: 4
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); pre.ecuation(State, { type: "microsoft" }) }
    return (<ui.OpTemplate
        click={() => { pre.ButtonBoolean({ type: "closeMicrosft" }) }}
        icon={faMicrosoft}
        color="sky-blue"
        Name="Microsoft"
        onSubmit={handleSubmit}
        value={pre.values.microsoft}
        nameInput="microsoft"
        result={pre.resultado}
        factor={State}
    />)
}