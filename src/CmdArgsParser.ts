import * as commandLineArgs from 'command-line-args';
import {Command} from "./Commands/Command";

export class CmdArgsParser {

    private commandLineOptions: commandLineArgs.CommandLineOptions;
    private commands: Command[];

    constructor(commands: Command[]) {
        this.commands = commands;

        const optionsDefinitions = [];
        for (let command of this.commands) {
            optionsDefinitions.push({
                name: command.getName()
            })
        }

        this.commandLineOptions = commandLineArgs(optionsDefinitions);
    }

    public findCommand(): Command {
        for (const command of this.commands) {
            if (this.commandLineOptions[command.getName()] === null) {
                return command;
            }
        }

        throw new Error("Команда не найдена. Введите /help для списка доступных команд");
    }

}

