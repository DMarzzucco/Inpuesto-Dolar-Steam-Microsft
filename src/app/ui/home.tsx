"use client";

import React from "react";
import UiCompsPage from "./ui.comps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faMicrosoft } from "@/assets";
import { useLocalContext } from "../context/LocalContext";

export const HomeComp: React.FC = () => {
    const ui = new UiCompsPage()
    const { booleanState, ButtonBoolean } = useLocalContext()
    return (
        <div className="my-4 flex flex-col justify-center items-center">
            <ui.HomeComp />
            {!booleanState.card ?
                <button onClick={() => { ButtonBoolean({ type: "openCard" }) }}>Leer Antes</button>
                : <ui.AdverHome />
            }
        </div>
    )
}