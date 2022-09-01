import * as pt from "pareto-core-types"

export type ProgramMain = (
    $: {
        arguments: pt.Array<string>
    },
    $i: {
        stdout: {
            write: ($: string) => void
        },
        stderr: {
            write: ($: string) => void
        }
    },
    $d: {
        startAsync: StartAsync
        setExitCodeToFailed: () => void
    }
) => void

export type StartAsync = ($: pt.AsyncNonValue) => void