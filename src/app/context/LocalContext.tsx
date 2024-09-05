"use client";

import React from "react";
import ReducerBoolean from "./reducer/reducer";
import { booleanItems, StringItems } from "./template/template";
import { ContextProps, ecuationProp, StringProps, Action, OpEcuation } from "@/ts";

export const LocalContext = React.createContext<ContextProps | undefined>(undefined)

const AuthLocalContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [resultado, setResultado] = React.useState<number | null>(null);
    const [booleanState, dispatch] = React.useReducer(ReducerBoolean, booleanItems)
    const [values, setValues] = React.useState<StringProps>(StringItems)

    const takeInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === "steam") { setValues((pre) => ({ ...pre, steam: value })); }
        if (name === "microsoft") { setValues((pre) => ({ ...pre, microsoft: value })) }
    }, [])
    /**
     * Ecuation
     * @param state 
     * @param op 
     * @returns 
     */
    const ecuation = React.useCallback((state: ecuationProp, op: OpEcuation) => {

        const value: number = parseFloat(state.inputValue)

        if (isNaN(value) || /^\d+$/.test(state.inputValue) === false) {
            dispatch({ type: "error" })
            if (op.type === "microsoft") {
                setValues((pre) => ({ ...pre, microsoft: "" }))
            } else {
                setValues((pre) => ({ ...pre, steam: "" }))
            }
            const timer = setTimeout(() => dispatch({ type: "no_error" }), 1000);
            setResultado(null);
            return () => clearTimeout(timer)
        }
        const result: number = value * state.factor;
        const resultRound: number = Math.round(result * Math.pow(10, state.precision)) / Math.pow(10, state.precision)
        const resultFormat: string = resultRound.toLocaleString('es-AR', { minimumFractionDigits: state.precision });
        setResultado(parseFloat(resultFormat))

        switch (op.type) {
            case "microsoft":
                setValues((pre) => ({ ...pre, microsoft: "" }))
                return
            case "steam":
                setValues((pre) => ({ ...pre, steam: "" }))
                return
        }
    }, [setResultado, setValues, dispatch])
    /**
     * ButtonBoolean
     * @param op 
     * @returns 
     */
    const ButtonBoolean = React.useCallback((op: Action) => {
        switch (op.type) {
            case "openCard":
                dispatch({ type: "openCard" });
                dispatch({ type: "closeMicrosoft" });
                dispatch({ type: "closeSteam" });
                setResultado(null)
                return
            case "closeCard":
                return dispatch({ type: "closeCard" })
            case "openSteam":
                dispatch({ type: "openSteam" })
                dispatch({ type: "closeMicrosoft" })
                setResultado(null)
                return
            case "closeSteam":
                return dispatch({ type: "closeSteam" })
            case "openMicrosoft":
                dispatch({ type: "openMicrosoft" })
                dispatch({ type: "closeSteam" })
                setResultado(null)
                return
            case "closeMicrosoft":
                return dispatch({ type: "closeMicrosoft" })
            default:
                throw new Error
        }
    }, [dispatch, setResultado])

    const ContextValues = React.useMemo(() => ({
        booleanState,
        ButtonBoolean,
        resultado,
        takeInput,
        ecuation,
        values,
        setValues,
    }), [booleanState, ButtonBoolean, resultado, takeInput, ecuation, values, setValues])

    return (
        <LocalContext.Provider value={ContextValues}>
            {children}
        </LocalContext.Provider>
    )
}
export default AuthLocalContext;

export const useLocalContext = () => {
    const context = React.useContext(LocalContext);
    if (!context) {
        throw new Error("useLocalContext must be used within an AuthLocalContext");
    }
    return context;
};