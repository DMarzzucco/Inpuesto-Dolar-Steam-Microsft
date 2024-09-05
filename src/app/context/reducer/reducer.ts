import { Action, booleanProps } from "@/ts";

export default function ReducerBoolean(state: booleanProps, action: Action) {
    switch (action.type) {
        case "openCard":
            return { ...state, card: true }
        case "closeCard":
            return { ...state, card: false }
        case "openSteam":
            return { ...state, steam: true }
        case "closeSteam":
            return { ...state, steam: false }
        case "openMicrosoft":
            return { ...state, microsoft: true }
        case "closeMicrosoft":
            return { ...state, microsoft: false }
        case "error":
            return { ...state, error: true }
        case "no_error":
            return { ...state, error: false }
        default:
            const error: any = Error
            throw new Error(error.message)
    }
}