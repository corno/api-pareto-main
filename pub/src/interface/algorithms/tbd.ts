import * as pt from "pareto-core-types"
import { ISetExitCodeToFailed, IWriteStream } from "../interfaces/x"
import { TArguments } from "../types/x"

export type XStartAsync = ($: pt.AsyncNonValue) => void

export type PProgramMain = (
    $: {
        arguments: TArguments
    },
    $i: {
        stdout: IWriteStream
        stderr: IWriteStream
    },
    $d: {
        startAsync: XStartAsync
        setExitCodeToFailed: ISetExitCodeToFailed
    }
) => void

