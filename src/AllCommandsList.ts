import {Command} from "./Commands/Command";
import {BuildFastCommand} from "./Commands/BuildFastCommand";
import {BuildRuntimeNoTs} from "./Commands/BuildRuntimeNoTs";

export const allCommandsList: Command[] = [
    new BuildFastCommand(),
    new BuildRuntimeNoTs()
];