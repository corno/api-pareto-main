import * as pt from "pareto-core-types"

export type IWriteStream = {
    readonly "write": ($: string) => void
}
export type ISetExitCodeToFailed = ($: null) => void
