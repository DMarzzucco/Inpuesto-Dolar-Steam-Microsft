export type Action =
    | { type: "openCard" }
    | { type: "closeCard" }
    | { type: "openSteam" }
    | { type: "closeSteam" }
    | { type: "openMicrosoft" }
    | { type: "closeMicrosft" }
    | { type: "error" }
    | { type: "no_error" }

export type OpEcuation =
    | { type: "steam" }
    | { type: "microsoft" }
