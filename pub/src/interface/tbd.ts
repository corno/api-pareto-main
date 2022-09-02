import * as pt from "pareto-core-types"

export type Arguments = pt.Array<string>

export type WriteStream = {
    write: ($: string) => void
}
export type StartAsync = ($: pt.AsyncNonValue) => void
export type SetExitCodeToFailed = () => void

export type ProgramMain = (
    $: {
        arguments: Arguments
    },
    $i: {
        stdout: WriteStream
        stderr: WriteStream
    },
    $d: {
        startAsync: StartAsync
        setExitCodeToFailed: SetExitCodeToFailed
    }
) => void

