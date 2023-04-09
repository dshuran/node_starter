import {spawn} from "child_process";

export function call(command: string) {
    spawn(command, {shell: true, stdio: "inherit"})
}