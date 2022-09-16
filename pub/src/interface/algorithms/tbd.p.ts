import * as pt from "pareto-core-types"
import { ISetExitCodeToFailed, IWriteStream } from "../interfaces/x"
import { TArguments } from "../types/x"


export type PProgramMain = (
    $: {
        readonly "arguments": TArguments
    },
    $i: {
        readonly "stdout": IWriteStream
        readonly "stderr": IWriteStream
        readonly "setExitCodeToFailed": ISetExitCodeToFailed
    },
    $a: pt.ProcessAsyncValue
) => void

