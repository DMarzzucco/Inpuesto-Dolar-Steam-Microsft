"use client";

import React from "react";
import { faMicrosoft } from "@/assets"
import { useLocalContext } from "../context/LocalContext";
import { ecuationProp } from "@/ts";
import { OpTemplate } from "./ui.comps";

export const Microsoft: React.FC = React.memo(() => {
    const { ...pre } = useLocalContext()
    const State: ecuationProp = {
        inputValue: pre.values.microsoft,
        factor: 1724.07,
        precision: 4
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        pre.ecuation(State, { type: "microsoft" })
    }
    return (<OpTemplate
        click={() => { pre.ButtonBoolean({ type: "closeMicrosoft" }) }}
        logo={faMicrosoft}
        color="sky-blue"
        title="Microsoft"
        onSubmit={handleSubmit}
        value={pre.values.microsoft}
        nameInput="microsoft"
        result={pre.resultado}
        factor={State}
    />)
})
Microsoft.displayName = 'Microsoft'