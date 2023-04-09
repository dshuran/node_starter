import {CmdArgsParser} from "./CmdArgsParser";
import {Command} from "./Commands/Command";

export class MvnRunner {

    private cmdArgsParser: CmdArgsParser;
    private commands: Command[] = []

    constructor(commands: Command[]) {
        this.commands = commands;

        this.cmdArgsParser = new CmdArgsParser(this.commands);
    }

    public run() {
        const command = this.cmdArgsParser.findCommand();
        command.run();
    }

}