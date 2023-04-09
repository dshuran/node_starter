import {CmdArgsParser} from "./CmdArgsParser";
import {BuildFastCommand} from "./Commands/BuildFastCommand";
import {Command} from "./Commands/Command";

export class MvnRunner {

    private cmdArgsParser: CmdArgsParser;
    private commands: Command[] = []

    constructor() {
        this.commands = [
            new BuildFastCommand()
        ];

        this.cmdArgsParser = new CmdArgsParser(this.commands);
    }

    public run() {
        const command = this.cmdArgsParser.findCommand();
        command.run();
    }

}