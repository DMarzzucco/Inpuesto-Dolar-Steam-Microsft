"use client";

import React from "react";
import { useLocalContext } from "../context/LocalContext";
import { AdverHome, HomeComponent } from "./ui.comps";

export const HomeComp: React.FC = () => {
    const { booleanState, ButtonBoolean } = useLocalContext()
    return (
        <div className="my-4 flex flex-col justify-center items-center">
            <HomeComponent />
            {!booleanState.card ?
                <button onClick={() => { ButtonBoolean({ type: "openCard" }) }}>Leer Antes</button>
                : <AdverHome />
            }
        </div>
    )
}