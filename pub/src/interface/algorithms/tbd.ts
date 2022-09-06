import * as pt from "pareto-core-types"
import { ISetExitCodeToFailed, IWriteStream } from "../interfaces/x"
import { TArguments } from "../types/x"


export type PProgramMain = (
    $: {
        arguments: TArguments
    },
    $i: {
        stdout: IWriteStream
        stderr: IWriteStream
        setExitCodeToFailed: ISetExitCodeToFailed
    },
    $a: pt.ProcessAsyncValue
) => void

