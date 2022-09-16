import * as pt from "pareto-core-types"
import { ISetExitCodeToFailed, IWriteStream } from "../interfaces/interfaces.p"
import { TArguments } from "../types/types.p"


export type FProgramMain = (
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

