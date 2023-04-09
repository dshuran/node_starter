import {Command} from "./Commands/Command";
import {BuildFastCommand} from "./Commands/BuildFastCommand";

export const allCommandsList: Command[] = [
    new BuildFastCommand()
];