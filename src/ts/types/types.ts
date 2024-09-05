export type Action =
    | { type: "openCard" }
    | { type: "closeCard" }
    | { type: "openSteam" }
    | { type: "closeSteam" }
    | { type: "openMicrosoft" }
    | { type: "closeMicrosoft" }
    | { type: "error" }
    | { type: "no_error" }

export type OpEcuation =
    | { type: "steam" }
    | { type: "microsoft" }
