"use client";

import React from "react";
import { faSteam } from "@/assets"
import UiCompsPage from "./ui.comps";
import { useLocalContext } from "../context/LocalContext";
import { ecuationProp } from "@/ts";

export const Steam: React.FC = () => {
    const ui = new UiCompsPage()
    const { ...pre } = useLocalContext()
    const State: ecuationProp = {
        inputValue: pre.values.steam,
        factor: 1585.79,
        precision: 2
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); pre.ecuation(State, { type: "steam" }) }
    return (<ui.OpTemplate
        click={() => { pre.ButtonBoolean({ type: "closeSteam" }) }}
        icon={faSteam}
        color="gray"
        Name="Steam"
        onSubmit={handleSubmit}
        value={pre.values.steam}
        nameInput="steam"
        result={pre.resultado}
        factor={State}
    />);
}