"use client";

import React from "react";
import { faSteam } from "@/assets"
import { useLocalContext } from "../context/LocalContext";
import { ecuationProp } from "@/ts";
import { OpTemplate } from "./ui.comps";

export const Steam: React.FC = React.memo(() => {

    const { ...pre } = useLocalContext()

    const State: ecuationProp = {
        inputValue: pre.values.steam,
        factor: 1585.79,
        precision: 2
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        pre.ecuation(State, { type: "steam" })
    }

    return (<OpTemplate
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
})
Steam.displayName = 'Steam';